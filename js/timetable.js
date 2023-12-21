document.getElementById('1').classList.add('click'); // По умолчанию активируем кнопку "Понедельник"
// document.getElementById('line_1').classList.add('lineClick');

loadTimetable('json/timetable.json', 'Понедельник'); // Загружаем расписание для понедельника при загрузке страницы
// Обработчики событий для кнопок
document.getElementById('1').addEventListener('click', function () {
    loadTimetable('json/timetable.json', 'Понедельник');
    this.classList.toggle('click');
    // document.getElementById('line_1').classList.toggle('lineClick');


    document.getElementById('2').classList.remove('click');
    document.getElementById('3').classList.remove('click');
    document.getElementById('4').classList.remove('click');
    document.getElementById('5').classList.remove('click');

    // document.getElementById('line_2').classList.remove('lineClick');
    // document.getElementById('line_3').classList.remove('lineClick');
    // document.getElementById('line_4').classList.remove('lineClick');
    // document.getElementById('line_5').classList.remove('lineClick');

});

document.getElementById('2').addEventListener('click', function () {
    loadTimetable('json/timetable.json', 'Вторник');
    this.classList.toggle('click');


    document.getElementById('1').classList.remove('click');
    document.getElementById('3').classList.remove('click');
    document.getElementById('4').classList.remove('click');
    document.getElementById('5').classList.remove('click');

});

document.getElementById('3').addEventListener('click', function () {
    loadTimetable('json/timetable.json', 'Среда');
    this.classList.toggle('click');


    document.getElementById('1').classList.remove('click');
    document.getElementById('2').classList.remove('click');
    document.getElementById('4').classList.remove('click');
    document.getElementById('5').classList.remove('click');

});
document.getElementById('4').addEventListener('click', function () {
    loadTimetable('json/timetable.json', 'Четверг');
    this.classList.toggle('click');


    document.getElementById('1').classList.remove('click');
    document.getElementById('2').classList.remove('click');
    document.getElementById('3').classList.remove('click');
    document.getElementById('5').classList.remove('click');

});

document.getElementById('5').addEventListener('click', function () {
    loadTimetable('json/timetable.json', 'Пятница');
    this.classList.toggle('click');


    document.getElementById('1').classList.remove('click');
    document.getElementById('2').classList.remove('click');
    document.getElementById('3').classList.remove('click');
    document.getElementById('4').classList.remove('click');

});

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
                        lessonContainer.classList.add("lesson_container_class");
                    }
                    if (урок.name === "Кыргызский язык" || 
                        урок.name === "Адабият" ||
                        урок.name === "Английский язык" ||
                        урок.name === "Русский язык" ||
                        урок.name === "Литература") {
                        lessonContainer.classList.add("lesson_container_language");
                    }
                    if (урок.name === "Физика" || 
                        урок.name === "Алгебра" ||
                        урок.name === "Геометрия" ||
                        урок.name === "Химия") {
                        lessonContainer.classList.add("lesson_container_math");
                    }
                    if (урок.name === "ДП" || 
                        урок.name === "История" ||
                        урок.name === "Биология" ||
                        урок.name === "ЧиО" ||
                        урок.name === "География" ||
                        урок.name === "Физкультура") {
                        lessonContainer.classList.add("lesson_container_history");
                    }
                    container.appendChild(lessonContainer);
                });
            }
        });
}

// По умолчанию загрузите расписание для понедельника
loadTimetable('json/timetable.json', 'Понедельник');



