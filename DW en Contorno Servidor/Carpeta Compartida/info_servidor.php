<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>Propiedade</th>
            <th>Valor</th>
        </tr>
        <tr>
            <td>Nome do script</td>
            <td><?php echo $_SERVER['PHP_SELF']; ?></td>
        </tr>
        <tr>
            <td>IP do servidor</td>
            <td><?php echo $_SERVER['SERVER_ADDR']; ?></td>
        </tr>
        <tr>
            <td>Nome do servidor</td>
            <td><?php echo $_SERVER['SERVER_NAME']; ?></td>
        </tr>
        <tr>
            <td>IP do cliente</td>
            <td><?php echo $_SERVER['REMOTE_ADDR']; ?></td>
        </tr>
        <tr>
            <td>Método de petición</td>
            <td><?php echo $_SERVER['REQUEST_METHOD']; ?></td>
        </tr>
    </table>
</body>
</html>
