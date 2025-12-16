<?php
require_once 'utilidades.php';

$emailExemplo = "usuario@exemplo.com";
$cantidadeExemplo = 125.5;
$tokenLonxitude = 20;

echo validarEmail($emailExemplo) ? "Email válido<br>" : "Email non válido<br>";
echo formatarMoeda($cantidadeExemplo); 
echo "<br>";
echo formatarMoeda($cantidadeExemplo, '$');
echo "<br>";
echo "Token xerado: " . xerarTokenSeguro($tokenLonxitude);
?>
?>