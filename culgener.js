const wordInput = document.getElementById('word');
const text = document.getElementById("text");

wordInput.addEventListener('input', function() {
  const word = wordInput.value.toLowerCase();
  let output = '';

  if (word === 'хуй' || word === 'член') {
    output = 'Хер, банан, петух';
  } else if (word === 'блять' || word === 'сука') {
    output = 'Блин, ой, вот это да';
  } else if (word === 'ебать' || word === 'охуенно') {
    output = 'Здорово! Невероятно, очень хорошо';
  } else if (word === 'пиздец' || word === 'ебанный рот') {
    output = 'Эх, не повезло, черт, все очень плохо.';
  } else if (word === 'иди нахуй' || word === 'заебал') {
    output = 'отстань, надоел, уйди отсюда';
  } else {
    output = 'Нет соответствующих слов';
  }

  text.textContent = output;
});
