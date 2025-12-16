<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_EJ3</title>
</head>
<body>
    <table style="border:2px solid black;">
    <?php
    $numeros=[1,2,3,4,5,6,7,8,9,10];

    function ePrimo($numero){
        if ($numero <= 1) { // O un non se considera primo
        return false;
    }

    for ($i = 2; $i < $numero; $i++) {
        if ($numero % $i == 0) {
            return false; 
        }
    }
    return true; 
    }


    echo "<tr>";

   foreach($numeros as $numero){;
        echo "<th>$numero</th>";
    }
        echo "</tr>";
        echo "<tr>";

    foreach($numeros as $numero){
        if($numero%2===0){
            echo "<td>O numero é par</td>";
        }else{
            echo "<td>O numero é impar</td>";
        }
    }

    echo "</tr>";
    echo "<tr>";

    foreach($numeros as $numero){
        if(ePrimo($numero)){
            echo "<td>O numero é primo</td>";
        }else{
            echo "<td>O numero non é primo</td>";

        }
    }
    echo "</tr>";
    ?>
    </table>
</body>
</html>