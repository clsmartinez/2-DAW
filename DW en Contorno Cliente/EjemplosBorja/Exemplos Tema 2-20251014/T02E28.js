// SINTAXE BÁSICA

// Función normal
const saudar1 = function (nome) {
    return "Ola " + nome;
};

// Función frecha (un só parámetro, corpo simple)
const saudar2 = (nome) => "Ola " + nome;

console.log(saudar1("Ana")); // Ola Ana
console.log(saudar2("Berto")); // Ola Berto

// FUNCIÓN FRECHA CON CORPO DE BLOQUE

const cadrado = (num) => {
    return num * num;
};

console.log("Cadrado de 5: " + cadrado(5)); // 25

// USO NAS MÉTODOS DE ARRAY

const números = [1, 2, 3, 4, 5];

// map()
const dobros = números.map((n) => n * 2);
console.log("Dobro dos números: " + dobros); // [2, 4, 6, 8, 10]

// filter()
const pares = números.filter((n) => n % 2 === 0);
console.log("Números pares: " + pares); // [2, 4]

// reduce()
const sumaTotal = números.reduce((acc, n) => acc + n, 0);
console.log("Suma total: " + sumaTotal); // 15

// find()
const primeiroPar = números.find((n) => n % 2 === 0);
console.log("Primeiro número par: " + primeiroPar); // 2

// forEach()
números.forEach((n) => console.log("Número: " + n));

// FUNCIONES FRECHA E OBXECTOS

// Cando devolvemos un obxecto, necesitamos parénteses para evitar ambigüidade
const crearPersoa = (nome, idade) => ({ nome, idade });

console.log("Nova persoa: " + crearPersoa("Carlos", 30)); // { nome: 'Carlos', idade: 30 }

// FUNCIONES FRECHA E O CONTEXTUALIZADO `this`

// Exemplo de diferenza entre `function` e `arrow function`

function ContadorFunction() {
    this.valor = 0;
    setInterval(function () {
        this.valor++; // `this` NON fai referencia a ContadorFunction!
        console.log("Valor (function): " + this.valor);
    }, 1000);
}

function ContadorArrow() {
    this.valor = 0;
    setInterval(() => {
        this.valor++; // `this` SI fai referencia a ContadorArrow grazas á frecha
        console.log("Valor (arrow): " + this.valor);
    }, 1000);
}

// Descomenta para probar no navegador ou Node.js
// let cont1 = new ContadorFunction(); // NaN
// let cont2 = new ContadorArrow();     // conta correctamente

// FUNCIONES FRECHA COMO CALLBACKS

document.addEventListener("DOMContentLoaded", () => {
    console.log("Documento cargado");
});

setTimeout(() => {
    console.log("Esta mensaxe amósase despois de 2 segundos.");
}, 2000);

// USO EN PROMESAS E ASINCRONÍA

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(() => console.log("Datos recibidos"))
    .catch(() => console.log("Produciuse un erro"));