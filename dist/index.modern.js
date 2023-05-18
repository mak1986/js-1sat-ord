import{Script as t,Transaction as e,TxIn as r,P2PKHAddress as n,TxOut as o,SigHash as i}from"bsv-wasm";import*as f from"dotenv";import{Sigma as s}from"sigma-protocol";for(var u=[],h=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,l=a.length;p<l;++p)u[p]=a[p],h[a.charCodeAt(p)]=p;function g(t,e,r){for(var n,o=[],i=e;i<r;i+=3)o.push(u[(n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]))>>18&63]+u[n>>12&63]+u[n>>6&63]+u[63&n]);return o.join("")}h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63;var y,d,w=function(t,e,r,n,o){var i,f,s=8*o-n-1,u=(1<<s)-1,h=u>>1,c=-7,a=r?o-1:0,p=r?-1:1,l=t[e+a];for(a+=p,i=l&(1<<-c)-1,l>>=-c,c+=s;c>0;i=256*i+t[e+a],a+=p,c-=8);for(f=i&(1<<-c)-1,i>>=-c,c+=n;c>0;f=256*f+t[e+a],a+=p,c-=8);if(0===i)i=1-h;else{if(i===u)return f?NaN:Infinity*(l?-1:1);f+=Math.pow(2,n),i-=h}return(l?-1:1)*f*Math.pow(2,i-n)},m=function(t,e,r,n,o,i){var f,s,u,h=8*i-o-1,c=(1<<h)-1,a=c>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:i-1,g=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||Infinity===e?(s=isNaN(e)?1:0,f=c):(f=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-f))<1&&(f--,u*=2),(e+=f+a>=1?p/u:p*Math.pow(2,1-a))*u>=2&&(f++,u/=2),f+a>=c?(s=0,f=c):f+a>=1?(s=(e*u-1)*Math.pow(2,o),f+=a):(s=e*Math.pow(2,a-1)*Math.pow(2,o),f=0));o>=8;t[r+l]=255&s,l+=g,s/=256,o-=8);for(f=f<<o|s,h+=o;h>0;t[r+l]=255&f,l+=g,f/=256,h-=8);t[r+l-g]|=128*y},b=(y=function(t,e){const r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=i,e.SlowBuffer=function(t){return+t!=t&&(t=0),i.alloc(+t)},e.INSPECT_MAX_BYTES=50;const n=2147483647;function o(t){if(t>n)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,i.prototype),e}function i(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return a(t)}return f(t,e,r)}function f(t,e,r){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|d(t,e);let n=o(r);const f=n.write(t,e);return f!==r&&(n=n.slice(0,f)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Z(t,Uint8Array)){const e=new Uint8Array(t);return l(e.buffer,e.byteOffset,e.byteLength)}return p(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Z(t,ArrayBuffer)||t&&Z(t.buffer,ArrayBuffer))return l(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(Z(t,SharedArrayBuffer)||t&&Z(t.buffer,SharedArrayBuffer)))return l(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return i.from(n,e,r);const f=function(t){if(i.isBuffer(t)){const e=0|y(t.length),r=o(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||H(t.length)?o(0):p(t):"Buffer"===t.type&&Array.isArray(t.data)?p(t.data):void 0}(t);if(f)return f;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return i.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function a(t){return s(t),o(t<0?0:0|y(t))}function p(t){const e=t.length<0?0:0|y(t.length),r=o(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function l(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,i.prototype),n}function y(t){if(t>=n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n.toString(16)+" bytes");return 0|t}function d(t,e){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Z(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return X(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return J(t).length;default:if(o)return n?-1:X(t).length;e=(""+e).toLowerCase(),o=!0}}function b(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return L(this,e,r);case"latin1":case"binary":return $(this,e,r);case"base64":return O(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function B(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function E(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),H(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=i.from(e,n)),i.isBuffer(e))return 0===e.length?-1:_(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):_(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function _(t,e,r,n,o){let i,f=1,s=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;f=2,s/=2,u/=2,r/=2}function h(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(o){let n=-1;for(i=r;i<s;i++)if(h(t,i)===h(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===u)return n*f}else-1!==n&&(i-=i-n),n=-1}else for(r+u>s&&(r=s-u),i=r;i>=0;i--){let r=!0;for(let n=0;n<u;n++)if(h(t,i+n)!==h(e,n)){r=!1;break}if(r)return i}return-1}function I(t,e,r,n){r=Number(r)||0;const o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=e.length;let f;for(n>i/2&&(n=i/2),f=0;f<n;++f){const n=parseInt(e.substr(2*f,2),16);if(H(n))return f;t[r+f]=n}return f}function A(t,e,r,n){return Q(X(e,t.length-r),t,r,n)}function v(t,e,r,n){return Q(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function U(t,e,r,n){return Q(J(e),t,r,n)}function R(t,e,r,n){return Q(function(t,e){let r,n,o;const i=[];for(let f=0;f<t.length&&!((e-=2)<0);++f)r=t.charCodeAt(f),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function O(t,e,r){return function(t){for(var e,r=t.length,n=r%3,o=[],i=16383,f=0,s=r-n;f<s;f+=i)o.push(g(t,f,f+i>s?s:f+i));return 1===n?o.push(u[(e=t[r-1])>>2]+u[e<<4&63]+"=="):2===n&&o.push(u[(e=(t[r-2]<<8)+t[r-1])>>10]+u[e>>4&63]+u[e<<2&63]+"="),o.join("")}(0===e&&r===t.length?t:t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);const n=[];let o=e;for(;o<r;){const e=t[o];let i=null,f=e>239?4:e>223?3:e>191?2:1;if(o+f<=r){let r,n,s,u;switch(f){case 1:e<128&&(i=e);break;case 2:r=t[o+1],128==(192&r)&&(u=(31&e)<<6|63&r,u>127&&(i=u));break;case 3:r=t[o+1],n=t[o+2],128==(192&r)&&128==(192&n)&&(u=(15&e)<<12|(63&r)<<6|63&n,u>2047&&(u<55296||u>57343)&&(i=u));break;case 4:r=t[o+1],n=t[o+2],s=t[o+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&s,u>65535&&u<1114112&&(i=u))}}null===i?(i=65533,f=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=f}return function(t){const e=t.length;if(e<=x)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=x));return r}(n)}e.kMaxLength=n,(i.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}())||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.buffer}}),Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.byteOffset}}),i.poolSize=8192,i.from=function(t,e,r){return f(t,e,r)},Object.setPrototypeOf(i.prototype,Uint8Array.prototype),Object.setPrototypeOf(i,Uint8Array),i.alloc=function(t,e,r){return function(t,e,r){return s(t),t<=0?o(t):void 0!==e?"string"==typeof r?o(t).fill(e,r):o(t).fill(e):o(t)}(t,e,r)},i.allocUnsafe=function(t){return a(t)},i.allocUnsafeSlow=function(t){return a(t)},i.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==i.prototype},i.compare=function(t,e){if(Z(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),Z(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=i.allocUnsafe(e);let o=0;for(r=0;r<t.length;++r){let e=t[r];if(Z(e,Uint8Array))o+e.length>n.length?(i.isBuffer(e)||(e=i.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else{if(!i.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,o)}o+=e.length}return n},i.byteLength=d,i.prototype._isBuffer=!0,i.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)B(this,e,e+1);return this},i.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)B(this,e,e+3),B(this,e+1,e+2);return this},i.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)B(this,e,e+7),B(this,e+1,e+6),B(this,e+2,e+5),B(this,e+3,e+4);return this},i.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?T(this,0,t):b.apply(this,arguments)},i.prototype.toLocaleString=i.prototype.toString,i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},r&&(i.prototype[r]=i.prototype.inspect),i.prototype.compare=function(t,e,r,n,o){if(Z(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),!i.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;let f=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0);const u=Math.min(f,s),h=this.slice(n,o),c=t.slice(e,r);for(let t=0;t<u;++t)if(h[t]!==c[t]){f=h[t],s=c[t];break}return f<s?-1:s<f?1:0},i.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},i.prototype.indexOf=function(t,e,r){return E(this,t,e,r,!0)},i.prototype.lastIndexOf=function(t,e,r){return E(this,t,e,r,!1)},i.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return I(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":case"latin1":case"binary":return v(this,t,e,r);case"base64":return U(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const x=4096;function L(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function $(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function S(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=tt[t[n]];return o}function C(t,e,r){const n=t.slice(e,r);let o="";for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}function M(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function k(t,e,r,n,o,f){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<f)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function N(t,e,r,n,o){q(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,r}function P(t,e,r,n,o){q(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=f,f>>=8,t[r+2]=f,f>>=8,t[r+1]=f,f>>=8,t[r]=f,r+8}function F(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(t,e,r,n,o){return e=+e,r>>>=0,o||F(t,0,r,4),m(t,e,r,n,23,4),r+4}function z(t,e,r,n,o){return e=+e,r>>>=0,o||F(t,0,r,8),m(t,e,r,n,52,8),r+8}i.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,i.prototype),n},i.prototype.readUintLE=i.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||M(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},i.prototype.readUintBE=i.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||M(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},i.prototype.readUint8=i.prototype.readUInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),this[t]},i.prototype.readUint16LE=i.prototype.readUInt16LE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUint16BE=i.prototype.readUInt16BE=function(t,e){return t>>>=0,e||M(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUint32LE=i.prototype.readUInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUint32BE=i.prototype.readUInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readBigUInt64LE=et(function(t){K(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))}),i.prototype.readBigUInt64BE=et(function(t){K(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),i.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||M(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},i.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||M(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},i.prototype.readInt8=function(t,e){return t>>>=0,e||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){t>>>=0,e||M(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt16BE=function(t,e){t>>>=0,e||M(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt32LE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return t>>>=0,e||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readBigInt64LE=et(function(t){K(t>>>=0,"offset");const e=this[t],r=this[t+7];return void 0!==e&&void 0!==r||V(t,this.length-8),(BigInt(this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24))<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)}),i.prototype.readBigInt64BE=et(function(t){K(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)}),i.prototype.readFloatLE=function(t,e){return t>>>=0,e||M(t,4,this.length),w(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return t>>>=0,e||M(t,4,this.length),w(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return t>>>=0,e||M(t,8,this.length),w(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return t>>>=0,e||M(t,8,this.length),w(this,t,!1,52,8)},i.prototype.writeUintLE=i.prototype.writeUIntLE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||k(this,t,e,r,Math.pow(2,8*r)-1,0);let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},i.prototype.writeUintBE=i.prototype.writeUIntBE=function(t,e,r,n){t=+t,e>>>=0,r>>>=0,n||k(this,t,e,r,Math.pow(2,8*r)-1,0);let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},i.prototype.writeUint8=i.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,1,255,0),this[e]=255&t,e+1},i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},i.prototype.writeBigUInt64LE=et(function(t,e=0){return N(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),i.prototype.writeBigUInt64BE=et(function(t,e=0){return P(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),i.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);k(this,t,e,r,n-1,-n)}let o=0,i=1,f=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===f&&0!==this[e+o-1]&&(f=1),this[e+o]=(t/i>>0)-f&255;return e+r},i.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);k(this,t,e,r,n-1,-n)}let o=r-1,i=1,f=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===f&&0!==this[e+o+1]&&(f=1),this[e+o]=(t/i>>0)-f&255;return e+r},i.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},i.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},i.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},i.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},i.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},i.prototype.writeBigInt64LE=et(function(t,e=0){return N(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),i.prototype.writeBigInt64BE=et(function(t,e=0){return P(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),i.prototype.writeFloatLE=function(t,e,r){return j(this,t,e,!0,r)},i.prototype.writeFloatBE=function(t,e,r){return j(this,t,e,!1,r)},i.prototype.writeDoubleLE=function(t,e,r){return z(this,t,e,!0,r)},i.prototype.writeDoubleBE=function(t,e,r){return z(this,t,e,!1,r)},i.prototype.copy=function(t,e,r,n){if(!i.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},i.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{const f=i.isBuffer(t)?t:i.from(t,n),s=f.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=f[o%s]}return this};const D={};function G(t,e,r){D[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function Y(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function q(t,e,r,n,o,i){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new D.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,r){K(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||V(e,t.length-(r+1))}(n,o,i)}function K(t,e){if("number"!=typeof t)throw new D.ERR_INVALID_ARG_TYPE(e,"number",t)}function V(t,e,r){if(Math.floor(t)!==t)throw K(t,r),new D.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new D.ERR_BUFFER_OUT_OF_BOUNDS;throw new D.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}G("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),G("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),G("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=Y(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=Y(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n},RangeError);const W=/[^+/0-9A-Za-z-_]/g;function X(t,e){let r;e=e||Infinity;const n=t.length;let o=null;const i=[];for(let f=0;f<n;++f){if(r=t.charCodeAt(f),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(f+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function J(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}(t),o=n[0],i=n[1],f=new c(function(t,e,r){return 3*(e+r)/4-r}(0,o,i)),s=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)e=h[t.charCodeAt(r)]<<18|h[t.charCodeAt(r+1)]<<12|h[t.charCodeAt(r+2)]<<6|h[t.charCodeAt(r+3)],f[s++]=e>>16&255,f[s++]=e>>8&255,f[s++]=255&e;return 2===i&&(e=h[t.charCodeAt(r)]<<2|h[t.charCodeAt(r+1)]>>4,f[s++]=255&e),1===i&&(e=h[t.charCodeAt(r)]<<10|h[t.charCodeAt(r+1)]<<4|h[t.charCodeAt(r+2)]>>2,f[s++]=e>>8&255,f[s++]=255&e),f}(function(t){if((t=(t=t.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Q(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function Z(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function H(t){return t!=t}const tt=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();function et(t){return"undefined"==typeof BigInt?rt:t}function rt(){throw new Error("BigInt not supported")}},y(d={exports:{}},d.exports),d.exports);const B=t=>{for(var e=[],r=0,n=t.length;r<n;r++){var o=Number(t.charCodeAt(r)).toString(16);e.push(o)}return e.join("")};f.config();const E=(e,r,n,o)=>{const i=B("ord"),f=b.Buffer.from(r,"base64").toString("hex"),s=B(n);let u=`${e.get_locking_script().to_asm_string()} OP_0 OP_IF ${i} OP_1 ${s} OP_0 ${f} OP_ENDIF`;if(o&&null!=o&&o.app&&null!=o&&o.type){u=`${u} OP_RETURN ${B("1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5")} ${B("SET")}`;for(const[t,e]of Object.entries(o))"cmd"!==t&&(u=`${u} ${B(t)} ${B(e)}`)}return t.from_asm_string(u)},_=async(f,u,h,c,a,p,l,g)=>{let y=new e(1,0),d=new r(b.Buffer.from(f.txid,"hex"),f.vout,t.from_asm_string(""));y.add_input(d);const w=E(n.from_string(u),p.dataB64,p.contentType,l);let m=new o(BigInt(1),w);y.add_output(m);const B=n.from_string(c).get_locking_script();let _=new o(BigInt(1),B);const I=Math.ceil(a*(y.get_size()+_.to_bytes().byteLength)),A=f.satoshis-1-I;if(A<0)throw new Error("Inadequate satoshis for fee");if(A>0){let t=new o(BigInt(A),B);y.add_output(t)}if(g){const t=new s(y),{signedTx:e}=t.sign(g);y=e}const v=y.sign(h,i.ALL|i.FORKID,0,t.from_asm_string(f.script),BigInt(f.satoshis));return d.set_unlocking_script(t.from_asm_string(`${v.to_hex()} ${h.to_public_key().to_hex()}`)),y.set_input(0,d),y},I=async(f,s,u,h,c,a,p,l,g)=>{let y=new e(1,0),d=new r(b.Buffer.from(s.txid,"hex"),s.vout,t.from_asm_string(""));y.add_input(d);let w,m=new r(b.Buffer.from(f.txid,"hex"),f.vout,t.from_asm_string(""));y.add_input(m);const B=n.from_string(p);w=null!=l&&l.dataB64&&null!=l&&l.contentType?E(B,l.dataB64,l.contentType,g):B.get_locking_script();let _=new o(BigInt(1),w);y.add_output(_);const I=n.from_string(h).get_locking_script();let A=new o(BigInt(1),I);const v=Math.ceil(c*(y.get_size()+A.to_bytes().byteLength));let U=new o(BigInt(f.satoshis-v),I);y.add_output(U);const R=y.sign(a,i.InputOutput,0,t.from_asm_string(s.script),BigInt(s.satoshis));d.set_unlocking_script(t.from_asm_string(`${R.to_hex()} ${a.to_public_key().to_hex()}`)),y.set_input(0,d);const O=y.sign(u,i.InputOutput,1,t.from_asm_string(f.script),BigInt(f.satoshis));return m.set_unlocking_script(t.from_asm_string(`${O.to_hex()} ${u.to_public_key().to_hex()}`)),y.set_input(1,m),y},A=async(n,f,s,u)=>{const h=new e(1,0);let c=0;for(let t of n||[])c+=t.satoshis;const a=c-u;console.log({feeSats:u,satsIn:c,satsOut:a}),h.add_output(new o(BigInt(a),s.get_locking_script()));let p=0;for(let e of n||[]){console.log({u:e});const n=new r(b.Buffer.from(e.txid,"hex"),e.vout,t.from_asm_string(""));console.log({inx:n}),n.set_satoshis(BigInt(e.satoshis)),h.add_input(n);const o=h.sign(f,i.InputOutputs,p,t.from_asm_string(e.script),BigInt(e.satoshis));n.set_unlocking_script(t.from_asm_string(`${o.to_hex()} ${f.to_public_key().to_hex()}`)),h.set_input(p,n),p++}return h};export{E as buildInscription,_ as createOrdinal,I as sendOrdinal,A as sendUtxos};
//# sourceMappingURL=index.modern.js.map