// PROMESAS EN PARALELO E ENLAZADAS
function promesa(nome) {
    return new Promise((resolve, reject) => {
        let tempo = Math.trunc(Math.random() * 2001);
        setTimeout(() => {
            if (tempo >= 500) {
                resolve(nome);
            } else {
                reject("A promesa "+nome+" fallou");
            }
        }, tempo);
    });
}

// Lanzamos tres promesas en paralelo e enlazadas (é dicir, para que se executen simultaneamente e dependentes unhas das outras)
Promise.all([
    promesa("un"), promesa("dous"), promesa("tres")
])
    .then(([saida1, saida2, saida3]) => { // Só no caso de que todas as promesas teñan éxito, éntrase na rama "then"
        console.log(saida1);
        console.log(saida2);
        console.log(saida3);
    })
    .catch((erro) => { // Se algunha das promesas falla, interrómpese o proceso
        console.error(erro);
    })