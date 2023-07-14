const buttonD1 = document.getElementById('down1');

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
});
