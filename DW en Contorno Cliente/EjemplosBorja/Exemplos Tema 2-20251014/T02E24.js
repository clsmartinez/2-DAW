// CODIFICACIÓN E DECODIFICACIÓN DE URI 

let uri = "search.php?place=Cañón del río Mao";
let codificado = encodeURI(uri);
console.log("encodeURI: " + codificado);
// Resultado: search.php?place=Ca%C3%B1%C3%B3n%20del%20r%C3%ADo%20Mao

let codificadoCompoñente = encodeURIComponent(uri);
console.log("encodeURIComponent: " + codificadoCompoñente);
// Resultado: search.php%3Fplace%3DCa%C3%B1%C3%B3n%20del%20r%C3%ADo%20Mao

console.log("decodeURI: " + decodeURI(codificado));
// Resultado: search.php?place=Cañón del río Mao

console.log("decodeURIComponent: " + decodeURIComponent(codificadoCompoñente));
// Resultado: search.php?place=Cañón del río Mao

// AVALIACIÓN E EXECUCIÓN DINÁMICA 

let resultadoEval = eval("((3+4)/2).toFixed(2)");
console.log("eval: ", resultadoEval); // "3.50"

// COMPROBACIÓN DE VALORES NUMÉRICOS 

console.log("isFinite(1): " + isFinite(1)); // true
console.log("isFinite(1/0): " + isFinite(1 / 0)); // false
console.log("isFinite(+Infinity): " + isFinite(+Infinity)); // false
console.log("isFinite(-3.14): " + isFinite(-3.14)); // true
console.log("isFinite(new Date()): " + isFinite(new Date())); // true

console.log("isNaN(1): " + isNaN(1)); // false
console.log("isNaN(NaN): " + isNaN(NaN)); // true
console.log("isNaN('2019-11-22'): " + isNaN("2019-11-22")); // true
console.log("isNaN(new Date())", isNaN(new Date())); // false

// CONVERSIÓN ENTRE TIPOS 

console.log("Number(true): " + Number(true)); // 1
console.log("Number('3.14'): " + Number("3.14")); // 3.14
console.log("Number('3 14'): " + Number("3 14")); // NaN
console.log("Number(new Date()): " + Number(new Date())); // timestamp

console.log("parseFloat('3.14'): " + parseFloat("3.14")); // 3.14
console.log("parseFloat('3 4 5'): " + parseFloat("3 4 5")); // 3
console.log("parseFloat('   3   '): " + parseFloat("   3   ")); // 3
console.log("parseFloat('70 kg'): " + parseFloat("70 kg")); // 70
console.log("parseFloat('I am 70'): " + parseFloat("I am 70")); // NaN

console.log("parseInt('3.14'): " + parseInt("3.14")); // 3
console.log("parseInt('1001', 2): " + parseInt("1001", 2)); // 9
console.log("parseInt('70 kg'): " + parseInt("70 kg")); // 70
console.log("parseInt('I am 70'): " + parseInt("I am 70")); // NaN

console.log("String(3+4): " + String(3 + 4)); // "7"
console.log("String(Boolean(1)): " + String(Boolean(1))); // "true"
console.log("String(new Date()): " + String(new Date())); // Data actual como string