<?php
session_start();
require_once('funcionsc.php');


if (empty($_SESSION["nome_usuario"])) {
    if (isset($_COOKIE["login"]) && isset($_COOKIE["hash"])) {
        recupera_sesion($_COOKIE["login"], $_COOKIE["hash"]);
    }
}


if (isset($_SESSION['nome_usuario']) && isset($_SESSION["caducidade"]) && isset($_SESSION["ultima_actividade"])) {

    $tiempo_pasado = time() - $_SESSION["ultima_actividade"];
    
    if ($tiempo_pasado > $_SESSION["caducidade"]) {

        session_unset();
        session_destroy();
        setcookie("login", "", time() - 3600, "/");
        setcookie("hash", "", time() - 3600, "/");

        header("Location: loginc.php?error=timeout");
        exit();
    } else {
        $_SESSION["ultima_actividade"] = time();
    }
}

if (isset($_SESSION['nome_usuario'])) {
    $textoEstado = "Benvido/a " . $_SESSION['nome_usuario'];
} else {
    if (isset($_GET['error']) && $_GET['error'] == 'timeout') {
        $textoEstado = "A túa sesión caducou.";
    } else {
        $textoEstado = "Non logueado";
    }
}
?>

<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <title>Login / Rexistro de usuarios</title>
    <style>
        body { font-family: sans-serif; margin: 20px; }
        .caja-estado { border: 1px solid #000; padding: 20px; width: 300px; margin: 0 auto 40px auto; text-align: center; font-size: 24px; font-weight: bold; }
        .contenedor-flex { display: flex; gap: 50px; justify-content: center; }
        .columna { width: 300px; }
        fieldset { border: 1px solid #ccc; padding: 15px; margin-top: 10px; }
        h3 { margin-bottom: 5px; }
        label { display: block; margin-top: 10px; }
        input[type="text"], input[type="password"], input[type="number"] { width: 90%; padding: 5px; margin-top: 2px; }
        button { margin-top: 15px; padding: 5px 15px; cursor: pointer; }
        .btn-logout { margin-top: 10px; font-size: 12px; }
    </style>
</head>
<body>

    <div class="caja-estado">
        <?php echo $textoEstado; ?>

        <?php if (isset($_SESSION['nome_usuario'])): ?>
            <form action="do_loginc.php" method="POST">
                <input type="hidden" name="logout" value="si">
                <button type="submit" class="btn-logout">Pechar sesión</button>
            </form>
        <?php endif; ?>
    </div>

    <div class="contenedor-flex">
        <div class="columna">
            <h3>Usuario existente:</h3>
            <form method="POST" action="do_loginc.php">
                <fieldset>
                    <label>Nome:</label>
                    <input type="text" name="nomeusuario" required>

                    <label>Contrasinal:</label>
                    <input type="password" name="contrasinal" required>
                    
                    <fieldset>
                        <label for="casilla">Mantenme Rexistrado:</label>
                        <input type="checkbox" name="manter_rexistrado">
                    </fieldset>
                    
                    <label>Segundos Caducidade (0 = Non caducar):</label>
                    <input type="number" name="caducidade" value="0">

                    <br><br>
                    <button type="submit">Log in</button>
                </fieldset>
            </form>
        </div>

        <div class="columna">
            <h3>Novo usuario:</h3>
            <form method="POST" action="do_loginc.php">
                <fieldset>
                    <label>Nome:</label>
                    <input type="text" name="nomeusuario" required>

                    <label>Contrasinal:</label>
                    <input type="password" name="contrasinal" required>

                    <label>Repita a contrasinal:</label>
                    <input type="password" name="contrasinal2" required>

                    <br><br>
                    <button type="submit">Rexistrar</button>
                </fieldset>
            </form>
        </div>
    </div>
</body>
</html>