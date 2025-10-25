// Definimos unha matriz 3x3 (3 filas e 3 columnas)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// PERCORRIDO CON DOUS BUCLES FOR
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log("Elemento [" + i + "][" + j + "] = " + matriz[i][j]);
    }
}


// PERCORRIDO CON DOUS BUCLES FOR-IN
for (let k in matriz) {
    for (let l in matriz[k]) {
        console.log("Elemento [" + k + "][" + l + "] = " + matriz[k][l]);
    }
}

// PERCORRIDO CON DOUS BUCLES FOR-OF
for (let m of matriz) {
    for (let n of m) {
        console.log(n);
    }
}