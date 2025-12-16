<?php
function procesarArray(array $datos, callable $operacion){
    $resultados = [];
    foreach($datos as $dato){
        $resultados[] = $operacion($dato);
    }
    return $resultados;
}
function elevarAoCadrado(int $numero): int{
    return $numero*$numero;
}
function converterAMaiusculas(string $cadea): string{
    return strtoupper($cadea);
}
function obterLonxitude(string $cadea): int{
    return strlen($cadea);
}

$numeros=[1,2,3,4,5,6,7,8,9,10];
$textos=["Carlos","Hola","Servidor","Web"];

$cadrados=procesarArray($numeros,'elevarAoCadrado');
$maiusculas=procesarArray($textos,'converterAMaiusculas');
$lonxitudes=procesarArray($textos,'obterLonxitude');

echo "<h2>Números elevados: </h2>"."</br>";
foreach($cadrados as $cadrado){
    echo $cadrado."</br>";
}

echo "<h2>Textos en maiuscula: </h2>"."</br>";
foreach($maiusculas as $texto){
    echo $texto."</br>";
}

echo "<h2>Lonxitude do texto: </h2>"."</br>";
foreach($lonxitudes as $texto){
    echo $texto."</br>";
}

?>