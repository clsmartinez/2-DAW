//Capturamos as referencias dos elementos do DOM
let formulario = document.getElementById("formulario-contactos");
let listaxe = document.getElementById("listaxe-contactos");

let nome = document.getElementById("nome");
let apelidos = document.getElementById("apelidos");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let enderezo = document.getElementById("enderezo");
let codPostal = document.getElementById("codPostal");
let provincia = document.getElementById("provincia");
let comentarios = document.getElementById("comentarios");

let btnEngadir = document.getElementById("engadir");
let btnBuscar = document.getElementById("buscar");
let btnEliminar = document.getElementById("eliminar");
let btnModificar = document.getElementById("modificar");

//Array que gardará todos os contactos cargados
let contactos = [];

//Declaramos as provincias
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

//Enchemos o select de provincias
let opcion = document.createElement("option");
opcion.value = "00";
opcion.textContent = "";
provincia.appendChild(opcion);
provincias.forEach((p) => {
    let op = document.createElement("option");
    op.value = p.codigo;
    op.textContent = p.provincia;
    provincia.appendChild(op);
});

//Configuración de IndexedDB    
let novaBD = window.indexedDB;
let baseDatos;

//Comprobamos que o navegador soporte IndexedDB
if (!novaBD) {
    console.error("O navegador non abre IndexedDB");
} else {
    //Función para abrir ou crear a base de datos AXENDA
    function abrirBD() {
        return new Promise((resolve, reject) => {
            let solicitude = novaBD.open("AXENDA", 1);

            //Se é a primeira vez ou hai cambio de versión, creamos almacén
            solicitude.onupgradeneeded = () => {
                baseDatos = solicitude.result;
                if (!baseDatos.objectStoreNames.contains("contactos")) {
                    let almacen = baseDatos.createObjectStore("contactos", { keyPath: "nome" });
                    console.log("Almacén 'contactos' creado correctamente");
                }
            };

            solicitude.onsuccess = () => {
                baseDatos = solicitude.result;
                console.log("Base de datos aberta correctamente");
                resolve(baseDatos);
            };

            solicitude.onerror = () => {
                reject("Erro ao abrir a base de datos");
            };
        });
    }

    //Función para cargar todos os contactos do almacén
    function cargarContactos() {
        return new Promise((resolve, reject) => {
            let transaccion = baseDatos.transaction(["contactos"], "readonly");
            let almacen = transaccion.objectStore("contactos");
            let solicitude = almacen.openCursor();
            let resultados = [];

            solicitude.onsuccess = () => {
                let cursor = solicitude.result;
                if (cursor) {
                    resultados.push(cursor.value);
                    cursor.continue();
                } else {
                    contactos = resultados.sort((a, b) =>
                        a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
                    );
                    actualizarListaxe();
                    resolve(contactos);
                }
            };

            solicitude.onerror = () => {
                reject("Erro ao ler os contactos");
            };
        });
    }

    //Función para engadir un contacto
    function engadirContactoBD(contacto) {
        return new Promise((resolve, reject) => {
            let transaccion = baseDatos.transaction(["contactos"], "readwrite");
            let almacen = transaccion.objectStore("contactos");
            let solicitude = almacen.add(contacto);

            solicitude.onsuccess = () => {
                resolve("Contacto engadido correctamente");
            };
            solicitude.onerror = () => {
                reject("Erro ao engadir o contacto (pode existir xa)");
            };
        });
    }

    //Función para modificar un contacto existente
    function modificarContactoBD(contacto) {
        return new Promise((resolve, reject) => {
            let transaccion = baseDatos.transaction(["contactos"], "readwrite");
            let almacen = transaccion.objectStore("contactos");
            let solicitude = almacen.put(contacto);

            solicitude.onsuccess = () => {
                resolve("Contacto modificado correctamente");
            };
            solicitude.onerror = () => {
                reject("Erro ao modificar o contacto");
            };
        });
    }

    //Función para eliminar un contacto por nome
    function eliminarContactoBD(nomeClave) {
        return new Promise((resolve, reject) => {
            let transaccion = baseDatos.transaction(["contactos"], "readwrite");
            let almacen = transaccion.objectStore("contactos");
            let solicitude = almacen.delete(nomeClave);

            solicitude.onsuccess = () => {
                resolve("Contacto eliminado correctamente");
            };
            solicitude.onerror = () => {
                reject("Erro ao eliminar o contacto");
            };
        });
    }

    //Abrimos a base de datos e cargamos os contactos ao iniciar a aplicación
    abrirBD()
        .then(() => cargarContactos())
        .catch((erro) => console.error(erro))
        .finally(() => console.log("Base de datos lista"));

   
    btnEngadir.addEventListener("click", () => {
        limparErros();
        if (validarTodo()) {
            let contacto = {
                nome: nome.value,
                apelidos: apelidos.value,
                telefono: telefono.value,
                email: email.value,
                enderezo: enderezo.value,
                comentarios: comentarios.value,
                codPostal: codPostal.value,
                provincia: provincia.options[provincia.selectedIndex].text,
            };

            //Engadimos o contacto á BD usando Promesa
            engadirContactoBD(contacto)
                .then((msg) => {
                    contactos.push(contacto);
                    contactos.sort((a, b) => a.nome.localeCompare(b.nome));
                    actualizarListaxe();
                    formulario.reset();
                    provincia.disabled = false;
                    console.log(msg);
                })
                .catch((erro) => amosarErro(formulario, erro))
                .finally(() => console.log("Operación engadir rematada"));
        }
    });

  
    btnModificar.addEventListener("click", () => {
        limparErros();
        if (validarTodo()) {
            let nomeProcurado = nome.value.toLowerCase();
            let contacto = contactos.find(
                (c) => c.nome.toLowerCase() === nomeProcurado
            );

            if (contacto) {
                contacto.apelidos = apelidos.value;
                contacto.telefono = telefono.value;
                contacto.email = email.value;
                contacto.enderezo = enderezo.value;
                contacto.comentarios = comentarios.value;
                contacto.codPostal = codPostal.value;
                contacto.provincia = provincia.options[provincia.selectedIndex].text;

                modificarContactoBD(contacto)
                    .then((msg) => {
                        console.log(msg);
                        actualizarListaxe();
                        formulario.reset();
                        provincia.disabled = false;
                    })
                    .catch((erro) => amosarErro(formulario, erro))
                    .finally(() => console.log("Operación modificar rematada"));
            } else {
                amosarErro(formulario, "Non se atopou ningún contacto con ese nome");
            }
        }
    });

    btnEliminar.addEventListener("click", () => {
        limparErros();
        if (validarNome()) {
            let nomeProcurado = nome.value;
            let indice = contactos.findIndex(
                (c) => c.nome.toLowerCase() === nomeProcurado.toLowerCase()
            );

            if (indice !== -1) {
                eliminarContactoBD(contactos[indice].nome)
                    .then((msg) => {
                        console.log(msg);
                        contactos.splice(indice, 1);
                        actualizarListaxe();
                        formulario.reset();
                        provincia.disabled = false;
                    })
                    .catch((erro) => amosarErro(formulario, erro))
                    .finally(() => console.log("Operación eliminar rematada"));
            } else {
                amosarErro(formulario, "Non existe ningún contacto con ese nome");
            }
        }
    });

    btnBuscar.addEventListener("click", () => {
        limparErros();
        if (validarNome()) {
            let nomeProcurado = nome.value.toLowerCase();
            let contacto = contactos.find(
                (c) => c.nome.toLowerCase() === nomeProcurado
            );

            if (contacto) {
                nome.value = contacto.nome;
                apelidos.value = contacto.apelidos;
                telefono.value = contacto.telefono;
                email.value = contacto.email;
                enderezo.value = contacto.enderezo;
                comentarios.value = contacto.comentarios;
                codPostal.value = contacto.codPostal;
                provincia.value =
                    provincias.find((p) => p.provincia === contacto.provincia)?.codigo ||
                    "00";
                provincia.disabled = codPostal.value != "";
            } else {
                amosarErro(formulario, "Non se atopou ningún contacto con ese nome");
            }
        }
    });


    codPostal.addEventListener("keyup", () => {
        provincia.disabled = codPostal.value != "";
        if (codPostal.value.length >= 2) {
            provincia.value = codPostal.value.substring(0, 2);
        }
    });

    //Mensaxes de erro e validación
    let mensaxesDeErro = [];

    function amosarErro(elementoPosicion, mensaxe) {
        let elementoErro = document.createElement("p");
        elementoErro.textContent = mensaxe;
        elementoErro.className = "error";
        elementoPosicion.parentNode.insertBefore(elementoErro, elementoPosicion);
        mensaxesDeErro.push(elementoErro);
    }

    function limparErros() {
        mensaxesDeErro.forEach((m) => m.remove());
        mensaxesDeErro = [];
    }

    function validarTodo() {
        let rexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
        let rexTel = /^[0-9]+$/;
        let rexEmail = /^[a-z][a-z0-9-_.]{1,18}[a-z0-9]@[a-z][a-z0-9-_.]{1,18}[a-z0-9][.][a-z]{2,4}$/;
        let rexCP = /^(0[1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3})$/;

        if (nome.value == "") amosarErro(nome, "O campo «nome» non pode estar baleiro");
        else if (!rexNome.test(nome.value))
            amosarErro(nome, "O nome só pode conter letras e espazos");

        if (apelidos.value == "")
            amosarErro(apelidos, "O campo «apelidos» non pode estar baleiro");
        else if (!rexNome.test(apelidos.value))
            amosarErro(apelidos, "Os apelidos só poden conter letras e espazos");

        if (telefono.value == "")
            amosarErro(telefono, "O teléfono non pode estar baleiro");
        else if (!rexTel.test(telefono.value))
            amosarErro(telefono, "O teléfono só pode conter números");

        if (email.value != "" && !rexEmail.test(email.value))
            amosarErro(email, "Formato de e-mail incorrecto");

        if (codPostal.value != "" && !rexCP.test(codPostal.value))
            amosarErro(codPostal, "Código postal incorrecto");

        return mensaxesDeErro.length == 0;
    }

    function validarNome() {
        let rexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
        if (nome.value == "") amosarErro(nome, "O campo «nome» non pode estar baleiro");
        else if (!rexNome.test(nome.value))
            amosarErro(nome, "O nome só pode conter letras e espazos");
        return mensaxesDeErro.length == 0;
    }

    //Actualiza a listaxe visual de contactos
    function actualizarListaxe() {
        listaxe.replaceChildren();
        contactos.forEach((c) => {
            let div = document.createElement("div");
            div.classList.add("contacto");
            div.textContent =
                c.nome +
                " " +
                c.apelidos +
                " - Tlf.: " +
                c.telefono +
                " - E-mail: " +
                c.email;
            listaxe.appendChild(div);
        });
    }
}
