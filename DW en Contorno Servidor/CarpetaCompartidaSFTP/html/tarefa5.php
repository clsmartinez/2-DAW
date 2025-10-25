<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
    $contador=1;

    for($i;$i<=6;$i++){
        print "<h{$i}>CURSO DE PHP</h{$i}>";
    }

    while ($contador<=6) {
        print "<h{$contador}>CURSO DE PHP</h{$contador}>";
        $contador++;
    }
    ?>
</body>
</html>