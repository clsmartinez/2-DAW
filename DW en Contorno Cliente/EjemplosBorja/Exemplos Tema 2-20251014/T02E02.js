// EXEMPLO 02: ÁMBITOS DE VARIABLES

// Ámbito global
nomeGlobal = "G: Son global sen nada";
var nomeGlobalVar = "G: Son global con var";
let nomeGlobalLet = "G: Son global con let";
const nomeGlobalConst = "G: Son global con const";

function ambitoFuncion() {
    // Ámbito de función
    nomeFuncion = "F: Son global sen nada";
    var nomeFuncionVar = "F: Son función con var (se o modo estricto está habilitado)";
    let nomeFuncionLet = "F: Son de función con let";
    const nomeFuncionConst = "F: Son de función con const";

    if (true) {
        // Ámbito de bloque
        nomeBloque = "B: Son global sen nada";
        var nomeBloqueVar = "B: Son de función con var";
        let nomeBloqueLet = "B: Son de bloque con let";
        const nomeBloqueConst = "B: Son de bloque con const";

        console.log("Dentro do bloque:");
        console.log(nomeGlobal);         // Accesible
        console.log(nomeGlobalVar);      // Accesible
        console.log(nomeGlobalLet);      // Accesible
        console.log(nomeGlobalConst);    // Accesible
        console.log(nomeFuncion);        // Accesible
        console.log(nomeFuncionVar);     // Accesible
        console.log(nomeFuncionLet);     // Accesible
        console.log(nomeFuncionConst);   // Accesible
        console.log(nomeBloque);         // Accesible
        console.log(nomeBloqueVar);      // Accesible
        console.log(nomeBloqueLet);      // Accesible
        console.log(nomeBloqueConst);    // Accesible
    }

    console.log("Dentro da función:");
    console.log(nomeGlobal);         // Accesible
    console.log(nomeGlobalVar);      // Accesible
    console.log(nomeGlobalLet);      // Accesible
    console.log(nomeGlobalConst);    // Accesible
    console.log(nomeFuncion);        // Accesible
    console.log(nomeFuncionVar);     // Accesible
    console.log(nomeFuncionLet);     // Accesible
    console.log(nomeFuncionConst);   // Accesible
    console.log(nomeBloque);         // Accesible
    console.log(nomeBloqueVar);      // Accesible
    //console.log(nomeBloqueLet);      // Non é accesible porque é de bloque
    //console.log(nomeBloqueConst);    // Non é accesible porque é de bloque
}

ambitoFuncion();

console.log("Dende o nivel global:");
console.log(nomeGlobal);         // Accesible
console.log(nomeGlobalVar);      // Accesible
console.log(nomeGlobalLet);      // Accesible
console.log(nomeGlobalConst);    // Accesible
console.log(nomeFuncion);        // Accesible
//console.log(nomeFuncionVar);     // Non é accesible si o modo estricto está habilitado (sería de función)
//console.log(nomeFuncionLet);     // Non é accesible porque é de función
//console.log(nomeFuncionConst);   // Non é accesible porque é de función
console.log(nomeBloque);         // Accesible
//console.log(nomeBloqueVar);      // Non é accesible porque é de función
//console.log(nomeBloqueLet);      // Non é accesible porque é de bloque
//console.log(nomeBloqueConst);    // Non é accesible porque é de bloque