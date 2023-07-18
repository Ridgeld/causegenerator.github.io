const inputPeople = document.getElementById('people');
const inputMoney = document.getElementById('money');
const text = document.getElementById("text");

const button = document.getElementById("btn");

button.addEventListener('click', () => {
    const peopleValue = parseFloat(inputPeople.value);
    const moneyValue = parseFloat(inputMoney.value);
    
    const result = (peopleValue * moneyValue) + ' сом';
    text.textContent = result;
    alert(result);
});
