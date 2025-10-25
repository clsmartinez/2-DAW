// Determinar o día da semana

let dia = new Date().getDay();
let nomeDia;

switch (dia) {
    case 0:
        nomeDia = "Domingo";
        break;
    case 1:
        nomeDia = "Luns";
        break;
    case 2:
        nomeDia = "Martes";
        break;
    case 3:
        nomeDia = "Mércores";
        break;
    case 4:
        nomeDia = "Xoves";
        break;
    case 5:
        nomeDia = "Venres";
        break;
    case 6:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Día descoñecido";
}

console.log("Hoxe é: " + nomeDia);

// Determinar o tipo de usuario nun sistema

let rolUsuario = "editor"; // pode ser: admin, editor, visitante, invitado

switch (rolUsuario) {
    case "admin":
        console.log("Tes acceso total ao sistema.");
        break;
    case "editor":
        console.log("Podes crear e modificar contido.");
        break;
    case "visitante":
    case "invitado":
        console.log("Tes acceso limitado. Por favor inicia sesión.");
        break;
    default:
        console.log("Rol de usuario descoñecido.");
}

// Simulación dun menú de aplicación

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Gardando datos...");
    // Non hai break → fall-through
    case 2:
        console.log("Datos gardados correctamente.");
    // Non hai break → fall-through
    case 3:
        console.log("Peche da aplicación.");
        break;
    default:
        console.log("Opción non válida.");
}

/*
RESULTADO SE opcion = 2:
Datos gardados correctamente.
Peche da aplicación.
*/

/* Estrutura switch-case para avaliación de intervalos */
let idade = -6;

switch (true) {
    case (idade >= 0 && idade <= 14):
        console.log("Infancia");
        break;
    case (idade > 14 && idade < 18):
        console.log("Adolescencia");
        break;
    case (idade > 18 && idade < 60):
        console.log("Adultez");
        break;
    case (idade > 60):
        console.log("Terceira idade");
        break;
    default:
        console.log("A idade non pode ter un valor negativo");
}