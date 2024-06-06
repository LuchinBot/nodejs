//Utilizar siempre y cuando no exista fs.promises
//No tiene pormesas nativas
//const {promisify} = require('node:util') 
//const readFilePromise = promisify(fs.readFile)

import {readFile} from 'node:fs/promises'

console.log('Reading the First File');
const text = await readFile('./file1.txt', 'utf-8');
console.log(text);
console.log('Hacer cosas mientras tanto, sigue contando hasta el segundo archivo');

const text2 = await readFile('./file2.txt', 'utf-8');
console.log(text2);


