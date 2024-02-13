const spinButton = document.getElementById('show_wheel'),
wheelContainer = document.getElementById('wheel_container'),
balansPlace = document.getElementById('score'),
tableGridElements = document.querySelectorAll('.click_item');
const close_button = document.getElementById("close");
const continue_button = document.getElementById("continue");
const space_area = document.getElementById("area");
const popup_text = document.getElementById("text");
const popup_title = document.getElementById("title");
const svg_place = document.getElementById("svg");
const gradient = document.getElementById("gradient");


const handleGameOver = () => {
  new Audio("audio/casino/gameover.mp3").play();
  const popup = document.querySelector('.popup');
  popup_title.textContent = "Вы програли!";
  gradient.classList.add("gradient_red");
  svg_place.innerHTML= `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.5C20 16.023 15.523 20.5 10 20.5C4.477 20.5 0 16.023 0 10.5C0 4.977 4.477 0.5 10 0.5C15.523 0.5 20 4.977 20 10.5ZM6.97 7.47C7.11063 7.32955 7.30125 7.25066 7.5 7.25066C7.69875 7.25066 7.88937 7.32955 8.03 7.47L10 9.44L11.97 7.47C12.1122 7.33752 12.3002 7.2654 12.4945 7.26882C12.6888 7.27225 12.8742 7.35097 13.0116 7.48838C13.149 7.62579 13.2277 7.81118 13.2312 8.00548C13.2346 8.19978 13.1625 8.38782 13.03 8.53L11.06 10.5L13.03 12.47C13.1625 12.6122 13.2346 12.8002 13.2312 12.9945C13.2277 13.1888 13.149 13.3742 13.0116 13.5116C12.8742 13.649 12.6888 13.7277 12.4945 13.7312C12.3002 13.7346 12.1122 13.6625 11.97 13.53L10 11.56L8.03 13.53C7.88782 13.6625 7.69978 13.7346 7.50548 13.7312C7.31118 13.7277 7.12579 13.649 6.98838 13.5116C6.85097 13.3742 6.77225 13.1888 6.76882 12.9945C6.7654 12.8002 6.83752 12.6122 6.97 12.47L8.94 10.5L6.97 8.53C6.82955 8.38937 6.75066 8.19875 6.75066 8C6.75066 7.80125 6.82955 7.61063 6.97 7.47Z" fill="#FF003D"/>
  </svg>`;
  popup.classList.add('open');
  return
}

