// const item_zero = document.getElementById('item_zero');
// item_zero.addEventListener('click', function(){
//     alert(item_zero.textContent);
// });
// const container = document.getElementById('item_numbers');

// // Добавляем обработчик события click к контейнеру
// container.addEventListener('click', handleClick);

// // Обработчик события click
// function handleClick(event) {
//     // Проверяем, является ли цель события элементом с классом "element"
//     if (event.target.classList.contains('table_grid')) {
//         // Получаем textContent элемента, на который произведено нажатие
//         var clickedElementText = event.target.textContent;
        
//         // Выводим textContent в alert
//         alert(clickedElementText);
//     }
// }
// const numberTo_container = document.getElementById('from_to');
// numberTo_container.addEventListener('click', handleClickNumber);
// function handleClickNumber(event) {
//     // Проверяем, является ли цель события элементом с классом "element"
//     if (event.target.classList.contains('table_grid')) {
//         // Получаем textContent элемента, на который произведено нажатие
//         var clickedElementText = event.target.textContent;
        
//         // Выводим textContent в alert
//         alert(clickedElementText);
//     }
// }
// const numberProp_container = document.getElementById('numbers_prop');
// numberProp_container.addEventListener('click', handleClickProp);
// function handleClickProp(event) {
//     // Проверяем, является ли цель события элементом с классом "element"
//     if (event.target.classList.contains('table_grid')) {
//         // Получаем textContent элемента, на который произведено нажатие
//         var clickedElementText = event.target.textContent;
        
//         // Выводим textContent в alert
//         alert(clickedElementText);
//     }
// }
// Получить текст элемента с классом table_grid
// Получить все элементы с классом table_grid
const tableGridElements = document.querySelectorAll('.click_item');

// Добавить обработчик события для каждого элемента
tableGridElements.forEach((element) => {
  element.addEventListener('click', function() {
    const text = this.textContent || this.innerText;
    alert(`Вы нажали на элемент с текстом: ${text.trim()}`);
  });
});
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
  