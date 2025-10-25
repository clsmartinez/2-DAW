<?php

$obrig = ['nome', 'apelido1', 'apelido2', 'datanac', 'telefonoF', 'telefonoM', 'sinatura', 'estudos', 'lingua'];
$url = 'http://persoal.daw.com/' . $_POST['nome'] . $_POST['apelido1'] . $_POST['apelido2'];
$sinatura = $_POST['sinatura'];
$sinatura_limpia = strip_tags($sinatura, '<b><i><u><br><hr>');

$erro = false;
foreach ($obrig as $campo) {
    if (empty($_POST[$campo]))
        $erro = true;
}

if (!$erro) {
    echo '<h1>Datos persoais: </h1>';

    echo '<p>Nome: ' . $_POST['nome'] . '</p>'
        . '<p>Apelido 1: ' . $_POST['apelido1'] . '</p>'
        . '<p>Apelido 2: ' . $_POST['apelido2'] . '</p>'
        . '<p>Data de Nacemento: ' . $_POST['datanac'] . '</p>'
        . '<p>Télefono fixo: ' . $_POST['telefonoF'] . '</p>'
        . '<p>Télefono móbil: ' . $_POST['telefonoM'] . '</p>';
    if (empty($_POST['blog'])) {
        echo '<p>URL do blog persoal: ' . strtolower($url) . '</p>';
    } else {
        echo '<p>URL do blog persoal: ' . $_POST['blog'] . '</p>';
    }

    echo '<p>Sinatura: '. $sinatura_limpia . '</p>';

    echo '<h2>Estudos previos: </h2>';
    echo '<p>' . $_POST['estudos'] . '</p>';

    echo '<h2>Linguas que coñece: </h2>';
    echo '<ul>';
    foreach ($_POST['lingua'] as $lingua) {
        echo '<li>' . $lingua . '</li>';
    }
    echo '</ul>';

    if (isset($_POST['fuma'])) {
        echo '<p>Fuma: Sí</p>';
    } else {
        echo '<p>Fuma: Non</p>';
    }

    if (isset($_POST['deporte'])) {
        echo '<p>Fai deporte: Sí</p>';
    } else {
        echo '<p>Fai deporte: Non</p>';
    }
} else {
    echo 'Necesitas introducir todos os datos';
}

?>