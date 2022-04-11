const fs = require('fs')

const java_class_path = process.argv[2]
let java_class_text = ''
//Leer archivo y guardarlo en una variable
fs.readFile(java_class_path, 'utf-8', (error, datos)=>{
    if(error) throw error;
    java_class_text = datos
})

//Validar una clase de java + Springboot
function validar_java_class(text){
    return true
}

if(!validar_java_class(java_class_text)){
    throw Error("No se validó la clase")
}

console.log("Holaaa")