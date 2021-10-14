let base64 = Buffer.from("Hello World").toString('base128')
console.log(base64);
let decrypt_base64 = Buffer.from("SGVsbG8gV29ybGQ=", 'base128').toString('ascii')
console.log(decrypt_base64)