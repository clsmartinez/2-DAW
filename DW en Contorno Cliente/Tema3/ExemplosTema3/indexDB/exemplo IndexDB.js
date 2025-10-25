//Capturamos as referencias
let formulario = document.getElementById("formulario");
let btnEngadir = document.getElementById("engadir");
let btnModificar = document.getElementById("modificar");
let btnEliminar = document.getElementById("eliminar");
let btnLer = document.getElementById("ler");
let btnLerTodos = document.getElementById("lerTodos");
let listaxe = document.getElementById("listaxe");

//Habilitamos IndexDB na nosa apliación
let novaBD = window.indexedDB;

//Comprobamos que se inicializou correctamente a BD
if (novaBD) {
    let baseDatos; //Gardara a referencia a nosa base de datos
    let solicitude = novaBD.open("NOSA_BASE", 1); //Se a BD non existe crease e ábrese. Se existe, ábrese.
    //Definimos o comportamento en caso da que a solicitude tivera éxito

    //Definimos o comportamento en caso de que a solictude tivera éxito
    solicitude.onsuccess = () => {
        baseDatos = solicitude.result;//Gardamos o resultado da solicitude (a BD aberta) na variable baseDatos
        console.log("Base de datos aberta correctamente");
    }

    //Definimos o comportamento en caso de que a base necesitara una actualización
    solicitude.onupgradeneeded = () => {
        baseDatos = solicitude.result; //Gardamos o resultado da soliciude (a BD aberta) na variable baseDatos
        //Definimos un novo almacén de obxectos na nosa BD indicando como se usara o campo "dni"
        let almacenPersoas = baseDatos.createObjectStore("persoas", { keyPath: "dni" });
    }
    //Engadimos o comporamento do botón engadir 
    btnEngadir.addEventListener("click", () => {
        //Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo lectura e escritura
        let transaccion = baseDatos.transaction(["persoas"], "readwrite");

        //Especificamos o almacén de obxectos co que imos traballar
        let almacenPersoas = transaccion.objectStore("persoas");

        //Creamos un novo obxecto que teña un campo "dni"
        let novaPersoa = {
            nome: "Pepiño",
            apelidos: "Pérez Castro",
            dni: "12345678X"
        };
        //Engadimos o novo obxecto ao almacén de obxectos
        almacenPersoas.add(novaPersoa);   //O método add engade o obxecto ao almacén e devolve unha solicitude (que non estamos a caprurar neste exemplo)
        almacenPersoas.add({ nome: "Ana", dni: "87654321Y" });
    });

    //Engadimos o comporamento do botón modificar 
    btnModificar.addEventListener("click", () => {
        //Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo lectura e escritura
        let transaccion = baseDatos.transaction(["persoas"], "readwrite");

        //Especificamos o almacén de obxectos co que imos traballar
        let almacenPersoas = transaccion.objectStore("persoas");

        //Creamos un novo obxecto que teña un campo "dni"
        let novaPersoa = {
            nome: "José",
            apelidos: "Pérez Castro",
            dni: "12345678X"
        };
        //Actualizamos os datos do obxecto no almacén de obxectos
        almacenPersoas.put(novaPersoa);   //O método put actualiza o obxecto no almacén e devolve unha solicitude (que non estamos a caprurar neste exemplo)
        almacenPersoas.put({ nome: "Ana", dni: "87654321Y" });
    });


        //Engadimos o comporamento do botón eliminar
        btnEliminar.addEventListener("click", () => {
        //Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo lectura e escritura
        let transaccion = baseDatos.transaction(["persoas"], "readwrite");

        //Especificamos o almacén de obxectos co que imos traballar
        let almacenPersoas = transaccion.objectStore("persoas");

        //Eliminamos do almacén o obxecto co dni especificado
        almacenPersoas.delete("12345678X");   //O método put actualiza o obxecto no almacén e devolve unha solicitude (que non estamos a caprurar neste exemplo)
    });

    //Engadimos o comporamento do botón ler
    btnLer.addEventListener("click", () => {
        //Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo lectura e escritura
        let transaccion = baseDatos.transaction(["persoas"], "readonly");

        //Especificamos o almacén de obxectos co que imos traballar
        let almacenPersoas = transaccion.objectStore("persoas");

        //Eliminamos do almacén o obxecto co dni especificado
        let solicitudeLectura=almacenPersoas.get("87654321Y");   //O método get actualiza o obxecto no almacén e devolve unha solicitude;
        solicitudeLectura.onsuccess=()=>{
            let persoa=solicitudeLectura.result; //Gardamos o resultado da solicitude (o obxecto recuperado) na variable persoa
            if(persoa){
                console.table(persoa);//Amosamos os datos da persoa na consola
            }else{
                console.log("Non existe ningunha persoa con ese DNI");
            }
        }
    });

    //Engadimos o comporamento do botón ler todos
    btnLerTodos.addEventListener("click", () => {
        //Abrimos unha nova transacción contra o almacén de obxectos "persoas" en modo lectura e escritura
        let transaccion = baseDatos.transaction(["persoas"], "readonly");

        //Especificamos o almacén de obxectos co que imos traballar
        let almacenPersoas = transaccion.objectStore("persoas");

        //Eliminamos do almacén o obxecto co dni especificado
        let solicitudeCursor=almacenPersoas.openCursor();   //O método get actualiza o obxecto no almacén e devolve unha solicitude;
        solicitudeCursor.onsuccess=()=>{
            let cursor=solicitudeCursor.result; //Gardamos o resultado da solicitude (un cursor)
            if(cursor){
                console.table(cursor.value);//Amosamos o valor actual do cursor (o obxecto lido)
                cursor.continue();//Avanzamos o cursor ao seguinte rexistro
            }else{
                console.log("Rematou a lectura de todos os rexistros");
            }
        }
    });
}