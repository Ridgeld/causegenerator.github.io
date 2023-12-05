// License CC0 1.0 Universal 
// https://gist.github.com/straker/3c98304f8a6a9174efd8292800891ea1
// https://tetris.fandom.com/wiki/Tetris_Guideline

// получаем доступ к холсту
document.body.style.overflow = 'hidden';
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const scoreCount = document.getElementById("score");
const close_button = document.getElementById("close");
const continue_button = document.getElementById("continue");
const space_area = document.getElementById("area");
const popup_text = document.getElementById("text");
const popup_title = document.getElementById("title");
const svg_place = document.getElementById("svg");
const gradient = document.getElementById("gradient");

// размер квадратика
const grid = 32;
let score = 0;
// массив с последовательностями фигур, на старте — пустой
var tetrominoSequence = [];

const handleGameOver = () =>{
    const popup = document.querySelector('.popup');
    // clearInterval(setIntervalId);
    popup_title.textContent = "Вы програли!";
    gradient.classList.add("gradient_red");
    svg_place.innerHTML= `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.5C20 16.023 15.523 20.5 10 20.5C4.477 20.5 0 16.023 0 10.5C0 4.977 4.477 0.5 10 0.5C15.523 0.5 20 4.977 20 10.5ZM6.97 7.47C7.11063 7.32955 7.30125 7.25066 7.5 7.25066C7.69875 7.25066 7.88937 7.32955 8.03 7.47L10 9.44L11.97 7.47C12.1122 7.33752 12.3002 7.2654 12.4945 7.26882C12.6888 7.27225 12.8742 7.35097 13.0116 7.48838C13.149 7.62579 13.2277 7.81118 13.2312 8.00548C13.2346 8.19978 13.1625 8.38782 13.03 8.53L11.06 10.5L13.03 12.47C13.1625 12.6122 13.2346 12.8002 13.2312 12.9945C13.2277 13.1888 13.149 13.3742 13.0116 13.5116C12.8742 13.649 12.6888 13.7277 12.4945 13.7312C12.3002 13.7346 12.1122 13.6625 11.97 13.53L10 11.56L8.03 13.53C7.88782 13.6625 7.69978 13.7346 7.50548 13.7312C7.31118 13.7277 7.12579 13.649 6.98838 13.5116C6.85097 13.3742 6.77225 13.1888 6.76882 12.9945C6.7654 12.8002 6.83752 12.6122 6.97 12.47L8.94 10.5L6.97 8.53C6.82955 8.38937 6.75066 8.19875 6.75066 8C6.75066 7.80125 6.82955 7.61063 6.97 7.47Z" fill="#FF003D"/>
    </svg>`;
    popup.classList.add('open');
    return
}

// с помощью двумерного массива следим за тем, что находится в каждой клетке игрового поля
// размер поля — 10 на 20, и несколько строк ещё находится за видимой областью
var playfield = [];

// заполняем сразу массив пустыми ячейками
for (let row = -2; row < 18; row++) {
  playfield[row] = [];

  for (let col = 0; col < 10; col++) {
    playfield[row][col] = 0;
  }
}

// как рисовать каждую фигуру
// https://tetris.fandom.com/wiki/SRS
const tetrominos = {
  'I': [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]
  ],
  'J': [
    [1,0,0],
    [1,1,1],
    [0,0,0],
  ],
  'L': [
    [0,0,1],
    [1,1,1],
    [0,0,0],
  ],
  'O': [
    [1,1],
    [1,1],
  ],
  'S': [
    [0,1,1],
    [1,1,0],
    [0,0,0],
  ],
  'Z': [
    [1,1,0],
    [0,1,1],
    [0,0,0],
  ],
  'T': [
    [0,1,0],
    [1,1,1],
    [0,0,0],
  ]
};

// цвет каждой фигуры
const colors = {
  'I': '#0075FF',
  'O': '#FFF500',
  'T': '#FA00FF',
  'S': '#00FF75',
  'Z': '#FF003D',
  'J': '#2400FF',
  'L': '#FF5C00'
};

// счётчик
let count = 0;
// текущая фигура в игре
let tetromino = getNextTetromino();
// следим за кадрами анимации, чтобы если что — остановить игру
let rAF = null;  
// флаг конца игры, на старте — неактивный
let gameOver = false;


