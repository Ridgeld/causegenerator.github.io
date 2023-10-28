fetch('json/update.json')
  .then(response => response.json())
  .then(data => {
    const updatesContainer = document.getElementById('place');

    data.forEach(update => {
      const updateDiv = document.createElement('div');
      updateDiv.className = 'update_body';

      const dateDiv = document.createElement('div');
      dateDiv.className = 'update_data';
      dateDiv.textContent = update.data;

      const textDiv = document.createElement('div');
      textDiv.className = 'update_text';

      // Разделение текста на абзацы и добавление на страницу
      const paragraphs = update.text.split('\n');
      paragraphs.forEach(paragraph => {
        const paragraphText = document.createTextNode(paragraph);
        textDiv.appendChild(paragraphText);

        // Добавление переноса строки между абзацами
        textDiv.appendChild(document.createElement('br'));
        textDiv.appendChild(document.createElement('br'));
      });

      updateDiv.appendChild(dateDiv);
      updateDiv.appendChild(textDiv);

      updatesContainer.appendChild(updateDiv);
    });
  })
  .catch(error => console.error('Ошибка:', error));