const showWin = () => {
  new Audio("audio/casino/win.mp3").play();
  popup_title.textContent = "Вы выиграли!";
  gradient.classList.add("gradient_green");
  svg_place.innerHTML= `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path d="M0 10.5C0 7.84784 1.05357 5.3043 2.92893 3.42893C4.8043 1.55357 7.34784 0.5 10 0.5C12.6522 0.5 15.1957 1.55357 17.0711 3.42893C18.9464 5.3043 20 7.84784 20 10.5C20 13.1522 18.9464 15.6957 17.0711 17.5711C15.1957 19.4464 12.6522 20.5 10 20.5C7.34784 20.5 4.8043 19.4464 2.92893 17.5711C1.05357 15.6957 0 13.1522 0 10.5ZM14.708 8.708C14.801 8.61502 14.8747 8.50465 14.925 8.38317C14.9754 8.26169 15.0013 8.13149 15.0013 8C15.0013 7.86851 14.9754 7.73831 14.925 7.61683C14.8747 7.49535 14.801 7.38498 14.708 7.292C14.615 7.19902 14.5046 7.12527 14.3832 7.07495C14.2617 7.02463 14.1315 6.99874 14 6.99874C13.8685 6.99874 13.7383 7.02463 13.6168 7.07495C13.4954 7.12527 13.385 7.19902 13.292 7.292L9 11.586L6.708 9.292C6.61502 9.19902 6.50465 9.12527 6.38317 9.07495C6.26169 9.02464 6.13149 8.99874 6 8.99874C5.86851 8.99874 5.73831 9.02464 5.61683 9.07495C5.49535 9.12527 5.38498 9.19902 5.292 9.292C5.19902 9.38498 5.12527 9.49535 5.07495 9.61683C5.02464 9.73831 4.99874 9.86851 4.99874 10C4.99874 10.1315 5.02464 10.2617 5.07495 10.3832C5.12527 10.5046 5.19902 10.615 5.292 10.708L8.292 13.708C8.38489 13.8011 8.49524 13.875 8.61673 13.9254C8.73822 13.9758 8.86847 14.0018 9 14.0018C9.13153 14.0018 9.26178 13.9758 9.38327 13.9254C9.50476 13.875 9.61511 13.8011 9.708 13.708L14.708 8.708Z" fill="#00FF75"/>
  </svg>`;
  popup.classList.add('open');
  return
}
const notification = (number) => {
  // new Audio("audio/win.mp3").play();
  popup_title.textContent = "Выпало число:";
  popup_text.textContent = number;
  gradient.classList.add("gradient_blue");
  svg_place.innerHTML= `
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10.5C0 16.0225 4.4775 20.5 10 20.5C15.5225 20.5 20 16.0225 20 10.5C20 4.9775 15.5225 0.5 10 0.5C4.4775 0.5 0 4.9775 0 10.5ZM11.0417 5.5C11.0417 5.77627 10.9319 6.04122 10.7366 6.23657C10.5412 6.43192 10.2763 6.54167 10 6.54167C9.72373 6.54167 9.45878 6.43192 9.26343 6.23657C9.06808 6.04122 8.95833 5.77627 8.95833 5.5C8.95833 5.22373 9.06808 4.95878 9.26343 4.76343C9.45878 4.56808 9.72373 4.45833 10 4.45833C10.2763 4.45833 10.5412 4.56808 10.7366 4.76343C10.9319 4.95878 11.0417 5.22373 11.0417 5.5ZM10 8C10.221 8 10.433 8.0878 10.5893 8.24408C10.7455 8.40036 10.8333 8.61232 10.8333 8.83333V15.5C10.8333 15.721 10.7455 15.933 10.5893 16.0893C10.433 16.2455 10.221 16.3333 10 16.3333C9.77899 16.3333 9.56702 16.2455 9.41074 16.0893C9.25446 15.933 9.16667 15.721 9.16667 15.5V8.83333C9.16667 8.61232 9.25446 8.40036 9.41074 8.24408C9.56702 8.0878 9.77899 8 10 8Z" fill="#2400FF"/>
  </svg>`;
  popup.classList.add('open');
  return
}



