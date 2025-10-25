// Crear unha instancia da data actual
let dataActual = new Date();
console.log("Data actual: " + dataActual);

// Obter partes da data e hora
console.log("Ano: " + dataActual.getFullYear());
console.log("Mes (0-11): " + dataActual.getMonth()); // Xaneiro é 0
console.log("Día do mes: " + dataActual.getDate());
console.log("Día da semana (0-6): " + dataActual.getDay()); // Domingo é 0
console.log("Horas: " + dataActual.getHours());
console.log("Minutos: " + dataActual.getMinutes());
console.log("Segundos: " + dataActual.getSeconds());

// Formatear manualmente a data
let meses = [
    "Xaneiro",
    "Febreiro",
    "Marzo",
    "Abril",
    "Maio",
    "Xuño",
    "Xullo",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Decembro"
];

let diaSemana = [
    "Domingo",
    "Luns",
    "Martes",
    "Mércores",
    "Xoves",
    "Venres",
    "Sábado"
];

let ano = dataActual.getFullYear();
let mes = dataActual.getMonth();
let dia = dataActual.getDate();
let diaDaSemana = dataActual.getDay();

console.log(`Hoxe é ${diaSemana[diaDaSemana]}, ${dia} de ${meses[mes]} de ${ano}`);

// 4. Establecer unha data específica
let dataPersonalizada = new Date(2025, 5, 15, 10, 30, 0); // 15/06/2025 10:30:00
console.log("Data personalizada: " + dataPersonalizada);

// 5. Comparación entre datas
let data1 = new Date("2024-01-01");
let data2 = new Date("2024-01-02");

console.log("data1 é anterior a data2? " + data1 < data2);