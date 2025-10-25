//Gardamos na variable "texto" a referencia do elemento HTML con id "texto" 
let texto=document.getElementById("texto");

//Escribimos no elemento texto
texto.textContent="Ola mundo";

//Recuperamos HTML Collection de todos elementos de tipo div
let divs=document.getElementsByTagName("div");
for(let i in divs){
    divs[i].textContent="Div: "+i;
}
//Recuperamos HTML Collection de todos elementos da clase caixa
let caixas= document.getElementsByClassName("caixa");
for(let i in caixas){
    caixas[i].style.height="100px";
    caixas[i].style.width="200px";
    caixas[i].style.backgroundColor="lightgreen";
}
