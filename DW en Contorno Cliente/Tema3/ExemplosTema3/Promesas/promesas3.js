//Promesas Encadeadas

//Declaración de una promesa simple
function promesaAleatoria(nome) {
    return new Promise((resolve, reject) => {
        let tempo = Math.trunc(Math.random() * 2001);
        setTimeout(() => {
            resolve(nome);
        }, tempo);
    })
}

//Consumimos tres promesas encadeadas
promesaAleatoria("un")
    .then((mensaxe) => {
        console.log(mensaxe);
        return promesaAleatoria("dous"); //Ao acabar a primeira promesa devolve a segunda

    })
    .then((mensaxe) => {
        console.log(mensaxe);
        return promesaAleatoria("tres"); //Ao acabar a segunda promesa devolve a terceira
    })

    .then((mensaxe) => {
        console.log(mensaxe);
    })
