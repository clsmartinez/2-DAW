// USO BÁSICO DE new Function

// Crear unha función simple
let saudar = new Function("nome", "console.log('Ola ' + nome + '!');");

saudar("Ana"); // Ola Ana!

// CREACIÓN DINÁMICA DE FUNCIÓN

// Crear unha función que calcule a suma de dous números
let suma = new Function("a", "b", "return a + b;");

console.log("Suma de 5 + 3: " + suma(5, 3)); // 8

// FUNCION CON VARIOS PARÁMETROS

// Función para calcular a media dun número variable de valores
let calcularMedia = new Function(
    "numeros",
    "let total = numeros.reduce((a,b) => a + b, 0);\n" +
    "return total / numeros.length;"
);

let notas = [7, 8, 9];
console.log("Media das notas: " + calcularMedia(notas)); // 8

// ÁMBITO LÉXICO: as funcións creadas con new Function non teñen acceso ao ámbito externo, só ás súas variables locais ou globais

var valorExterno = 10;

let mostraValor = new Function("console.log(valorExterno);");
mostraValor(); // 10 → accede a nivel global, non local

// ESTRUTURA MÁIS COMPLEXA

// Crear unha función a partir dunha cadea (útil en certos casos de avaliación dinámica)
let tipoNumero = new Function("x", "if (x % 2 === 0) return 'par'; else return 'impar';");

console.log("O número 7 é: " + tipoNumero(7)); // impar
console.log("O número 4 é: " + tipoNumero(4)); // par