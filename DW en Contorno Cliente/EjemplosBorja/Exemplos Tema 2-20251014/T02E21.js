// Array inicial para traballar
let idades = [40, 17, 40, 85, 24];

console.log("Array orixinal: " + idades);

// MÉTODOS DE EDICIÓN DE ARRAYS

// pop(): elimina o último elemento e devólveo
let resPop = idades.pop();
console.log("Despois de pop() → Elemento eliminado: " + resPop);
console.log("Array actualizado: " + idades);

// push(): engade un ou máis elementos ao final e devolve a nova lonxitude
let resPush = idades.push(30, 45);
console.log("Despois de push(30, 45) → Nova lonxitude: " + resPush);
console.log("Array actualizado: " + idades);

// shift(): elimina o primeiro elemento e devólveo
let resShift = idades.shift();
console.log("Despois de shift() → Elemento eliminado: " + resShift);
console.log("Array actualizado: " + idades);

// unshift(): engade un ou máis elementos ao principio e devolve a nova lonxitude
let resUnshift = idades.unshift(50, 18);
console.log("Despois de unshift(50, 18) → Nova lonxitude: " + resUnshift);
console.log("Array actualizado: " + idades);

// slice(): crea unha copia superficial dunha parte do array (sen modificalo)
let resSlice = idades.slice(0, 1); // elementos dende o índice 0 até o 1 (non incluído)
console.log("Resultado de slice(1, 3): " + resSlice);
console.log("Array orixinal (non se modifica): " + idades);

// splice(): elimina elementos nunha posición e pode engadir novos no seu lugar
let resSplice = idades.splice(2, 1, 100); // elimina 1 elemento na posición 2 e engade 100
console.log("Resultado de splice(2, 1, 100) → Elementos eliminados: " + resSplice);
console.log("Array actualizado: " + idades);

// concat(): une dous ou máis arrays e devolve un novo array (non modifica os orixinais)
let outrosDatos = [10, 20];
let resConcat = idades.concat(outrosDatos);
console.log("Resultado de concat([10, 20]): " + resConcat);
console.log("Array orixinal (non se modifica): " + idades);