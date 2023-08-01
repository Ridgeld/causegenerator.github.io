const button = document.getElementById('button');
const countNumber = document.getElementById('countNumber');
const notifName = document.getElementById('notifName');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const input = document.getElementById('input');
const overlay = document.getElementById('overlay');
const notification = document.getElementById('notification');
const finishButton = document.getElementById('finish');
const continueButton = document.getElementById('continue');

let attempts = 5;

function generateRandomNumber() {
    // Генерируем случайное число от 1 до 50 (включительно)
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    return randomNumber;
}

let result = generateRandomNumber();
console.log("Сгенерированное число:", result);


function resetGame() {
    result = generateRandomNumber();
    console.log("Сгенерированное число:", result);
    attempts = 5;
    countNumber.textContent = attempts;
    button.disabled = false;
    input.value = '';
}

button.addEventListener('click', function() {
    const userInput = Number(input.value); // Получаем значение из input и преобразуем его в число

    if (userInput === result) {

        notifName.textContent = `Поздравляем, вы угадали!`;
        text.textContent = 'Продолжите играть?';
        text2.textContent = `Загаданное число: ${result}`;
        overlay.classList.add('show');
        notification.classList.add('show');
    } else {
        console.log("Нет, числа не совпадают.");
        attempts--; // Отнимаем одну попытку
        countNumber.textContent = attempts;
        input.value = '';
    }

    if (attempts === 0) {
        notifName.textContent = `Вы не угадали(`;
        button.disabled = true; // Отключаем кнопку после окончания попыток
        text2.textContent = `Загаданное число: ${result}`;
        overlay.classList.add('show');
        notification.classList.add('show');
    }
});

finishButton.addEventListener('click', function() {
    window.location.href = "game.html"; // Переход на другую страницу game.html
});

continueButton.addEventListener('click', function() {
    resetGame();
    overlay.classList.remove('show');
    notification.classList.remove('show');
});
