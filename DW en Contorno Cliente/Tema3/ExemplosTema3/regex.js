let codPostal="15570";
let regex=/^((0[1-9])|([1-4][0-9])|(5[0-2]))[0-9]{3}$/;
console.log(regex.test(codPostal));

let nomeUsuario="hola";
let regexNomeCorreo=/^[a-z][az.-_0-9]{2,}[a-z0-9][@]/;

let dominio="@gmail.com";
let regexDominio=/[.][a-z]{2,5}$/;

let correo= nomeUsuario+dominio;
let regexCorreo=/^[a-z][a-z0-9._-]{2,}[a-z0-9][@][a-z][a-z0-9-._-]{2,}[a-z0-9][.][a-z]{2,5}$/;

let fecha="24/11/2005";
let regexData=/^(0[1-9][1-9])|([1-2][0-9])|(3[0-1])$/;/*Sin acabar*/
