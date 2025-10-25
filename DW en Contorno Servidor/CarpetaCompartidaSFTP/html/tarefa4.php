<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa4CarlosML</title>
</head>
<body>
    <?php $codigo_http=404;
    
    $significado = match ($codigo_http){
        200,201,204=> 'Exito (Success)',
        400=> 'Peticion incorrecta (Bad Request)',
        404=> 'Recurso non atopado (Not Found)',
        500=> 'Erro interno do servidor (Internal Server Error)',
        default => 'Codigo de estado desconecido'
    };
    echo $significado;
    ?>
</body>
</html>