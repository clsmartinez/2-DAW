<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_E5</title>
</head>
<body>
    <?php
    $datos_vendas = ["Xaneiro" => 150, "Febreiro" => 220, "Marzo" => 180, "Abril" => 90];
    $valor_obxectivo = 175;

    foreach($datos_vendas as $mes => $valor){
        echo '<div style="margin-bottom: 10px;">';
        echo "<strong>$mes:</strong>";
        if ($valor>$valor_obxectivo){
          echo '<div style="width:'.$valor.'px; background-color: lightgreen; color: white; padding: 5px;">'.$valor.'</div>';
        }else{
        echo '<div style="width:'.$valor.'px; background-color: lightsalmon; color: white; padding: 5px;">'.$valor.'</div>';
        }
    }
    echo "</div>"
    ?>
</body>
</html>