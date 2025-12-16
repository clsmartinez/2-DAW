let nome= document.getElementById("nome");
let apelidos= document.getElementById("apelidos");

let persoa={
    nome: "Perico",
    apelidos:"De los palotes"
};

nome.value=persoa.nome;
apelidos.value=persoa.apelidos;
console.log(nome.value);