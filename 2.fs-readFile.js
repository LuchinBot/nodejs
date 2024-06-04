const {
    error
} = require('node:console')
const fs = require('node:fs') //a aparti de node 16 se recomienda node:fs

console.log('Leyendo el Primer Archivo')
console.log('__________________________')
fs.readFile('./file1.txt', 'utf-8', (error, text) => {
    console.log(text)
})

console.log('Mientras tanto, sigue contando hasta el segundo archivo');

fs.readFile('./file2.txt', 'utf-8', (error, text) => {
    console.log(text)
})