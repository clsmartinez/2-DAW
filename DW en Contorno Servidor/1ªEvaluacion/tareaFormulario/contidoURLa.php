<?php
if (!empty($_GET['url'])) {
    $location = $_GET['url'];
    header("Location: https://$location");
    exit;
} else {
    echo 'La dirección esta vacía';
}
?>