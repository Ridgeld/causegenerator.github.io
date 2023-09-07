const first = document.getElementById('PN');
const second = document.getElementById('BT');
const third= document.getElementById('CP');
const fourth = document.getElementById('JT');
const fiveth = document.getElementById('HT');
const sixth = document.getElementById('CB');


const lineFir = document.getElementById('line1');
const lineSec = document.getElementById('line2');
const lineThi = document.getElementById('line3');
const lineFor = document.getElementById('line4');
const lineFiv = document.getElementById('line5');
const lineSix = document.getElementById('line6');

const lessonTable = document.getElementById('lessonTable');
last = document.getElementById('last')

first.addEventListener('click', () => {
  first.classList.toggle('clicked');
  lineFir.classList.toggle('lineClick');

  second.classList.remove('clicked');
  lineSec.classList.remove('lineClick');

  third.classList.remove('clicked');
  lineThi.classList.remove('lineClick');

  fourth.classList.remove('clicked');
  lineFor.classList.remove('lineClick');

  fiveth.classList.remove('clicked');
  lineFiv.classList.remove('lineClick');

//   sixth.classList.remove('clicked');
//   lineSix.classList.remove('lineClick');

//   Понедельник
  lesson1.textContent = 'Русский язык';
  lesson2.textContent = 'Литература';
  lesson3.textContent = 'История';
  lesson4.textContent = 'Английский язык';
  lesson5.textContent = 'Физкультура';
  preLast.classList.remove('hidden');
  lesson6.textContent = 'Кыргызский язык';
  last.classList.remove('hidden');
  lesson7.textContent = 'ЧиО';
});

second.addEventListener('click', () => {
    second.classList.toggle('clicked');
    lineSec.classList.toggle('lineClick');

    first.classList.remove('clicked');
    lineFir.classList.remove('lineClick');

    third.classList.remove('clicked');
    lineThi.classList.remove('lineClick');

    fourth.classList.remove('clicked');
    lineFor.classList.remove('lineClick');

    fiveth.classList.remove('clicked');
    lineFiv.classList.remove('lineClick');

    // sixth.classList.remove('clicked');
    // lineSix.classList.remove('lineClick');
// Вторник
    lesson1.textContent = 'Биология';
    lesson2.textContent = 'Кыргызский язык';
    lesson3.textContent = 'Физика';
    lesson4.textContent = 'Физика';
    lesson5.textContent = 'Литература';
    preLast.classList.remove('hidden');
    lesson6.textContent = 'Английский язык';
    last.classList.remove('hidden');
    lesson7.textContent = 'Английский язык';
});

third.addEventListener('click', () => {
    third.classList.toggle('clicked');
    lineThi.classList.toggle('lineClick');

    first.classList.remove('clicked');
    lineFir.classList.remove('lineClick');

    second.classList.remove('clicked');
    lineSec.classList.remove('lineClick');

    fourth.classList.remove('clicked');
    lineFor.classList.remove('lineClick');

    fiveth.classList.remove('clicked');
    lineFiv.classList.remove('lineClick');

    // sixth.classList.remove('clicked');
    // lineSix.classList.remove('lineClick');
// Среда
    lesson1.textContent = 'Химия';
    lesson2.textContent = 'Адабият';
    lesson3.textContent = 'Классный час';
    lesson4.textContent = 'Физкультура';
    lesson5.textContent = 'Алгебра';
    preLast.classList.remove('hidden');
    lesson6.textContent = 'Геометрия';
    last.classList.remove('hidden');
    lesson7.textContent = 'Английский язык';
    
});
fourth.addEventListener('click', () => {
    fourth.classList.toggle('clicked');
    lineFor.classList.toggle('lineClick');

    first.classList.remove('clicked');
    lineFir.classList.remove('lineClick');

    second.classList.remove('clicked');
    lineSec.classList.remove('lineClick');

    third.classList.remove('clicked');
    lineThi.classList.remove('lineClick');

    fiveth.classList.remove('clicked');
    lineFiv.classList.remove('lineClick');

    // sixth.classList.remove('clicked');
    // lineSix.classList.remove('lineClick');

// Четверг
    lesson1.textContent = 'География';
    lesson2.textContent = 'Английский язык';
    lesson3.textContent = 'Кыргызский язык';
    lesson4.textContent = 'Алгебра';
    lesson5.textContent = 'Физика';
    preLast.classList.remove('hidden');
    lesson6.textContent = 'ДП';
    last.classList.remove('hidden');
    lesson7.textContent = 'ДП';
});
fiveth.addEventListener('click', () => {
    fiveth.classList.toggle('clicked');
    lineFiv.classList.toggle('lineClick');

    first.classList.remove('clicked');
    lineFir.classList.remove('lineClick');

    second.classList.remove('clicked');
    lineSec.classList.remove('lineClick');

    third.classList.remove('clicked');
    lineThi.classList.remove('lineClick');

    fourth.classList.remove('clicked');
    lineFor.classList.remove('lineClick');

    // sixth.classList.remove('clicked');
    // lineSix.classList.remove('lineClick');

// Пятница 
    lesson1.textContent = 'Кыргызский язык';
    lesson2.textContent = 'История';
    lesson3.textContent = 'Английский язык';
    lesson4.textContent = 'Химия';
    lesson5.textContent = 'Алгебра';
    preLast.classList.remove('hidden');
    lesson6.textContent = 'Русский язык';
    last.classList.remove('hidden');
    lesson7.textContent = 'Литература';
});

// sixth.addEventListener('click', () => {
//     sixth.classList.toggle('clicked');
//     lineSix.classList.toggle('lineClick');

//     first.classList.remove('clicked');
//     lineFir.classList.remove('lineClick');

//     second.classList.remove('clicked');
//     lineSec.classList.remove('lineClick');

//     third.classList.remove('clicked');
//     lineThi.classList.remove('lineClick');

//     fourth.classList.remove('clicked');
//     lineFor.classList.remove('lineClick');

//     fiveth.classList.remove('clicked');
//     lineFiv.classList.remove('lineClick');

//     lesson1.textContent = 'Кыргызский язык';
//     lesson2.textContent = 'Физика';
//     lesson3.textContent = 'Физика';
//     lesson4.textContent = 'ДП';
//     lesson5.textContent = 'ДП';
//     preLast.classList.add('hidden');
//     last.classList.add('hidden');
// });

