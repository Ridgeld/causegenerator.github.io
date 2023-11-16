let container = document.getElementById("wheel");
let button = document.getElementById('spin')
let number = Math.ceil(Math.random() * 5000);

button.addEventListener('click', function(){
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 5000);
});