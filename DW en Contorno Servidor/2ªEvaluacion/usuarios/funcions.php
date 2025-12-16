<?php
if (!defined('FICH')) {
    define('FICH', __DIR__ . '/usuarios.txt');
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

function verifica_usuario($nome, $contrasinal) {
    $hash_gardado=hash_usuario($nome);
    if($hash_gardado && password_verify($contrasinal,$hash_gardado)){
        return true;
    }else{
        return false;
    }
}

