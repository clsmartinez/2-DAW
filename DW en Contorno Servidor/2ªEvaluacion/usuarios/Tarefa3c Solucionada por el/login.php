<?php
  session_start();
  require_once('funcions.php');
  
  if(empty($_SESSION['nome_usuario'])) {
    // Comprobamos se existen as cookies para recuperar unha sesión anterior
    if(isset($_COOKIE['login']) && isset($_COOKIE['hash'])) recupera_sesion($_COOKIE['login'], $_COOKIE['hash']);
  }
  
  if(!empty($_SESSION['nome_usuario'])) {
    // Comprobamos se caducou a sesión
    if(isset($_SESSION['ultima_actividade']) && isset($_SESSION['tempo_caducidade']) && (time() - $_SESSION['ultima_actividade'] > $_SESSION['tempo_caducidade'])) {
        session_unset();
        session_destroy();
    }
    $_SESSION['ultima_actividade'] = time();
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Login / Rexistro de usuarios</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
      .info {
        width: 280px;
        margin: 20px auto;
        border: solid 1px;
        padding: 10px;
      }
      
      .forms {
        width: 100%;
        overflow: hidden;
      }
      .form_login {
        width: 300px;
        float: left;
        margin-left: 80px;
      }
      .form_rexistro {
        width: 300px;
        float: right;
        margin-right: 80px;
      }
      
      .desactivado {
        visibility: hidden;
      }
      
      input[type=text], input[type=password] {
        width: 60%;
        display: block;
    }

    </style>    
  </head>
  <body>
    <div class="info">
      <?php
        if(empty($_SESSION['nome_usuario'])) echo '<h2>Non logueado</h2>';
        else {
          echo '<h2>Usuario ' . $_SESSION['nome_usuario'] . ' logueado</h2>';
          if(isset($_SESSION['tempo_caducidade']))
            echo '<p>A sesión caduca ás ' . date('H:i:s', time() + $_SESSION['tempo_caducidade']) . '</p>';
          else
            echo '<p>A sesión non caduca.</p>';
          if(isset($_SESSION['manter_rexistrado']) && $_SESSION['manter_rexistrado']==true)
            echo '<p>A sesión é persistente.</p>';
          else
            echo '<p>A sesión non é persistente.</p>'
      ?>
        <form method='post' action='do_login.php'>
            <input type="hidden" name="logout" value="1" />
            <input type="submit" id="submit-logout" value="Log out" />
        </form>     
      <?php
        }
      ?>
    </div>
    <div class="forms">
      <div class="form_login<?php if(!empty($_SESSION['nome_usuario'])) echo ' desactivado'; ?>" >
        <form method='post' action='do_login.php'>
          <h3>Usuario existente:</h3>
          <fieldset>
            <label for="nomeusuario">Nome:</label>
            <input id="nomeusuario" type="text" name="nomeusuario" />
            <label for="contrasinal">Contrasinal:</label>
            <input id="contrasinal" type="password" name="contrasinal" />
          </fieldset>
          <fieldset>
            <input type="checkbox" checked="checked" id="manter_rexistrado" name="manter_rexistrado" /><label> Mantenme rexistrado</label>
          </fieldset>
          <fieldset>
            <label for="tempo_caducidade">Segs. caducidade (0 = no caducar):</label>
            <input id="tempo_caducidade" type="text" name="tempo_caducidade" value="0" />
          </fieldset>
          <fieldset>
            <input type="submit" id="submit-login" value="Log in" />           
          </fieldset>
        </form>
      </div>
      <div class="form_rexistro">
        <form method='post' action='do_login.php'>
          <h3>Novo usuario:</h3>
          <fieldset>
            <label for="nomeusuario2">Nome:</label>
            <input id="nomeusuario2" type="text" name="nomeusuario" />
            <label for="novacontrasinal">Contrasinal:</label>
            <input id="novacontrasinal" type="password" name="contrasinal" />
            <label for="novacontrasinal2">Repita a contrasinal:</label>
            <input id="novacontrasinal2" type="password" name="contrasinal2" />
          </fieldset>
          <fieldset>
            <input type="submit" value="Rexistrar" />
          </fieldset>
        </form>
      </div>
    </div>
  </body>
</html>
