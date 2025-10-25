<?php
$filas = 20;
$columnas = 20;
$minas = 10;

// Crear matriz baleira
$campo = array();
for ($i=0; $i<$filas; $i++) {
    for ($j=0; $j<$columnas; $j++) {
        $campo[$i][$j] = ".";
    }
}

// Colocar minas ao azar
$colocadas = 0;
while ($colocadas < $minas) {
    $x = rand(0, $filas-1);
    $y = rand(0, $columnas-1);
    if ($campo[$x][$y] == ".") {
        $campo[$x][$y] = "*";
        $colocadas++;
    }
}

// Mostrar campo
echo "<h3>Campo de minas</h3>";
for ($i=0; $i<$filas; $i++) {
    for ($j=0; $j<$columnas; $j++) {
        echo $campo[$i][$j] . " ";
    }
    echo "<br>";
}
?>
