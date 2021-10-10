const salt = "mySecretSalt"
const text = "the secret string"
const encrypt = (text,salt) => {
    let textToChars = text.split("").map(i => i.split('').map(c => c.charCodeAt(0)));
    let applySaltToChar = textToChars.map(code => salt.split('').map(c => c.charCodeAt(0)).reduce((a,b) => a ^ b,code));
    let bytHex = applySaltToChar.map(n => (Number(n).toString(16).substr(-2))).join("")
    return bytHex
}
const decrypt = (code,salt) => {
    let encoded = code.match(/.{1,2}/g).map(i => parseInt(i,16));
    let applySaltToChar = encoded.map(code => salt.split('').map(c => c.charCodeAt(0)).reduce((a,b) => a^b,code));
    let charCode = applySaltToChar.map(i => String.fromCharCode(i)).join('');
    return charCode;
}
let res_enc = encrypt(text,salt);
console.log(res_enc); 
let res_dcr = decrypt(res_enc,salt);
console.log(res_dcr);