<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $lista_correos= ["usuario1@dominio.com", "texto-sen-arroba", "", "usuario2@dominio.com", "usuario3@dominio.com", "usuario4@dominio.com"];
        $validos_atopados= 0;

        foreach($lista_correos as $correo){
            if (!str_contains($correo, '@')){
            continue;
            }else{
                echo "Correo correcto: $correo </br>";
                $validos_atopados++;
                if($validos_atopados===3){
                    echo "Correos Atopados.";
                    break;
                }
            }
        }
    
    ?>
</body>
</html>