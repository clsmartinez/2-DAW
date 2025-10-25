// PARÁMETROS BÁSICOS E VALORES POR DEFECTO

function saudar(nome, mensaxe = "Benvido/a") {
    console.log(`${mensaxe}, ${nome}!`);
}

saudar("Ana"); // Benvido/a, Ana!
saudar("Berto", "Bo día"); // Bo día, Berto!

// USO DO OBXECTO arguments

function amosarArgumentos() {
    for (let i = 0; i < arguments.length; i++) {
        console.log("Argumento", i, ": "+ arguments[i]);
    }
}

amosarArgumentos(10, 20, 30);
// Argumento 0 : 10
// Argumento 1 : 20
// Argumento 2 : 30

// FUNCIÓN CON PARÁMETRO REST

function sumar(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log("Suma (rest): "+ sumar(1, 2, 3)); // 6
console.log("Suma con array espallado: "+ sumar(...[5, 10, 15])); // 30

// PASO DE DATOS SIMPLES (por valor)

let a = 3;
let b = 4;

function faiAlgo(x, y) {
    x += 1;
    y += 1;
    console.log("Dentro da función: x =", x, ", y =", y);
    return x + y;
}

console.log("Resultado da función: "+ faiAlgo(a, b)); // 8
console.log("Fóra da función: a =", a, ", b =", b); // a=3, b=4 → non se modificou

// PASO DE OBXECTOS (por referencia)

let numArray = [3, 4, 5];

function incrementarArray(arr) {
    for (let i in arr) {
        arr[i]++;
    }
    return arr;
}

console.log("Array modificado: "+ incrementarArray(numArray)); // [4, 5, 6]
console.log("Array orixinal: "+ numArray); // [4, 5, 6] → si se modificou

// PARÁMETRO REST E OPERADOR SPREAD

function datosPersoa(id, nome, ...detalles) {
    console.log("ID: "+ id);
    console.log("Nome: "+ nome);
    console.log("Detalles adicionais: "+ detalles);
}

datosPersoa(1, "Carlos", "A Coruña", 30, true);
// ID: 1
// Nome: Carlos
// Detalles adicionais: ["A Coruña", 30, true]

// COMBINACIÓN DE PARÁMETROS

function calcularMedia(base, ...notas) {
    let total = notas.reduce((t, n) => t + n, 0);
    return (base + total) / (notas.length + 1);
}

console.log("Media: "+ calcularMedia(5, 7, 8, 9)); // Media: (5+7+8+9)/4 = 7.25