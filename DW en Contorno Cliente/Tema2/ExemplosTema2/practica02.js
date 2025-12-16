let almacen = [
  { nome: "Leite enteiro", categoria: "Lácteos", prezo: 1.20, enStock: true },
  { nome: "Pan integral", categoria: "Panadería", prezo: 1.50, enStock: true },
  { nome: "Ovos (12 unidades)", categoria: "Frescos", prezo: 2.30, enStock: true },
  { nome: "Arroz branco (1 kg)", categoria: "Almacén", prezo: 0.95, enStock: true },
  { nome: "Pasta de dente", categoria: "Hixiene", prezo: 2.80, enStock: true },
  { nome: "Champú hidratante", categoria: "Hixiene", prezo: 4.50, enStock: false },
  { nome: "Deterxente líquido (2L)", categoria: "Limpieza", prezo: 6.75, enStock: true },
  { nome: "Iogur natural (4 unidades)", categoria: "Lácteos", prezo: 1.90, enStock: true },
  { nome: "Café molido (250g)", categoria: "Bebidas", prezo: 3.60, enStock: true },
  { nome: "Zumo de laranxa (1L)", categoria: "Bebidas", prezo: 2.10, enStock: true },
  { nome: "Manteiga (250g)", categoria: "Lácteos", prezo: 2.40, enStock: false },
  { nome: "Pola (peito sen óso, 1kg)", categoria: "Congelados", prezo: 5.99, enStock: true },
  { nome: "Patacas (5kg)", categoria: "Frescos", prezo: 3.20, enStock: true },
  { nome: "Chocolate negro (100g)", categoria: "Golosinas", prezo: 1.75, enStock: true },
  { nome: "Papel hixiénico (12 rolos)", categoria: "Hixiene", prezo: 8.50, enStock: true },
  { nome: "Atún en lata", categoria: "Conservas", prezo: 1.40, enStock: true },
  { nome: "Xabón líquido para as mans", categoria: "Hixiene", prezo: 3.25, enStock: true },
  { nome: "Macarróns (500g)", categoria: "Almacén", prezo: 0.85, enStock: true },
  { nome: "Queixo curado (200g)", categoria: "Lácteos", prezo: 3.90, enStock: true },
  { nome: "Refresco de cola (2L)", categoria: "Bebidas", prezo: 1.95, enStock: true }
];

//Queremos os nomes de todos os artigos con prezo mayor igual a 3 euros

/*for (let artigo of almacen){
  if(artigo.prezo>=3){
    console.log(artigo.nome);
  }
}

console.log("///////////////////////////////////////////////////////////////////////");

for (let i in almacen){
  if(almacen[i].prezo>=3){
    console.log(almacen[i].nome);
  }
}

console.log("///////////////////////////////////////////////////////////////////////");

for(let i=0;i<almacen.length;i++){
    if(almacen[i].prezo>3){
        console.log(almacen[i].nome);
    }
}*/

//Queremos os nomes de todos os artigos con prezo mayor igual a 3 euros e en stock


/*console.log("///////////////////////////////////////////////////////////////////////");

for (let artigo of almacen){
  if(artigo.enStock && artigo.prezo>=3){
    console.log(artigo.nome);
  }
}

console.log("///////////////////////////////////////////////////////////////////////");

for (let i in almacen){
  if(almacen[i].enStock && almacen[i].prezo>=3){
    console.log(almacen[i].nome);
  }
}

console.log("///////////////////////////////////////////////////////////////////////");

for(let i=0;i<almacen.length;i++){
    if(almacen[i].enStock && almacen[i].prezo>=3){
        console.log(almacen[i].nome);
    }
}

console.log("///////////////////////////////////////////////////////////////////////");*/

//Queremos os nomes de todos os artigos con prezo mayor igual a 2 euros e da categoria bebidas o lacteos


/*for (let artigo of almacen){
  if((artigo.categoria=="Bebidas" || artigo.categoria=="Lácteos") && artigo.prezo>=2){
    console.log(artigo.nome + " " + artigo.categoria + " " + artigo.prezo);
  }
}

console.log("///////////////////////////////////////////////////////////////////////");

for (let i in almacen){
  if((almacen[i].categoria=="Bebidas" || almacen[i].categoria=="Lácteos") && almacen[i].prezo>=2){
    console.log(almacen[i].nome + " " + almacen[i].categoria + " " + almacen[i].prezo);
  }
}

console.log("///////////////////////////////////////////////////////////////////////");

for(let i=0;i<almacen.length;i++){
    if((almacen[i].categoria=="Bebidas" || almacen[i].categoria=="Lácteos") && almacen[i].prezo>=2){
        console.log(almacen[i].nome + " " + almacen[i].categoria + " " + almacen[i].prezo);
    }
}*/

//Array de productos da categoria hixene

