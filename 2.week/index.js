let txt = "muhammet";
txt = txt.split("");
let arr = [];
txt.map(i => arr.push(i.charCodeAt()))
let new_arr = [];
arr.map(i => new_arr.push(Number(i).toString(16)))
let res_arr = [];
new_arr.map(i => res_arr.push(parseInt(i,16)))
console.log(new_arr)
console.log(res_arr)
res_arr.map(i => console.log(String.fromCharCode(i)))