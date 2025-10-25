// Exemplo 1: Sen parénteses
let resultado1 = 3 + 4 * 2;
console.log("Exemplo 1: " + resultado1); // 3 + (4*2) = 11

// Exemplo 2: Con parénteses
let resultado2 = (3 + 4) * 2;
console.log("Exemplo 2: " + resultado2); // (7) * 2 = 14

// Exemplo 3: Potencias encadeadas
let resultado3 = 2 ** 3 ** 2;
console.log("Exemplo 3: " + resultado3); // 2 ** (3**2) = 2**9 = 512

// Exemplo 4: Operación combinada coas súas etapas
let resultado4 = 3 + 4 * 2 / (1 - 5) ** 2 ** 3;

/*
Paso a paso:
1. 2 ** 3 = 8
2. (1 - 5) = -4
3. (-4) ** 8 = 65536
4. 4 * 2 = 8
5. 8 / 65536 ≈ 0.00012207
6. 3 + 0.00012207 ≈ 3.00012207
*/

console.log("Exemplo 4: " + resultado4);

// Exemplo 5: Comparación e lóxica
let resultado5 = 5 > 3 && 2 + 4 == "6";
console.log("Exemplo 5: " + resultado5);
// Paso a paso:
// 5 > 3 → true
// 2 + 4 → 6
// 6 == "6" → true
// true && true → true

// Exemplo 6: Asignación con operador
let x = 10;
x += 5 * 2; // Primeiro 5 * 2 = 10, logo x += 10 → x = 20
console.log("Exemplo 6: " + x);

// Exemplo 7: Acceso a membros e operadores unarios
let arr = [1, 2, 3];
let index = 1;
let valor = arr[++index]; // Incrementa index primeiro → index = 2 → arr[2] = 3
console.log("Exemplo 7: " + valor); // 3