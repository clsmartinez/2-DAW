// PROMESAS EN PARALELO E ENLAZADAS
function promesa(nome) {
    return new Promise((resolve, reject) => {
        let numero = Math.trunc(Math.random() * 10);
        setTimeout(() => {
            if (numero >= 5) {
                resolve("A promesa " + nome + " rematou correctamente");
            } else {
                reject("A promesa " + nome + " fallou");
            }
        }, 2000);
    });
}

//Función asíncrona que consume a promesa anterior

async function consumuirPromesa() {
    try {
        let resultado= await promesa("nome promesa");
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}