<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_EJ1</title>
</head>
<body>
    <form action="" method="post">
    <label for="numero">Introduce un número:</label>
    <input type="number" id="numero" name="numero">
    <button type="submit">Enviar</button>
    </form>

    <?php

    function multiplos($numero,$multiplo){
        $multiplos=[];
        for($i=1;$i<$numero;$i++){
            if($i%$multiplo==0){
                array_push($multiplos,$i);
            }
        }
        return $multiplos;
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero_ingresado = (float)$_POST['numero'];
        $multiplosNumero2=multiplos($numero_ingresado,2);
        $multiplosNumero3=multiplos($numero_ingresado,3);
        $multiplosNumero4=multiplos($numero_ingresado,4);

        echo "<h1>Os multiplos de 2 son:</h1>";

        foreach($multiplosNumero2 as $multiplo){
            echo "<p>$multiplo</p>";
        }

        echo "<h1>Os multiplos de 3 son:</h1>";

        foreach($multiplosNumero3 as $multiplo){
            echo "<p>$multiplo</p>";
        }

        echo "<h1>Os multiplos de 4 son:</h1>";

        foreach($multiplosNumero4 as $multiplo){
            echo "<p>$multiplo</p>";
        }

    }
    ?>


</body>
</html>