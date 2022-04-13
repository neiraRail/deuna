const { text } = require("stream/consumers")

module.exports = class Reemplazador {
    constructor(){

    }
    //EJ "Creditos"
    reemplazarTitulo(text, titulo){
        return text.replace("$_Titulo", titulo)    
    }

    //Pone el plural del nombre de la entidad en minusculas. EJ. "creditos"
    //Puede estar explicitado en el modelo pero por ahora se toma el nombre
    //se quita mayuscula y se agrega una 's' al final.
    reemplazarNombreItems(text, nombre){
        nombre = nombre.toLowerCase() + 's'
        return text.replace(/\$_NombreItems/g, nombre)
    }

}