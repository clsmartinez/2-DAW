// Capturamos as referencias dos elementos HTML
let formulario = document.getElementById("formulario");
let btnEngadir = document.getElementById("engadir");
let btnModificar = document.getElementById("modificar");
let btnEliminar = document.getElementById("eliminar");
let btnLer = document.getElementById("ler");
let btnLerTodos = document.getElementById("lerTodos");
let listaxe = document.getElementById("listaxe");

// Habilitamos indexedDB na nosa aplicación
let novaBD = window.indexedDB;

// Función que abre a base de datos (e crea un almacén de obxectos) e devolve unha promesa
function abrirBD() {
    return new Promise((resolve, reject) => {
        let solicitude = novaBD.open("NOSA_BASE", 1); // Se a BD non existe, créase e ábrese. Se a BD existe, ábrese.

        // Definimos o comportamento en caso de que a solicitude de apertura tivera éxito
        solicitude.onsuccess = (evento) => {
            resolve(evento.target.result); // Damos a promesa por cumprida e devolvemos o resultado da solicitude (a BD aberta)
        };

        // Definimos o comportamento en caso de que a BD precise actualización
        solicitude.onupgradeneeded = (evento) => {
            let baseDatos = solicitude.result;

            if (!baseDatos.objectStoreNames.contains("persoas")) {
                baseDatos.createObjectStore("persoas", { keyPath: "dni" });
            }

        }

        // Definimos o comportamento en caso de que a solicitude de apertura tivera erro
        solicitude.onerror = () => {
            reject("Non se puido abrir a base de datos"); // Damos a promesa por rexeitada e devolvemos unha mensaxe de erro
        }
    });
}

function engadir(baseDatos) {

    return new Promise((resolve, reject) => {
        // Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo lectura/escritura
        let transaccion = baseDatos.transaction(["persoas"], "readwrite");

        // Especificamos en cal dos almacéns de obxectos imos traballar collendo a referencia ao mesmo
        let almacenPersoas = transaccion.objectStore("persoas");

        // Creamos un novo obxecto que teña un campo "dni"
        let novaPersoa = {
            nome: "Pepiño",
            apelidos: "Pérez Castro",
            dni: "33333333P"
        };

        // Engadimos o novo obxecto ao almacén de obxectos
        almacenPersoas.add(novaPersoa); // O método "add" engade o obxecto ao almacén e devolve unha solicitude (que non estamos a capturar neste)

        //Definimos o comportamento en caso de éxito 
        transaccion.oncomplete = () => {
            resolve(novaPersoa);//Damos a promesa por cumplida e devolvemos obxecto
        }
        transaccion.onerror = () => {
            reject("Non se pudo engadir a persoa");
        }
    });
}

// Comprobamos que se inicializou correctamente a BD
if (novaBD) {
    // Consumimos a promesa que abre a base de datos
    abrirBD()
        // Se a promesa se cumpre, gardamos a referencia á base de datos na variable creada anteriormente
        .then((resultado) => {
            // Engadimos o comportamento do bóton "Engadir" pasándolle a referencia á base de datos
            btnEngadir.addEventListener("click", () => (
                engadir(resultado)
                    .then((persoaEngadida) => {
                        console.log("Persoa engadida: ", persoaEngadida);
                    })
                    .catch((erro) => {
                        console.error(erro);
                    })
            ));
        })
        // Se a promesa é rexeitada, amosamos o erro na consola
        .catch((erro) => {
            console.error(erro);
        });

    // Engadimos o comportamento do bóton "Modificar"
    btnModificar.addEventListener("click", () => {
        // Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo lectura/escritura
        let transaccion = baseDatos.transaction(["persoas"], "readwrite");

        // Especificamos en cal dos almacéns de obxectos imos traballar collendo a referencia ao mesmo
        let almacenPersoas = transaccion.objectStore("persoas");

        // Creamos un novo obxecto que teña un campo "dni"
        let novosDatos = {
            nome: "José",
            apelidos: "Pérez Castro",
            dni: "33333333P"
        };

        // Actualizamos os datos do obxecto no almacén de obxectos
        almacenPersoas.put(novosDatos); // O método "put" actualiza o obxecto ao almacén e devolve unha solicitude (que non estamos a capturar neste)
    });

    // Engadimos o comportamento do bóton "Eliminar"
    btnEliminar.addEventListener("click", () => {
        // Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo lectura/escritura
        let transaccion = baseDatos.transaction(["persoas"], "readwrite");

        // Especificamos en cal dos almacéns de obxectos imos traballar collendo a referencia ao mesmo
        let almacenPersoas = transaccion.objectStore("persoas");

        // Eliminamos do almacén o obxecto co "dni" especificado
        almacenPersoas.delete("33333333P"); // O método "delete" elimina o obxecto do almacén e devolve unha solicitude (que non estamos a capturar neste)
    });

    // Engadimos o comportamento do bóton "Ler"
    btnLer.addEventListener("click", () => {
        // Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo só lectura
        let transaccion = baseDatos.transaction(["persoas"], "readonly");

        // Especificamos en cal dos almacéns de obxectos imos traballar collendo a referencia ao mesmo
        let almacenPersoas = transaccion.objectStore("persoas");

        // Consultamos ao almacén o obxecto co "dni" especificado
        let solicitudeLectura = almacenPersoas.get("33333333P"); // O método "get" recupera o obxecto do almacén e devolve unha solicitude

        // Definimos o comportamento en caso de que a solicitude de lectura tivera éxito
        solicitudeLectura.onsuccess = () => {
            let persoa = solicitudeLectura.result; // Gardamos o resultado da solicitude (o obxecto recuperado) na variable resultado
            if (persoa) {
                console.table(persoa);
            } else {
                console.error("Non se atopou ningunha persoa con ese DNI.");
            }
        };
    });

    // Engadimos o comportamento do bóton "Ler"
    btnLerTodos.addEventListener("click", () => {
        // Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo só lectura
        let transaccion = baseDatos.transaction(["persoas"], "readonly");

        // Especificamos en cal dos almacéns de obxectos imos traballar collendo a referencia ao mesmo
        let almacenPersoas = transaccion.objectStore("persoas");

        // Lanzamos un cursor para ler todos os rexistros do almacén
        let solicitudeLectura = almacenPersoas.openCursor(); // O método "openCursor" recupera os obxectos do almacén e devolve unha solicitude

        // Definimos o comportamento en caso de que a solicitude de lectura tivera éxito
        solicitudeLectura.onsuccess = () => {
            let cursor = solicitudeLectura.result; // Gardamos o resultado da solicitude (un cursor)
            // O cursor estará definido namentres queden datos por ler do almacén
            if (cursor) {
                console.table(cursor.value); // Amosamos o valor actual do cursor (o obxecto lido)
                cursor.continue(); // Avanzamos o cursor ao seguinte rexistro do almacén
            } else {
                console.log("Rematouse de ler a base de datos.");
            }
        };
    });
}   