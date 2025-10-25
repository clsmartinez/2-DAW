<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        date_default_timezone_set('Europe/Madrid');
        $data = time();

        echo '<p>Data estándar: '. date('d/m/y', $data) . '</p>' .
             '<p>Data longa: '. date('l, j \o\f F \o\f Y', $data) . '</p>' .
             '<p>Data con formato das bases de datos: '. date('Y-m-d H:i:s', $data) . '</p>';
    ?>
</body>
</html>