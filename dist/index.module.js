import{Script as t,Transaction as r,TxIn as e,P2PKHAddress as n,TxOut as o,SigHash as i}from"bsv-wasm-web";import{Buffer as s}from"buffer";import*as a from"dotenv";function _(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return _(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c=function(t){for(var r=[],e=0,n=t.length;e<n;e++){var o=Number(t.charCodeAt(e)).toString(16);r.push(o)}return r.join("")};a.config();var g=function(r,e,n,o){var i=c("ord"),a=s.from(e,"base64").toString("hex"),_=c(n),u=r.get_locking_script().to_asm_string()+" OP_0 OP_IF "+i+" OP_1 "+_+" OP_0 "+a+" OP_ENDIF";if(o&&null!=o&&o.app&&null!=o&&o.type){u=u+" OP_RETURN "+c("1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5")+" "+c("SET");for(var g=0,m=Object.entries(o);g<m.length;g++){var f=m[g],p=f[0],l=f[1];"cmd"!==p&&(u=u+" "+c(p)+" "+c(l))}}return t.from_asm_string(u)},m=function(a,_,u,c,m,f,p){try{var l=new r(1,0),v=new e(s.from(a.txid,"hex"),a.vout,t.from_asm_string(""));l.add_input(v);var h=g(n.from_string(_),f.dataB64,f.contentType,p),d=new o(BigInt(1),h);l.add_output(d);var y=n.from_string(c).get_locking_script(),b=new o(BigInt(1),y),I=Math.ceil(m*(l.get_size()+b.to_bytes().byteLength)),w=a.satoshis-1-I;if(w<0)throw new Error("Inadequate satoshis for fee");if(w>0){var x=new o(BigInt(w),y);l.add_output(x)}var B=l.sign(u,i.ALL|i.FORKID,0,t.from_asm_string(a.script),BigInt(a.satoshis));return v.set_unlocking_script(t.from_asm_string(B.to_hex()+" "+u.to_public_key().to_hex())),l.set_input(0,v),Promise.resolve(l)}catch(t){return Promise.reject(t)}},f=function(a,_,u,c,m,f,p,l,v){try{var h=new r(1,0),d=new e(s.from(_.txid,"hex"),_.vout,t.from_asm_string(""));h.add_input(d);var y,b=new e(s.from(a.txid,"hex"),a.vout,t.from_asm_string(""));h.add_input(b);var I=n.from_string(p);y=null!=l&&l.dataB64&&null!=l&&l.contentType?g(I,l.dataB64,l.contentType,v):I.get_locking_script();var w=new o(BigInt(1),y);h.add_output(w);var x=n.from_string(c).get_locking_script(),B=new o(BigInt(1),x),k=Math.ceil(m*(h.get_size()+B.to_bytes().byteLength)),O=new o(BigInt(a.satoshis-k),x);h.add_output(O);var P=h.sign(f,i.InputOutput,0,t.from_asm_string(_.script),BigInt(_.satoshis));d.set_unlocking_script(t.from_asm_string(P.to_hex()+" "+f.to_public_key().to_hex())),h.set_input(0,d);var S=h.sign(u,i.InputOutput,1,t.from_asm_string(a.script),BigInt(a.satoshis));return b.set_unlocking_script(t.from_asm_string(S.to_hex()+" "+u.to_public_key().to_hex())),h.set_input(1,b),Promise.resolve(h)}catch(t){return Promise.reject(t)}},p=function(n,a,_,c){try{for(var g,m=new r(1,0),f=0,p=u(n||[]);!(g=p()).done;)f+=g.value.satoshis;var l=f-c;console.log({feeSats:c,satsIn:f,satsOut:l}),m.add_output(new o(BigInt(l),_.get_locking_script()));for(var v,h=0,d=u(n||[]);!(v=d()).done;){var y=v.value;console.log({u:y});var b=new e(s.from(y.txid,"hex"),y.vout,t.from_asm_string(""));console.log({inx:b}),b.set_satoshis(BigInt(y.satoshis)),m.add_input(b);var I=m.sign(a,i.InputOutputs,h,t.from_asm_string(y.script),BigInt(y.satoshis));b.set_unlocking_script(t.from_asm_string(I.to_hex()+" "+a.to_public_key().to_hex())),m.set_input(h,b),h++}return Promise.resolve(m)}catch(t){return Promise.reject(t)}};export{g as buildInscription,m as createOrdinal,f as sendOrdinal,p as sendUtxos};
//# sourceMappingURL=index.module.js.map
