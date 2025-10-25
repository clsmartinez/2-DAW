// EXEMPLO 01: DECLARACIÓN DE VARIABLES E INTRODUCIÓN AOS ÁMBITOS

// Declaramos unha variable global
let x = "x: variable de ámbito global";

// Esta función vainos permitir probar os distintos ámbitos das variables
function probarVariables() {
  
  console.log(x); // Funciona porque a variable é de ámbito global e, polo tanto, accesible dende calquera ámbito
  
  //Declaramos unha variable global dende dentro dun bloque
  if (true) {
    y = "y: variable de ámbito global";
  }
  
  console.log(y); // Funciona porque a variable é de ámbito global e, polo tanto, accesible dende calquera ámbito

  // Declaramos unha variable de bloque dende dentro dun bloque
  if (true) {
    let z = "z: variable de ámbito de bloque";
  }
  
  // console.log(z); // Non funciona porque a variable é de ámbito de bloque e non pode ser accedida dende un ámbito superior
  
  // Declaramos unha variable de ámbito do nivel directamente superior (función)
  if (true) {
    var w = "w: variable de ámbito";
  }
  
  console.log(w); // Funciona porque a variable é do propio ámbito dende o que se accede (función)
}

probarVariables();

console.log(y);
// console.log(w); // Non funciona porque a variable é de ámbito de función e non pode ser accedida dende un nivel superior
console.log(x);