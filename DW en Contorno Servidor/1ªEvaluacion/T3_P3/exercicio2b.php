<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_Exercicio2B</title>
</head>
<body>
    <?php
    
    $palos = ["Oros", "Copas", "Espadas", "Bastos"];
    $valores = [1,2,3,4,5,6,7,10,11,12];
    $baralla = [];
    for ($p = 0; $p < count($palos); $p++) {
        for ($v = 0; $v < count($valores); $v++) {
            $baralla[] = $valores[$v] . " de " . $palos[$p];
        }
    }


    echo "<h2>Baralla ordenada (40 cartas)</h2>";
    echo '<div class="grid">';
    for ($i = 0; $i < count($baralla); $i++) {
        echo '<div class="card">' . $baralla[$i] . '</div>';
    }
    echo '</div>';

    $n = count($baralla);
    for ($i = $n - 1; $i > 0; $i--) {
        $j = rand(0, $i);
        $temp = $baralla[$i];
        $baralla[$i] = $baralla[$j];
        $baralla[$j] = $temp;
    }

    echo "<h2>Baralla barallada</h2>";
    echo '<div class="grid">';
    for ($i = 0; $i < count($baralla); $i++) {
        echo '<div class="card">' . $baralla[$i] . '</div>';
    }
    echo '</div>';
    ?>
</body>
</html>