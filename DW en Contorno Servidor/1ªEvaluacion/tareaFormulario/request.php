<?php
// Realizar unha petición simple (GET)

// Creamos a solicitude e o cliente
$request = new http\Client\Request('GET', 'http://www.google.com');
$client = new http\Client;

// Enviamos a solicitude
$client->enqueue($request)->send();

// Obtemos a resposta
$response = $client->getResponse();

// Amosar os resultados
echo '<h3>Resultado:</h3>';
echo 'Código HTTP: <strong>' . $response->getResponseCode() . '</strong> (200 significa OK)<br/>';

// Convertemos a cadea para poder vela no navegador
echo '<pre>';
echo htmlspecialchars(substr($response->getBody()->toString(), 0, 200)) . '...';  // Amosamos os primeiros 200 caracteres
echo '</pre>';

// Nota:
// pecl_http é unha extensión que non funciona a tan baixo nivel como cURL,
// e xestiona ela soa o peche da sesión, polo que non necesitamos explicitalo
// no código como no caso de cURL.
?>
