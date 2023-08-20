let board;
let boardWidth = 360;
let boardHeight = 530;
let context;

document.body.style.overflow = 'hidden';

const scoreCount = document.getElementById('score');
const notifName = document.getElementById('notifName');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');


const overlay = document.getElementById('overlay');
const notification = document.getElementById('notification');
const finishButton = document.getElementById('finish');
const continueButton = document.getElementById('continue');


//doodler

let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth/2 - doodlerWidth/2;
let doodlerY = boardHeight*7/8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

//physics
let velocityX =0;

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

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDoodler)
}

function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0, board.width, board.height);
    doodler.x += velocityX;

    if (doodler.x > boardWidth){
        doodler.x =0;
    }
    else if(doodler.x + doodler.width < 0){
        doodler.x = boardWidth;
    }
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
}


function moveDoodler(e){
    if (e.code == "ArrowRight" || e.code == "KeyD"){
        velocityX = 4;
        doodler.img = doodler.doodlerRightImg;
    }
    else if( e.code == "ArrowLeft" || e.code == "KeyA"){
        velocityX =-4;
        doodler.img = doodler.doodlerLeftImg;
    }
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
    alert('Наклонено вправо');
  } else if (gamma < -10) {
    alert('Наклонено влево');
  }
}