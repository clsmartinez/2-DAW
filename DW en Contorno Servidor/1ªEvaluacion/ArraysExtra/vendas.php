<?php
$ficheiro = fopen("vendas.csv", "r");
$vendas = [];

while (($fila = fgetcsv($ficheiro, 1000, ",")) !== false) {
    $venda = [
        'id_libro' => $fila[0],
        'titulo' => $fila[1],
        'autor' => $fila[2],
        'categoria' => $fila[3],
        'prezo' => (float)$fila[4],
        'provincia_venda' => $fila[5]
    ];
    $vendas[] = $venda;
}
fclose($ficheiro);

$ingresos_totais = array_sum(array_column($vendas, 'prezo'));

$vendas_por_provincia = [];
foreach ($vendas as $venda) {
    $provincia = $venda['provincia_venda'];
    $vendas_por_provincia[$provincia][] = $venda;
}

$narrativa = array_filter($vendas, function ($v) {
    return $v['categoria'] === 'Narrativa';
});
?>

<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <title>CarlosML_Ejercicio1</title>
</head>
<body>

<h2>Ingresos totais</h2>
<p><?php echo number_format($ingresos_totais, 2, ',', '.'); ?> €</p>

<h2>Vendas agrupadas por provincia</h2>
<?php foreach ($vendas_por_provincia as $provincia => $vendas): ?>
    <h3><?php echo $provincia; ?></h3>
    <ul>
        <?php foreach ($vendas as $v): ?>
            <li>
                <?php echo $v['titulo']; ?> — 
                <?php echo $v['autor']; ?> 
                (<?php echo $v['categoria']; ?>) — 
                <?php echo number_format($v['prezo'], 2, ',', '.'); ?> €
            </li>
        <?php endforeach; ?>
    </ul>
<?php endforeach; ?>

<h2>Libros da categoría "Narrativa"</h2>
<ul>
    <?php foreach ($narrativa as $v): ?>
        <li>
            <?php echo $v['titulo']; ?> — 
            <?php echo $v['autor']; ?> 
            (<?php echo $v['provincia_venda']; ?>) — 
            <?php echo number_format($v['prezo'], 2, ',', '.'); ?> €
        </li>
    <?php endforeach; ?>
</ul>

</body>
</html>
