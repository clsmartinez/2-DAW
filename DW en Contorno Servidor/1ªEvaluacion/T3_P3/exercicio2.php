<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_Exercicio2</title>
</head>
<body>
    <?php
    $cuadricula = [];
    for ($i = 0; $i < 20; $i++) {
        for ($j = 0; $j < 20; $j++) {
            $cuadricula[$i][$j] = ".";
        }
    }

    $contador = 0;
    while ($contador < 10) {
        $fila = rand(0, 19);
        $columna = rand(0, 19);
        if ($cuadricula[$fila][$columna] === ".") {
            $cuadricula[$fila][$columna] = "*";
            $contador++;
        }
    }

  
    for ($i = 0; $i < 20; $i++) {
        for ($j = 0; $j < 20; $j++) {
            echo $cuadricula[$i][$j] . " ";
        }
        echo "<br>";
    }
    ?>
</body>
</html>