const numberAttributes = {
  "0" : ["zero", "green", "0","0"],
  "1" : ["odd", "black", "1-18","1st"],
  "2"  : ["even", "color", "1-18","2nd"],
  "3"  : ["odd", "color", "1-18","3rd"],
  "4"  : ["even", "color", "1-18","1st"],
  "5"  : ["odd", "color", "1-18","2nd"],
  "6"  : ["even", "color", "1-18","3rd"],
  "7"  : ["odd", "color", "1-18","1st"],
  "8"  : ["even", "color", "1-18","2nd"],
  "9"  : ["odd", "color", "1-18","3rd"],
  "10" : ["even", "color", "1-18","1st"],
  "11" : ["odd", "color", "1-18","2nd"],
  "12" : ["even", "color", "1-18","3rd"],
  "13" : ["odd", "color", "1-18","1st"],
  "14" : ["even", "color", "1-18","2nd"],
  '15' : ["odd", "black", "1-18","3rd"],
  "16" : ["even", "color", "1-18","1st"],
  "17" : ["odd", "color", "1-18","2nd"],
  "18" : ["even", "color", "1-18","3rd"],
  "19" : ["odd", "color", "19-36","1st"],
  "20" : ["even", "color", "19-36","2nd"],
  "21" : ["odd", "color", "19-36","3rd"],
  "22" : ["even", "color", "19-36","1st"],
  "23" : ["odd", "color", "19-36","2nd"],
  "24" : ["even", "color", "19-36","3rd"],
  "25" : ["odd", "color", "19-36","1st"],
  "26" : ["even", "color", "19-36","2nd"],
  "27" : ["odd", "color", "19-36","3rd"],
  "28" : ["even", "color", "19-36","1st"],
  "29" : ["odd", "color", "19-36","2nd"],
  "30" : ["even", "color", "19-36","3rd"],
  "31" : ["odd", "color", "19-36","1st"],
  "32" : ["even", "color", "19-36","2nd"],
  "33" : ["odd", "color", "19-36","3rd"],
  "34" : ["even", "color", "19-36","1st"],
  "35" : ["odd", "color", "19-36","2nd"],
  "36" : ["even", "color", "19-36","3rd"]
}
let theWheel = new Winwheel({
  'outerRadius'     : 200,        
  'innerRadius'     : 100,         
  'textFontSize'    : 20,        
  'textOrientation' : 'curved', 
  'textAlignment'   : 'outer',    
  'numSegments'     : 37,
  'responsive'      : true,         
  'segments'        :             
  [                               
     {'fillStyle' : '#007537', 'text' : '0', 'textFillStyle' : '#ffffff'}, //Зеленый
     {'fillStyle' : '#d30909', 'text' : '32', 'textFillStyle' : '#ffffff'}, //Черный
     {'fillStyle' : '#2e2e2e', 'text' : '15', 'textFillStyle' : '#ffffff'}, //Красный
     {'fillStyle' : '#d30909', 'text' : '19', 'textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '4', 'textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '21', 'textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '2','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '25','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '17','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '34','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '6','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '27','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '13','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '36','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '11','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '30','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '8','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '23','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '10','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '5', 'textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '24','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '16','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '33','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '1','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '20','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '14','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '31','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '9','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '22','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '18','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '29','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '7','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '28','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '12','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '35','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#d30909', 'text' : '3','textFillStyle' : '#ffffff'},
     {'fillStyle' : '#2e2e2e', 'text' : '26','textFillStyle' : '#ffffff'}

  ],
  'animation' :           
  {
    'type'     : 'spinToStop',
    'duration' : 10,
    'spins'    : 3,
    'callbackFinished' : alertPrize,    
  },

});
class Chip {
  constructor(cost, color){
    this.chipContainer = document.createElement('div');
    this.chipContainer.className = 'chip_container';
    this.chipContainer.style.background = color;

    this.chipInnerCircle = document.createElement('div');
    this.chipInnerCircle.className = 'chip_inner_container';

    const chipCost = document.createElement('div');
    chipCost.className = 'chip_cost';
    chipCost.textContent = cost;
    
    this.chipContainer.appendChild(this.chipInnerCircle);
    this.chipContainer.appendChild(chipCost);
  }
  getChip() {
    return this.chipContainer;
}
}
let balans = localStorage.getItem('balans') || 1000;

window.onload = function() {
  if (balans <= 0){
      balans = 1000;
      localStorage.setItem('balans', balans);
  }
  startGame(balans);
}

function startGame(balans){
  if (balans <= 0) {
    return handleGameOver();
  }
  balansPlace.textContent = balans;
  localStorage.setItem('balans', balans);
  chipArray = [];
  chipCostArray = [];

  function handleClick() {
    const element = this;

    if (element.hasAttribute('chipPlaced')){
      removeChip(element);
    } else {
      placeChip(element, 100, 'green');
    }
  }

  tableGridElements.forEach((element) => {
    if (element.hasAttribute('chipPlaced')){
      const chipContainer = element.querySelector('.chip_container');
      element.removeChild(chipContainer);
      element.removeAttribute('chipPlaced');
    }
    element.addEventListener('click', handleClick);
  });

function startGame(balans){
    if (balans <= 0) {
      return handleGameOver();
    }
    balansPlace.textContent = balans;
    localStorage.setItem('balans', balans);
    chipArray = [];
  
  
    tableGridElements.forEach((element) => {
      if (element.hasAttribute('chipPlaced')){
        const chipContainer = element.querySelector('.chip_container');
        element.removeChild(chipContainer);
        element.removeAttribute('chipPlaced');
      }
      element.addEventListener('click', handleClick);
    });
  
  }
  spinButton.addEventListener('click', function(){
    wheelContainer.style.top = '15%';
    tableGridElements.forEach((element) => {
      element.removeEventListener('click', handleClick);
    });
  });

}
// spinButton.addEventListener('click', function(){
//   wheelContainer.style.top = '25%';
//   tableGridElements.forEach((element) => {
//     element.removeEventListener('click', handleClick);
//   });
// });

function placeChip(element, cost, color) {
  if (balans <= 0) {
    return
  }
  balans -= 100;
  balansPlace.textContent = balans;
  localStorage.setItem('balans', balans);

  const chip = new Chip(cost, color);
  const text = element.textContent;
  chipCostArray.push(cost)
  
  chipObject = {}
  element.appendChild(chip.getChip());
  element.setAttribute('chipPlaced', 'true');

  const chipPosition = text.trim()

  chipObject[chipPosition] = cost;
  chipArray.push(chipObject);
  // chipCostArray.push({chipPosition : cost})
  // chipArray.push(chipPosition);
  console.log(chipArray);
}


function removeChip(element) {
  balans += 100;
  balansPlace.textContent = balans;

  const chipContainer = element.querySelector('.chip_container');
  element.removeChild(chipContainer);

  const text = element.textContent;        
  const indexToRemove = chipArray.indexOf(text);

  if (indexToRemove !== -1) {
      chipArray.splice(indexToRemove, 1);
  }
  element.removeAttribute('chipPlaced');
  console.log(chipArray);
  
}


// Добавить обработчик события для каждого элемента
// tableGridElements.forEach((element) => {
//   element.addEventListener('click', function() {
    
//     if (element.hasAttribute('chipPlaced')){
//         removeChip(element);
//         // const chipContainer = this.querySelector('.chip_container');
//         // element.removeChild(chipContainer);

//         // const text = this.textContent;        
//         // const indexToRemove = chipArray.indexOf(text);

//         // if (indexToRemove !== -1) {
//         //     chipArray.splice(indexToRemove, 1);
//         // }

//         // element.removeAttribute('chipPlaced');
//         return
//     }
//     // alert(`Вы нажали на элемент с текстом: ${text.trim()}`);
//     placeChip(element, 100, 'red');
//     // this.appendChild(chip.getChip());
//     // this.setAttribute('chipPlaced', 'true');

//     // const chipPosition = text.trim();

//     // chipArray.push(chipPosition);
//     // console.log(chipArray);
//   });
// });

const spin_button = document.getElementById('casino_button');
spin_button.addEventListener('click', calculatePrize)
function calculatePrize(){


  // Подкрутка
  // theWheel.animation.stopAngle = 24;

  theWheel.startAnimation();
}

function alertPrize(indicatedSegment){
  // if (chipArray.includes()){
  let topItemAttributes = numberAttributes[indicatedSegment.text];
  console.log(topItemAttributes);
      // alert(topItemAttributes);
      // const isMatch = chipArray.some(chipObject => {
      //   return Object.keys(chipObject).includes(indicatedSegment.text);
      // });
  const isMatch = chipArray.some(chipObject => {
  const chipPosition = Object.keys(chipObject)[0];
  const chipCost = chipObject[chipPosition];
    if (topItemAttributes.includes(chipPosition) && chipCost) {
        strongCost = chipCost;
        // console.log(chipCost)
        return true;
    }
    return false;
  });
  
  if (chipArray.some(chipObject => Object.keys(chipObject).includes(indicatedSegment.text)) && isMatch) {
      const matchedCost = chipArray.find(chipObject => Object.keys(chipObject).includes(indicatedSegment.text))[indicatedSegment.text];
      balans += matchedCost * 2 + strongCost * 2;
      startGame(balans);
      showWin();
      return
                      
  } else if (chipArray.some(chipObject => Object.keys(chipObject).includes(indicatedSegment.text))) {
    const matchedCost = chipArray.find(chipObject => Object.keys(chipObject).includes(indicatedSegment.text))[indicatedSegment.text];
      balans += matchedCost * 3;
      startGame(balans);
      showWin();
      return
  } else if (isMatch){
      balans += strongCost * 2;
      startGame(balans);
      showWin();
      return
  } else {
    notification(indicatedSegment.text)
  }
  // else if (chipArray.some(chipObject => Object.keys(chipObject).includes(indicatedSegment.text))) {
  //     balans += matchedCost * 2;
  //     startGame(balans);
  //     showWin();
  // } else if (isMatch) {
  //     balans += matchedCost;
  //     startGame(balans);
  //     showWin();
  // }
      
  // const isMatch = chipArray.some(chipObject => {
  // const chipPosition = Object.keys(chipObject)[0];
  // const chipCost = chipObject[chipPosition];
  //   if (topItemAttributes.includes(chipPosition) && chipCost) {
  //       matchedCost = chipCost;
  //       return true;
  //   }
  //   return false;
  // });
    
  // if (isMatch) {
  //     balans += matchedCost;
  //     startGame(balans);
  //     showWin();
  // } else {
  //     startGame(balans);
  // }
      // if (isMatch) {
      //   const matchedCost = chipArray.find(chipObject => Object.keys(chipObject).includes(indicatedSegment.text))[indicatedSegment.text];
      //   console.log(matchedCost);
      //   // Ваш код для обработки совпадения
      // } else {
      //   // Ваш код для обработки отсутствия совпадения
      // }
      // if (chipArray.includes(indicatedSegment.text)){
      //     balans += 200;
      //     startGame(balans);
      //     showWin();
      //     // console.log(chipArray.indexOf(indicatedSegment.text))
      // }
      // let isMatch = chipArray.some((chipAttribute) => topItemAttributes.includes(chipAttribute));
      // //  let isMatch = chipArray.filter((chipAttribute) => topItemAttributes.includes(chipAttribute));

      // if (isMatch) {
      //     balans +=100;
      //     startGame(balans);
      //     showWin();
      // } else {
      //     startGame(balans);
      // }
  // }
  // if (indicatedSegment.text == 'LOOSE TURN') {
  //     alert('Sorry but you loose a turn.');
  // } else if (indicatedSegment.text == 'BANKRUPT') {
  //       alert('Oh no, you have gone BANKRUPT!');
  // } else {
  //       alert("You have won " + indicatedSegment.text);
  // }
}
// let container = document.getElementById("wheel");
// let button = document.getElementById('spin');
// let number = 0;
 

// container.addEventListener('transitionend', function handleTransitionEnd() {
//   // container.removeEventListener('transitionend', handleTransitionEnd); // Удаляем обработчик события transitionend

//   // Определение угла поворота колеса
//   let wheelRotation = (360 - (number % 360)) % 360; // Текущий угол поворота колеса

//   // Вычисление индекса элемента слева от верхнего элемента
//   let topIndex = Math.floor((wheelRotation + 360) % 360 / (360 / 37)); // 37 элементов на колесе // Предполагаем 10 элементов на колесе

//   // Получение информации о левом элементе
//   let leftItemIndex = (topIndex + 38) % 37; // Левый элемент на колесе
//   let leftItem = document.querySelector(`.wheel_casino ._${leftItemIndex}_casino`);
//   let leftItemText = leftItem.innerText;

//   // notification(`Выпало число: ${leftItemIndex}`);

//   if (chipArray.includes(leftItemText)){
//       balans += 200;
//       startGame(balans);
//       showWin();

//   }
//     // Если есть, извлекаем атрибуты и выводим в alert
//   let topItemAttributes = numberAttributes[leftItemIndex];

//   let isMatch = chipArray.some((chipAttribute) => topItemAttributes.includes(chipAttribute));

//   if (isMatch) {
//       balans +=100;
//       startGame(balans);
//       showWin();
//   } else {
//       startGame(balans);
//       console.log(leftItemText);
//   }

//     // alert(`Выпало число ${leftItemText}: Цвет - ${attributes[1]}, Характеристика - ${attributes[0]}, Диапазон - ${attributes[2]}`);
//   // Вывод текста левого элемента в alert
//   alert(`Выпало: ${leftItemText}`);
//   // wheelContainer.style.top = '-100%';
// });


// button.addEventListener('click', function() {
//   // const saveChipArray = localStorage.setItem('chipPosition', chipArray); 
//   number += Math.ceil(Math.random() * 5000);
//   container.style.transition = 'transform 3s ease-out';
//   container.style.transform = "rotate(" + number + "deg)";


//   // Добавляем обработчик события transitionend после начала анимации
//   container.addEventListener('transitionend', handleTransitionEnd);
// });



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


