const scoreCount = document.getElementById("score");

// Попап
const close_button = document.getElementById("close");
const continue_button = document.getElementById("continue");
const space_area = document.getElementById("area");
const popup_text = document.getElementById("text");
const popup_title = document.getElementById("title");
const svg_place = document.getElementById("svg");
const gradient = document.getElementById("gradient");


let board;
let boardWidth = 350;
let boardHeight = 200;
let context;




let dinoWidth = 60;
let dinoHeight = 60;
let dinoX = 20;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight,
}

let cactusArray = [];

let cactus1Width = 45;
let cactus2Width = 87;
let cactus3Width = 130;

let cactusHeight = 60;
let cactusX = 350;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

let velocityX = -8;
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;

let score = 0;

const handleGameOver = () =>{
    new Audio("audio/gameover.mp3").play();
    const popup = document.querySelector('.popup');
    popup_title.textContent = "Вы програли!";
    gradient.classList.add("gradient_red");
    svg_place.innerHTML= `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.5C20 16.023 15.523 20.5 10 20.5C4.477 20.5 0 16.023 0 10.5C0 4.977 4.477 0.5 10 0.5C15.523 0.5 20 4.977 20 10.5ZM6.97 7.47C7.11063 7.32955 7.30125 7.25066 7.5 7.25066C7.69875 7.25066 7.88937 7.32955 8.03 7.47L10 9.44L11.97 7.47C12.1122 7.33752 12.3002 7.2654 12.4945 7.26882C12.6888 7.27225 12.8742 7.35097 13.0116 7.48838C13.149 7.62579 13.2277 7.81118 13.2312 8.00548C13.2346 8.19978 13.1625 8.38782 13.03 8.53L11.06 10.5L13.03 12.47C13.1625 12.6122 13.2346 12.8002 13.2312 12.9945C13.2277 13.1888 13.149 13.3742 13.0116 13.5116C12.8742 13.649 12.6888 13.7277 12.4945 13.7312C12.3002 13.7346 12.1122 13.6625 11.97 13.53L10 11.56L8.03 13.53C7.88782 13.6625 7.69978 13.7346 7.50548 13.7312C7.31118 13.7277 7.12579 13.649 6.98838 13.5116C6.85097 13.3742 6.77225 13.1888 6.76882 12.9945C6.7654 12.8002 6.83752 12.6122 6.97 12.47L8.94 10.5L6.97 8.53C6.82955 8.38937 6.75066 8.19875 6.75066 8C6.75066 7.80125 6.82955 7.61063 6.97 7.47Z" fill="#FF003D"/>
    </svg>`;
    popup.classList.add('open');
    return
}

window.onload = function() {
    board = document.getElementById("dino_board");
    board.height = boardHeight;
    board.width = boardWidth;


    context = board.getContext("2d");

    // context.fillStyle = "green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    dinoImg = new Image();
    dinoImg.src = "images/dino.png";
    dinoImg.onload = function(){
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height )
    }

    cactus1Img = new Image();
    cactus1Img.src = "images/cactus_1.png";

    cactus2Img = new Image();
    cactus2Img.src = "images/cactus_2.png";

    cactus3Img = new Image();
    cactus3Img.src = "images/cactus_3.png";


    requestAnimationFrame(update);
    setInterval(placeCactus, 1500);
    document.addEventListener("click", moveDino);
}


function update() {
    if (gameOver) {
        return handleGameOver();
    }
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);


    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        cactus.x += velocityX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);


        if (detectCollision(dino, cactus)) {
            gameOver = true;
            dinoImg.src = "images/dino.png";
            dinoImg.onload = function() {
                context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
            }
        }
    }

    score++;
    scoreCount.textContent = score;
}
function moveDino(){
    if (gameOver){
        return handleGameOver();
    }
    velocityY = -10;
    // if ((e.code == "Space" || e.code === "ArrowUp") && dino.y == dinoY) {
    //     velocityY = -10;

    // }
}

function placeCactus() {
    if (gameOver){
        return handleGameOver();
    }

    let cactus = {
        img : null,
        x : cactusX,
        y : cactusY,
        width : null,
        height : cactusHeight
    }

    let placeCactusChance = Math.random();

    if (placeCactusChance > .90) { // 10%
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .70) { //30%
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .10) { //50%
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus);
    }

    if (cactusArray.length > 5){
        cactusArray.shift();
    }
}

function detectCollision(a, b){
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;

}


close_button.addEventListener('click', function(){
    popup.classList.remove('open');
    location.href="games_menu.html";
});
continue_button.addEventListener('click', function(){
    popup.classList.remove('open');
    location.reload();
});
space_area.addEventListener('click', function(){
    popup.classList.remove('open');
    location.reload();
});