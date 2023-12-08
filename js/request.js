const messagePlace = document.getElementById('place');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const commandList = document.getElementById('command_list');
const commands = document.getElementById('commands');

messageInput.addEventListener('input', () => {
    const text = messageInput.value.toLowerCase();

    if (text.startsWith('/')) {
        // Если текст начинается с '/', отобразить список команд
        commandList.style.display = 'block';
    } else {
        // В противном случае скрыть список команд
        commandList.style.display = 'none';
    }
});
commands.addEventListener('click', (event) => {
    // Обработка выбора команды из списка
    const selectedCommand = event.target.textContent.split(' - ')[0];
    messageInput.value = selectedCommand;
    commandList.style.display = 'none';
});

function generation(file_path){
    return fetch(`assets/${file_path}`)
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const randomIndex = Math.floor(Math.random() * lines.length);
            const text = lines[randomIndex];
            setTimeout( createMessage, 1000, text, false );
            saveMessageToLocalStorage({ text: text, user: false });
        });
}
function timetable(dayInput){
    const filePath = 'json/timetable.json';

    // Запрос на загрузку файла
    fetch(filePath)
        .then(response => response.json())
        .then(schedule => {
            // Извлечение уроков по выбранному дню недели
            const selectedDaySchedule = schedule.find(day => day.day.toLowerCase() === dayInput.toLowerCase());

            if (selectedDaySchedule) {
                // Формирование строки с нумерацией и названиями уроков
                const lessonsInfo = selectedDaySchedule.lessons.map((lesson, index) => `${index + 1}. ${lesson.name}`).join('<br>');
                // alert(`Названия уроков на ${selectedDaySchedule.day}:\n${lessonsInfo}`);
                setTimeout( createMessage, 1000, `Названия уроков на ${selectedDaySchedule.day}:<br>${lessonsInfo}`, false)
                saveMessageToLocalStorage({ text: `Названия уроков на ${selectedDaySchedule.day}:<br>${lessonsInfo}`, user: false });
            } else {
                alert(`Расписание на ${dayInput} не найдено.`);
            }
        })
        .catch(error => {
            console.error(`Ошибка при загрузке файла: ${error.message}`);
        });
}
// function gptMessage(text){
    let request = axios.create({
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    const requestFunc = (text) => {
        const load_body = document.createElement('div');
        load_body.className = "load_body";
        const avatar_container = document.createElement('div');
        avatar_container.className = "avatar_container";
        avatar_container.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                <circle cx="15.5" cy="15" r="15" fill="#2400FF"/>
                <path d="M18.9097 6.73798C19.0124 6.79708 19.0918 6.889 19.1351 6.99873C19.1783 7.10846 19.1828 7.22951 19.1478 7.34211L17.2587 13.4376H20.7443C20.8467 13.4376 20.9469 13.4673 21.0325 13.5232C21.1181 13.579 21.1854 13.6586 21.226 13.7519C21.2666 13.8453 21.2787 13.9485 21.261 14.0487C21.2432 14.1488 21.1963 14.2417 21.1261 14.3157L12.7348 23.1693C12.6536 23.2551 12.5455 23.311 12.4282 23.3279C12.311 23.3449 12.1914 23.3219 12.0889 23.2627C11.9865 23.2035 11.9073 23.1116 11.8642 23.0019C11.8211 22.8923 11.8166 22.7714 11.8516 22.6589L13.7407 16.5624H10.2551C10.1527 16.5625 10.0525 16.5327 9.9669 16.4768C9.8813 16.421 9.81404 16.3415 9.77344 16.2481C9.73283 16.1547 9.72065 16.0515 9.7384 15.9514C9.75616 15.8512 9.80306 15.7584 9.87333 15.6843L18.2646 6.83068C18.3457 6.74506 18.4536 6.6892 18.5707 6.67218C18.6878 6.65516 18.8073 6.67798 18.9097 6.73693V6.73798Z" fill="white"/>
            </svg>`;
        load_body.appendChild(avatar_container);
        const message_text = document.createElement('div');
        message_text.className = "message_text";
        message_text.innerText = "Ждем ответ...";
        load_body.appendChild(message_text);
        load_body.style.animation = 'load 2s infinite';
        const container = document.getElementById('place');
        container.appendChild(load_body);
        let textForRequest = {
            "role" : "user",
            "content" : `${text}`
        }
        let params = {
            "model" : "gpt-3.5-turbo",
            "messages" : [textForRequest] 
        };
        // request.post('https://api.openai.com/v1/chat/completions', params)
        request.post('https://api.openai.com/v1/chat/completions',params)
        .then(response => {
                container.removeChild(load_body);
                // message.innerText = response.data.choices[0].message.content;
                // console.log(response.data.choices[0].message.content);
                console.log(1)
                setTimeout( createMessage, 1000, response.data.choices[0].message.content, false)
                saveMessageToLocalStorage({ text: response.data.choices[0].message.content, user: false });
        });
    }
// }
function createAnswer(message){
    setTimeout( createMessage, 1000, message, false)
    saveMessageToLocalStorage({ text: message, user: false });
}
function startGame(message){
    setTimeout( createMessage, 1000, message, false)
    saveMessageToLocalStorage({ text: message, user: false });
    setTimeout(window.location.href = "games_menu.html", 20000)
}
// Функция для загрузки сообщений из localStorage
function loadMessagesFromLocalStorage() {
    const storedMessages = localStorage.getItem('chatMessages');
    
    if (storedMessages) {
        const messages = JSON.parse(storedMessages);
        
        // Очищаем контейнер для сообщений
        messagePlace.innerHTML = '';
        
        // Добавляем каждое сообщение из localStorage в чат
        messages.forEach(message => createMessage(message.text, message.user));
    }
}

// Функция для сохранения сообщения в localStorage
function saveMessageToLocalStorage(message) {
    const storedMessages = localStorage.getItem('chatMessages');
    let messages = storedMessages ? JSON.parse(storedMessages) : [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Создание сообщения и добавление в контейнер
function createMessage(message, isUser) {
    const message_container = document.createElement("div");
    message_container.className = "message_body";
    message_container.setAttribute("data-type", isUser ? "user" : "server");
    
    const avatar = document.createElement("div");
    avatar.className = "avatar_container";
    const avatarColor = isUser ? "#D9D9D9" : "#2400FF";
    
    const svgContent = isUser
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path d="M7.5 21C7.5 19.9391 7.92143 18.9217 8.67157 18.1716C9.42172 17.4214 10.4391 17 11.5 17H19.5C20.5609 17 21.5783 17.4214 22.3284 18.1716C23.0786 18.9217 23.5 19.9391 23.5 21C23.5 21.5304 23.2893 22.0391 22.9142 22.4142C22.5391 22.7893 22.0304 23 21.5 23H9.5C8.96957 23 8.46086 22.7893 8.08579 22.4142C7.71071 22.0391 7.5 21.5304 7.5 21Z" stroke="#121218" stroke-width="2" stroke-linejoin="round"/>
            <path d="M15.5 13C17.1569 13 18.5 11.6569 18.5 10C18.5 8.34315 17.1569 7 15.5 7C13.8431 7 12.5 8.34315 12.5 10C12.5 11.6569 13.8431 13 15.5 13Z" stroke="#121218" stroke-width="2"/>
           </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
             <path d="M18.9097 6.73798C19.0124 6.79708 19.0918 6.889 19.1351 6.99873C19.1783 7.10846 19.1828 7.22951 19.1478 7.34211L17.2587 13.4376H20.7443C20.8467 13.4376 20.9469 13.4673 21.0325 13.5232C21.1181 13.579 21.1854 13.6586 21.226 13.7519C21.2666 13.8453 21.2787 13.9485 21.261 14.0487C21.2432 14.1488 21.1963 14.2417 21.1261 14.3157L12.7348 23.1693C12.6536 23.2551 12.5455 23.311 12.4282 23.3279C12.311 23.3449 12.1914 23.3219 12.0889 23.2627C11.9865 23.2035 11.9073 23.1116 11.8642 23.0019C11.8211 22.8923 11.8166 22.7714 11.8516 22.6589L13.7407 16.5624H10.2551C10.1527 16.5625 10.0525 16.5327 9.9669 16.4768C9.8813 16.421 9.81404 16.3415 9.77344 16.2481C9.73283 16.1547 9.72065 16.0515 9.7384 15.9514C9.75616 15.8512 9.80306 15.7584 9.87333 15.6843L18.2646 6.83068C18.3457 6.74506 18.4536 6.6892 18.5707 6.67218C18.6878 6.65516 18.8073 6.67798 18.9097 6.73693V6.73798Z" fill="white"/>
           </svg>`;
    
    avatar.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <circle cx="15.5" cy="15" r="15" fill="${avatarColor}"/>
            ${svgContent}
        </svg>`;
    
    message_container.appendChild(avatar);
    
    const messageText = document.createElement("div");
    messageText.className = "message_text";
    messageText.innerHTML = message;
    
    message_container.appendChild(messageText);
    
    messagePlace.appendChild(message_container);
    messageInput.value = '';
}

// Загрузка сообщений из localStorage при загрузке страницы
loadMessagesFromLocalStorage();

const responses = {
    "привет": "Привет! Я новый чат-бот GENERY",
    "как дела?": "Отлично, как сам?",
    "сгенерируй случайное число": "Сгенерировано случайное число: " + Math.floor(Math.random() * 100),
    "/info":"Список запросов:<br><br>• Сгенерируй мне причину не идти на урок<br><br>• Сгенерируй мне цитату<br><br>• Сгененрируй мне профессию<br><br>• Подбери аналог к слову *ваше слово*.",
    "иди нахуй":"Туда пойду, тебя найду.",
};

const wordPairs = {
    "хуй": "Хер, петух, банан",
    "член": "Хер, петух, банан",
    "пенис": "Хер, петух, банан",
    "блять": "Блин. Ой, вот это да",
    "cука": "Блин. Ой, вот это да",
    "eбать": "Здорово! Невероятно. Очень хорошо",
    "охуенно": "Здорово! Невероятно. Очень хорошо",
    "пиздец": "Эх, не повезло. Черт. Все очень плохо",
    "ебанный рот": "Эх, не повезло. Черт. Все очень плохо",
    "иди нахуй": "отстань, надоел. Уйди отсюда",
    "заебал": "отстань, надоел. Уйди отсюда",
    "хуесос": "Гений. Не хороший человек, дурак",
    "пидарас": "Гений. Не хороший человек, дурак",
    "долбаеб": "Гений. Не хороший человек, дурак",
    "пизда": "Черная дыра. Пропасть",
    "манда": "Черная дыра. Пропасть",
    "анал": "Черная дыра. Пропасть",
    "соси хуй": "Заткнись, помолчи. Ты мне мешаешь",
    "завали ебало": "Заткнись, помолчи. Ты мне мешаешь",
    "дамиль": "человек, очень хороший человек",
    "радик": "Сразу нахуй, чисто нахуй, быстро нахуй, Р-р-радик",
    "данчик": "человек, очень хороший человек",
    "байсал": "человек, очень хороший человек",
    "арс": "По панковски. На мужика!",
    "глеб": "My name is Gleb. I'm starosta",
    "максим": "У-у-у-ублюдский",
    "бека": "Депутат, красный медведь. Это на зубы!",
};
// Обработчик отправки сообщения

function handleUserInput() {
    const userInput = messageInput.value;
    
    if (!userInput) {
        return;
    }
    createMessage(userInput, true);
    saveMessageToLocalStorage({ text: userInput, user: true });

    const textForResponse = userInput.toLowerCase();
    
    const regex = /подбери аналог к слову (.+)/;
    const match = textForResponse.match(regex);

    if (match) {
        const wordToFind = match[1];
        if (wordPairs.hasOwnProperty(wordToFind)) {
            const analogWord = wordPairs[wordToFind];
            setTimeout(createMessage, 1000, `Аналог к слову "${wordToFind}" - это "${analogWord}".`, false);
            return saveMessageToLocalStorage({text:`Аналог к слову "${wordToFind}" - это "${analogWord}".`,user: false});
        }
        else{
            setTimeout(createMessage, 1000, `Аналог к слову "${wordToFind}" - не найден.`, false);
            return saveMessageToLocalStorage({text:`Аналог к слову "${wordToFind}" - не найден.`,user: false});
        }
        return
    }
    if (textForResponse in responses) {
        const response = responses[textForResponse];
        setTimeout(createMessage, 1000, response, false);
        return saveMessageToLocalStorage({ text: response, user: false });
    }
    if ( textForResponse.includes('пацан') && textForResponse.includes('цитат') ) {
        return generation("citata.txt")
    }
    if ( textForResponse.includes('цитат') ) {
        return generation("citata.txt")
    }
    if ( textForResponse.includes('професси') || textForResponse.includes('работ') ) {
        return generation("work.txt")
    }
    if ( textForResponse.includes('причин') ) {
        // setTimeout( createMessage, 1000, generation("cause.txt"), false );
        // return saveMessageToLocalStorage({ text: generation("cause.txt"), user: false });
        return generation("cause.txt")
    }  
    if (['понедельник', 'вторник', 'сред', 'четверг', 'пятниц'].some(day => textForResponse.includes(day))) {
        // return timetable('понедельник');
        const dayRegex = /(понедельник|вторник|среда|четверг|пятница)/i;

        // Используем метод match для поиска совпадений в тексте
        const matches = textForResponse.match(dayRegex);
    
        // Возвращаем найденное название дня (или null, если ничего не найдено)
        return matches ? timetable(matches[0].toLowerCase()) : null;
    }
    
    if ( textForResponse.includes('спасибо!') ) {
        return createAnswer("Не за что, брат!")
    }
    if ( textForResponse.includes('gpt') ) {
        return requestFunc(textForResponse);
    }
    if ( textForResponse.includes('хочу играть') ) {
        return startGame("Желаю отлично провести время!")
    }
    if ( textForResponse === "/clear"){
        localStorage.clear('chatMessages');
        return location.reload();
    }
    else {
        createMessage("Неизвестная команда!<br>Используйте /info для списка доступных команд ", false);
        saveMessageToLocalStorage({ text: "Неизвестная команда!<br>Используйте /info для списка доступных команд ", user: false });
    }
}

sendButton.addEventListener("click", handleUserInput);

messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
