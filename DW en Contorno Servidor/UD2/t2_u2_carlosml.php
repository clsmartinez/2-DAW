<?php
    $nome_alumno="carlosml";
    $ciclo= "DAW";
    $curso=2;
    $modulo="Desenvolvemento Web en Contorno Servidor";
    $nota_media=8.5;

    echo "<!DOCTYPE html>".
         '<html lang="gl">'.
            "<head>".
             '<meta charset="UTF-8">'.
             "<title>Ficha do alumno</title>".
            "</head>".
            "<body>".
            "<h1>Datos de Matrícula do Alumno</h1>".
            "<p>Nome: ".$nome_alumno."</p>".
            "<p>Módulo: ". $modulo."</p>";

    printf("<p>Actualmente cursa o %dº curso do ciclo %s.</p>", $curso, $ciclo);
    printf("<p>Nota media: %+1.1f</p>", $nota_media);

    $resumo= <<<RESUMO
           <p>
        <strong>Resumo:</strong><br />
        O/A alumno/a $nome_alumno está matriculado/a no módulo $modulo do ciclo $ciclo.
        </p>
    RESUMO;

    echo $resumo;
    echo "</body>";
    echo "</html>";
?>
