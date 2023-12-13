document.body.style.overflow = 'hidden';

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
let boardWidth = 360;
let boardHeight = 500;
let context;
let score = 0;
let maxScore = 0;
let gameOver = false;

//doodler

let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth/2 - doodlerWidth/2;
let doodlerY = boardHeight*7/8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;



//physics
let velocityX = 0;
let velocityY = 0;
let initialVelocityY = -8;
let gravity = 0.4;

let platformArray = [];
let platformWidth = 70;
let platformHeight = 8;
let platformImage;

let doodler = {
    img: null,
    x: doodlerX,
    y: doodlerY,
    width: doodlerWidth,
    height: doodlerHeight
}


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");


    // context.fillStyle = "green";
    // context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height);


    doodlerRightImg = new Image();
    doodlerRightImg.src = "images/icon.png";
    doodler.img = doodlerRightImg;
    doodlerRightImg.onload = function(){
        context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
    }

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "images/icon.png";

    platformImg = new Image();
    platformImg.src= "images/platform.png";

    velocityY = initialVelocityY;

    placePlatforms();
    requestAnimationFrame(update);
    // document.addEventListener("keydown", moveDoodler);
    window.addEventListener('devicemotion', moveDoodler);
}

function update(){
    if (gameOver){
        return;
    }
    requestAnimationFrame(update);
    context.clearRect(0,0, board.width, board.height);
    doodler.x += velocityX;

    if (doodler.x > boardWidth){
        doodler.x = 0;
    }
    else if(doodler.x + doodler.width < 0){
        doodler.x = boardWidth;
    }


    velocityY +=gravity;
    doodler.y += velocityY;
    if(doodler.y  > board.height){
        gameOver = true;
    }
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);


    for (let i = 0; i < platformArray.length; i++){
        let platform = platformArray[i];
        if (velocityY < 0 && doodler.y < boardHeight*3/4){
            platform.y -= initialVelocityY;
        }
        if (detectCollision(doodler, platform)){
            velocityY = initialVelocityY; 
        }
        context.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height);
    }
    while (platformArray.length > 0 && platformArray[0].y >=boardHeight){
        platformArray.shift();
        newPlatform();
    }
    updateScore();
    scoreCount.textContent = score;

    if(gameOver){
        new Audio("audio/gameover.mp3").play();
        const close_button = document.getElementById("close");
        const continue_button = document.getElementById("continue");
        const space_area = document.getElementById("area");
        const popup_text = document.getElementById("text");
        const popup_title = document.getElementById("title");
        const svg_place = document.getElementById("svg");
        const gradient = document.getElementById("gradient");
        popup_title.textContent = "Вы програли!";
        gradient.classList.add("gradient_red");
        svg_place.innerHTML= `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.5C20 16.023 15.523 20.5 10 20.5C4.477 20.5 0 16.023 0 10.5C0 4.977 4.477 0.5 10 0.5C15.523 0.5 20 4.977 20 10.5ZM6.97 7.47C7.11063 7.32955 7.30125 7.25066 7.5 7.25066C7.69875 7.25066 7.88937 7.32955 8.03 7.47L10 9.44L11.97 7.47C12.1122 7.33752 12.3002 7.2654 12.4945 7.26882C12.6888 7.27225 12.8742 7.35097 13.0116 7.48838C13.149 7.62579 13.2277 7.81118 13.2312 8.00548C13.2346 8.19978 13.1625 8.38782 13.03 8.53L11.06 10.5L13.03 12.47C13.1625 12.6122 13.2346 12.8002 13.2312 12.9945C13.2277 13.1888 13.149 13.3742 13.0116 13.5116C12.8742 13.649 12.6888 13.7277 12.4945 13.7312C12.3002 13.7346 12.1122 13.6625 11.97 13.53L10 11.56L8.03 13.53C7.88782 13.6625 7.69978 13.7346 7.50548 13.7312C7.31118 13.7277 7.12579 13.649 6.98838 13.5116C6.85097 13.3742 6.77225 13.1888 6.76882 12.9945C6.7654 12.8002 6.83752 12.6122 6.97 12.47L8.94 10.5L6.97 8.53C6.82955 8.38937 6.75066 8.19875 6.75066 8C6.75066 7.80125 6.82955 7.61063 6.97 7.47Z" fill="#FF003D"/>
        </svg>`;
        popup.classList.add('open');
    }
}

function moveDoodler(event) {
    const accelerationX = event.accelerationIncludingGravity.x; // ускорение по оси X
  
    if (accelerationX > 1) {
      console.log('Наклонено влево');
      velocityX = -4;
    } else if (accelerationX < -1) {
      console.log('Наклонено вправо');
      velocityX = 4;
    }
  }
// function moveDoodler(e){
//     if (e.code == "ArrowRight" || e.code == "KeyD"){
//         velocityX = 4;
//     }
//     else if(e.code == "ArrowLeft" || e.code == "KeyA"){
//         velocityX = -4;
//     }
// }


function placePlatforms(){
    platformArray = [];

    let platform ={
        img: platformImg,
        x: boardWidth/2,
        y: boardHeight-50,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform);

    for(let i=0; i<6; i++){
        let randomX = Math.floor(Math.random()*boardWidth*3/4);
        let platform ={
            img: platformImg,
            x: randomX,
            y: boardHeight - 75*i - 150,
            width: platformWidth,
            height: platformHeight
        }
        platformArray.push(platform);
    }
}
function newPlatform(){
    let randomX = Math.floor(Math.random()*boardWidth*3/4);
    let platform ={
        img: platformImg,
        x: randomX,
        y: - platformHeight,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform);
}
//     platform ={
//         img: platformImg,
//         x: boardWidth/2,
//         y: boardHeight-150,
//         width: platformWidth,
//         height: platformHeight
//     }
//     platformArray.push(platform);
// }

function detectCollision(a , b){
    return  a.x < b.x + b.width && 
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y +a.height > b.y;
}

function updateScore(){
    let points =Math.floor(50*Math.random());
    if (velocityY < 0){
        maxScore += points;
        if (score < maxScore){
            score = maxScore;
        }
    }
    else if( velocityY >= 0){
        maxScore -=points;
    }
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