<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_Ejercicio2</title>
</head>
<body>
    <?php
    
           $participantes = [
           'Antía', 'Xoel', 'Sabela', 'Breixo',
           'Iria', 'Anxo', 'Noa', 'Brais'
       ];
       shuffle($participantes);
       $rolda1=array_chunk($participantes,2);

       echo "<h1>Ronda 1:</h1>";

       for($i=0;$i<count($rolda1);$i++){
        echo "<p>Enfrontamento ". ($i +1). ":". $rolda1[$i][0]. " vs. ". $rolda1[$i][1]."</p>";
       }

       echo "<h1>Ampliación:</h1>";

        $participantesImpares = [
           'Antía', 'Xoel', 'Sabela', 'Breixo',
           'Iria', 'Anxo', 'Noa'
       ];

        shuffle($participantesImpares);

        if (count($participantesImpares) % 2 != 0) {
            $indiceAleatorio = array_rand($participantesImpares, 1);
            $pasaRonda = $participantesImpares[$indiceAleatorio];
            echo "<h4>$pasaRonda pasa directamente á seguinte rolda!</h4>";

            unset($participantesImpares[$indiceAleatorio]);
        }

        $rolda2 = array_chunk($participantesImpares, 2);

        echo "<h1>Ronda 2:</h1>";
        for ($i = 0; $i < count($rolda2); $i++) {
            echo "<p>Enfrontamento " . ($i + 1) . ": " . $rolda2[$i][0] . " vs. " . $rolda2[$i][1] . "</p>";
        }



    ?>
</body>
</html>