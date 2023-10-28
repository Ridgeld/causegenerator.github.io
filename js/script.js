function changeColor() {
    const light = document.getElementById("light");
    light.style.opacity = 1;
}
setTimeout(function() {
    window.location.href = "menu.html";
}, 3000);

// Задержка в 1 секунду перед вызовом функции
setTimeout(changeColor, 1000);