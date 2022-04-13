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

    //Debe estar explicitamente definido en el modelo.
    reemplazarOrdenarPor(text, prop){
        return text.replace("$_OrdenarPor", prop)
    }


    insertarCamposFormulario(text, propiedades){
        //Armar texto para reemplazar
        let cols = ""
        //Obtener identación.
        let nroEspacios = (text.match(/\n\s*\$_CamposFormulario/)[0].match(/\s/g) || []).length        

        for(let prop of propiedades){
            let col = ""
            col += "<v-col cols=\"12\" sm=\"6\" md=\"4\">\n"
            col += ' '.repeat(nroEspacios)
            col += "\t<v-text-field v-model=\"editedItem.$_propVariable\" label=\"$_propLabel\">"
            col += "</v-text-field>\n"
            col += ' '.repeat(nroEspacios)
            col += "</v-col>\n"
            col += ' '.repeat(nroEspacios)
            col = col.replace("$_propVariable", prop.nombre)
            col = col.replace("$_propLabel", prop.label)
            cols += col
        }
                
        return text.replace("$_CamposFormulario", cols)
    }

    insertarEncabezados(text, getters){

    }

    insertarItemDefault(text, propiedades){

    }

    
}