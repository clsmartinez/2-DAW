<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_Exercicio1</title>
</head>
<body>
    <?php
    $personas =["Carlos","Martínez","López"]; //matriz indexeada
    $artistas = ['musica' => 'Michael Jackson', 'pintura'=> 'Picasso']; //matriz asociativa
    $notas=[                            //matriz multidimensional
        [10,10,9],
        [9,9,9,8],
        [1,2,7,8],
        [9,6,7,9]
    ];

    echo "<p>$personas[0]" ." Hai: " . count($personas) . " elementos neste array.</p>";
    echo "<p>{$artistas["musica"]}"." Hai: " . count($artistas) . " elementos neste array.</p>" ;
    echo "<p>{$notas[0][1]}"." Hai: " . count($notas) . " elementos neste array.</p>";
    ?>
</body>
</html>