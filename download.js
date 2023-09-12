const downFir = document.getElementById('downFir');
const downSec = document.getElementById('downSec');
const downThr = document.getElementById('downThr');


const overlay = document.getElementById('overlay');
const notification = document.getElementById('notification');
const finishButton = document.getElementById('finish');
const continueButton = document.getElementById('continue');

downFir.addEventListener('click', function() {
    notifName.textContent = 'Скачать';
    text2.textContent = "";
    text.textContent = "Вы хотите скачать Solutions Advanced?";
    overlay.classList.add('show');
    notification.classList.add('show');
});
finishButton.addEventListener('click', function() {
    location.reload();
});
continueButton.addEventListener('click', function() {
    const fileName = 'AdvancedKey.pdf';
    const filePath = 'files/AdvancedKey.pdf';
    const element = document.createElement('a');
    element.href = filePath;
    element.download = fileName;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});

downSec.addEventListener('click', function() {
    notifName.textContent = 'Скачать';
    text2.textContent = "";
    text.textContent = "Вы хотите скачать Solutions Upper-Intermediate?";
    overlay.classList.add('show');
    notification.classList.add('show');
});
finishButton.addEventListener('click', function() {
    location.reload();
});
continueButton.addEventListener('click', function() {
    const fileName = 'UpperKey.rar';
    const filePath = 'files/UpperKey.rar';
    const element = document.createElement('a');
    element.href = filePath;
    element.download = fileName;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});
downThr.addEventListener('click', function() {
    const fileName = 'MegaSetUp.exe';
    const filePath = 'files/MegaSetUp.exe';
    const element = document.createElement('a');
    element.href = filePath;
    element.download = fileName;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});

