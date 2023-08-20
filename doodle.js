document.body.style.overflow = 'hidden';

const scoreCount = document.getElementById('score');
const notifName = document.getElementById('notifName');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');


const overlay = document.getElementById('overlay');
const notification = document.getElementById('notification');
const finishButton = document.getElementById('finish');
const continueButton = document.getElementById('continue');

let board;
let boardWidth = 360;
let boardHeight = 500;
let context;

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
let platformWidth = 60;
let platformHeight = 10;
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
    doodlerRightImg.src = "images/doodler.png";
    doodler.img = doodlerRightImg;
    doodlerRightImg.onload = function(){
        context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
    }

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "images/doodler.png";

    platformImg = new Image();
    platformImg.src= "images/platform.png";

    velocityY = initialVelocityY;

    placePlatforms();
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDoodler);
}

function update(){
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
}


function moveDoodler(e){
    if (e.code == "ArrowRight" || e.code == "KeyD"){
        velocityX = 4;
        doodler.img = doodlerRightImg;
    }
    else if(e.code == "ArrowLeft" || e.code == "KeyA"){
        velocityX = -4;
        doodler.img = doodlerLeftImg;
    }
}


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

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const beta = event.beta; // угол наклона вперёд-назад
  const gamma = event.gamma; // угол наклона влево-вправо

  // Добавьте здесь свою логику для определения направления наклона
  if (beta > 10) {
    console.log('Наклонено вперёд');
  } else if (beta < -10) {
    console.log('Наклонено назад');
  }

  if (gamma > 10) {
    console.log('Наклонено назад2');
  } else if (gamma < -10) {
    console.log('Наклонено назад1');
  }
}