// Функция возвращает случайное число в заданном диапазоне
// https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// создаём последовательность фигур, которая появится в игре
//https://tetris.fandom.com/wiki/Random_Generator
function generateSequence() {
  // тут — сами фигуры
  const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

  while (sequence.length) {
    // случайным образом находим любую из них
    const rand = getRandomInt(0, sequence.length - 1);
    const name = sequence.splice(rand, 1)[0];
    // помещаем выбранную фигуру в игровой массив с последовательностями
    tetrominoSequence.push(name);
  }
}

// получаем следующую фигуру
function getNextTetromino() {
  // если следующей нет — генерируем
  if (tetrominoSequence.length === 0) {
    generateSequence();
  }
  // берём первую фигуру из массива
  const name = tetrominoSequence.pop();
  // сразу создаём матрицу, с которой мы отрисуем фигуру
  const matrix = tetrominos[name];

  // I и O стартуют с середины, остальные — чуть левее
  const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

  // I начинает с 21 строки (смещение -1), а все остальные — со строки 22 (смещение -2)
  const row = name === 'I' ? -1 : -2;

  // вот что возвращает функция 
  return {
    name: name,      // название фигуры (L, O, и т.д.)
    matrix: matrix,  // матрица с фигурой
    row: row,        // текущая строка (фигуры стартую за видимой областью холста)
    col: col         // текущий столбец
  };
}

// поворачиваем матрицу на 90 градусов
// https://codereview.stackexchange.com/a/186834
function rotate(matrix) {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) =>
    row.map((val, j) => matrix[N - j][i])
  );
  // на входе матрица, и на выходе тоже отдаём матрицу
  return result;
}

// проверяем после появления или вращения, может ли матрица (фигура) быть в этом месте поля или она вылезет за его границы
function isValidMove(matrix, cellRow, cellCol) {
  // проверяем все строки и столбцы
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] && (
          // если выходит за границы поля…
          cellCol + col < 0 ||
          cellCol + col >= playfield[0].length ||
          cellRow + row >= playfield.length ||
          // …или пересекается с другими фигурами
          playfield[cellRow + row][cellCol + col])
        ) {
        // то возвращаем, что нет, так не пойдёт
        return false;
      }
    }
  }
  // а если мы дошли до этого момента и не закончили раньше — то всё в порядке
  return true;
}

// когда фигура окончательна встала на своё место
function placeTetromino() {
  // обрабатываем все строки и столбцы в игровом поле
  for (let row = 0; row < tetromino.matrix.length; row++) {
    for (let col = 0; col < tetromino.matrix[row].length; col++) {
      if (tetromino.matrix[row][col]) {

        // если край фигуры после установки вылезает за границы поля, то игра закончилась
        if (tetromino.row + row < 0) {
            return handleGameOver();
        }
        // если всё в порядке, то записываем в массив игрового поля нашу фигуру
        playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
        score++;
        scoreCount.textContent = score;
      }
    } 
  }

  // проверяем, чтобы заполненные ряды очистились снизу вверх
  for (let row = playfield.length - 1; row >= 0; ) {
    // если ряд заполнен
    if (playfield[row].every(cell => !!cell)) {
        score +=100;
        scoreCount.textContent = score;
      // очищаем его и опускаем всё вниз на одну клетку
      for (let r = row; r >= 0; r--) {
        for (let c = 0; c < playfield[r].length; c++) {
          playfield[r][c] = playfield[r-1][c];
        }
      }
    }
    else {
      // переходим к следующему ряду
      row--;
    }
  }
  // получаем следующую фигуру
  tetromino = getNextTetromino();
}

  // показываем надпись Game Over
  function showGameOver() {
    // прекращаем всю анимацию игры
    cancelAnimationFrame(rAF);
    // ставим флаг окончания
    gameOver = true;
    // рисуем чёрный прямоугольник посередине поля
    context.fillStyle = 'black';
    context.globalAlpha = 0.75;
    context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
    // пишем надпись белым моноширинным шрифтом по центру
    context.globalAlpha = 1;
    context.fillStyle = 'white';
    context.font = '36px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
  }



