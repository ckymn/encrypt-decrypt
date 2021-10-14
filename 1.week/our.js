let encrypt_data = [];
const encrypt = (data) => {
    data = data.split("")
    data.forEach((i, doc) => {
        encrypt_data.push(`${doc},${i.charCodeAt()}`)
    });
    return encrypt_data;
}

let decrypted_data = [];
const decrypted = (data) => {
    data.forEach((doc, i, arr) => {
        if (i == doc.split(",")[0]) {
            let get_number = doc.split(",")[1];
            let get_char = String.fromCharCode(get_number);
            decrypted_data.push(get_char)
        }
    })
    return decrypted_data.join("");
}

let encrypted = encrypt("Muhammet Cokyaman Done.");
let result = decrypted(encrypted);
console.log(result)