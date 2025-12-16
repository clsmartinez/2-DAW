numero = 10;

function ambitos() {
    let numero = 20;
    const constante = 30;
    console.log("Numero: " + numero + " Constante: " + constante + " En función.");
}

ambitos();

console.log("Numero: " + numero);
console.log("Constante: " + constante + " Fuera de función.");


//1.A primeira impresión funciona porque xa estaba declarada de forma global e despois actualizase de forma local na función
//2.Porque declarase na función e usase nela
//3.Porque xa esta declarada de manera global entón usa ese valor
//4.Porque nunca se declaraou ese variable fora do ámbito local