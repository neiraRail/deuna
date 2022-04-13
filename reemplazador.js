module.exports = class Reemplazador {
    constructor(){

    }

    reemplazarTitulo(text, titulo){
        return text.replace("$_Titulo", titulo)    
    }

}