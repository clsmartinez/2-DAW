//Declaración de una promesa simple
function crearPromesa(resolve,reject){
    let exito=false; //Cambiaremos o valor de esta variable para representar éxito o fracaso

    if(exito){
        resolve("¡La promesa se ha cumplido con éxito!");
    }   else{
        reject("La promesa ha fallado.");
    }
}

let promesa =new Promise(crearPromesa);

/*let promesa2 =new Promise((resolve,reject)=>{
    let exito=true; //Cambiaremos o valor de esta variable para representar éxito o fracaso

    if(exito){
        resolve("¡La promesa se ha cumplido con éxito!");
    }   else{
        reject("La promesa ha fallado.");
    }
}); */

//Na rama "then" poñemos o que se fará en caso de éxito DESPOIS de que se teña completado o código da promesa
//Consumo da promesa
promesa
.then((mensaxe)=>{
console.log(mensaxe);//"mensaxe" será o valor pasado a "resolve" na promesa
})

//Na rama "catch" poñemos o que se fará en caso de que FALLE DESPOIS de que se teña completado o código da promesa
//Consumo da promesa
.catch((erro)=>{
console.log(erro);//"erro" será o valor pasado a "reject" na promesa
})

//Na rama finally poñemos o que se farai sempre, tanto se cumpliu como se non
.finally(()=>{
console.log("A promesa foi procesada (cumplida ou non)");
})