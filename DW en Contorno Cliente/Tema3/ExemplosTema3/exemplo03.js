//Creamos un novo elemento da lista
let lista =document.createElement("ul");

//Engadímolo como primeiro fillo do body
document.body.prepend(lista);

//Partindo dun array de String, engade elementos á lista
//para cada elemento do array, co seus datos

let arrStrings=["un","dous","tres","catro","cinco"];
for(let i=0;i<arrStrings.length;i++){
    let item= document.createElement("li");
    item.textContent=arrStrings[i];
    lista.appendChild(item);
}


