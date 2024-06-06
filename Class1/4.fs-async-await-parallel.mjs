//Utilizar siempre y cuando no exista fs.promises
//No tiene pormesas nativas
//const {promisify} = require('node:util') 
//const readFilePromise = promisify(fs.readFile)


import {readFile} from 'node:fs/promises'


Promise.all([
    readFile('./file1.txt', 'utf-8'),
    readFile('./file2.txt', 'utf-8')
]).then(([text, text2]) => {
    console.log(text);
    console.log(text2);
})
