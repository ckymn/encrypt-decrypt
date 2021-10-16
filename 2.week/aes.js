const aesjs = require("aes-js");
const pbkdf2 = require("pbkdf2");

const encrypt_text = (key_secret, iv_secret, text) => {
    let key_256 = pbkdf2.pbkdf2Sync(key_secret, 'salt', 1, 32, 'sha512'),
        iv_256 = pbkdf2.pbkdf2Sync(iv_secret, 'salt', 1, 16, 'sha512'),
        key = new Array(...key_256),
        iv = new Array(...iv_256);

    let textBytes = aesjs.utils.utf8.toBytes(text);
    let aesCtr = new aesjs.ModeOfOperation.cfb(key, iv);
    let encryptedBytes = aesCtr.encrypt(textBytes);
    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    aesjs.utils.hex.toBytes(encryptedHex);
    let decrpte_aesCtr = new aesjs.ModeOfOperation.cfb(key, iv);
    let decryptedBytes = decrpte_aesCtr.decrypt(encryptedBytes);
    let link = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return console.log(link);
}
const decrypt_text = (hash) => {
    let hash_to_text = Buffer.from(hash, 'base64').toString('ascii');
    return console.log(hash_to_text);
}
let key = "rnop3TnHwJ7P9zzLb0Z3qUjfhu1Cx9bW";
let iv = "YsiebTh0Sjr8dZKo";
let text = "TextMustBeAMultipleOfSegmentSize"
let hash = "YnVndW4gdmVyaWxlcm4gZGVnZXJsZXJpIGdpcmVjZWtzaW5peiBhcmthZGFzbGFyLg==";
encrypt_text(key,iv,text);
decrypt_text(hash);
