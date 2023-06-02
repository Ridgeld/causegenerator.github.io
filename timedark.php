<?php ?>
<!DOCTYPE html>
<html lang="ru">
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
    <div><a href="time.php" class="button">
        <img src="image/white.png" width="50" height="50" alt="Кнопка">
    </a>
    </div>
</div>
<div class="backtime">
    <!--<a href="#" class="left">-->
    <!--    <img src="image/left.png" width="40" height="40" alt="Кнопка">-->
    <!--</a>-->
    <div class="calendar">
        <img src="image/calendar.png" width="28" height="31" alt="Кнопка">
        <input class="data" type="date" id="date-input" name="time" min="2020-12-31" max="2025-01-01">
    </div>
    <!-- <a href="#" class="right">-->
    <!--    <img src="image/ridght.png" width="40" height="40" alt="Кнопка">-->
    <!--</a>-->
</div>
<div class="timetable">
    <div class="first">
        <div class="textt" id="fr">Физкультура</div>
    </div>
    <div class="second">
        <span class="textt" id="sc">История</span>
    </div>
    <div class="third">
        <span class="textt" id="th">Литература</span>
    </div>
    <div class="fourth">
        <span class="textt" id="fo">Английский</span>
    </div>
    <div class="fiveth">
        <span class="textt"id="fi">Заруб. Литература</span>
    </div>
    <div class="sixth">
        <span class="textt"id="si">Геометрия</span>
    </div>
</div>

<button id="submit-btn" class="pdata">Выбор</button>

<div class="back">
    <div class="panel">
         <a href="menudark.php" class="text">
            <img src="image/back.png" width="50" height="50" alt="Кнопка">
        </a>
        <!-- <a href="citatadark.php" class="cit">-->
        <!--    <img src="image/smallbluecit.png" width="50" height="50" alt="Кнопка">-->
        <!--</a>-->
        <!--<a href="menudark.php" class="menu">-->
        <!--    <img src="image/smalredmenu.png" width="50" height="50" alt="Кнопка">-->
        <!--</a>-->
    </div>
</div>
    <!--</dil>-->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>-->
    <script src="timegener.js"></script>
</body>
</html>