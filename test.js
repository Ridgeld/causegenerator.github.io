const wordInput = document.getElementById('inputWord');
const text = document.getElementById("text");
const button = document.getElementById("check");

button.addEventListener('click', function() {
  const word = wordInput.value;
//   let output;


//   const wordArray = {
//     "хуй": "Хер, петух, банан",
//     "член": "Хер, петух, банан",
//     "пенис": "Хер, петух, банан",
//     "блять": "Блин. Ой, вот это да",
//     "cука": "Блин. Ой, вот это да",
//     "eбать": "Здорово! Невероятно. Очень хорошо",
//     "охуенно": "Здорово! Невероятно. Очень хорошо",
//     "пиздец": "Эх, не повезло. Черт. Все очень плохо",
//     "ебанный рот": "Эх, не повезло. Черт. Все очень плохо",
//     "иди нахуй": "отстань, надоел. Уйди отсюда",
//     "заебал": "отстань, надоел. Уйди отсюда",
//     "хуесос": "Гений. Не хороший человек, дурак",
//     "пидарас": "Гений. Не хороший человек, дурак",
//     "долбаеб": "Гений. Не хороший человек, дурак",
//     "пизда": "Черная дыра. Пропасть",
//     "манда": "Черная дыра. Пропасть",
//     "анал": "Черная дыра. Пропасть",
//     "соси хуй": "Заткнись, помолчи. Ты мне мешаешь",
//     "завали ебало": "Заткнись, помолчи. Ты мне мешаешь",
//     "дамиль": "человек, очень хороший человек",
//     "радик": "Сразу нахуй, чисто нахуй, быстро нахуй, Р-р-радик",
//     "данчик": "человек, очень хороший человек",
//     "байсал": "человек, очень хороший человек",
//     "арс": "По панковски. На мужика!",
//     "глеб": "My name is Gleb. I'm starosta",
//     "максим": "У-у-у-ублюдский",
//     "бека": "Депутат, красный медведь. Это на зубы!",
//   }
//   if (wordArray.hasOwnProperty(word)){
//     output = wordArray[word];
//   }
//   else{
//     output = "Нет соответствующих слов";
//   }

//   text.textContent = output;
const apiKey = "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";

// Текст запроса
const promptText = "word";

// URL для отправки запроса к GPT-3
const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

// Опции запроса
const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    prompt: promptText,
    max_tokens: 100 // Максимальное количество токенов в ответе
  })
};

// Отправляем запрос к GPT-3
fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    const responseText = data.choices[0].text;
    // Отображаем ответ в div с id "line"
    text.textContent = responseText;
  })
  .catch(error => {
    console.error("Ошибка при отправке запроса к GPT-3:", error);
  });
});

