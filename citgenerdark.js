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
// button.addEventListener("click", function() {
//   fetch('citatadark.txt')
//     .then(response => response.text())
//     .then(data => {
//       const lines = data.split('\n');
//       const randomIndex = Math.floor(Math.random() * lines.length);
//       text.textContent = lines[randomIndex];
//     });
// });
const textElement = document.getElementById('text');
let selectedStrings = [];

function getRandomString() {
  fetch('path/to/file.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      
      if (selectedStrings.length === 0) {
        selectedStrings = [...lines];
      }
      
      const availableStrings = selectedStrings.filter(line => !selectedStrings.includes(line));
      
      if (availableStrings.length === 0) {
        selectedStrings = [];
        getRandomString();
        return;
      }
      
      const randomIndex = Math.floor(Math.random() * availableStrings.length);
      const randomString = availableStrings[randomIndex];
      selectedStrings.splice(randomIndex, 1);
      textElement.textContent = randomString;
    })
    .catch(error => {
      console.error(error);
      // Обработка ошибки
    });
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', getRandomString);
  


});
