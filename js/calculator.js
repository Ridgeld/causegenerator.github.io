const procent_count = document.getElementById("procent_count");
const money_count = document.getElementById("money_count");
const button = document.getElementById("check");
const result = document.getElementById("result");


button.addEventListener('click', () => { 
    const procent_value = procent_count.value;
    const money_value = money_count.value;
    if (!money_value && !procent_value){
        return
    }
    const sum = Math.round((((money_value/100)*procent_value)+money_value)) + ' сом';
    procent_count.value = "";
    money_count.value = ""
    return result.textContent = sum;
});