// Estrutura if simple

let idade = 20;

if (idade >= 18) {
    console.log("Pode votar");
}

// Estrutura if con condición composta

let capacitado = true;

if (idade >= 18 && capacitado == true) {
    console.log("Pode votar e está capacitado");
}

// Estrutura if...else

idade = 16;

if (idade >= 18) {
    console.log("Pode votar");
} else {
    console.log("Non pode votar");
}

// Operador ternario (versión abreviada do if...else)

idade = 25;

(idade >= 18)
    ? console.log("Pode votar (con ternario)")
    : console.log("Non pode votar (con ternario)");

// Podes asignar resultados tamén a unha variable
let podeVotar = (idade >= 18) ? "Si" : "Non";
console.log("¿Pode votar? " + podeVotar);

// Estrutura if...else if...else

let nota = 7.5;

if (nota >= 9) {
    console.log("Sobresaínte");
} else if (nota >= 7) {
    console.log("Notable");
} else if (nota >= 6) {
    console.log("Ben");
} else if (nota >= 5) {
    console.log("Suficiente");
} else {
    console.log("Suspenso");
}

// Exemplo combinado: avaliación dun usuario

let nome = "Laura";
let nivelAcceso = "admin"; // valores posibles: "admin", "editor", "visitante"
let estaLogueado = true;

if (!estaLogueado) {
    console.log(`${nome}, debe iniciar sesión para acceder.`);
} else if (nivelAcceso === "admin") {
    console.log(`Benvida, ${nome}. Tes acceso completo como administrador.`);
} else if (nivelAcceso === "editor") {
    console.log(`Benvida, ${nome}. Tes permisos para editar contido.`);
} else if (nivelAcceso === "visitante") {
    console.log(`Benvida, ${nome}. Só tes acceso limitado.`);
} else {
    console.log(`Benvenida, ${nome}. O teu nivel de acceso non está recoñecido.`);
}