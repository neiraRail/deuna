class Extractor {
    constructor(){

    }

    extraer_clase_nombre(text){
        return text.match(/public class [A-Z][a-z0-9]*\s*{/)[0]
    }

    extraer_propiedades(text){
        const regex = /(public|private) [A-Z]?[a-z]* [a-zA-Z]*;/g;
        const lista = text.matchAll(regex);
        let listareturn = []
        for (let item of lista){
            listareturn.push(item[0])
        }
        return listareturn
    }
    
    extraer_getters(text){
        const regex = /public [A-Z]*[a-z]* get([A-Z][a-z]*)+\(\)/g
        const lista = text.matchAll(regex);
        let listareturn = []
        for (let item of lista){
            listareturn.push(item[0])
        }
        return listareturn
    }

}

module.exports = Extractor