const inputProcent = document.getElementById('procent');
const inputMoney = document.getElementById('money');
const text = document.getElementById("text");

const button = document.getElementById("btn");

inputMoney.addEventListener('input', () => {
    const procentValue = +parseFloat(inputProcent.value);
    const moneyValue = +parseFloat(inputMoney.value);
    const result = (moneyValue*(procentValue/100)) +' сом';
    text.textContent = result;
});
