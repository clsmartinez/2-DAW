<?php

define('Ruta_imaxe', __DIR__ . '/images/');

if (!empty($_GET['nome'])) {
    $ficheiro = Ruta_imaxe . $_GET['nome'];
    if (file_exists($ficheiro)) {
        $imaxe = file_get_contents($ficheiro);
        header('Content-Type: image/jpeg');
        echo $imaxe;
    } else {
        header('Location:images/noDisponible.jpg');
        exit;
    }
} else {
    echo 'Non hai ruta do ficheiro.';
}
?>