// Array inicial para traballar
let idades = [40, 17, 85, 24];

console.log("Array orixinal: " + idades);

// MÉTODOS DE ITERACIÓN

// some(): comproba se algún elemento cumpre a condición
let resultadoSome = idades.some(function (idade) {
    return idade >= 18;
});
console.log("idades.some(idade >= 18): " + resultadoSome); // true

// every(): comproba se todos os elementos cumpren a condición
let resultadoEvery = idades.every(function (idade) {
    return idade >= 18;
});
console.log("idades.every(idade >= 18): " + resultadoEvery); // false

// find(): devolve o primeiro elemento que cumpre a condición
let resultadoFind = idades.find(function (idade) {
    return idade < 18;
});
console.log("idades.find(idade < 18): " + resultadoFind); // 17

// findIndex(): devolve o índice do primeiro elemento que cumpre a condición
let resultadoFindIndex = idades.findIndex(function (idade) {
    return idade < 18;
});
console.log("idades.findIndex(idade < 18): " + resultadoFindIndex); // 1

// filter(): devolve un novo array cos elementos que cumpren a condición
let resultadoFilter = idades.filter(function (idade) {
    return idade >= 18;
});
console.log("idades.filter(idade >= 18): " + resultadoFilter); // [40, 85, 24]

// map(): aplica unha función a cada elemento e devolve un novo array
let resultadoMap = idades.map(function (idade) {
    return idade * 2;
});
console.log("idades.map(idade * 2): " + resultadoMap); // [80, 34, 170, 48]

// forEach(): executa unha función para cada elemento (non devolve nada)
let totalIdades = 0;
idades.forEach(function (idade) {
    totalIdades += idade;
});
console.log("idades.forEach → Suma total: " + totalIdades); // 166

// reduce(): aplica unha función ao acumular para reducir o array a un só valor
let resultadoReduce = idades.reduce(function (total, idade) {
    return total + idade;
}, 0);
console.log("idades.reduce → Suma total: " + resultadoReduce); // 166

// reduceRight(): igual que reduce pero comezando polo final
let resultadoReduceRight = idades.reduceRight(function (total, idade) {
    return total + idade;
}, 0);
console.log("idades.reduceRight → Suma total: " + resultadoReduceRight); // 166