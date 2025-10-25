let opcion = 1;

do {
    // Amosamos as opcións dispoñibles
    console.log("=== Menú ===");
    console.log("1. Novo xogo");
    console.log("2. Configuración");
    console.log("3. Axuda");
    console.log("4. Sair");

    // Simulamos a elección do usuario (pódese cambiar este valor)
    opcion = 4;

    // Tratamos a opción seleccionada
    switch (opcion) {
        case 1:
            console.log("Iniciando novo xogo...");
            break;
        case 2:
            console.log("Accedendo a configuración...");
            break;
        case 3:
            console.log("Amosando axuda...");
            break;
        case 4:
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opción non válida. Por favor, escolla entre 1 e 4.");
    }
} while (opcion !== 4);

console.log("FIN");