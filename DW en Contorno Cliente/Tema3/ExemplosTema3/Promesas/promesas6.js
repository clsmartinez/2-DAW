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

// Lanzamos tres promesas en competición
Promise.race([
    promesa("un"), promesa("dous"), promesa("tres")
])
    .then((saida) => { 
        console.log(saida); //Saírase por esta rama se a primeira promesa en resolverse faino con éxito
    })
    .catch((erro) => { 
        console.error(erro); //Saírase por esta rama se a primeira promesa en resolverse faino con un fallo
    })