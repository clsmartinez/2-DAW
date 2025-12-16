<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_E3</title>
</head>
<body>
    <?php
     $rol_usuario='admin';

     $widgets_a_mostrar= match($rol_usuario){
        'admin'=> ["Xestión de Usuarios", "Estatísticas do Sitio", "Editor de Contido", "Ver Sitio"],
        'editor'=> ["Editor de Contido", "Ver Sitio"],
        'rexistrado'=> [ "Ver Perfil", "Ver Sitio"],
        'default'=> [ "Ver Sitio"],
     };
        
     echo "<h1>Panel de Administración</h1>";

     foreach ($widgets_a_mostrar as $widget){
          echo  '<div style="border: 1px solid black; padding: 10px; margin: 5px;">';
          echo  "<h2>$widget</h2>";
          echo  "</div>";
     }
    ?>
</body>
</html>