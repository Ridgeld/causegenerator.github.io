let container = document.getElementById("wheel");
let button = document.getElementById('spin')
let number = Math.ceil(Math.random() * 5000);

button.addEventListener('click', function(){
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 5000);
});
// let container = document.getElementById("wheel");
// let button = document.getElementById('spin');
// let number = 0;

// button.addEventListener('click', function(){
//     number += Math.ceil(Math.random() * 5000);
//     container.style.transition = 'transform 3s ease-out'; // Добавляем анимацию для плавного вращения
//     container.style.transform = "rotate(" + number + "deg)";
//     setTimeout(() => {
//         container.style.transition = 'none'; // Убираем анимацию после завершения вращения
//         let currentAngle = number % 360;
//         let selectedItem = getSelectedItem(currentAngle);
//         alert(selectedItem.innerText);
//     }, 3000); // Устанавливаем таймаут равный времени анимации (в данном случае 3 секунды)
// });

// function getSelectedItem(angle) {
//     // Определяем, какой элемент находится сверху в данный момент
//     let items = document.querySelectorAll('.wheel div');
//     for (let i = 0; i < items.length; i++) {
//         let itemAngle = (360 / items.length) * i;
//         if (angle >= itemAngle && angle < itemAngle + (360 / items.length)) {
//             return items[i];
//         }
//     }
// }
