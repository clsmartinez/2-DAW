<?php
if (!defined('FICH')) {
    define('FICH', __DIR__ . '/usuarios.txt');
}
if (!defined('SECRET_KEY')) {
    define('SECRET_KEY', "A clave secreta se encontra aqui");
}

function garda_usuario($nome, $contrasinal, $contrasinal2)
{
    try {
        if ($contrasinal !== $contrasinal2) {
            throw new RuntimeException('Os contrasinais non coinciden');
        }
        if (hash_usuario($nome)) {
            throw new RuntimeException('O nome de usuario xa existe.');
        }
    } catch (RuntimeException $e) {
        echo $e->getMessage();
        exit();
    }
    // Rexistrar novo usuario, abrindo ficheiro:
    $hash = password_hash($contrasinal, PASSWORD_DEFAULT);
    $texto = $nome . PHP_EOL . $hash . PHP_EOL;
    try {
        $f = fopen(FICH, 'a+');
        if (fwrite($f, $texto)) {
            return true;
        } else {
            return false;
        }
    } catch (RuntimeException $e) {
        echo $e->getMessage();
        exit();
    }
}

function hash_usuario($nome)
{
    @$f = fopen(FICH, "r");
    if ($f) {
        while (!feof($f)) {
            $txt = trim(fgets($f));
            if ($nome == $txt) {
                $hash = trim(fgets($f));
                fclose($f);
                return $hash;
            }
            fgets($f); //Para saltar de linea 
        }
    }
    return false;
}

function verifica_usuario($nome, $contrasinal)
{
    $hash_gardado = hash_usuario($nome);
    if ($hash_gardado && password_verify($contrasinal, $hash_gardado)) {
        return true;
    } else {
        return false;
    }
}

function devolverHash($nome)
{
    $datos = $nome . $_SERVER["HTTP_USER_AGENT"];
    return hash_hmac("sha256", $datos, SECRET_KEY);
}

function recupera_sesion($nome, $hash_recibido) {
    $hash_calculado = devolverHash($nome);
    
    if (hash_equals($hash_calculado, $hash_recibido)) {
        $_SESSION["nome_usuario"] = $nome; 
        $_SESSION["manter_rexistrado"] = true;
        $_SESSION["ultima_actividade"] = time(); 

        return true;
    } else {
        return false;
    }
}