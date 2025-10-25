<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentación de modulo</title>
</head>
<body>
    <?php 
    $nomeModulo="Desenvolvemento Web en Contorno Servidor";
    $curso=2;
    $horasSemanais=8;
    $cicloFormativo="DAW";
    
    printf("O módulo <b>%s</b>,
     que pertence ao ciclo <b>%s</b>, impártese no curso %d e 
     ten unha carga de %.2f horas semanais."
     ,$nomeModulo,$cicloFormativo,$curso,$horasSemanais)
    ?>
</body>
</html>