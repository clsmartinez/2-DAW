<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $usuario="carlosml";
    print "Benvido, $usuario";
    $rutaFicheiro='C:\xampp\htdocs\daw\index.php';
    $heredoc = <<<CADEAA
        <p>O ficheiro atópase na seguinte ruta:</p>
        <p>$rutaFicheiro</p>
        <p>O prezo final é de 50$.</p>
        CADEAA;
    print("$heredoc") 
    ?>
</body>
</html>