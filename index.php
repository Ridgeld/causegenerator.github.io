<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Генератор Причин</title>
<!--<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">-->
    <link rel="shortcut icon" type="image/png" href="image/iconsite.png"/>
    <link rel="stylesheet" href="stylecaused.css">

</head>
<body>
<div class="menutop">
    <div class="image"><img src="image/iconreload.png" widht="50" height="50" alt="ЛОГО"></div>
    <div class="logo">Генератор<br>Причин</div>
    <div><a href="cit.php" class="button">
        <img src="image/white.png" width="50" height="50" alt="Кнопка">
    </a>
    </div>
</div>
    <!--<div class="light">-->
    <!--    <button class="on" id="light"></button>-->
    <!--</div>-->

    <div class="causeplc">
        <div class="cause">Цитата:</div>
        <div class="cause" id="text">Текст</div>
    </div>

    <button id="btn1">Генерировать</button>
<div class="back">
    <div class="panel">
         <a href="index.php" class="text">
            <img src="image/smallbluetext.png" width="50" height="50" alt="Кнопка">
        </a>
        <a href="jokedark.php" class="smile">
            <img src="image/smallbluesmile.png" width="50" height="50" alt="Кнопка">
        </a>
         <a href="#" class="cit">
            <img src="image/smalredcit.png" width="50" height="50" alt="Кнопка">
        </a>
        <a href="menudark.php" class="menu">
            <img src="image/smallbluemenu.png" width="50" height="50" alt="Кнопка">
        </a>
    </div>
</div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="citgenerdark.js"></script>
</body>
</html>
