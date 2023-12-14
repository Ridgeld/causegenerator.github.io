document.body.style.overflow = 'hidden';
const wrapper = document.getElementById('wrapper');
const card = document.getElementById('card');
const rect = document.getElementById('rect');
const button = document.getElementById('button');


card.addEventListener('click', function(){
    new Audio('audio/gameover.mp3').play();
    rect.style.opacity = '1';
    rect.style.animation = "rotation_opacity 3s linear infinite"
    card.classList.remove('hover');
});

button.addEventListener('click', function(){
    window.location.href = "snake.html";
});