// EXEMPLO 04: ARRAYS E OBXECTOS

// Declaración e inicialización de arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Ao asignar un array a unha variable non facemos unha copia, senón que gardamos a posición en memoria dos datos
let array3 = array1;

console.log(array3);

// Ao modificar un dato do array3 estamos a modificar tamén os datos que se acceden dende array1, porque son os mesmos
array3[2] = 20;

console.log(array1); // Comprobamos que efectivamente se modificou o array1 ao escribir sobre array3

// Utilizar o operador spread (...) para facer copias de arrays
let array4 = [...array1];

console.log(array4);

array1[2] = 3;

console.log(array4);

// Utilizar o operador spread para combinar arrays
let array5 = [...array1, ...array2];

console.log(array5);

// O operador spread pode usarse para reestruturar arrays
let [a, b, ...restoArray] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(restoArray);

// Declaración e inicialización de obxectos
let obxecto1 = {
  a: 1,
  b: 2
};
let obxecto2 = {
  d: 3,
  e: 4
};

// Ao asignar un obxecto a unha variable non facemos unha copia, senón que gardamos a posición en memoria dos datos
let obxecto3 = obxecto1;

console.log(obxecto3);

// Ao modificar un dato do obxecto3 estamos a modificar tamén os datos que se acceden dende obxecto1, porque son os mesmos
obxecto3.a = 50;

console.log(obxecto1);

// Utilizar o operador spread (...) para facer copias de obxectos
let obxecto4 = {...obxecto3};
obxecto4.a = "Ola mundo!";
console.log(obxecto3);

// Utilizar o operador spread para combinar obxectos
let obxecto5 = {...obxecto1, ...obxecto2}; // Se hai propiedades que coinciden no nome en ambos obxectos, irá sobreescribindo en orde de lectura
console.log(obxecto5);

// O operador sprear pode usarse para reestruturar obxectos
let {nome, apelidos, ...restoObxecto} = {
  nome: "Saínza",
  apelidos: "Pereira Xande",
  idade: 29,
  enderezo: "Lugar do Calvario"
}
console.log(nome);
console.log(apelidos);
console.log(restoObxecto);
