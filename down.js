const button = document.getElementById('down1');
const downplcDiv = document.querySelector('.downplc');


button.addEventListener('click', function() {
  const fileName = 'prof.png';
  const filePath = 'image/prof.png';
  const element = document.createElement('a');
  element.href = filePath;
  element.download = fileName;
  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
  
  causeplcDiv.style.height = '450px';
});
