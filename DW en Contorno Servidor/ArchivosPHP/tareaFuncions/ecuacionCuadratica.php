<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_EJ2</title>
</head>
<body>

    <form action="" method="post">
    <label for="a">Introduce o número a:</label><br>
    <input type="number" id="a" name="a"><br>
    <label for="b">Introduce o número b:</label><br>
    <input type="number" id="b" name="b"><br>
    <label for="c">Introduce o número c:</label><br>
    <input type="number" id="c" name="c"><br>
    <button type="submit">Enviar</button>
    </form>

    <?php

    function calcularEcuacion($a,$b,$c){
         $discriminante = ($b ** 2) - (4 * $a * $c);//Tiven que comprobar esto porque se non as veces da NaN

    if ($discriminante < 0) {
        return "Non hai solucións reais (o discriminante é negativo).";
    } elseif ($a == 0) {
        return "O coeficiente 'a' non pode ser 0 nunha ecuación cuadrática.";
    } else {
        $calculoUn=(-$b+sqrt(($b**2)-4*($a*$c)))/(2*$a);
        $calculoDous=(-$b-sqrt(($b**2)-4*($a*$c)))/(2*$a);
        return [$calculoUn,$calculoDous];
    }
}
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $a = (float)$_POST['a'];
        $b = (float)$_POST['b'];
        $c = (float)$_POST['c'];
        $resultadosPersonalizados=calcularEcuacion($a,$b,$c);
        
        if(is_array($resultadosPersonalizados)){
             echo "<p> O primer resultado é: $resultadosPersonalizados[0]";
             echo "<p> O segundo resultado é: $resultadosPersonalizados[1]";
        }else{
            echo "<p>$resultadosPersonalizados</p>";
        }
    }
    ?>
</body>
</html>