const os = require('node:os');

console.log('Información de nuestro sistema operativo');
console.log('__________________________________________');

console.log('Nombre del sistema operativo: ' + os.platform());
console.log('Versión del sistema operativo: ' + os.release());
console.log('Arquitectura: ' + os.arch());
console.log('Carpeta temporal: ' + os.tmpdir());
console.log('Carpeta de usuario: ' + os.homedir());
console.log('Total de memoria: ' + os.totalmem());
console.log('Memoria libre: ' + os.freemem());
console.log('Tiempo usado: ' + os.uptime()/60/24 + ' dias');