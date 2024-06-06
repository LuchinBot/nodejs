const fs = require('node:fs/promises')

//leer directorio
fs.readdir('.')
.then(files=>{
    files.forEach(file=>{
        console.log(file)
    })
})
.catch(err=>{
  if(err){
    console.log(err)
    return;
  }
})