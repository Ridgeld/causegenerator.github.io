const text = document.getElementById("text");
const button = document.getElementById("btn");

button.addEventListener("click", function() {
  fetch('assets/word.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const randomIndex = Math.floor(Math.random() * lines.length);
      text.textContent = lines[randomIndex];
    });
});