// let container = document.getElementById("wheel");
// let button = document.getElementById('spin')
// let number = Math.ceil(Math.random() * 5000);

// button.addEventListener('click', function(){
//     container.style.transform = "rotate(" + number + "deg)";
//     number += Math.ceil(Math.random() * 1000);
// });
let container = document.getElementById("wheel");
let button = document.getElementById('spin');
let number = 0;

button.addEventListener('click', function(){
    number += Math.ceil(Math.random() * 5000);
    container.style.transition = 'transform 3s ease-out';
    container.style.transform = "rotate(" + number + "deg)";
});

container.addEventListener('transitionend', function() {
    // Определение угла поворота колеса
    let wheelRotation = (360 - (number % 360)) % 360; // Текущий угол поворота колеса

    // Вычисление индекса элемента в самом верху колеса
    let topIndex = Math.round((wheelRotation + 320) % 360 / 36); // Предполагаем 10 элементов на колесе

    // Получение информации о верхнем элементе
    let topItem = document.querySelector(`.wheel ._${topIndex}`);
    let topItemText = topItem.innerText;
    // topItem.style.background = "#0070cf";
    // Вывод текста верхнего элемента в alert
    alert(`Выпало: ${topItemText}`);
});









