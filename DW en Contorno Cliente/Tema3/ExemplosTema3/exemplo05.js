//Crear un novo elemento html
let div= document.createElement("div");

//Asignar id
div.id="caixa2";

//Asignar una clase
div.classList.add("cadro");
div.classList.add("cousa");

//Vemos as clases do elemento caixa2
div.classList.forEach((elemento)=> console.log(elemento));

//Eliminamos una clase
div.classList.remove("cousa");

//Escribimos no texto interno
div.innerText="Ola mundo!";

//Engadimos como primeiro fillo do body
//document.body.prepend(div);

//Engadimos como ultimo fillo do body
document.body.appendChild(div);


//Eliminar elemento
div.remove();

//Engadimolo antes de elemento de id "p2"

let p2=document.getElementById("p2");
document.body.insertBefore(div,p2);

//o

//document.body.insertBefore(div,document.getElementById("p2"));

//Eliminar elemento a traves do pai
document.body.removeChild(div);

//Reemplazar un elemento co outro
p2.replaceWith(div);

//Eliminar todos os fillos dun elemento
//document.getElementById("caixa").replaceChildren();

//Remplazar os fillo dun elemento por un texto
//document.getElementById("caixa").replaceChildren("Novo Texto");

//Remplazar todos os fillos dun elemento por un elemento novo
let novo=document.createElement("p");
novo.textContent="Novo texto";
document.getElementById("caixa").replaceChildren(novo);