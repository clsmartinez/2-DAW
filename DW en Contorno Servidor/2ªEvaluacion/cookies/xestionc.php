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
if (!empty($_POST["borracookies"])) {
    foreach ($_COOKIE as $cookie => $valor) {
        setcookie($cookie, '', time() - 1000);
    }
    header('Location:' . $_SERVER['PHP_SELF']);
    exit;
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

<form method="post">
    <input type="button" name="borracookies" value="Borrar as cookies">
</form>