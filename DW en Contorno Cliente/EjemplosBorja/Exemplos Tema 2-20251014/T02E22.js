// Array inicial para traballar
let idades = [40, 17, 85, 40, 24];
let letras = ["beta", "gamma", "alpha", "delta"];

console.log("Array orixinal: " + idades);
console.log("Array de letras: " + letras);

// BUSCA

// includes(): comproba se o array contén un valor específico
let resultadoIncludes = idades.includes(85);
console.log("idades.includes(85): " + resultadoIncludes); // true

// indexOf(): devolve o índice da primeira ocorrencia (ou -1)
let resultadoIndexOf = idades.indexOf(40, 2); // Busca dende a posición 2
console.log("idades.indexOf(40, 2): " + resultadoIndexOf); // 3

// lastIndexOf(): devolve o índice da última ocorrencia
let resultadoLastIndexOf = idades.lastIndexOf(40);
console.log("idades.lastIndexOf(40): " + resultadoLastIndexOf); // 3

// CONVERSIÓN

// toString(): convirte o array nunha string separada por comas
let resultadoToString = idades.toString();
console.log("idades.toString(): " + resultadoToString); // "40,17,85,40,24"

// join(): convirte o array nunha string con separador personalizable
let resultadoJoin = idades.join(" | ");
console.log("idades.join(' | '): " + resultadoJoin); // "40 | 17 | 85 | 40 | 24"

// ORDENACIÓN E INVERSIÓN

// sort(): ordena alfabeticamente por defecto (non numérico!)
let resultadoSortDefault = [...idades].sort(); // copia para non modificar o orixinal
console.log("idades.sort() (alfabeticamente): " + resultadoSortDefault); // [17, 24, 40, 40, 85]

// sort(función): ordena numericamente
let resultadoSortNumerico = [...idades].sort((a, b) => a - b);
console.log("idades.sort((a,b)=>a-b): " + resultadoSortNumerico); // [17, 24, 40, 40, 85]

// reverse(): inverte a orde do array
let idadesInvertidas = [...idades];
idadesInvertidas.reverse();
console.log("idades.reverse(): " + idadesInvertidas); // [24, 40, 85, 17, 40]

// OUTROS

// keys(): obter os índices do array
let chaves = idades.keys();
console.log("Índices do array:");
for (let chave of chaves) {
    console.log(chave);
}

// isArray(): comprobar se é un array
let resultadoIsArray = Array.isArray(idades);
console.log("Array.isArray(idades): " + resultadoIsArray); // true