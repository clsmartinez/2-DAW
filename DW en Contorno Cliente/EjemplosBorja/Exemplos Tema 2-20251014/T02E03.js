// EXEMPLO 03: ENTRADA E SAÍDA DE DATOS

// SAÍDA DE DATOS
console.log("Escribimos unha mensaxe de log: Ola Mundo!");
console.info("Escribimos unha mensaxe de información: isto é un dato");
console.warn("Escribimos unha mensaxe de aviso: isto é un warning!");
console.error("Escribimos unha mensaxe de erro: Cagáchela!");

// Certos elementos (obxectos, arrays e outras coleccións) pódense amosar por consola en forma de táboa
let produtos = ["Pan", "Leite", "Froita", "Azucre"];
console.table(produtos);
let persoa = {
    nome : "Xoán",
    apelidos : "Castro Leira",
    idade: 23
};
console.table(persoa);

// Grupos na consola
console.group("Nome do novo grupo de datos:");
console.log("Primeiro dato");
console.log("Segundo dato");
console.groupEnd;

// Caixa de diálogo de tipo alert (NON RECOMENDADO)
// alert("Ola mundo!");

// Manipular a árbore DOM: innerHTML, textContent, insertAdjacent etc.
let saida = document.getElementById("saida"); // Gardamos nunha variable a referencia ao elemento HTML de id "saída"

// Se traballamos sobre a propiedade innerHTML escribiremos código HTML interno ao elemento, é dicir, que se empregamos etiquetas de HTML (NON RECOMENDADO), o código será renderizado e amosado na páxina
saida.innerHTML = "<strong>Novo texto do div</strong>";
// Se traballamos sobre a propiedade textContent escribiremos no texto interno (incluíndo estilos) do elemento, é dicir, que se empregamos etiquetas de HTML, estas NON serán renderizadas, senón que serán amosadas como texto
saida.textContent = "<strong>Novo texto do div</strong>";
// Se traballamos sobre a propiedade innerText escribiremos no texto interno (só o texto) do elemento, é dicir, que se empregamos etiquetas de HTML, estas NON serán renderizadas, senón que serán amosadas como texto
saida.innerText = "<strong>Novo texto do div</strong>";

// ENTRADA DE DATOS

// Xanela de confirmación (NON RECOMENDADO)
// let resposta = confirm("Queres continuar?");

// if (resposta) {
//     console.log("O usuario aceptou continuar.");
// } else {
//     console.log("O usuario cancelou.")
// }

// Xanela de entrada de datos (NON RECOMENDADO)
let nome = prompt("Introduce o teu nome:", "O TEU NOME AQUÍ");

console.log('O usuario chámase: '+nome);
console.log("O usuario chámase: "+nome);
console.log(`O usuario chámase: ${nome}`);