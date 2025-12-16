<?php
function validarEmail($email){
    if(str_contains($email,'@')){
        return true;
    }else{
        return false;
    }
}

function formatarMoeda(float $cantidade, string $simbolo = '€'): string {
    $formateada = number_format($cantidade, 2, '.', '');
    return $formateada . ' ' . $simbolo;
}

function xerarTokenSeguro($lonxitude=16){
    return bin2hex(random_bytes($lonxitude / 2));
}

?>