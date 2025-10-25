// Definimos un obxecto simple
let persoa = {
  nome: "Ana",
  idade: 28,
  cidade: "Compostela"
};

// Usamos for...in para recorrer as propiedades do obxecto
for (let propiedade in persoa) {
  console.log("Propiedade: " + propiedade + " → Valor: " + persoa[propiedade]);
}

let persoas = [
  { nome: "Ana", idade: 28, cidade: "Compostela" },
  { nome: "Xián", idade: 25, cidade: "Ferrol" }
]

// Usamos for...in para percorrer os obxectos do array
for (let i in persoas) {
  console.log(persoas[i].nome + " ten " + persoas[i].idade + " anos, e é de " + persoas[i].cidade);
}