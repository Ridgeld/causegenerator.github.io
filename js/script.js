function changeColor() {
    const light = document.getElementById("light");
    light.style.opacity = 1;
}
setTimeout(function() {
    // if (localStorage.getItem('snake_winter_2023')){
    //     window.location.href = "menu.html"
    // } else {
    //     window.location.href = "new_year.html";
    // }
    window.location.href = "start.html";
    // window.location.href = "new_year.html";
}, 3000);

// Задержка в 1 секунду перед вызовом функции
setTimeout(changeColor, 1000);