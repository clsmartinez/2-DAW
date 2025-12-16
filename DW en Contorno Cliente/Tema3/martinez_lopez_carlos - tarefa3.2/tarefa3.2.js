//Guardamos campos de los elementos HTML
let campoNome = document.getElementById("nome");
let campoApelidos = document.getElementById("apelidos");
let campoTelefono = document.getElementById("telefono");
let campoEmail = document.getElementById("email");
let campoEnderezo = document.getElementById("enderezo");
let campoComentarios = document.getElementById("comentarios");

let formulario = document.getElementById("formulario-contactos");
let listaxe = document.getElementById("listaxe-contactos");

let contactos = [];

function engadirContacto() {
    let contacto = { //Creamos contacto e o inicializamos aos campos do HTML
        nome: campoNome,
        apelidos: campoApelidos,
        telefono: campoTelefono,
        email: campoEmail,
        enderezo: campoEnderezo,
        comentarios: campoComentarios
    };

    //Engadimos o valor escrito no campo as variables do obxecto
    contacto.nome = campoNome.value;
    contacto.apelidos = campoApelidos.value;
    contacto.telefono = parseInt(campoTelefono.value); //Aqui o convertimos a número porque se non é string
    contacto.email = campoEmail.value;
    contacto.enderezo = campoEnderezo.value;
    contacto.comentarios = campoComentarios.value;
    contactos.push(contacto); //Engadimos o obxecto ao array
    contactos.sort(function (contacto1, contacto2) { //Ordeamos por nome o array
        return contacto1.nome.localeCompare(contacto2.nome);
    });


    listaxe.innerHTML = ""; //Borramos os datos escritos para poder sobrescribilos e non se repitan
    for (contacto of contactos) {
        let filaContacto = document.createElement("p");//Creamos nova linea para cada contacto
        filaContacto.textContent = contacto.nome + " " + contacto.apelidos + ", Tlf.: " +
            contacto.telefono + ", E-mail: " + contacto.email + ", Enderezo: " + contacto.enderezo;//Recheamos os datos
        listaxe.appendChild(filaContacto);//Engadimos a linea ao HTML
    }
    formulario.reset(); //Reiniciamos o formulario
}

function buscarContacto() {
    let nomeABuscar = nome.value; //Gardamos nunha variable a busqueda
    let contactoEncontrado = contactos.find((contacto) => contacto.nome.toLowerCase() === nomeABuscar.toLowerCase());//Buscamos por nome, sen distingir minisculas o maiusculas coa función find no array
    if (contactoEncontrado) { //Se encontra, recheamos os datos
        campoApelidos.value = contactoEncontrado.apelidos;
        campoTelefono.value = contactoEncontrado.telefono;
        campoEmail.value = contactoEncontrado.email;
        campoEnderezo.value = contactoEncontrado.enderezo;
        campoComentarios.value = contactoEncontrado.comentarios;
    }
}

function eliminarContacto() {
    let contactoEliminar = contactos.find((contacto)=> contacto.nome.toLowerCase() === campoNome.value.toLowerCase()); //Buscamos o contacto e o gardamos

    contactos.splice(contactoEliminar, 1); //Borramos o contacto do array coa función splice (contacto que se borra, num de contactos a borrar)

    listaxe.innerHTML = ""; //Borramos os datos escritos para poder sobrescribilos e non se repitan
    for (contacto of contactos) {
        let filaContacto = document.createElement("p");//Creamos nova linea para cada contacto
        filaContacto.textContent = contacto.nome + " " + contacto.apelidos + ", Tlf.: " +
            contacto.telefono + ", E-mail: " + contacto.email + ", Enderezo: " + contacto.enderezo;//Recheamos os datos
        listaxe.appendChild(filaContacto);//Engadimos a linea ao HTML
    }
    formulario.reset();
}


function modificarContacto() {

    let contactoModificar = contactos.find((contacto)=> contacto.nome.toLowerCase() === campoNome.value.toLowerCase());//Buscamos o contacto e o gardamos

    //Modificamos os datos do contacto cos valores escritos nos campos
    contactoModificar.nome = campoNome.value;
    contactoModificar.apelidos = campoApelidos.value;
    contactoModificar.telefono = parseInt(campoTelefono.value); //Aqui o convertimos a número porque se non é string
    contactoModificar.email = campoEmail.value;
    contactoModificar.enderezo = campoEnderezo.value;
    contactoModificar.comentarios = campoComentarios.value;

    listaxe.innerHTML = ""; //Borramos os datos escritos para poder sobrescribilos e non se repitan
    for (contacto of contactos) {
        let filaContacto = document.createElement("p");//Creamos nova linea para cada contacto
        filaContacto.textContent = contacto.nome + " " + contacto.apelidos + ", Tlf.: " +
            contacto.telefono + ", E-mail: " + contacto.email + ", Enderezo: " + contacto.enderezo;//Recheamos os datos
        listaxe.appendChild(filaContacto);//Engadimos a linea ao HTML
    }
    formulario.reset();
}

