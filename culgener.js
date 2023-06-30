const wordInput = document.getElementById('word');
const causeplcDiv = document.querySelector('.causeplc');

wordInput.addEventListener('input', function() {
  const word = wordInput.value.toLowerCase();
  let output = '';

  if (word === 'привет') {
    output = 'hello';
  } else if (word === 'салам') {
    output = 'салам';
  } else if (word === 'hi') {
    output = 'hi';
  } else {
    output = 'Нет соответствующих слов';
  }

  causeplcDiv.textContent = output;
});
