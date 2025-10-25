<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <title>Tarefa 1 - Arrays en PHP</title>
</head>
<body>
<?php
    // Array indexado
    $frutas = array("Mazá", "Laranxa", "Plátano", "Uva");
    echo "<h3>Array indexado</h3>";
    echo "Elemento 2: " . $frutas[1] . "<br>"; // Laranxa
    echo "Número de elementos: " . count($frutas) . "<br><br>";

    // Array asociativo
    $edades = array("Ana"=>20, "Brais"=>22, "Carlos"=>19);
    echo "<h3>Array asociativo</h3>";
    echo "Idade de Brais: " . $edades["Brais"] . "<br>";
    echo "Número de elementos: " . count($edades) . "<br><br>";

    // Array multidimensional
    $alumnos = array(
        array("Carlos", 7.5, "DAW"),
        array("Marta", 8.2, "DAM"),
        array("Lucía", 9.1, "ASIR")
    );
    echo "<h3>Array multidimensional</h3>";
    echo "Nome da segunda alumna: " . $alumnos[1][0] . "<br>"; // Marta
    echo "Número de alumnos: " . count($alumnos) . "<br>";
?>
</body>
</html>
