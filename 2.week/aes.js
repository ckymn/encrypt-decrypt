const aesjs = require("aes-js");
const pbkdf2 = require("pbkdf2");

var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
const text = "Text may be any length you wish, no padding is required.";
const textBytes = aesjs.utils.utf8.toBytes(text);
console.log(textBytes)
var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
var encryptedBytes = aesCtr.encrypt(textBytes);
console.log(encryptedBytes)
var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
console.log(encryptedHex)
var encryptedBytestoByte = aesjs.utils.hex.toBytes(encryptedHex);
console.log(encryptedBytestoByte)
var decrpte_aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
console.log(decrpte_aesCtr)
var decryptedBytes = decrpte_aesCtr.decrypt(encryptedBytes);
console.log(decryptedBytes)
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
console.log(decryptedText)

var key_128 = pbkdf2.pbkdf2Sync('password', 'salt', 1, 128 / 8, 'sha512');
console.log(key_128)
var key_192 = pbkdf2.pbkdf2Sync('password', 'salt', 1, 192 / 8, 'sha512');
console.log(key_192)
var key_256 = pbkdf2.pbkdf2Sync('password', 'salt', 1, 256 / 8, 'sha512');
console.log(key_256)
