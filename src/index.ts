import { MAP } from "bmapjs/types/protocols/map";
import {
  P2PKHAddress,
  PrivateKey,
  Script,
  SigHash,
  Transaction,
  TxIn,
  TxOut,
} from "bsv-wasm";
import { Buffer } from "buffer";
import * as dotenv from "dotenv";
import { Sigma } from "sigma-protocol";
import { toHex } from "./utils/strings";

dotenv.config();

export type Utxo = {
  satoshis: number;
  txid: string;
  vout: number;
  script: string;
};

export type Inscription = {
  dataB64: string;
  contentType: string;
};

const MAP_PREFIX = "1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5";
const SIGNATURE_SIZE = 72 // ECDSA signature is typically 70-72 bytes in size.

const buildInscription = (
  destinationAddress: P2PKHAddress,
  b64File: string,
  mediaType: string,
  metaData?: MAP
): Script => {
  const ordHex = toHex("ord");
  const fsBuffer = Buffer.from(b64File, "base64");
  const fireShardHex = fsBuffer.toString("hex");
  const fireShardMediaType = toHex(mediaType);

  // Create ordinal output and inscription in a single output
  let inscriptionAsm = `${destinationAddress
    .get_locking_script()
    .to_asm_string()} OP_0 OP_IF ${ordHex} OP_1 ${fireShardMediaType} OP_0 ${fireShardHex} OP_ENDIF`;

  // MAP.app and MAP.type keys are required
  if (metaData && metaData?.app && metaData?.type) {
    const mapPrefixHex = toHex(MAP_PREFIX);
    const mapCmdValue = toHex("SET");
    inscriptionAsm = `${inscriptionAsm} OP_RETURN ${mapPrefixHex} ${mapCmdValue}`;

    for (const [key, value] of Object.entries(metaData)) {
      if (key !== "cmd") {
        inscriptionAsm = `${inscriptionAsm} ${toHex(key)} ${toHex(
          value as string
        )}`;
      }
    }
  }

  return Script.from_asm_string(inscriptionAsm);
};

const createOrdinals = async (
  utxo: Utxo,
  paymentPk: PrivateKey,
  changeAddress: string,
  satPerByteFee: number,
  inscriptionScripts: Script[],
  idKey?: PrivateKey
): Promise<Transaction> => {
  let tx = new Transaction(1, 0);

  // Inputs
  let utxoIn = new TxIn(
    Buffer.from(utxo.txid, "hex"),
    utxo.vout,
    Script.from_asm_string("")
  );

  tx.add_input(utxoIn);

  // Outputs

  for (let i = 0; i < inscriptionScripts.length; i++) {
    let satOut = new TxOut(BigInt(1), inscriptionScripts[i]);
    tx.add_output(satOut);
  }

  // add change
  const changeaddr = P2PKHAddress.from_string(changeAddress);
  const changeScript = changeaddr.get_locking_script();
  let emptyOut = new TxOut(BigInt(1), changeScript);
  const fee = Math.ceil(
    satPerByteFee * (tx.get_size() + emptyOut.to_bytes().byteLength + (SIGNATURE_SIZE * 2))
  );
  const change = utxo.satoshis - inscriptionScripts.length - fee;
  if (change < 0) throw new Error("Inadequate satoshis for fee");
  if (change > 0) {
    let changeOut = new TxOut(BigInt(change), changeScript);
    tx.add_output(changeOut);
  }

  // sign tx if idKey is provided
  if (idKey) {
    // input txids are available so sigma signature
    // can be final before signing the tx
    for (let i = 0; i < inscriptionScripts.length; i++) {
      const sigma = new Sigma(tx, i);
      const { signedTx } = sigma.sign(idKey);
      tx = signedTx;
    }
  }

  const sig = tx.sign(
    paymentPk,
    SigHash.ALL | SigHash.FORKID,
    0,
    Script.from_asm_string(utxo.script),
    BigInt(utxo.satoshis)
  );

  utxoIn.set_unlocking_script(
    Script.from_asm_string(
      `${sig.to_hex()} ${paymentPk.to_public_key().to_hex()}`
    )
  );

  tx.set_input(0, utxoIn);

  return tx;
}

const createOrdinal = async (
  utxo: Utxo,
  destinationAddress: string,
  paymentPk: PrivateKey,
  changeAddress: string,
  satPerByteFee: number,
  inscription: Inscription,
  metaData?: MAP,
  idKey?: PrivateKey
): Promise<Transaction> => {

  // Output
  const inscriptionScript = buildInscription(
    P2PKHAddress.from_string(destinationAddress),
    inscription.dataB64,
    inscription.contentType,
    metaData
  );

  return createOrdinals(utxo, paymentPk, changeAddress, satPerByteFee, [inscriptionScript], idKey)
};

