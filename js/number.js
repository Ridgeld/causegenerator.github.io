const input = document.getElementById("input");
const button = document.getElementById("send");
const attemp_place = document.getElementById("attempt");


// Попап
const close_button = document.getElementById("close");
const continue_button = document.getElementById("continue");
const space_area = document.getElementById("area");
const popup_text = document.getElementById("text");
const popup_title = document.getElementById("title");
const svg_place = document.getElementById("svg");
const gradient = document.getElementById("gradient");



let attempts = 10;
attemp_place.textContent = attempts;

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    return randomNumber
}
let random_number = generateRandomNumber();
console.log("Сгенерированно число:", random_number);



button.addEventListener('click', function() {
    const popup = document.querySelector('.popup');
    const userInput = Number(input.value); // Получаем значение из input и преобразуем его в число
    if (!userInput){
        return
    }
    if (userInput !== random_number) {
        attempts--; // Отнимаем одну попытку
        attemp_place.textContent = attempts;
        input.value = '';

        if (attempts === 0) {
            popup_title.textContent = "Вы програли!";
            gradient.classList.add("gradient_red");
            svg_place.innerHTML= `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.5C20 16.023 15.523 20.5 10 20.5C4.477 20.5 0 16.023 0 10.5C0 4.977 4.477 0.5 10 0.5C15.523 0.5 20 4.977 20 10.5ZM6.97 7.47C7.11063 7.32955 7.30125 7.25066 7.5 7.25066C7.69875 7.25066 7.88937 7.32955 8.03 7.47L10 9.44L11.97 7.47C12.1122 7.33752 12.3002 7.2654 12.4945 7.26882C12.6888 7.27225 12.8742 7.35097 13.0116 7.48838C13.149 7.62579 13.2277 7.81118 13.2312 8.00548C13.2346 8.19978 13.1625 8.38782 13.03 8.53L11.06 10.5L13.03 12.47C13.1625 12.6122 13.2346 12.8002 13.2312 12.9945C13.2277 13.1888 13.149 13.3742 13.0116 13.5116C12.8742 13.649 12.6888 13.7277 12.4945 13.7312C12.3002 13.7346 12.1122 13.6625 11.97 13.53L10 11.56L8.03 13.53C7.88782 13.6625 7.69978 13.7346 7.50548 13.7312C7.31118 13.7277 7.12579 13.649 6.98838 13.5116C6.85097 13.3742 6.77225 13.1888 6.76882 12.9945C6.7654 12.8002 6.83752 12.6122 6.97 12.47L8.94 10.5L6.97 8.53C6.82955 8.38937 6.75066 8.19875 6.75066 8C6.75066 7.80125 6.82955 7.61063 6.97 7.47Z" fill="#FF003D"/>
            </svg>`;
            popup.classList.add('open');
            return
        }
    } 
    if (userInput > random_number){
        alert.innerHTML="Вы ввели число больше загаданого"
        return
    }
    if (userInput < random_number){
        alert.innerHTML="Вы ввели число меньше загаданого"
        return
    }
    if (userInput === random_number){
        popup_title.textContent = "Вы выиграли!";
        gradient.classList.add("gradient_green");
        svg_place.innerHTML= `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M0 10.5C0 7.84784 1.05357 5.3043 2.92893 3.42893C4.8043 1.55357 7.34784 0.5 10 0.5C12.6522 0.5 15.1957 1.55357 17.0711 3.42893C18.9464 5.3043 20 7.84784 20 10.5C20 13.1522 18.9464 15.6957 17.0711 17.5711C15.1957 19.4464 12.6522 20.5 10 20.5C7.34784 20.5 4.8043 19.4464 2.92893 17.5711C1.05357 15.6957 0 13.1522 0 10.5ZM14.708 8.708C14.801 8.61502 14.8747 8.50465 14.925 8.38317C14.9754 8.26169 15.0013 8.13149 15.0013 8C15.0013 7.86851 14.9754 7.73831 14.925 7.61683C14.8747 7.49535 14.801 7.38498 14.708 7.292C14.615 7.19902 14.5046 7.12527 14.3832 7.07495C14.2617 7.02463 14.1315 6.99874 14 6.99874C13.8685 6.99874 13.7383 7.02463 13.6168 7.07495C13.4954 7.12527 13.385 7.19902 13.292 7.292L9 11.586L6.708 9.292C6.61502 9.19902 6.50465 9.12527 6.38317 9.07495C6.26169 9.02464 6.13149 8.99874 6 8.99874C5.86851 8.99874 5.73831 9.02464 5.61683 9.07495C5.49535 9.12527 5.38498 9.19902 5.292 9.292C5.19902 9.38498 5.12527 9.49535 5.07495 9.61683C5.02464 9.73831 4.99874 9.86851 4.99874 10C4.99874 10.1315 5.02464 10.2617 5.07495 10.3832C5.12527 10.5046 5.19902 10.615 5.292 10.708L8.292 13.708C8.38489 13.8011 8.49524 13.875 8.61673 13.9254C8.73822 13.9758 8.86847 14.0018 9 14.0018C9.13153 14.0018 9.26178 13.9758 9.38327 13.9254C9.50476 13.875 9.61511 13.8011 9.708 13.708L14.708 8.708Z" fill="#00FF75"/>
        </svg>`;
        popup.classList.add('open');
        return
    }
});
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