// Bucle while básico

let contador = 1;

while (contador <= 5) {
    console.log("Iteración número:", contador);
    contador++;
}

/*
RESULTADO:
Iteración número: 1
Iteración número: 2
Iteración número: 3
Iteración número: 4
Iteración número: 5
*/

// Precaución: bucle infinito (non executar sen control)

// while (true) {
//   console.log("Este é un bucle infinito!");
// }

// Uso do while nun proceso de validación simple

let numero = prompt("Introduce un número positivo:");

while (isNaN(numero) || numero <= 0) {
    numero = prompt("Valor incorrecto. Introduce un número positivo:");
}

console.log("Número válido introducido: " + numero);