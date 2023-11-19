const add_photo = document.getElementById('add_photo');
const input_title = document.getElementById('input');
const button = document.getElementById('add');

// Добавляем обработчик события 'input' для отслеживания изменений в textarea
input_title.addEventListener('input', function () {
    button.disabled  = false
  // Устанавливаем атрибут 'disabled' кнопке в зависимости от наличия текста в textarea
//   button.disabled = input_title.value.trim() === ''; // Если значение textarea пустое, кнопка будет заблокирована
});
var addPhotoButton = document.getElementById('add_photo');
var photoInput = document.getElementById('photo_input');
var photoPlace = document.getElementById('photo_place');

// Добавляем обработчик события 'click' к кнопке
addPhotoButton.addEventListener('click', function () {
  // Запускаем нажатие на скрытый инпут
  photoInput.click();
});

// Добавляем обработчик события 'change' к инпуту
photoInput.addEventListener('change', function () {
  // Проверяем, выбран ли файл
  if (photoInput.files.length > 0) {
    // Получаем выбранный файл
    var selectedFile = photoInput.files[0];

    // Создаем новый элемент img
    var imgElement = document.createElement('img');

    // Устанавливаем выбранное изображение в атрибут src нового элемента img
    imgElement.src = URL.createObjectURL(selectedFile);
    imgElement.className = "photo"
    // Устанавливаем стили для нового элемента img (можете настроить это под ваши нужды)
    // imgElement.style.width = '100%';
    // imgElement.style.height = '100%';

    // Очищаем содержимое дива перед добавлением нового элемента img
    photoPlace.innerHTML = '';

    // Добавляем новый элемент img в див
    photoPlace.appendChild(imgElement);
  }
});