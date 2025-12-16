<?php
$alumnado = [
    ['nome' => 'Antía', 'apelidos' => 'Outeiro Freire', 'nota' => 7.5],
    ['nome' => 'Breixo', 'apelidos' => 'Muiños Seoane', 'nota' => 4.9],
    ['nome' => 'Sabela', 'apelidos' => 'Castro Dopico', 'nota' => 9.1],
    ['nome' => 'Iago', 'apelidos' => 'Ferreiro Figueiras', 'nota' => 3.2],
    ['nome' => 'Xoel', 'apelidos' => 'Vázquez Regueiro', 'nota' => 6.0],
];

$aprobados = array_filter($alumnado, function ($alumno) {
    return $alumno['nota'] >= 5;
});

$nombresCompletos = [];

foreach ($aprobados as $alumno) {
    $nombresCompletos[] = [
        'nome' => $alumno['nome'],
        'apelidos' => $alumno['apelidos']
    ];
}

$nomesFormateados = array_map(fn($alumno) =>
        $alumno['apelidos'] . ', ' . $alumno['nome'],
    $nombresCompletos);

    foreach($nomesFormateados as $nome){
        echo $nome. "</br>";
    }

?>