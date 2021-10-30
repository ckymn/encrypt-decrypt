const aesjs = require("aes-js");
const pbkdf2 = require("pbkdf2");

const encrypt = (key_secret, iv_secret, text) => {
    let key_32 = pbkdf2.pbkdf2Sync(key_secret, 'salt', 1, 32, 'sha512'),
        iv_16 = pbkdf2.pbkdf2Sync(iv_secret, 'salt', 1, 16, 'sha512'),
        key = new Array(...key_32),
        iv = new Array(...iv_16);

    let textBytes = aesjs.utils.utf8.toBytes(text);
    let aesCtr = new aesjs.ModeOfOperation.cfb(key, iv);
    let encryptedBytes = aesCtr.encrypt(textBytes);
    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    let to_base64 = Buffer.from(encryptedHex, 'hex').toString("base64")
    return console.log(to_base64);

}
const decrypt = (key_secret, iv_secret, hash) => {
    let key_32 = pbkdf2.pbkdf2Sync(key_secret, 'salt', 1, 32, 'sha512'),
        iv_16 = pbkdf2.pbkdf2Sync(iv_secret, 'salt', 1, 16, 'sha512'),
        key = new Array(...key_32),
        iv = new Array(...iv_16);

    let to_hex = Buffer.from(hash, "base64").toString("hex");
    let encryptedBytes = aesjs.utils.hex.toBytes(to_hex);
    let decrpte_aesCtr = new aesjs.ModeOfOperation.cfb(key, iv);
    let decryptedBytes = decrpte_aesCtr.decrypt(encryptedBytes);
    let link = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return console.log(link);
}
const decrypt_red = (secret) => {
    return console.log(Buffer.from(secret, "base64").toString("ascii"));
}
let key = "wEgDCNvhccofPTkFt9zUdDgZDIVdGC9L";
let iv = "crGTopEfBGXE1k1x";
let text = "http://yaz.tf.firat.edu.tr/tr"
let hash = "40YLp07vJIuR0TfMaNByWwXdtsp5YFy56MU37H8=";
let secret = "";

//encrypt(key, iv, text);
decrypt(key, iv, hash);
// decrypt_red(secret);