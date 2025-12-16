<?php

if (!empty($_GET['url'])) {
    $location = $_GET['url'];
    $userAgent = 'Mozilla/5.0';

    /* $request = new http\Client\Request('GET', "http://$location");
    $client = new http\Client;
    $client->enqueue($request)->send();
    $response = $client->getResponse();

    echo ($response->getBody()->toString());
    exit;
} else {
    echo 'La dirección esta vacía';
}*/

    $c = curl_init();
    curl_setopt($c, CURLOPT_URL, "https://$location");
    curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($c, CURLOPT_USERAGENT, $userAgent);
    curl_setopt($c, CURLOPT_FOLLOWLOCATION, true);
    $paxina = curl_exec($c);
    if ($paxina === false) {
     echo $paxina;
    } else
        exit('Url non atopada');
}

?>