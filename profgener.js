const text = document.getElementById("text");
const button = document.getElementById("btn1");

button.addEventListener('click', () => {
    window.close();
    window.location.close();
});
// button.addEventListener("click", function() {
//   fetch('prof.txt')
//     .then(response => response.text())
//     .then(data => {
//       const lines = data.split('\n');
//       const randomIndex = Math.floor(Math.random() * lines.length);
//       text.textContent = lines[randomIndex];
//     });
// });
