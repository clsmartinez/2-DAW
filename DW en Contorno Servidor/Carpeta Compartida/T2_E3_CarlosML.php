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
        $data=time();
        echo '<p>Data estándar: '. date('d/m/y', $data) . '</p>' . 
        '<p>Data longa: '. date( 'l, F j , Y ', $data) . '</p>' . 
        '<p>Data con hora: '. date( 'Y/-/m/-/d h:i A', $data) . '</p>' .
        '<p>Información adicional: ' . '</p>';

    ?>
</body>
</html>