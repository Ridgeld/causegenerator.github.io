const inputPeople = document.getElementById('inputPeople');
const inputMoney = document.getElementById('inputMoney');
const text = document.getElementById("text");

inputMoney.addEventListener('input', function() {
    alert('Да');
    output = inputPeople*inputMoney+"сом";
    text.textContent = output;
});
