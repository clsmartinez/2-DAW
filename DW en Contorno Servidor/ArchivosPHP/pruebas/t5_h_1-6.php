<?php
// exemplo.php
$numeros = [10, 20, 30, 40, 50];
$suma = 0;

// Erro común: o bucle execútase unha vez de máis (o índice chega a 5)
for ($i = 0; $i < count($numeros); $i++) {
    // Imos poñer aquí un punto de interrupción
    $suma += $numeros[$i];
    echo "Suma parcial na iteración $i: $suma <br>";
}

echo "<h2>A suma total (incorrecta) é: $suma</h2>";
?>