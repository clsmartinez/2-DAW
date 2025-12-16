let numeroSecreto= Math.floor(Math.random()*10+1);
console.log(numeroSecreto);

let intentos=3;

let numero;

while(intentos>0){
  numero=parseInt(prompt("Adiviña o número entre 1 e 10"));
  if(numero==numeroSecreto){
    console.log("Acertaches");
    intentos=0;
  }else{
    intentos--;
    if(intentos>0){
    console.log("Fallaches! Quedanche " + intentos + " intentos.");
    }else{
    console.log("Agotaches intentos.Has perdido.");
    }
  }
}
