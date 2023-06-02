jQuery(document).ready(function($){
// автообновление 10сек
// setTimeout(function(){
//     location.reload();
// }, 5000);


// btn1.onclick = function() {
//     // if (this.innerHTML=='ON') this.innerHTML = 'OFF';
//     // else this.innerHTML = 'ON';
//     // return false;
// }
const text = document.getElementById("text");
const button = document.getElementById("btn1");

// button.addEventListener("click", function() {
//   text.textContent = "Новый текстe";
// });
button.addEventListener("click", function() {
  fetch('citatadark.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const randomIndex = Math.floor(Math.random() * lines.length);
      text.textContent = lines[randomIndex];
    });
});


});