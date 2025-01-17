import { MAP } from "bmapjs/types/protocols/map";
import { P2PKHAddress, PrivateKey, Script, Transaction } from "bsv-wasm";
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
declare const buildInscription: (destinationAddress: P2PKHAddress, b64File: string, mediaType: string, metaData?: MAP) => Script;
declare const createOrdinals: (utxo: Utxo, paymentPk: PrivateKey, changeAddress: string, satPerByteFee: number, inscriptionScripts: Script[], idKey?: PrivateKey) => Promise<Transaction>;
declare const createOrdinal: (utxo: Utxo, destinationAddress: string, paymentPk: PrivateKey, changeAddress: string, satPerByteFee: number, inscription: Inscription, metaData?: MAP, idKey?: PrivateKey) => Promise<Transaction>;
declare const sendOrdinal: (paymentUtxo: Utxo, ordinal: Utxo, paymentPk: PrivateKey, changeAddress: string, satPerByteFee: number, ordPk: PrivateKey, ordDestinationAddress: string, reinscription?: Inscription, metaData?: MAP) => Promise<Transaction>;
declare const sendUtxos: (utxos: Utxo[], paymentPk: PrivateKey, address: P2PKHAddress, feeSats: number) => Promise<Transaction>;
export { buildInscription, createOrdinals, createOrdinal, sendOrdinal, sendUtxos };
