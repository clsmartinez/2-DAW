//  FUNCIÓN ANÓNIMA ASIGNADA A UNHA VARIABLE 

let saudar = function () {
    console.log("Ola mundo!");
};

saudar(); // Chamada á función

//  FUNCIÓN ANÓNIMA COMO PARÁMETRO 

let números = [1, 2, 3, 4, 5];

números.forEach(function (num) {
    console.log("Número: " + num);
});

//  USO EN FUNCIONS DE TRANSFORMACIÓN 

let dobros = números.map(function (num) {
    return num * 2;
});

console.log("Dobro dos números: " + dobros); // [2, 4, 6, 8, 10]

//  PASAR FUNCIÓN ANÓNIMA A OUTRA FUNCIÓN 

function aplicarFuncion(valor, funcion) {
    return funcion(valor);
}

let resultado = aplicarFuncion(5, function (x) {
    return x * x;
});

console.log("Cadrado de 5: " + resultado); // 25

//  USO CON EVENTOS (simulado con setTimeout) 

console.log("En 3 segundos amosaremos unha mensaxe...");

setTimeout(function () {
    console.log("Mensaxe mostrada tras 3 segundos.");
}, 3000);