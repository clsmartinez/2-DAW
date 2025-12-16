//Exemplo 03: Entrada e saida de datos

//Saída de datos
console.log("Escribimos unha mensaxe de log: Ola mundo!");
console.info("Escribimos unha mensaxe de información: isto é un dato");
console.warn("Escribimos unha mensaxe de aviso: isto é un aviso");
console.error("Escribimos unha mensaxe de erro: Cagáchela!");

//Certos elementos (obxectos,arrays e outras coleccións) podense
//amosar por consola
let productos=["Pan","Leite","Froita","Azucre"];
console.table(productos);
let persoa={
    nome:"Xoan",
    apelidos:"yo que se",
    idade: 23
};
console.table(persoa);

//Grupos na consola
console.group("Nome do novo grupo de datos:");
console.log("Primeiro dato");
console.log("Segundo dato");
console.groupEnd;

//Caixa de diálogo de tipo alert (NON RECOMENDADO)
//alert("Ola mundo!");

//Manipular a árbore DOM: innerHTML, textContent, insertAdjacent etc.
let saida=document.getElementById("saida");

//Se traballamos con innerHTML: escribese código HTML que se interpreta como HTML
//Se traballamos con textContent: se escribese código HTML non se interpreta como HTML, senon como texto
//Se traballamos con innerText: se escribese código HTML non se interpreta como HTML, senon como texto
saida.innerHTML="<strong>Novo texto do div</strong>";
saida.textContent="<strong>Novo texto do div</strong>";
saida.innerText="<strong>Novo texto do div</strong>";

//Entrada de datos

//Xanela de confirmación (NON RECOMENDADO)

/*let resposta=confirm("¿Queres continuar?");

if(resposta){
    console.log("O usuario aceptou continuar.");
}else{
    console.log("O usuario cancelou");
}*/

//Xanela de entrada de datos (NON RECOMENDADO)

let nome= prompt("Introduce o teu nome:", "O teu nome aqui:");

console.log("O usuario chamase: "+ nome);



