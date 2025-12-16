// CAPTURA DAS REFERENCIAS DOS ELEMENTOS HTML

// Formulario
let formXogo = document.getElementById("formXogo");

// Campos do formulario
let clave = document.getElementById("clave");
let titulo = document.getElementById("titulo");
let compania = document.getElementById("compania");
let ano = document.getElementById("ano");
let xenero = document.getElementById("xenero");
let plataforma = document.getElementById("plataforma");

// Botóns
let btnCrear = document.getElementById("btnCrear");
let btnModificar = document.getElementById("btnModificar");
let btnBuscar = document.getElementById("btnBuscar");
let btnEliminar = document.getElementById("btnEliminar");

//Caixa de mensaxes
let mensaxes=document.getElementById("mensaxes");

// FUNCIONALIDADE DO BOTÓN CREAR
btnCrear.addEventListener("click", () => {
    //Limpamos as mensaxes de erro
    limparMensaxe();
    //Comprobamos que a clave esta libre (non existe ese videoxogo xa) y se se escribiu algo
    if (!localStorage.getItem(clave.value) && clave.value != "") {

        // Creamos un obxecto "videoxogo" co contido dos campos do formulario
        let videoxogo = {
            clave: clave.value,
            titulo: titulo.value,
            compania: compania.value,
            ano: ano.value,
            xenero: xenero.value,
            plataforma: plataforma.value
        };

        // Convertimos o obxecto "videoxogo" a formato JSON
        let videoxogoJSON = JSON.stringify(videoxogo);

        // Metemos os datos en Local Storage usando o valor do campo "clave" como clave
        localStorage.setItem(clave.value, videoxogoJSON);

        // Limpamos o formulario
        formXogo.reset();
    } else {
        if(clave.value==""){
            mensaxes.textContent="Erro: A clave non pode estar baleira";
        }else{
            mensaxes.textContent="Erro: Xa existe un videoxogo con esa clave";
        }
    }
});

// FUNCIONALIDADE DO BOTÓN MODIFICAR
btnModificar.addEventListener("click", () => {
    //Limpamos as mensaxes de erro
    limparMensaxe();
    //Comprobamos que a clave xa exista esta libre (non existe ese videoxogo xa) y se se escribiu algo
    if (localStorage.getItem(clave.value) && clave.value != "") {

        // Creamos un obxecto "videoxogo" co contido dos campos do formulario
        let videoxogo = {
            clave: clave.value,
            titulo: titulo.value,
            compania: compania.value,
            ano: ano.value,
            xenero: xenero.value,
            plataforma: plataforma.value
        };

        // Convertimos o obxecto "videoxogo" a formato JSON
        let videoxogoJSON = JSON.stringify(videoxogo);

        // Metemos os datos en Local Storage usando o valor do campo "clave" como clave
        localStorage.setItem(clave.value, videoxogoJSON);

        // Limpamos o formulario
        formXogo.reset();
    } else {
        if(clave.value==""){
            mensaxes.textContent="Erro: A clave non pode estar baleira";
        }else{
            mensaxes.textContent="Erro: Non existe un videoxogo con esa clave";
        }
    }
});

// FUNCIONALIDADE DO BOTÓN BUSCAR
btnBuscar.addEventListener("click", () => {
    //Limpamos as mensaxes de erro
    limparMensaxe();
    //Comprobamos que a clave xa exista esta libre (non existe ese videoxogo xa) y se se escribiu algo
    if (localStorage.getItem(clave.value) && clave.value != "") {
        let buscado = localStorage.getItem(clave.value);
        let videoxogo = JSON.parse(buscado);
        clave.value = videoxogo.clave;
        titulo.value = videoxogo.titulo;
        compania.value = videoxogo.compania;
        ano.value = videoxogo.ano;
        xenero.value = videoxogo.xenero;
        plataforma.value = videoxogo.plataforma;
    } else {
        if(clave.value==""){
            mensaxes.textContent="Erro: A clave non pode estar baleira";
        }else{
            mensaxes.textContent="Erro: Non existe un videoxogo con esa clave";
        }
    }
});

// FUNCIONALIDADE DO BOTÓN ELIMINAR
btnEliminar.addEventListener("click", () => {
    //Limpamos as mensaxes de erro
    limparMensaxe();
    if (localStorage.getItem(clave.value) && clave.value != "") {
        localStorage.removeItem(clave.value);
    } else {
        if(clave.value==""){
            mensaxes.textContent="Erro: A clave non pode estar baleira";
        }else{
            mensaxes.textContent="Erro: Non existe un videoxogo con esa clave";
        }
    }
});


function limparMensaxe(){
    mensaxes.textContent="";
}