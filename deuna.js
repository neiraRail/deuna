const fs = require('fs')
var Extractor = require('./extractor.js')
var Validador = require('./validador.js')
var Reemplazador = require('./reemplazador.js')
const extractor = new Extractor()
const validador = new Validador()
const reemplazador = new Reemplazador()

const java_class_path = process.argv[2]

//Leer archivo y guardarlo en una variable
const java_class_text = fs.readFileSync(java_class_path, {encoding: 'utf8'})

//Validar archivo
if(!validador.validar_java_class(java_class_text)){
    throw Error("No se validó la clase")
}

//Extraer datos
const nombre = extractor.extraer_clase_nombre(java_class_text)
const propiedades = extractor.extraer_propiedades(java_class_text)
const getters = extractor.extraer_getters(java_class_text)

//Crear modelo interno
const model= {
    nombre: nombre,
    propiedades: propiedades,
    getters: getters,
    endpoint: 'api/'+nombre
}

//Llenar plantilla
const plantilla_path = "templates/tabla.vue"
let planilla_text = fs.readFileSync(plantilla_path, {encoding: "utf8"})
planilla_text = reemplazador.reemplazarTitulo(planilla_text, model.nombre)
planilla_text = reemplazador.reemplazarNombreItems(planilla_text, model.nombre)


//Escribir en un archivo
fs.writeFile('exports/component.vue', planilla_text, (err) => {
    if (err) {
        console.error(err)
        return
    }
})
