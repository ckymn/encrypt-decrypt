'use strict';
const crypto = require('crypto');
const algorithm = 'aes-256-cfb';

function encryptText(keyStr, text) {
  const hash = crypto.createHash('sha256');
  hash.update(keyStr);
  const keyBytes = hash.digest();

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, keyBytes, iv);
  console.log('IV:', iv);
  let enc = [iv, cipher.update(text, 'utf8')];
  enc.push(cipher.final());
  return Buffer.concat(enc).toString('base64');
}

function decryptText(keyStr, text) {
  const hash = crypto.createHash('sha256');
  console.log(hash);
  hash.update(keyStr);
  const keyBytes = hash.digest();

  const contents = Buffer.from(text, 'base64');
  const iv = contents.slice(0, 16);
  console.log(iv);
  const textBytes = contents.slice(16);
  const decipher = crypto.createDecipheriv(algorithm, keyBytes, iv);
  let res = decipher.update(textBytes, '', 'utf8');
  res += decipher.final('utf8');
  return res;
} 

let key = "wEgDCNvhccofPTkFt9zUdDgZDIVdGC9L";
let iv = "crGTopEfBGXE1k1x";
let text = "http://yaz.tf.firat.edu.tr/tr"
let hash = "40YLp07vJIuR0TfMaNByWwXdtsp5YFy56MU37H8=";

// const encrypted = encryptText(key, text);
// console.log('Encrypted: ', encrypted);

const decrypted = decryptText(key, "9eBrkHraHvptYKsQNnmXTdBEmqM2mYLXmETbEi2/CYFBqIJI/LwLotV9qBjc");
console.log('Decrypted: ', decrypted);
// const encryption = encryptText(key,text);
// console.log(encryption);