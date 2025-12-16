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

//Consumimos tres promesas NON encadeadas
promesaAleatoria("un")
    .then((mensaxe) => {
        console.log(mensaxe);
    })

promesaAleatoria("dous")
    .then((mensaxe) => {
        console.log(mensaxe);
    })


promesaAleatoria("tres")
    .then((mensaxe) => {
        console.log(mensaxe);
    })
