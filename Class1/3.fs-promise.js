const fs = require('node:fs/promises') 
//Utilizar siempre y cuando no exista fs.promises
//No tiene pormesas nativas
//const {promisify} = require('node:util') 
//const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el Primer Archivo')
console.log('__________________________')
fs.readFile('./file1.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })

console.log('Mientras tanto, sigue contando hasta el segundo archivo');

fs.readFile('./file2.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })