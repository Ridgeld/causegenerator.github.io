// const dateInput = document.getElementById('date-input');
//   const submitBtn = document.getElementById('submit-btn');
//   const resultDiv = document.getElementById('fr');

// function checkWeekday() {
//   const dateInput = document.getElementById("date-input");
//   const date = new Date(dateInput.value);
//   const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
//   const result = document.getElementById("fr");
  
//   if (weekday === "Sunday") {
//     result.textContent = "Выходной";
//   } else {
//     result.textContent = weekday;
//   }
// }
const dateInput = document.getElementById('date-input');
const submitBtn = document.getElementById('submit-btn');
const frDiv = document.getElementById('fr');
const scDiv = document.getElementById('sc');
const thDiv = document.getElementById('th');
const foDiv = document.getElementById('fo');
const fiDiv = document.getElementById('fi');
const siDiv = document.getElementById('si');

  submitBtn.addEventListener('click', () => {
    const dateValue = dateInput.value;
    const dateObj = new Date(dateValue);
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayOfWeek = daysOfWeek[dateObj.getDay()];
     if (dayOfWeek === "Воскресенье") {
        frDiv.textContent = "Выходной";
        scDiv.textContent = " ";
        thDiv.textContent = " ";
        foDiv.textContent = " ";
        fiDiv.textContent = " ";
        siDiv.textContent = " ";
     }
    if (dayOfWeek === "Понедельник") {
        frDiv.textContent = "Физкультура";
        scDiv.textContent = "История";
        thDiv.textContent = "Литература";
        foDiv.textContent = "Английский язык";
        fiDiv.textContent = "Заруб. литература";
        siDiv.textContent = "Геометрия";
     }
    if (dayOfWeek === "Вторник") {
        frDiv.textContent = "Русский язык";
        scDiv.textContent = "Литература";
        thDiv.textContent = "Физика";
        foDiv.textContent = "Английский язык";
        fiDiv.textContent = "Английский язык";
        siDiv.textContent = "Кыргызский язык";
     }
    if (dayOfWeek === "Среда") {
        frDiv.textContent = "Алгебра";
        scDiv.textContent = "Литература";
        thDiv.textContent = "ЧиО";
        foDiv.textContent = "Кыргызский язык";
        fiDiv.textContent = "Биология";
        siDiv.textContent = "Английский язык";
     }
    if (dayOfWeek === "Четверг") {
        frDiv.textContent = "География";
        scDiv.textContent = "Английский язык";
        thDiv.textContent = "Химия";
        foDiv.textContent = "Химия";
        fiDiv.textContent = "Физкультура";
        siDiv.textContent = "Геометрия";
     }
    if (dayOfWeek === "Пятница") {
        frDiv.textContent = "Адабият";
        scDiv.textContent = "История";
        thDiv.textContent = "Английский язык";
        foDiv.textContent = "Алгебра";
        fiDiv.textContent = "Русский язык";
        siDiv.textContent = "";
     }
    if (dayOfWeek === "Суббота") {
        frDiv.textContent = "Кыргызский язык";
        scDiv.textContent = "Физика";
        thDiv.textContent = "Физика";
        foDiv.textContent = "ДП";
        fiDiv.textContent = "ДП";
        siDiv.textContent = "";
     }
});
