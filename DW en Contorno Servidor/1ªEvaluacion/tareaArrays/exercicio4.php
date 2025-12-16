<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_E4</title>
</head>
<body>
    <?php
    $usuarios=[
        ["nome"=> "Carlos", "email" => "carlos@gmail.com", "activo"=> true, "subscrito_newsletter" => true],
        ["nome"=> "Ana", "email" => "ana@gmail.com", "activo"=> true, "subscrito_newsletter" => true],
        ["nome"=> "Adrian", "email" => "adrian@gmail.com", "activo"=> false, "subscrito_newsletter" => true],
        ["nome"=> "Hugo", "email" => "hugo@gmail.com", "activo"=> false, "subscrito_newsletter" => false]
    ];
    $destinatarios=[];

    foreach($usuarios as $usuario){
        if(!$usuario['activo']|| !$usuario['subscrito_newsletter'] ){
            continue;
        }else{
            $destinatarios[]=$usuario["nome"];
        }
    }
    
    echo '<h3>Procesando lista de usuarios...</h3>';
    echo "<h2>A newsletter enviarase a " . count($destinatarios) . " destinatarios:</h2>";
    echo "<ul>";
    foreach ($destinatarios as $destinatario){
        echo "<li>".$destinatario. "</li>";
    }
    echo "</ul>";
    ?>
</body>
</html>