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



//1. Posicion do primeiro artigo en stock

function enStock(articulo){
    return articulo.enStock;
}
//console.log(almacen.findIndex(enStock));

//2. Queremos un array con todos os articulos de Hixiene cun prezo maior que 3 euros

function atoparArtigos(artigo){
    return artigo.prezo>=3 && artigo.categoria==="Hixiene";
}

let nuevoArray=almacen.filter(atoparArtigos);

//console.log(nuevoArray);

//3.Queremos un novo array con datos da forma : nome artigo- prezo€

function artigosConForma(artigo){
    return artigo.nome +" - "+artigo.prezo+ "€";
}

let novoArray2=almacen.map(artigosConForma);

//console.log(novoArray2);

//4.Queremos a suma dos prezos dos artigos lácteos

function sumaLacteos(total,artigo){
    if(artigo.categoria=="Lácteos"){
        return total + artigo.prezo;
}else{
    return total + 0;
}
}
//console.log(almacen.reduce(sumaLacteos,0));

//Queremos o artigo máis caro da categoría "Bebidas"

function bebidas(artigo){
    return artigo.categoria=="Bebidas";
}
function masCaro(artigoA,artigoB){
    return artigoB.prezo-artigoA.prezo;
}

//console.log(almacen.filter(bebidas).sort(masCaro)[0]);


//Segunda solución

function compararPrezos(anterior,actual){
    return (actual.prezo > anterior.prezo) ? actual: anterior;
}

//console.log(almacen.filter(bebidas).reduce(compararPrezos));


// 7/10/2025
//Queremos un script que solicite dos numeros (un detras do outro)
//controle se son numeros calcule a divison de ambos (1/2)
// controle se son infinitos e amose o resultado en consola se non o é
let numero1= NaN;
let numero2= NaN;

/*while(isNaN(numero1)){
numero1= prompt("Introduce o primeiro numero:");
}
while(isNaN(numero2)){
numero2= prompt("Introduce o segundo numero:");
}*/

let resultado=numero1/numero2;

/*if(isFinite(resultado)){
    console.log(resultado);
}else{
    console.log("O numero é infinito.")
}*/

//Queremos todos os artigos da categoría "Congelados"

console.log(almacen.filter((artigo) => artigo.categoria=="Congelados"));