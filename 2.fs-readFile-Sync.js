const fs = require('node:fs') //a aparti de node 16 se recomienda node:fs

console.log('Leyendo el Primer Archivo')
console.log('__________________________')
const text1 = fs.readFileSync('./file1.txt', 'utf-8')
console.log(text1)

console.log('Mientras tanto, sigue contando hasta el segundo archivo');
const text2 = fs.readFileSync('./file2.txt', 'utf-8')
console.log(text2)