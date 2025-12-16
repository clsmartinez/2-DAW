//Exemplo 01: Declaración de variables e introdución aos ámbitos

//Declaramos variable global
let x= "Variable de ámbito global";
//Para probar ámbitos das variables
function probarVariables(){

  console.log(x); //Esto funciona porque a variable é de ámbito global (accesible desde todos os sitios)
  

  if(true){
    y="Ola mundo(y)!"
  }
  console.log(y);//Esto funciona porque a variable é de ámbito global (accesible desde todos os sitios)
  

  if(true){
    let z ="Ola mundo!(z)"
  }
 // console.log(z);//Esto non funciona porque a variable é de ámbito local
  
  

  if(true){
     var w="Ola mundo(w)!"
  }
  console.log(w);//Esto funciona porque a variable é de ámbito local accesible desde el directamente superior
 
}



probarVariables();

  console.log(y);//Esto funciona porque a variable é de ámbito global (accesible desde todos os sitios)
 // console.log(w); Non funciona porque de ambito de función é non pode ser accedida desde un ámbito superior