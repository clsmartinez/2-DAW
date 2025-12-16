//Capturamos referencias a elementos HTML
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");

//Creamos un novo div de clase "cadro"
let cadro = document.createElement("div");
cadro.classList.add("cadro");
document.body.prepend(cadro); //Metémelo como primeiro fillo do body


function porBordes() {
    cadro.style.border = "2px dotted blue";
}

//Queremos que os botóns sexa conmutativo (se volve para atras, cambia ao orixinal)
function porFondo() {
    if (cadro.style.backgroundColor == "aqua") {
        cadro.style.backgroundColor = "lime";
    }else{
        cadro.style.backgroundColor = "aqua"
    }
}

function porAltura() {
    cadro.style.height = "150px";
}

function porLargura() {
    cadro.style.width = "100px";
}
