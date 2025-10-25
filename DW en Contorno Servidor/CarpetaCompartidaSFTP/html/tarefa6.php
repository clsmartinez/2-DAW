<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     
    <?php 
    echo "<ol>";
        $productos=["Portatil","Camara","Procesador","Ratón","Disco Duro"];

        foreach($productos as $producto){
            echo "<li>$producto</li>";
        }
        echo "</ol>";
    ?>
    
</body>
</html>