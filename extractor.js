class Extractor {
    constructor(){

    }

    extraer_clase_nombre(text){
        const match = text.match(/public class [A-Z][a-z0-9]*\s*{/)[0]
        return match.split(/class /)[1].split(/ {/)[0]
    }

    extraer_propiedades(text){
        const regex = /(public|private) [A-Z]?[a-z]* [a-zA-Z]*;/g;
        const lista = text.matchAll(regex);
        let listareturn = []
        for (let item of lista){
            listareturn.push({
                nombre: item[0].split(" ")[2].split(";")[0],
                tipo: item[0].split(" ")[1]
            })
        }
        return listareturn
    }
    
    extraer_getters(text){
        const regex = /public [A-Z]*[a-z]* get([A-Z][a-z]*)+\(\)/g
        const lista = text.matchAll(regex);
        let listareturn = []
        for (let item of lista){
            listareturn.push({
                nombre: item[0].split(" ")[2].split("()")[0],
                tipo: item[0].split(" ")[1]
            })
        }
        return listareturn
    }

}

module.exports = Extractor