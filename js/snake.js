document.body.style.overflow = 'hidden';

const score_place = document.getElementById("score");


// Попап
const close_button = document.getElementById("close");
const continue_button = document.getElementById("continue");
const space_area = document.getElementById("area");
const popup_text = document.getElementById("text");
const popup_title = document.getElementById("title");
const svg_place = document.getElementById("svg");
const gradient = document.getElementById("gradient");


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
    new Audio("audio/gameover.mp3").play();
    const popup = document.querySelector('.popup');
    clearInterval(setIntervalId);
    popup_title.textContent = "Вы програли!";
    gradient.classList.add("gradient_red");
    svg_place.innerHTML= `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.5C20 16.023 15.523 20.5 10 20.5C4.477 20.5 0 16.023 0 10.5C0 4.977 4.477 0.5 10 0.5C15.523 0.5 20 4.977 20 10.5ZM6.97 7.47C7.11063 7.32955 7.30125 7.25066 7.5 7.25066C7.69875 7.25066 7.88937 7.32955 8.03 7.47L10 9.44L11.97 7.47C12.1122 7.33752 12.3002 7.2654 12.4945 7.26882C12.6888 7.27225 12.8742 7.35097 13.0116 7.48838C13.149 7.62579 13.2277 7.81118 13.2312 8.00548C13.2346 8.19978 13.1625 8.38782 13.03 8.53L11.06 10.5L13.03 12.47C13.1625 12.6122 13.2346 12.8002 13.2312 12.9945C13.2277 13.1888 13.149 13.3742 13.0116 13.5116C12.8742 13.649 12.6888 13.7277 12.4945 13.7312C12.3002 13.7346 12.1122 13.6625 11.97 13.53L10 11.56L8.03 13.53C7.88782 13.6625 7.69978 13.7346 7.50548 13.7312C7.31118 13.7277 7.12579 13.649 6.98838 13.5116C6.85097 13.3742 6.77225 13.1888 6.76882 12.9945C6.7654 12.8002 6.83752 12.6122 6.97 12.47L8.94 10.5L6.97 8.53C6.82955 8.38937 6.75066 8.19875 6.75066 8C6.75066 7.80125 6.82955 7.61063 6.97 7.47Z" fill="#FF003D"/>
    </svg>`;
    popup.classList.add('open');
    return
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

        score_place.innerText = score;
    }
    for(let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    snakeBody[0] = [snakeX, snakeY];
    for (let i = 0; i < snakeBody.length; i++) {
    }
    snakeX +=velocityX;
    snakeY +=velocityY;

    if(snakeX <= 0 || snakeX > 15 || snakeY <=0 || snakeY >15){
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++){
      if (i === 0) {
          if(localStorage.getItem('snake_winter_2023')){
              htmlMarkup += `<div class="head_green" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>`;
        } else {
              htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>`;
        }
      } else {
          if(localStorage.getItem('snake_winter_2023')){
            htmlMarkup += `<div class="body_green" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>`;
          } else {
            htmlMarkup += `<div class="body" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>`;
          }
      }
        // htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>`;
        if(i !==0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true;
        }
    }
    game.innerHTML = htmlMarkup;
}
changeFoodPosition();
setIntervalId = setInterval(initGame, 200);

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