<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa3CarlosML</title>
</head>
<body>
    <?php 
    $stock = 20;

    if ($stock > 0): ?>
        
<h1 style="color:green;">Dispoñibilidade alta</h1>
    <?php elseif ($stock === 0): ?>
        <h1 style="color:red;">Producto esgotado</h1>

    <?php elseif ($stock > 0 && $stock <= 10): ?>
        <h1 style="color:orange;">Últimas unidades!</h1>

    <?php else: ?>
        <h1>Erro: O stock non pode ser negativo.</h1>

    <?php endif; ?>
</body>
</html>
