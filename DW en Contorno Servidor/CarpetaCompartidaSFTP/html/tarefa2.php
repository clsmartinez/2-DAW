/* Este script 
calcula o prezo final dun produto aplicando o IVE. */

<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <title>Tarefa 2: A Calculadora da cesta da compra</title>
</head>
<body>
    <?php

        $prezo_unidade = 25; //Prezo da unidade do producto
        $cantidade = 4;//Cantidade do producto
        $subtotal = $prezo_unidade * $cantidade; //Subtotal sin IVA
        $taxa_ive = 0.21; //Tasa do IVA
        $ive_calculado = $subtotal * $taxa_ive; //Calculamos o IVA sobre o prezo
        $total = $subtotal + $ive_calculado; //Calculamos prezo total

        echo "Prezo por unidade: " . $prezo_unidade . " €<br>";
        echo "Cantidade: " . $cantidade . "<br>";
        echo "Subtotal: " . $subtotal . " €<br>";
        echo "IVE (21%): " . $ive_calculado . " €<br>";
        echo "Total a pagar: " . $total . " €"; 

    ?>
</body>
</html>