const sendOrdinal = async (
  paymentUtxo: Utxo,
  ordinal: Utxo,
  paymentPk: PrivateKey,
  changeAddress: string,
  satPerByteFee: number,
  ordPk: PrivateKey,
  ordDestinationAddress: string,
  reinscription?: Inscription,
  metaData?: MAP
): Promise<Transaction> => {
  let tx = new Transaction(1, 0);

  let ordIn = new TxIn(
    Buffer.from(ordinal.txid, "hex"),
    ordinal.vout,
    Script.from_asm_string("")
  );
  tx.add_input(ordIn);

  // Inputs
  let utxoIn = new TxIn(
    Buffer.from(paymentUtxo.txid, "hex"),
    paymentUtxo.vout,
    Script.from_asm_string("")
  );

  tx.add_input(utxoIn);

  let s: Script;
  const destinationAddress = P2PKHAddress.from_string(ordDestinationAddress);
  if (reinscription?.dataB64 && reinscription?.contentType) {
    s = buildInscription(
      destinationAddress,
      reinscription.dataB64,
      reinscription.contentType,
      metaData
    );
  } else {
    s = destinationAddress.get_locking_script();
  }
  let satOut = new TxOut(BigInt(1), s);
  tx.add_output(satOut);

  // add change
  const changeaddr = P2PKHAddress.from_string(changeAddress);
  const changeScript = changeaddr.get_locking_script();
  let emptyOut = new TxOut(BigInt(1), changeScript);
  const fee = Math.ceil(
    satPerByteFee * (tx.get_size() + emptyOut.to_bytes().byteLength + (SIGNATURE_SIZE * 2))
  );
  const change = paymentUtxo.satoshis - fee;
  let changeOut = new TxOut(BigInt(change), changeScript);

  tx.add_output(changeOut);

  // sign ordinal
  const sig = tx.sign(
    ordPk,
    SigHash.InputOutput,
    0,
    Script.from_asm_string(ordinal.script),
    BigInt(ordinal.satoshis)
  );

  ordIn.set_unlocking_script(
    Script.from_asm_string(`${sig.to_hex()} ${ordPk.to_public_key().to_hex()}`)
  );

  tx.set_input(0, ordIn);

  // sign fee payment
  const sig2 = tx.sign(
    paymentPk,
    SigHash.InputOutput,
    1,
    Script.from_asm_string(paymentUtxo.script),
    BigInt(paymentUtxo.satoshis)
  );

  utxoIn.set_unlocking_script(
    Script.from_asm_string(
      `${sig2.to_hex()} ${paymentPk.to_public_key().to_hex()}`
    )
  );

  tx.set_input(1, utxoIn);

  return tx;
};

// sendUtxos sends p2pkh utxos to the given destinationAddress
const sendUtxos = async (
  utxos: Utxo[],
  paymentPk: PrivateKey,
  address: P2PKHAddress,
  feeSats: number
): Promise<Transaction> => {
  const tx = new Transaction(1, 0);

  // Outputs
  let inputValue = 0;
  for (let u of utxos || []) {
    inputValue += u.satoshis;
  }
  const satsIn = inputValue;
  const satsOut = satsIn - feeSats;
  console.log({ feeSats, satsIn, satsOut });
  tx.add_output(new TxOut(BigInt(satsOut), address.get_locking_script()));

  // build txins from our UTXOs
  let idx = 0;
  for (let u of utxos || []) {
    console.log({ u });
    const inx = new TxIn(
      Buffer.from(u.txid, "hex"),
      u.vout,
      Script.from_asm_string("")
    );
    console.log({ inx });
    inx.set_satoshis(BigInt(u.satoshis));
    tx.add_input(inx);

    const sig = tx.sign(
      paymentPk,
      SigHash.InputOutputs,
      idx,
      Script.from_asm_string(u.script),
      BigInt(u.satoshis)
    );

    inx.set_unlocking_script(
      Script.from_asm_string(
        `${sig.to_hex()} ${paymentPk.to_public_key().to_hex()}`
      )
    );

    tx.set_input(idx, inx);
    idx++;
  }
  return tx;
};

export { buildInscription, createOrdinals, createOrdinal, sendOrdinal, sendUtxos };
