<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarlosML Exercicio1</title>
</head>
<body>
    <ol>
    <?php
        for($i=1;$i<=100;$i++){
            if($i%3===0 && $i%5===0){
                echo "<li>Fizz</li>";
            }elseif($i%3===0){
                echo "<li>Buzz</li>";
            }elseif($i%5===0){
                echo "<li>FizzBuzz</li>";
            }else{
                echo "<li>$i</li>";
            }
        }
    ?>
     </ol>
</body>
</html>