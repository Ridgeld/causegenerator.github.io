// const menu_button = document.getElementById('menu');
// menu_button.addEventListener( 'click', function(){
//     window.location.href = "menu.html";
// });
// const sendButton = document.getElementById('send');
// const messagePlace = document.getElementById('message_place');
// const messageInput = document.getElementById('message');
// // Функция, которая создает сообщение и добавляет его в контейнер
// function createMessage() {
//     // Находим контейнер для сообщений
//     const messageText = messageInput.value.trim();

//     // Создаем элементы сообщения
// if (messageText !== ""){
//     const message_container = document.createElement("div");
//     message_container.className = "message_container";

//     const avatar = document.createElement("div");
//     avatar.className = "avatar_place";
//     avatar.innerHTML = 
//     `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
//         <circle cx="15.5" cy="15" r="15" fill="#D9D9D9"/>
//         <path d="M7.5 21C7.5 19.9391 7.92143 18.9217 8.67157 18.1716C9.42172 17.4214 10.4391 17 11.5 17H19.5C20.5609 17 21.5783 17.4214 22.3284 18.1716C23.0786 18.9217 23.5 19.9391 23.5 21C23.5 21.5304 23.2893 22.0391 22.9142 22.4142C22.5391 22.7893 22.0304 23 21.5 23H9.5C8.96957 23 8.46086 22.7893 8.08579 22.4142C7.71071 22.0391 7.5 21.5304 7.5 21Z" stroke="#121218" stroke-width="2" stroke-linejoin="round"/>
//         <path d="M15.5 13C17.1569 13 18.5 11.6569 18.5 10C18.5 8.34315 17.1569 7 15.5 7C13.8431 7 12.5 8.34315 12.5 10C12.5 11.6569 13.8431 13 15.5 13Z" stroke="#121218" stroke-width="2"/>
//     </svg>`
//     message_container.appendChild(avatar);
//     const messageText = document.createElement("div");
//     messageText.className = "message_text";
//     messageText.textContent = messageInput.value; // Здесь можно вставить ваш текст

//     // Добавляем div с текстом в div сообщения
//     message_container.appendChild(messageText);

//     // Добавляем сообщение в контейнер
//     messagePlace.appendChild(message_container);
//     // Очищаем поле ввода
//     messageInput.value = "";

// }
// if (messageText === "э"){
//     const message_container = document.createElement("div");
//     message_container.className = "message_container";

//     const avatar = document.createElement("div");
//     avatar.className = "avatar_place";
//     avatar.innerHTML = 
//     `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
//         <circle cx="15.5" cy="15" r="15" fill="#2400FF"/>
//         <path d="M18.9097 6.73804C19.0124 6.79714 19.0918 6.88906 19.1351 6.99879C19.1783 7.10852 19.1828 7.22957 19.1478 7.34217L17.2587 13.4377H20.7443C20.8467 13.4376 20.9469 13.4674 21.0325 13.5232C21.1181 13.5791 21.1854 13.6586 21.226 13.752C21.2666 13.8454 21.2787 13.9485 21.261 14.0487C21.2432 14.1489 21.1963 14.2417 21.1261 14.3157L12.7348 23.1694C12.6536 23.2551 12.5455 23.311 12.4282 23.328C12.311 23.3449 12.1914 23.3219 12.0889 23.2627C11.9865 23.2035 11.9073 23.1116 11.8642 23.002C11.8211 22.8924 11.8166 22.7715 11.8516 22.659L13.7407 16.5625H10.2551C10.1527 16.5625 10.0525 16.5328 9.9669 16.4769C9.8813 16.421 9.81404 16.3415 9.77344 16.2481C9.73283 16.1547 9.72065 16.0516 9.7384 15.9514C9.75616 15.8512 9.80306 15.7584 9.87333 15.6844L18.2646 6.83074C18.3457 6.74512 18.4536 6.68926 18.5707 6.67224C18.6878 6.65522 18.8073 6.67804 18.9097 6.737V6.73804Z" fill="white"/>
//     </svg>`
//     message_container.appendChild(avatar);
//     const messageText = document.createElement("div");
//     messageText.className = "message_text";
//     messageText.textContent = "Пошел нахуй!"; // Здесь можно вставить ваш текст

//     // Добавляем div с текстом в div сообщения
//     message_container.appendChild(messageText);

//     // Добавляем сообщение в контейнер
//     messagePlace.appendChild(message_container);
//     // Очищаем поле ввода
//     messageInput.value = "";

// }
// }
// // Находим кнопку и добавляем обработчик события на клик
// sendButton.addEventListener("click", createMessage);
// messageInput.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         createMessage();
//     }
// });
const menu_button = document.getElementById('menu');
menu_button.addEventListener('click', function () {
    window.location.href = "menu.html";
});
const sendButton = document.getElementById('send');
const messagePlace = document.getElementById('message_place');
const messageInput = document.getElementById('message');

// Функция для создания сообщения и добавления его в контейнер
// Функция для создания сообщения и добавления его в контейнер
function createMessage() {
    // Очищаем контейнер сообщений от предыдущих сообщений
    messagePlace.innerHTML = "";

    const messageText = messageInput.value.trim().toLowerCase();

    // Загрузим JSON с ответами
    fetch('response.json')
        .then(response => response.json())
        .then(responses => {
            const message_container = document.createElement("div");
            message_container.className = "message_container";

            const avatar = document.createElement("div");
            avatar.className = "avatar_place";

            const messageTextDiv = document.createElement("div");
            messageTextDiv.className = "message_text";

            // Проверим, есть ли ответ в JSON для введенного текста
            const response = responses[messageText];

            if (response) {
                avatar.innerHTML = `
                    <!-- SVG для аватара -->
                `;
                messageTextDiv.textContent = response;
            } else {
                avatar.innerHTML = `
                    <!-- Другой аватар по умолчанию -->
                `;

                if (messageText.startsWith('/info')) {
                    // Отправляем список доступных команд
                    messageTextDiv.textContent = "Доступные команды:\n- /info: Показать список доступных команд";
                } else {
                    messageTextDiv.textContent = "Извините, я не понимаю. Можете перефразировать?";
                }
            }

            // Добавим аватар и текст в контейнер сообщения
            message_container.appendChild(avatar);
            message_container.appendChild(messageTextDiv);

            // Добавим сообщение в контейнер
            messagePlace.appendChild(message_container);

            // Очистим поле ввода
            messageInput.value = "";
        })
        .catch(error => console.error("Ошибка при загрузке JSON: " + error));
}


// Найдем кнопку и добавим обработчик события на клик
sendButton.addEventListener("click", createMessage);

// Добавим возможность отправлять сообщение по нажатию Enter
messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        createMessage();
    }
});
