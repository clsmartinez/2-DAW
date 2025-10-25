<! DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "
http://www.w3.org/TR/html4/loose.dtd">
    <!-- Exemplo: Amosar data en galego -->
    <html lang=gl>

    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <title>Data en galego</title>
    </head>

    <body>
        <h1>
            <?php
            date_default_timezone_set('Europe/Madrid');
            $numero_mes = date("m");
            $numero_dia_semana = date("N");
            switch ($numero_mes) {
                case 1:
                    $mes = "Xaneiro";
                    break;
                case 2:
                    $mes = "Febreiro";
                    break;
                case 3:
                    $mes = "Marzo";
                    break;
                case 4:
                    $mes = "Abril";
                    break;
                case 5:
                    $mes = "Maio";
                    break;
                case 6:
                    $mes = "Xuño";
                    break;
                case 7:
                    $mes = "Xullo";
                    break;
                case 8:
                    $mes = "Agosto";
                    break;
                case 9:
                    $mes = "Setembro";
                    break;
                case 10:
                    $mes = "Outubro";
                    break;
                case 11:
                    $mes = "Novembro";
                    break;
                case 12:
                    $mes = "Decembro";
                    break;
            }
            switch ($numero_dia_semana) {
                case 1:
                    $dia_semana = "Luns";
                    break;
                case 2:
                    $dia_semana = "Martes";
                    break;
                case 3:
                    $dia_semana = "Mércores";
                    break;
                case 4:
                    $dia_semana = "Xoves";
                    break;
                case 5:
                    $dia_semana = "Venres";
                    break;
                case 6:
                    $dia_semana = "Sábado";
                    break;
                case 7:
                    $dia_semana = "Domingo";
                    break;
            }
            print $dia_semana . ", " . date("j") . " de " . $mes . " de " . date("Y"); ?>
        </h1>
        <h2>
            <!--Ou de maneira nativa en php:-->
        </h2>
    </body>

    </html>