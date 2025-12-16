<?php
echo "<h1>Sesión: </h1>";
session_start();
if (!empty($_POST['texto'])) {
    $_SESSION["textos"][]=$_POST['texto'];
    header("Location:" . $_SERVER["PHP_SELF"]);
}
if(!empty($_POST["borrarSession"])){
    session_unset();
    session_destroy();
    header("Location:" . $_SERVER["PHP_SELF"]);
}
var_dump($_SESSION);
?>



<form method="post">
    <label for="texto"> Texto: </label>
    <input type="text" name="texto" id="texto">
    <input type="submit" value="Enviar">
</form>

<form method="post">
    <input type="submit" name="borrarSession" value="Borrar a sesión">
</form>