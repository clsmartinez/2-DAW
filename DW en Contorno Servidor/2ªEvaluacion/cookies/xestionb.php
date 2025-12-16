<?php
echo "<h1>Cookies: </h1>";

if (!empty($_POST['nome'])) {

    $nome = $_POST['nome'];
    $valor = $_POST['valor'] !== "" ? $_POST['valor'] : "0";

    if ($_POST['segundos'] !== "") {
        setcookie($nome, $valor, time() + intval($_POST['segundos']));
    } else {
        setcookie($nome, $valor);
    }
}
var_dump($_COOKIE);
?>



<form method="post">
    <label for="nome"> Nome: </label>
    <input type="text" name="nome" id="nome">
    <label for="valor"> Valor: </label>
    <input type="text" name="valor" id="valor">
    <label for="segundos"> Segundos de permanencia: </label>
    <input type="text" name="segundos" id="segundos">
    <input type="submit" value="Enviar">
</form>