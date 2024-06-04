//Utilizar siempre y cuando no exista fs.promises
//No tiene pormesas nativas
//const {promisify} = require('node:util') 
//const readFilePromise = promisify(fs.readFile)


const {
    readFile
} = require('node:fs/promises')


//IIFE - Inmediatly Invoked Function Expression

;
(
    async () => {
        console.log('Reading the First File');
        const text = await readFile('./file1.txt', 'utf-8');
        console.log(text);
        console.log('Hacer cosas mientras tanto, sigue contando hasta el segundo archivo');
        const text2 = await readFile('./file2.txt', 'utf-8');
        console.log(text2);
    }
)()

//ES CASI LO MISMO

// async function init() {
//     console.log('Reading the First File');
//     const text = await readFile('./file1.txt', 'utf-8');
//     console.log(text);
//     console.log('Hacer cosas mientras tanto, sigue contando hasta el segundo archivo');
//     const text2 = await readFile('./file2.txt', 'utf-8');
//     console.log(text2);
// }

// init()