const fs = require('fs')

const java_class_path = process.argv[2]

//Leer archivo y guardarlo en una variable
const java_class_text = fs.readFileSync(java_class_path, {encoding: 'utf8'})

if(!validar_java_class(java_class_text)){
    throw Error("No se validó la clase")
}
console.log(extraer_getters(java_class_text))


//Validar una clase de java + Springboot
function validar_java_class(text){
    return text.length>0
}

function extraer_clase_nombre(text){
    return text.match(/public class [A-Z][a-z0-9]*\s*{/)[0]
}

function extraer_propiedades(text){
    const regex = /(public|private) [A-Z]?[a-z]* [a-zA-Z]*;/g;
    const lista = text.matchAll(regex);
    let listareturn = []
    for (item of lista){
        listareturn.push(item[0])
    }
    return listareturn
}

function extraer_getters(text){
    const regex = /public [A-Z]*[a-z]* get([A-Z][a-z]*)+\(\)/g
    const lista = text.matchAll(regex);
    let listareturn = []
    for (item of lista){
        listareturn.push(item[0])
    }
    return listareturn
}
// fs.writeFile('exports/NombreClase.txt', content[0], (err) => {
//     if (err) {
//         console.error(err)
//         return
//     }
// })