// главный цикл игры
function loop() {
  // начинаем анимацию
  rAF = requestAnimationFrame(loop);
  // очищаем холст
  context.clearRect(0,0,canvas.width,canvas.height);

  // рисуем игровое поле с учётом заполненных фигур
  for (let row = 0; row < 18; row++) {
    for (let col = 0; col < 10; col++) {
      if (playfield[row][col]) {
        const name = playfield[row][col];
        context.fillStyle = colors[name];

        // рисуем всё на один пиксель меньше, чтобы получился эффект «в клетку»
        context.fillRect(col * grid, row * grid, grid-1, grid-1);
      }
    }
  }

  // рисуем текущую фигуру
  if (tetromino) {

    // фигура сдвигается вниз каждые 35 кадров
    if (++count > 35) {
      tetromino.row++;
      count = 0;

      // если движение закончилось — рисуем фигуру в поле и проверяем, можно ли удалить строки
      if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
        tetromino.row--;
        placeTetromino();
      }
    }

    // не забываем про цвет текущей фигуры
    context.fillStyle = colors[tetromino.name];

    // отрисовываем её
    for (let row = 0; row < tetromino.matrix.length; row++) {
      for (let col = 0; col < tetromino.matrix[row].length; col++) {
        if (tetromino.matrix[row][col]) {

          // и снова рисуем на один пиксель меньше
          context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid-1, grid-1);
        }
      }
    }
  }
}

// следим за нажатиями на клавиши

// document.addEventListener('keydown', function(e) {
//   // если игра закончилась — сразу выходим
//   if (gameOver) return;

//   // стрелки влево и вправо
//   if (e.which === 37 || e.which === 39) {
//     const col = e.which === 37
//       // если влево, то уменьшаем индекс в столбце, если вправо — увеличиваем
//       ? tetromino.col - 1
//       : tetromino.col + 1;

//     // если так ходить можно, то запоминаем текущее положение 
//     if (isValidMove(tetromino.matrix, tetromino.row, col)) {
//       tetromino.col = col;
//     }
//   }

//   // стрелка вверх — поворот
//   if (e.which === 38) {
//     // поворачиваем фигуру на 90 градусов
//     const matrix = rotate(tetromino.matrix);
//     // если так ходить можно — запоминаем
//     if (isValidMove(matrix, tetromino.row, tetromino.col)) {
//       tetromino.matrix = matrix;
//     }
//   }

//   // стрелка вниз — ускорить падение
//   if(e.which === 40) {
//     // смещаем фигуру на строку вниз
//     const row = tetromino.row + 1;
//     // если опускаться больше некуда — запоминаем новое положение
//     if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
//       tetromino.row = row - 1;
//       // ставим на место и смотрим на заполненные ряды
//       placeTetromino();
//       return;
//     }
//     // запоминаем строку, куда стала фигура
//     tetromino.row = row;
//   }
// });
const touchArea = document.getElementById('game'); // Добавляем контейнер для области сенсорного ввода
let touchStartX = 0;

document.addEventListener('touchstart', function(e) {
  // если игра закончилась — сразу выходим
  if (gameOver) return;

  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientX;
});

document.addEventListener('touchmove', function(e) {
  // если игра закончилась — сразу выходим
  if (gameOver) return;

  const touchX = e.touches[0].clientX;
  const deltaX = touchX - touchStartX;
  const touchY = e.touches[0].clientY;
  const deltaY = touchY - touchStartY;

  // стрелки влево и вправо
  if (Math.abs(deltaX) > 20) {
    const col = deltaX > 0
      // если свайп вправо, то увеличиваем индекс в столбце
      ? tetromino.col + 1
      // если свайп влево, то уменьшаем индекс в столбце
      : tetromino.col - 1;

    // если так ходить можно, то запоминаем текущее положение
    if (isValidMove(tetromino.matrix, tetromino.row, col)) {
      tetromino.col = col;
    }

    touchStartX = touchX; // обновляем начальную точку касания
  }
  if (Math.abs(deltaY) > 20) {
    const row = tetromino.row + 1;
    // если опускаться больше некуда — запоминаем новое положение
    if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
      tetromino.row = row - 1;
      // ставим на место и смотрим на заполненные ряды
      placeTetromino();
      return;
    }
    // запоминаем строку, куда стала фигура
    tetromino.row = row;


  
    touchStartY = touchY; // обновляем начальную точку касания
  }
  
});
document.addEventListener('click', function(e) {
    const matrix = rotate(tetromino.matrix);
    // если так ходить можно — запоминаем
    if (isValidMove(matrix, tetromino.row, tetromino.col)) {
      tetromino.matrix = matrix;
    }
})

// Добавляем обработчик для избежания прокрутки страницы при свайпах вверх/вниз
touchArea.addEventListener('touchmove', function(e) {
  e.preventDefault();
});


// старт игры
rAF = requestAnimationFrame(loop);
close_button.addEventListener('click', function(){
    popup.classList.remove('open');
    location.href="games_menu.html";
});
continue_button.addEventListener('click', function(){
    popup.classList.remove('open');
    location.reload();
});
space_area.addEventListener('click', function(){
    popup.classList.remove('open');
    location.reload();
});