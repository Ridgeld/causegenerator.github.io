const item_zero = document.getElementById('item_zero');
item_zero.addEventListener('click', function(){
    alert(item_zero.textContent);
});
const container = document.getElementById('item_numbers');

// Добавляем обработчик события click к контейнеру
container.addEventListener('click', handleClick);

// Обработчик события click
function handleClick(event) {
    // Проверяем, является ли цель события элементом с классом "element"
    if (event.target.classList.contains('table_grid')) {
        // Получаем textContent элемента, на который произведено нажатие
        var clickedElementText = event.target.textContent;
        
        // Выводим textContent в alert
        alert(clickedElementText);
    }
}