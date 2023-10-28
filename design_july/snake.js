
document.body.style.overflow = 'hidden';

const scoreCount = document.getElementById('score');
const notifName = document.getElementById('notifName');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');


const overlay = document.getElementById('overlay');
const notification = document.getElementById('notification');
const finishButton = document.getElementById('finish');
const continueButton = document.getElementById('continue');
const swipeArea = document.getElementById('swipe')


const game = document.getElementById('game');

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0; 
let snakeBody = [];
let setIntervalId;
let score = 0;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random()* 15)+1 ;
    foodY = Math.floor(Math.random()* 15)+1 ;
}

const handleGameOver = () =>{
    clearInterval(setIntervalId);
    notifName.textContent = 'Вы проиграли(';
    text2.textContent = "";
    text.textContent = 'Ваш счет: '+score;
    overlay.classList.add('show');
    notification.classList.add('show');
}

    let touchStartX = 0;
    let touchStartY = 0;

    swipeArea.addEventListener('touchstart', function(event) {
      const touch = event.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    });

    swipeArea.addEventListener('touchend', function(event) {
      const touch = event.changedTouches[0];
      const touchEndX = touch.clientX;
      const touchEndY = touch.clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // Определяем направление свайпа
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          console.log('Свайп вправо');
            velocityX = 1;
            velocityY = 0;
        } else if (deltaX < 0) {
          console.log('Свайп влево');
          velocityX = -1;
          velocityY = 0;
        }
      } else {
        if (deltaY > 0) {
          console.log('Свайп вниз');
          event.preventDefault();
          velocityX = 0;
          velocityY = 1;
        } else if (deltaY < 0) {
          console.log('Свайп вверх');
          velocityX = 0;
          velocityY = -1;
        }
      }
      initGame();
    });
    // if(e.key === "ArrowUp" && velocityY != 1){
    //     velocityX = 0;
    //     velocityY = -1;
    // }else if(e.key === "ArrowDown" && velocityY != -1){
    //     velocityX = 0;
    //     velocityY = 1;
    // }else if(e.key === "ArrowLeft" && velocityX != 1){
    //     velocityX = -1;
    //     velocityY = 0;
    // }else if(e.key === "ArrowRight" && velocityX != -1){
    //     velocityX = 1;
    //     velocityY = 0;
    // }
    // initGame();

const initGame = () =>{
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX} "></div>`;

    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
        score++;

        scoreCount.innerText = score;
    }

    for(let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    snakeBody[0] = [snakeX, snakeY];


    snakeX +=velocityX;
    snakeY +=velocityY;

    if(snakeX <= 0 || snakeX > 15 || snakeY <=0 || snakeY >15){
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++){
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>`;
        if(i !==0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true;
        }
    }
    game.innerHTML = htmlMarkup;
}
changeFoodPosition();
setIntervalId = setInterval(initGame, 125);




finishButton.addEventListener('click', function() {
    window.location.href = "game.html"; // Переход на другую страницу game.html
});

continueButton.addEventListener('click', function() {
    location.reload();
});


