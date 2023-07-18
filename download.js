const downFir = document.getElementById('downFir');
const downSec = document.getElementById('downSec');



downFir.addEventListener('click', function() {
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
