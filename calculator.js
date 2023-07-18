const inputPeople = document.getElementById('people');
const inputMoney = document.getElementById('money');
const text = document.getElementById("text");

const button = document.getElementById("btn");

button.addEventListener("click", function() {
    output = 2*2+" сом";
    text.textContent = output;
});
// inputMoney.addEventListener('input', function() {
//     output = inputPeople*inputMoney+"сом";
//     text.textContent = output;
// });
