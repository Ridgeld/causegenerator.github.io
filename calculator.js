const inputPeople = document.getElementById('people');
const inputMoney = document.getElementById('money');
const text = document.getElementById("text");

inputMoney.addEventListener('input', function() {
    alert('Да');
    output = inputPeople*inputMoney+"сом";
    text.textContent = output;
});
