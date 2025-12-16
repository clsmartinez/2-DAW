<?php
      // Define aquí a túa función calcularEstatisticas
      function calcularEstatisticas(array $numeros, &$total, &$media) {
          $total = array_sum($numeros);
          $media = $total / count($numeros);
      }
      $puntuacions = [8.5, 9.0, 7.2, 6.8, 9.5, 8.1];
      $sumaTotal = 0;
      $mediaCalculada = 0;
    
      // Chama á función aquí
      calcularEstatisticas($puntuacions, $sumaTotal, $mediaCalculada);
      echo "A suma total das puntuacións é: " . $sumaTotal. "<br>";
      echo "A media calculada é: " . $mediaCalculada . "<br>";
?>