//Guardamos campos de los elementos HTML
let campoNome = document.getElementById("nome");
let campoApelidos = document.getElementById("apelidos");
let campoTelefono = document.getElementById("telefono");
let campoEmail = document.getElementById("email");
let campoEnderezo = document.getElementById("enderezo");
let campoComentarios = document.getElementById("comentarios");

let formulario = document.getElementById("formulario-contactos");
let listaxe = document.getElementById("listaxe-contactos");

let campoProvincia = document.getElementById("provincia");
let campoCodigoPostal = document.getElementById("codPostal");

//Gardamos os listeners dos botóns
document.getElementById("engadir").addEventListener("click", engadirContacto);
document.getElementById("buscar").addEventListener("click", buscarContacto);
document.getElementById("eliminar").addEventListener("click", eliminarContacto);
document.getElementById("modificar").addEventListener("click", modificarContacto);

let contactos = [];

// Array de provincias: cada obxecto ten un codigo (dous primeiros díxitos do código postal) e unha provincia (nome da provincia correspondente)
let provincias = [
    { codigo: '', provincia: '' },
    { codigo: '01', provincia: 'Álava' },
    { codigo: '02', provincia: 'Albacete' },
    { codigo: '03', provincia: 'Alicante' },
    { codigo: '04', provincia: 'Almería' },
    { codigo: '05', provincia: 'Ávila' },
    { codigo: '06', provincia: 'Badajoz' },
    { codigo: '07', provincia: 'Islas Baleares' },
    { codigo: '08', provincia: 'Barcelona' },
    { codigo: '09', provincia: 'Burgos' },
    { codigo: '10', provincia: 'Cáceres' },
    { codigo: '11', provincia: 'Cádiz' },
    { codigo: '12', provincia: 'Castellón' },
    { codigo: '13', provincia: 'Ciudad Real' },
    { codigo: '14', provincia: 'Córdoba' },
    { codigo: '15', provincia: 'A Coruña' },
    { codigo: '16', provincia: 'Cuenca' },
    { codigo: '17', provincia: 'Girona' },
    { codigo: '18', provincia: 'Granada' },
    { codigo: '19', provincia: 'Guadalajara' },
    { codigo: '20', provincia: 'Guipúzcoa' },
    { codigo: '21', provincia: 'Huelva' },
    { codigo: '22', provincia: 'Huesca' },
    { codigo: '23', provincia: 'Jaén' },
    { codigo: '24', provincia: 'León' },
    { codigo: '25', provincia: 'Lleida' },
    { codigo: '26', provincia: 'La Rioja' },
    { codigo: '27', provincia: 'Lugo' },
    { codigo: '28', provincia: 'Madrid' },
    { codigo: '29', provincia: 'Málaga' },
    { codigo: '30', provincia: 'Murcia' },
    { codigo: '31', provincia: 'Navarra' },
    { codigo: '32', provincia: 'Ourense' },
    { codigo: '33', provincia: 'Asturias' },
    { codigo: '34', provincia: 'Palencia' },
    { codigo: '35', provincia: 'Las Palmas' },
    { codigo: '36', provincia: 'Pontevedra' },
    { codigo: '37', provincia: 'Salamanca' },
    { codigo: '38', provincia: 'Santa Cruz de Tenerife' },
    { codigo: '39', provincia: 'Cantabria' },
    { codigo: '40', provincia: 'Segovia' },
    { codigo: '41', provincia: 'Sevilla' },
    { codigo: '42', provincia: 'Soria' },
    { codigo: '43', provincia: 'Tarragona' },
    { codigo: '44', provincia: 'Teruel' },
    { codigo: '45', provincia: 'Toledo' },
    { codigo: '46', provincia: 'Valencia' },
    { codigo: '47', provincia: 'Valladolid' },
    { codigo: '48', provincia: 'Vizcaya' },
    { codigo: '49', provincia: 'Zamora' },
    { codigo: '50', provincia: 'Zaragoza' },
    { codigo: '51', provincia: 'Ceuta' },
    { codigo: '52', provincia: 'Melilla' }
];

for (let provincia of provincias) {
    let opcion = document.createElement("option");
    if (provincia.codigo !== '') {
        opcion.innerText = provincia.provincia;
    } else {
        opcion.setAttribute("default", "default");
    }
    campoProvincia.appendChild(opcion);
}

campoCodigoPostal.addEventListener("input", function() {
    if (campoCodigoPostal.value.trim() === "") {
        campoProvincia.removeAttribute("disabled");
    } else {
        campoProvincia.setAttribute("disabled", "disabled");
        let codigoIntroducido=(campoCodigoPostal.value).substring(0,2);
        let provinciaEncontrada=provincias.find((provincia) => provincia.codigo === codigoIntroducido);
            campoProvincia.value=provinciaEncontrada.provincia;
}});


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
    let contactoEliminar = contactos.find((contacto) => contacto.nome.toLowerCase() === campoNome.value.toLowerCase()); //Buscamos o contacto e o gardamos

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

    let contactoModificar = contactos.find((contacto) => contacto.nome.toLowerCase() === campoNome.value.toLowerCase());//Buscamos o contacto e o gardamos

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


