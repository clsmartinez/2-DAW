<?php
  session_start();
  require_once('funcions.php');
  
  if(!empty($_POST)) {
    if(!empty($_POST['contrasinal2'])) {
      // Novo rexistro
      garda_usuario($_POST['nomeusuario'], $_POST['contrasinal'], $_POST['contrasinal2']);
    }
    else if(!empty($_POST['nomeusuario'])) {
      // Log in
      if(verifica_usuario($_POST['nomeusuario'], $_POST['contrasinal'])) {
        $_SESSION['nome_usuario'] = $_POST['nomeusuario'];
        
        // Comprobamos se se definiu un tempo de caducidade da sesión
        if(!empty($_POST['tempo_caducidade'])) {
          if($_POST['tempo_caducidade'] > 0)
            $_SESSION['tempo_caducidade'] = $_POST['tempo_caducidade'];
          else
            unset($_SESSION['tempo_caducidade']);
        }
        
        // Comprobamos se se definiu a creación dunha sesión permanente
        if(!empty($_POST['manter_rexistrado']) && $_POST['manter_rexistrado'] == true) {
          $hash_seguro = xerar_token($_SESSION['nome_usuario']);
          setcookie("login", $_SESSION['nome_usuario'], time()+3600*24*14);
          setcookie("hash", $hash_seguro, time()+3600*24*14);
        }
        $_SESSION['manter_rexistrado'] = isset($_POST['manter_rexistrado']);
      }
    }
    if(!empty($_POST['logout'])) {
      // Log out
      session_unset();
      session_destroy();
      
      // Quitamos as cookies para a sesión permanente, se existen
      setcookie("login", '', time() - 3600);
      setcookie("hash", '', time() - 3600);      
    }          
  }
  header('Location: login.php');
?>