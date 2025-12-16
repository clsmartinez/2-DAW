<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_E6</title>
</head>
<body>
    <?php
    $cantidade_primos_a_atopar = 10;

    $primos_atopados = [];
    $numero_actual = 2;

    while (count($primos_atopados) < $cantidade_primos_a_atopar) {
        $e_primo = true;
        for ($i = 2; $i <= $numero_actual / 2; $i++) {
            if ($numero_actual % $i === 0) {
                $e_primo = false; 
                break;
            }
        }

        if ($e_primo) {
            $primos_atopados[] = $numero_actual;
        }
        $numero_actual++;
    }
    echo "<h2>Os primeiros $cantidade_primos_a_atopar números primos son:</h2>";
    echo "<ul>";
    foreach ($primos_atopados as $primo) {
        echo "<li>$primo</li>";
    }
    echo "</ul>";
    ?>
</body>
</html>
