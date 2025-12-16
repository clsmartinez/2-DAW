<?php
defined('FICH') ? null : define('FICH', __DIR__ . '/usuarios.txt');
defined('SECRET_KEY') ? null :define('SECRET_KEY', 'unha_clave_moi_longa_e_secreta_para_o_servidor');

function xerar_token($nome) {
  // Usamos o User Agent para evitar roubo de sesión:
    $datos = $nome . $_SERVER['HTTP_USER_AGENT'];
    return hash_hmac('sha256', $datos, SECRET_KEY);
}

function recupera_sesion($nome, $hash_recibido) {
      $hash_calculado= xerar_token($nome);
    if (hash_equals($hash_calculado, $hash_recibido)) {
        $_SESSION['nome_usuario'] = $nome;
        $_SESSION['manter_rexistrado'] = true;
        // Se tiveramos gardada algunha outra información como o tempo de caducidade
        //  deberiamos recuperala neste intre
        return true;
    }
    return false;
}

function garda_usuario($nome, $contrasinal, $contrasinal2) {
  try {
    // Comprobamos que os contrasinais sexas iguais
    if($contrasinal !== $contrasinal2)
      throw new RuntimeException('Os contrasinais non coinciden');
    
    // Comprobamos que non exista xa ese nome de usuario
    if(hash_usuario($nome))
      throw new RuntimeException('O nome de usuario xa existe');
  }
  catch (RuntimeException $e) {
    echo $e->getMessage();
    exit();
  }
  // Rexistramos ao novo usuario
  $hash = password_hash($contrasinal, PASSWORD_DEFAULT);
  $texto = $nome . PHP_EOL . $hash . PHP_EOL;
  try {
    $f = fopen(FICH, 'a+');
    if(fwrite($f, $texto)) return true;
    else return false;    
  }
  catch (RuntimeException $e) {
    echo $e->getMessage();
    exit();      
  }      
}

function hash_usuario($nome) {
  @$f = fopen(FICH, 'r');
  if($f) {
    while(!feof($f)) {
      $txt = trim(fgets($f));
      if($nome == $txt) {
        $hash = trim(fgets($f));
        fclose($f);
        return $hash;
      }
      fgets($f);
    }
  }
  return false;
}

function verifica_usuario($nome, $contrasinal) {
  $hash_gardado = hash_usuario($nome);
  if ($hash_gardado && password_verify($contrasinal, $hash_gardado)) {
    return true;
  }
  return false;
}

