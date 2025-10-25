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
    { nome: "Polo (peito sen óso, 1kg)", categoria: "Congelados", prezo: 5.99, enStock: true },
    { nome: "Patacas (5kg)", categoria: "Frescos", prezo: 3.20, enStock: true },
    { nome: "Chocolate negro (100g)", categoria: "Golosinas", prezo: 1.75, enStock: true },
    { nome: "Papel hixiénico (12 rolos)", categoria: "Hixiene", prezo: 8.50, enStock: true },
    { nome: "Atún en lata", categoria: "Conservas", prezo: 1.40, enStock: true },
    { nome: "Xabón líquido para as mans", categoria: "Hixiene", prezo: 3.25, enStock: true },
    { nome: "Macarróns (500g)", categoria: "Almacén", prezo: 0.85, enStock: true },
    { nome: "Queixo curado (200g)", categoria: "Lácteos", prezo: 3.90, enStock: true },
    { nome: "Refresco de cola (2L)", categoria: "Bebidas", prezo: 1.95, enStock: true }
];

let corpoTaboa = document.getElementById("corpoTaboa");

//Percorremos cada elemento con un forEach
almacen.forEach((elemento) => {
    let fila = document.createElement("tr");
    let celdaNome = document.createElement("td");
    celdaNome.textContent = elemento.nome;
    fila.appendChild(celdaNome);

    let celdaCategoria = document.createElement("td");
    celdaCategoria.textContent = elemento.categoria;
    fila.appendChild(celdaCategoria);

    let celdaPrezo = document.createElement("td");
    celdaPrezo.textContent = (elemento.prezo + " €").replace(".",",");
    fila.appendChild(celdaPrezo);

    let celdaStock = document.createElement("td");
    celdaStock.textContent = (elemento.enStock) ? "Dispoñible":"Non Dispoñible";
    fila.appendChild(celdaStock);

    corpoTaboa.appendChild(fila);//Engadir a fila ao corpo da táboa
});