/*let hixeneArr=[];
let hixeneArrIndex=0;
for(let i=0;i<almacen.length;i++){
    if(almacen[i].categoria=="Hixiene"){
        hixeneArr[hixeneArrIndex]=almacen[i];
        hixeneArrIndex++;
    }
}

console.log(hixeneArr);

console.log("///////////////////////////////////////////////////////////////////////");

let hixeneArr2=[];
for(let artigo of almacen){
    if(artigo.categoria=="Hixiene"){
        hixeneArr2.push(artigo);
    }
}

console.log(hixeneArr);*/

//Eliminar do almacen os artigos que non estan no stock


/*for(let artigo in almacen){
    if(!artigo.enStock){
        almacen.splice(artigo,1);
    }
}

console.log(almacen);*/


let idades= [0,1,2,3,4,19,29,35,50,51,60,70,34,42];
//console.log(idades.splice(2,3,27,16));
//console.log(idades);

/*Queremos perocorrer o array e separar en dous arrays novos
(adultos e menores) os valores do array orixinal conservando a sua orde*/

let adultos=[];
let menores=[];
/*for(idade of idades){
  if(idade>=18){
    adultos.push(idade);
  }else{
    menores.push(idade);
  }
}
 console.log(menores);
 console.log(adultos);*/

/*Queremos perocorrer o array e eliminar os menores*/

/*for(let i=0; i<=idades.length;i++){
   if(idades[i]<18){
     console.log(idades[i]);
    idades.splice(idades[i],1);
}
}

console.log(idades);

let idades= [0,1,2,3,4,19,29,35,50,51,42,60,70,34,42];
//console.log(idades.splice(2,3,27,16));
//console.log(idades);

/*Queremos perocorrer o array e separar en dous arrays novos
(adultos e menores) os valores do array orixinal conservando a sua orde*/

/*let adultos=[];
let menores=[];*/

for(idade of idades){
  if(idade>=18){
    adultos.push(idade);
  }else{
    menores.push(idade);
  }
}
 console.log(menores);
 console.log(adultos);

//Queremos perocorrer o array e eliminar os menores

for(let i=0; i<idades.length;i++){
   if(idades[i]<18){
    idades.splice(i,1);
     i--;
}
}

console.log(idades);

let obxectos=[
  {
    nome:"Pepe"
  }
]

console.log(obxectos.includes({ nome: "Pepe"}));

//"indexOf" devolve a primeira posición do array que coincida co valor indicado
console.log(idades.indexOf(42));

//"indexOf" devolve a primeira posición do array que coincida co valor indicado
console.log(idades.lastIndexOf(42));


//toString
console.log(idades.toString());


//join
console.log(idades.join('/' ));

//sort
idades.sort();
console.log(idades);


//reverse
idades.reverse();
console.log(idades);

//string
let texto= "Ola mundo! Este texto é unha proba.";

console.log(texto.substr(2,8));
console.log(texto.substring(2,8));
console.log(texto.slice(2,8));
console.log(texto.split(""));
console.log(texto.split(" "));
console.log(texto.split("!"));
console.log(texto.split("a"));

//Date
let data1= new Date("2025-10-06");
let data2= new Date("2025-10-07");
console.log(data1==data2);
let data3= new Date("2025-10-16");
let data4= new Date("2025-11-24");
let data5= new Date("1970-01-01");
console.log((data4-data3));
console.log(data5.getTime());

//Number

let x =8/"a";

console.log(x);
console.log(typeof x);
console.log(isNaN(x));

let y=8/0;

console.log(y);
console.log(typeof y);
console.log(y == "Infinity");

let z=8/2;

console.log(z);
console.log(typeof z);
console.log(isNaN(z));
console.log(Number.isInteger(z));
console.log(isFinite(z));

let a = new Number("ert");
console.log(typeof a.valueOf());

let b = parseInt(234.988);
console.log(b);

//Math

let aleatorio= Math.random();

//Error

let novoErro= new Error("División entre 0");
let resultado= 5/2;


try{
if(!isFinite(resultado)){
  throw novoErro;
  }else{
    console.log(resultado);
  }
}catch (erro){
  console.error(erro.message);
}finally{
  console.log("Ola mundo!");
}



//Funciones


//Funciones anónimas
function suma (a,b){
  return a+b;
}

let suma2= function (a,b){
  return a+b;
}

console.log(suma(2,3));
console.log(suma2(2,3));

let cousa= suma2;
console.log(cousa(2,3));


//Función flecha

let suma3= (a,b) => a+b;

console.log(suma3(2,3));//5

//Arguments

function suma (a,b){
  let resultado= 0;
  for (let i=0; i<arguments.length;i++){
    resultado+= arguments[i];
  }
  return resultado;
}

console.log(suma(30,40,50));


function suma (...numeros){
  let resultado= 0;
  for (let i=0; i<numeros.length;i++){
    resultado+= numeros[i];
  }
  return resultado;
}

console.log(suma(30,40,50));


function suma (a,b,...numeros){
  let resultado= 0;
  for (let i=0; i<numeros.length;i++){
    resultado+= numeros[i];
  }
  return resultado;
}

console.log(suma(30,40,50));