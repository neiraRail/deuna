const fs = require('fs')

const java_class_path = process.argv[2]

//Leer archivo y guardarlo en una variable
fs.readFile(java_class_path, 'utf-8', (error, datos)=>{
    if(error) throw error;
    if(!validar_java_class(datos)){
        throw Error("No se validó la clase")
    }
    const content = datos.match(/[A-Z][a-z0-9]*\s*{/)

    if(content==null) throw Error("No hay clase")

    fs.writeFile('exports/NombreClase.txt', content[0], (err) => {
        if (err) {
            console.error(err)
            return
        }
    })

})

//Validar una clase de java + Springboot
function validar_java_class(text){
    return text.length>0
}



//Exportar
