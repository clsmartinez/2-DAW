//Declaración de una promesa simple
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("un");
        resolve();
    }, 2000);
})

//Na rama "then" poñemos o que se fará en caso de éxito DESPOIS de que se teña completado o código da promesa
//Consumo da promesa
promesa
    .then(() => {
        console.log("dous");// será o valor pasado a "resolve" na promesa
    })
