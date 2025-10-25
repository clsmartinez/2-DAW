//Iniciamos variables necesarias para crear e rechear os arrays
let cualificacions = [];
let numeroNotas = 100;
let sobresaintes = [];
let notables = [];
let aprobados = [];
let suspensos = [];


for (let i = 0; i < numeroNotas; i++) {
    cualificacions[i] = parseFloat((Math.random() * 10).toFixed(2)); //Creamos una nova nota do 1 ao 10 no array e asignamoslles dos decimais.
}

console.log("As calificacions son:")
console.log(cualificacions);

for (nota of cualificacions) { //Dividimos as notas en diferentes arrays co método .push
    if (nota >= 9) {
        sobresaintes.push(nota);
    } else if (nota < 9 && nota >= 7) {
        notables.push(nota);
    } else if (nota < 7 && nota >= 5) {
        aprobados.push(nota);
    } else {
        suspensos.push(nota);
    }
}


let totalCategorias = { //Facemos un array que garde as categorias e o numero de notas respectivas a cada unha.
    sobresaintes: sobresaintes.length,
    notables: notables.length,
    aprobados: aprobados.length,
    suspensos: suspensos.length
};

console.log("Os resultados quedarían repartidos en:");
console.log(totalCategorias);


function media(numeros) { //Facemos una función que calcule a media dos numeros gardados nun array e devolva o resultado (a media)
    let resultado = 0; //Aqui acumulamos a media
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i]; //Acumulamos
    }
    resultado = parseFloat((resultado / numeros.length).toFixed(2)); //Calculamos a media e poñemos con decimais.
    return resultado;
}

//Calculamos a media de cada categoría aplicandolle a función creada
let mediaSobresaintes = media(sobresaintes);
let mediaNotables = media(notables);
let mediaAprobados = media(aprobados);
let mediaSuspensos = media(suspensos);


//Calculamos o porcentaxe de cada categoría
let porcentaxeSobresaintes = (sobresaintes.length / 100) * 100;
let porcentaxeNotables = (notables.length / 100) * 100;
let porcentaxeAprobados = (aprobados.length / 100) * 100;
let porcentaxeSuspensos = (suspensos.length / 100) * 100;

//Gardamos nun array todas as estadisticas calculadas de cada categoría
let estatisticas = {
    sobresaintes: {
        media: mediaSobresaintes,
        porcentaxe: porcentaxeSobresaintes
    },
    notables: {
        media: mediaNotables,
        porcentaxe: porcentaxeNotables
    },
    aprobados: {
        media: mediaAprobados,
        porcentaxe: porcentaxeAprobados
    },
    suspensos: {
        media: mediaSuspensos,
        porcentaxe: porcentaxeSuspensos
    }
};

console.log("As estatisticas totales das calificacions son:")
console.log(estatisticas);