let engadir=document.getElementById("engadir");
let titulo=document.getElementById("titulo");
let autor=document.getElementById("autor");
let formulario=document.getElementById("formulario");

let libros=[];


engadir.addEventListener("click",(evento)=>{
    evento.preventDefault();
    let libro={
        titulo:titulo.value,
        autor:autor.value
    }
    libros.unshift(libro);

    sessionStorage.setItem("libros",JSON.stringify(libros));

    formulario.reset();

});

