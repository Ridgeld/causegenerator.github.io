const buttonD1 = document.getElementById('down1');
const buttonU1 = document.querySelector('.up1');
const plc1 = document.getElementById('plc1');

buttonU1.addEventListener('click', function() {
  plc1.style.heigth = '200px';
});

buttonD1.addEventListener('click', function() {
  const fileName = 'prof.png';
  const filePath = 'image/prof.png';
  const element = document.createElement('a');
  element.href = filePath;
  element.download = fileName;
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  
  downplcDiv.style.height = '450px';
});
