
// Обработчики событий для кнопок
document.getElementById('1').addEventListener('click', function () {
    loadTimetable('timetable.json', 'Понедельник');
    this.classList.toggle('clicked');
    document.getElementById('line1').classList.toggle('lineClick');


    document.getElementById('2').classList.remove('clicked');
    document.getElementById('3').classList.remove('clicked');
    document.getElementById('4').classList.remove('clicked');
    document.getElementById('5').classList.remove('clicked');

    document.getElementById('line2').classList.remove('lineClick');
    document.getElementById('line3').classList.remove('lineClick');
    document.getElementById('line4').classList.remove('lineClick');
    document.getElementById('line5').classList.remove('lineClick');

});

document.getElementById('2').addEventListener('click', function () {
    loadTimetable('timetable.json', 'Вторник');
    this.classList.toggle('clicked');
    document.getElementById('line2').classList.toggle('lineClick');


    document.getElementById('1').classList.remove('clicked');
    document.getElementById('3').classList.remove('clicked');
    document.getElementById('4').classList.remove('clicked');
    document.getElementById('5').classList.remove('clicked');

    document.getElementById('line1').classList.remove('lineClick');
    document.getElementById('line3').classList.remove('lineClick');
    document.getElementById('line4').classList.remove('lineClick');
    document.getElementById('line5').classList.remove('lineClick');
});

document.getElementById('3').addEventListener('click', function () {
    loadTimetable('timetable.json', 'Среда');
    this.classList.toggle('clicked');
    document.getElementById('line3').classList.toggle('lineClick');


    document.getElementById('1').classList.remove('clicked');
    document.getElementById('2').classList.remove('clicked');
    document.getElementById('4').classList.remove('clicked');
    document.getElementById('5').classList.remove('clicked');

    document.getElementById('line1').classList.remove('lineClick');
    document.getElementById('line2').classList.remove('lineClick');
    document.getElementById('line4').classList.remove('lineClick');
    document.getElementById('line5').classList.remove('lineClick');
});
document.getElementById('4').addEventListener('click', function () {
    loadTimetable('timetable.json', 'Четверг');
    this.classList.toggle('clicked');
    document.getElementById('line4').classList.toggle('lineClick');


    document.getElementById('1').classList.remove('clicked');
    document.getElementById('2').classList.remove('clicked');
    document.getElementById('3').classList.remove('clicked');
    document.getElementById('5').classList.remove('clicked');

    document.getElementById('line1').classList.remove('lineClick');
    document.getElementById('line2').classList.remove('lineClick');
    document.getElementById('line3').classList.remove('lineClick');
    document.getElementById('line5').classList.remove('lineClick');
});

document.getElementById('5').addEventListener('click', function () {
    loadTimetable('timetable.json', 'Пятница');
    this.classList.toggle('clicked');
    document.getElementById('line5').classList.toggle('lineClick');


    document.getElementById('1').classList.remove('clicked');
    document.getElementById('2').classList.remove('clicked');
    document.getElementById('4').classList.remove('clicked');
    document.getElementById('5').classList.remove('clicked');

    document.getElementById('line1').classList.remove('lineClick');
    document.getElementById('line2').classList.remove('lineClick');
    document.getElementById('line4').classList.remove('lineClick');
    document.getElementById('line5').classList.remove('lineClick');
});

// Загрузка и отображение расписания
function loadTimetable(jsonFile, dayOfWeek) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Очистите расписание перед загрузкой нового
            const container = document.getElementById("place");
            container.innerHTML = '';

            // Найдите день недели в массиве данных
            const dayData = data.find(day => day.day === dayOfWeek);

            if (dayData) {
                // Если день недели найден, отобразите его уроки
                const lessons = dayData.lessons;
                lessons.forEach(урок => {
                    // Создайте контейнер для урока
                    const lessonContainer = document.createElement("div");
                    lessonContainer.className = "lesson_container";
                
                    // Создайте div с классом "circle" перед названием урока
                    const circleDiv = document.createElement("div");
                    circleDiv.className = "lesson_circle";
                    lessonContainer.appendChild(circleDiv);
                
                    // Создайте div с классом "lesson_info" для названия, времени и кабинета
                    const lessonInfoDiv = document.createElement("div");
                    lessonInfoDiv.className = "lesson_info";
                    lessonContainer.appendChild(lessonInfoDiv);
                
                    // Создайте div с классом "lesson_name" для названия урока
                    const lessonNameDiv = document.createElement("div");
                    lessonNameDiv.className = "lesson_name";
                
                    // Проверьте текст урока и добавьте классы "lesson_name_green", "lesson_time_green" и "lesson_room_green" при необходимости
                    lessonNameDiv.textContent = урок.name;
                    lessonInfoDiv.appendChild(lessonNameDiv);
                
                    // Создайте div с классом "lesson_time" для времени урока
                    const lessonTimeDiv = document.createElement("div");
                    lessonTimeDiv.className = "lesson_time";
                    lessonTimeDiv.textContent = урок.time;
                    lessonInfoDiv.appendChild(lessonTimeDiv);

                    // Создайте div с классом "lesson_room" для кабинета
                    const lessonRoomDiv = document.createElement("div");
                    lessonRoomDiv.className = "lesson_room";
                    lessonRoomDiv.textContent = урок.room;
                    lessonContainer.appendChild(lessonRoomDiv);
                    if (урок.name === "Классный час") {
                        lessonContainer.classList.add("lesson_container_special");
                        circleDiv.classList.add("lesson_circle_special");
                        lessonNameDiv.classList.add("lesson_name_special");
                        lessonRoomDiv.classList.add("lesson_room_special");
                        lessonTimeDiv.classList.add("lesson_time_special");
                    }
                    container.appendChild(lessonContainer);
                });
            }
        });
}

// По умолчанию загрузите расписание для понедельника
loadTimetable('timetable.json', 'Понедельник');



