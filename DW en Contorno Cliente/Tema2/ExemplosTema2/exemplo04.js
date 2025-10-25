//Exemplo 04: Arrays e obxectos

//DECLARACIÓN E INICIALIZACIÓN DE ARRAYS
let array1 =[1,2,3];
let array2 =[4,5,6];
//Ao asignar un array a unha variable non fas una copia se non que fas un enlace
//Array3 e Array1 son enlaces a el espacio fisico donde se guardan los datos 
let array3=array1;

console.log(array3);
//Modificas el archivo de datos, aunque lo hagas desde ese enlace (array3) (los arrays son dinamicos)
array3[2]=10;

console.log(array1);

//Utilizar o operador spread(...) para facer copias de arrays

let array4= [...array1];

console.log(array4);

array1[2]=3;

console.log(array4);

//Utilizar o operador spread para combinar arrays
let array5 =[...array1,...array2];

console.log(array5);

//O operador spread pode usarse para reestructurar arrays

let [a,b,...restoArray]=[1,2,3,4,5];
console.log(a);
console.log(b);
console.log(restoArray);


//Declaración e inicialización de obxectos
let obxecto1 ={
  a:1,
  b:2
};

let obxecto2 ={
  d:3,
  e:4
};
//Os obxectos e os arrays funcionan iguais, son dinamicos
let obxecto3 = obxecto1;

console.log(obxecto3);

obxecto3.a=50;

console.log(obxecto1);

//Utilizar spread para facer copias de obxectos
let obxecto4={...obxecto3};
obxecto4.a="Ola mundo!";
console.log(obxecto3);

//Utlizar o spread para combinar obxectos
let obxecto5={...obxecto1,...obxecto2}; //Se hai propiedades que coinciden no nome en ambos obxectos, irá sobreescribindo en orde de lectura.
console.log(obxecto5);

//O operador spread pode usarse para reestructurar obxectos

let {nome,apelidos,...restoObxecto}={
  nome:"Saínza",
  apelidos:"Pereira Xande",
  idade:29,
  enderezo:"Lugar do Calvario"
}

console.log(nome);
console.log(apelidos);
console.log(restoObxecto);