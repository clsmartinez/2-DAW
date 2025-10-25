// Uso de typeof para identificar o tipo de dato

console.log("Uso de typeof para identificar o tipo de dato:");

console.log("typeof 'Diego' →", typeof "Diego"); // string
console.log("typeof 3.14 →", typeof 3.14); // number
console.log("typeof NaN →", typeof NaN); // number ❗
console.log("typeof true →", typeof true); // boolean
console.log("typeof [1,2,3] →", typeof [1, 2, 3]); // object
console.log("typeof {nome:'Diego'} →", typeof { nome: 'Diego' }); // object
console.log("typeof new Date() →", typeof new Date()); // object
console.log("typeof function(){} →", typeof function () { }); // function
console.log("typeof null →", typeof null); // object ❗
console.log("typeof undefinedVar →", typeof undefinedVar); // undefined

// Conversión automática de tipos

console.log("Conversión automática:");

console.log("3 + '4' →", 3 + '4'); // "34" (string)
console.log("3 + 4 + '5' →", 3 + 4 + '5'); // "75"
console.log("'3' * 2 →", '3' * 2); // 6 (number)
console.log("3 - true →", 3 - true); // 2 (true = 1)
console.log("3 + true →", 3 + true); // 4 (true = 1)
console.log("+'4' →", +'4'); // 4 (unario + converte a número)
console.log("'3' > 4 →", '3' > 4); // false
console.log("3 > true →", 3 > true); // true

// Conversión a texto (string)

console.log("Conversión a texto:");

console.log("(3 + 4).toString() →", (3 + 4).toString()); // "7"
console.log("new Date().toString() →", new Date().toString());
console.log("true.toString() →", true.toString());

console.log("new String(3 + 4) →", new String(3 + 4)); // "7"
console.log("new String(true) →", new String(true)); // "true"

// Conversión a número

console.log("Conversión a número:");

console.log("Number('3.14') →", Number('3.14')); // 3.14
console.log("Number(' ') →", Number(' ')); // 0
console.log("Number('') →", Number('')); // 0
console.log("Number('3.14 16') →", Number('3.14 16')); // NaN
console.log("Number(new Date()) →", Number(new Date())); // timestamp
console.log("Number(true) →", Number(true)); // 1
console.log("Number(false) →", Number(false)); // 0
console.log("Number(null) →", Number(null)); // 0
console.log("Number(undefined) →", Number(undefined)); // NaN

console.log("parseInt('3.14') →", parseInt('3.14')); // 3
console.log("parseInt('-F', 16) →", parseInt('-F', 16)); // -15
console.log("parseInt('4.7', 10) →", parseInt('4.7', 10)); // 4

console.log("parseFloat('3.14') →", parseFloat('3.14')); // 3.14
console.log("parseFloat('4.7 xyz') →", parseFloat('4.7 xyz')); // 4.7

// Conversión a booleano

console.log("Conversión a booleano:");

console.log("Boolean(3.14) →", Boolean(3.14)); // true
console.log("Boolean('') →", Boolean('')); // false
console.log("Boolean(0) →", Boolean(0)); // false
console.log("Boolean(null) →", Boolean(null)); // false
console.log("Boolean(undefined) →", Boolean(undefined)); // false
console.log("Boolean([]) →", Boolean([])); // true
console.log("Boolean({}) →", Boolean({})); // true
console.log("Boolean(NaN) →", Boolean(NaN)); // false
console.log("Boolean('false') →", Boolean('false')); // true