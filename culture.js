const wordInput = document.getElementById('inputWord');
const text = document.getElementById("text");

wordInput.addEventListener('input', function() {
  const word = wordInput.value.toLowerCase();
  let output = '';

  if (word === 'хуй' || word === 'член' || word === 'пенис') {
    output = 'Хер, банан, петух';
  } else if (word === 'блять' || word === 'сука') {
    output = 'Блин, ой, вот это да';
  } else if (word === 'ебать' || word === 'охуенно') {
    output = 'Здорово! Невероятно, очень хорошо';
  } else if (word === 'пиздец' || word === 'ебанный рот') {
    output = 'Эх, не повезло, черт, все очень плохо.';
  } else if (word === 'иди нахуй' || word === 'заебал') {
    output = 'отстань, надоел, уйди отсюда';
  } else if (word === 'Дамиль' || word === 'Радик' || word ==='Данчик' || word ==='Байсал' || word === 'Арс'){
    output = 'человек, очень хороший человек, идиот';
  } else if (word === 'хуесос' || word === 'пидарас' || word === 'долбаеб') {
    output = 'Гений, не хороший человек, дурак ';
  } else if (word === 'пизда' || word === 'манда' || word === 'анал') {
    output = 'черная дыра, отверстие, пропасть';
  } else if (word === 'соси хуй' || word === 'завали ебало' || word === 'глотай сперму') {
    output = 'Заткнись, помолчи, ты мне мешаешь, я тебя не переношу';
  } else if (word === 'Максим') {
    output = 'У-у-у-ублюдский';
  } else if (word === 'Бека') {
    output = 'Депутат, красный медведь, "это на зубы!"';
  } else if (word === 'Глеб'){
    output = "My name is Gleb, I'm starosta!";
  } else {
    output = 'Нет соответствующих слов';
  }

  text.textContent = output;
});