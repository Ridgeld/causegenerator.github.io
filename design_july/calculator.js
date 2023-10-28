const inputProcent = document.getElementById('procent');
const inputMoney = document.getElementById('money');
const text = document.getElementById("text");

const button = document.getElementById("btn");

inputMoney.addEventListener('input', () => {
    const procentValue = +parseInt(inputProcent.value);
    const moneyValue = +parseInt(inputMoney.value);
    const result = (((moneyValue/100)*procentValue)+moneyValue) +' сом';
    text.textContent = result;
});
