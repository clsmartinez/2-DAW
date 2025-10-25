<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML_E2</title>
</head>
<body>
    <?php
    $produtos = [
    ["nome" => "Mazás", "prezo" => 2.5, "en_oferta" => true],
    ["nome" => "Leite", "prezo" => 1.2, "en_oferta" => false],
    ["nome" => "Pan", "prezo" => 1.0, "en_oferta" => true]
];
    $desconto_oferta=0.10;
    $total_cesta=0;
?>
<table border="1">
  <thead>
    <tr><th>Produto</th><th>Prezo Orixinal</th><th>Prezo Final</th></tr>
  </thead>
  <tbody>
    <?php
    foreach ($produtos as $producto) {
        if($producto['en_oferta']===true){
            $prezoFinal=$producto['prezo']-($producto['prezo']*$desconto_oferta);
            echo '<tr><td>' . $producto['nome'] . '</td><td>' . $producto['prezo'] . ' €</td><td style="color:green;">' .$prezoFinal  . ' (En oferta!)'. '</td></tr>';
            $total_cesta+=$prezoFinal;
        }else{
            echo '<tr><td>' . $producto['nome'] . '</td><td>' . $producto['prezo'] . ' €</td><td>' . $producto['prezo'] . '</td></tr>';
            $total_cesta+=$producto['prezo'];
        }

    }
    ?>
  </tbody>

</table>

    <?php
    echo "<h2>Total da Cesta: $total_cesta</h2>"
    ?>
</body>
</html>