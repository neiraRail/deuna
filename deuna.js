const fs = require('fs')
const java_class_path = process.argv[2]

fs.readFile(java_class_path, 'utf-8', (error, datos)=>{
    if(error) throw error;
    console.log(datos)
})