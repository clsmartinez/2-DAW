// PERCORRENDO UN ARRAY DE OBXECTOS

let persoas = [
    { nome: "Ana", idade: 28, cidade: "Compostela" },
    { nome: "Xián", idade: 25, cidade: "Ferrol" }
]

for (let persoa of persoas) {
    console.log(persoa.nome + " ten " + persoa.idade + " anos, e é de " + persoa.cidade);
}

// PERCORRENDO UNHA STRING
let texto = "ola";

for (let caracter of texto) {
    console.log(caracter);
}

// PERCORRENDO UN SET
let cores = new Set(["vermello", "verde", "azul"]);

for (let cor of cores) {
    console.log(cor);
}

// PERCORRENDO UN MAP
let idades = new Map([
    ["Ana", 25],
    ["Berto", 30],
    ["Carlos", 28]
]);

for (let [nome, idade] of idades) {
    console.log(`${nome} ten ${idade} anos`);
}