const fs = require('fs')
var Extractor = require('./extractor.js')
const extractor = new Extractor()
const java_class_path = process.argv[2]

//Leer archivo y guardarlo en una variable
const java_class_text = fs.readFileSync(java_class_path, {encoding: 'utf8'})

if(!validar_java_class(java_class_text)){
    throw Error("No se validó la clase")
}

console.log(extractor.extraer_getters(java_class_text))


//Validar una clase de java + Springboot
function validar_java_class(text){
    return text.length>0
}

// //Escribir en un archivo
// fs.writeFile('exports/NombreClase.txt', content[0], (err) => {
//     if (err) {
//         console.error(err)
//         return
//     }
// })