<?php
session_start();
require_once('funcionsc.php'); 

if (!empty($_POST)) {

    if (!empty($_POST["contrasinal2"])) {
        garda_usuario($_POST["nomeusuario"], $_POST["contrasinal"], $_POST["contrasinal2"]);
    } 
    
    else if (!empty($_POST["nomeusuario"])) {
        if (verifica_usuario($_POST["nomeusuario"], $_POST["contrasinal"])) {
            
            $_SESSION["nome_usuario"] = $_POST["nomeusuario"];
            $_SESSION["ultima_actividade"] = time();
            
            if (!empty($_POST["caducidade"]) && $_POST["caducidade"] > 0) {
                $_SESSION["caducidade"] = $_POST["caducidade"];
            } else {
                unset($_SESSION["caducidade"]);
            }

            if (isset($_POST["manter_rexistrado"])) {
                $hash_seguro = devolverHash($_POST["nomeusuario"]);
                
                setcookie("login", $_POST["nomeusuario"], time() + (3600*24*14), "/");
                setcookie("hash", $hash_seguro, time() + (3600*24*14), "/");
                
                $_SESSION["manter_rexistrado"] = true;
            }
        }
    }

    if (!empty($_POST["logout"])) {
        session_unset();
        session_destroy();
        setcookie("login", "", time() - 3600, "/");
        setcookie("hash", "", time() - 3600, "/");
    }
}

header("Location: loginc.php");
exit();
?>