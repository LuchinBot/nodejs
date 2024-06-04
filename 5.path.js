const path = require('node:path')

//Barra separadora de carpeta segun SO
console.log(path.join(path.sep))

//Unir rutas con path.join
const filePath = path.join('./content','subfolder','test.txt')
console.log(filePath)

const base = path.basename('/hola/mundo.txt')
console.log(base)

const filename = path.basename('/hola/mundo.txt', '.txt')
console.log(filename)

const extension = path.extname('/hola/mundo.txt')
console.log(extension)
