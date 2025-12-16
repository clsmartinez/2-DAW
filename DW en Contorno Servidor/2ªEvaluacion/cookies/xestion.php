<?php
echo "<h1>Cookies: </h1>";
if(!empty($_POST['nome']) && !empty( $_POST['valor'] && empty($_POST['segundos']))){
    setcookie($_POST['nome'],$_POST['valor'], $_POST['segundos']);
    header("Location:". $_SERVER["PHP_SELF"]);
}

var_dump($_COOKIE);
?>



<form method="post">
    <label for="nome"> Nome: </label>
    <input type="text" name="nome" id="nome">
    <label for="valor"> Valor: </label>
    <input type="text" name="valor" id="valor">
    <input type="submit" value="Enviar">
</form>









