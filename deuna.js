const fs = require('fs')
var Extractor = require('./extractor.js')
var Validador = require('./validador.js')
const extractor = new Extractor()
const validador = new Validador()

const java_class_path = process.argv[2]

//Leer archivo y guardarlo en una variable
const java_class_text = fs.readFileSync(java_class_path, {encoding: 'utf8'})

if(!validador.validar_java_class(java_class_text)){
    throw Error("No se validó la clase")
}

//Extraer datos
const nombre = extractor.extraer_clase_nombre(java_class_text)
const propiedades = extractor.extraer_propiedades(java_class_text)
const getters = extractor.extraer_getters(java_class_text)


const model= {
    nombre: nombre,
    propiedades: propiedades,
    getters: getters,
    endpoint: 'api/'+nombre
}

console.log(model)


// //Escribir en un archivo
// fs.writeFile('exports/NombreClase.txt', content[0], (err) => {
//     if (err) {
//         console.error(err)
//         return
//     }
// })