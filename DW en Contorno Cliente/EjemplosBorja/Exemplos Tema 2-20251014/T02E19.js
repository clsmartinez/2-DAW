// Función que divide dous números e lanza un erro se o divisor é cero
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Non se pode dividir entre cero.");
    }
    return a / b;
}

// Proba da función con xestión de erros
try {
    console.log("Resultado de dividir 10 / 2: "+  dividir(10, 2));
    console.log("Resultado de dividir 5 / 0: "+  dividir(5, 0)); // Esta liña lanzará un erro
} catch (erro) {
    console.error("Capturouse un erro: "+  erro.message);
} finally {
    console.log("Executándose o bloque finally. Este código sempre se executa.");
}

// Outro exemplo: tentamos acceder a unha propiedade dun valor non definido
try {
    let valor = null;
    console.log(valor.propiedade); // Isto lanzará un erro en tempo de execución
} catch (erro) {
    console.error("Erro ao acceder a unha propiedade: "+  erro.name);
} finally {
    console.log("Fin da segunda proba de try-catch.");
}