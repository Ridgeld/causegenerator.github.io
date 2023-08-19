fetch('update.json')
.then(response => response.json())
.then(data => {
  const updatesContainer = document.getElementById('container'); // контейнер для обновлений

  // Проходимся по каждому элементу в массиве данных
  data.forEach(update => {
    const updateDiv = document.createElement('div');
    updateDiv.className = 'updatePlace'; // добавляем класс update

    const dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    dateDiv.textContent = update.data;

    const textDiv = document.createElement('div');
    textDiv.className = 'text';
    textDiv.textContent = update.text;

    const paragraphs = update.text.split('\n');
    paragraphs.forEach(paragraph => {
      // const paragraphDiv = document.createElement('p');
      textDiv.textContent = paragraph;
      // textDiv.appendChild(paragraphDiv);
    })

    updateDiv.appendChild(dateDiv);
    updateDiv.appendChild(textDiv);

    updatesContainer.appendChild(updateDiv);
  });
})
.catch(error => console.error('Error:', error));