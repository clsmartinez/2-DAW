<?php
session_start();
require_once('funcions.php');
if (!empty($_POST)) {
    if (!empty($_POST["contrasinal2"])) {
        garda_usuario($_POST["nomeusuario"], $_POST["contrasinal"], $_POST["contrasinal2"]);
    } else if (!empty($_POST["nomeusuario"])) {
        if (verifica_usuario($_POST["nomeusuario"], $_POST["contrasinal"])) {
            $_SESSION["nome_usuario"] = $_POST["nomeusuario"];
            if (!empty($_POST["caducidade"])) {
                if ($_POST["caducidade"] > 0) {
                    $_SESSION["caducidade"] = $_POST["caducidade"];
                } else {
                    unset($_SESSION["caducidade"]);
                }
            }
        }
    }
    if (!empty($_POST["logout"])) {
        session_unset();
        session_destroy();
    }
}



header("Location: loginb.php");
