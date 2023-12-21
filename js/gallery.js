// fetch('json/gallery.json')
//   .then(response => response.json())
//   .then(data => {
//     const container = document.getElementById('place');

//     data.forEach(update => {
//         const public_body = document.createElement('div');
//         public_body.className = 'public_body';

//         const public_photo = document.createElement('div');
//         public_photo.className = "public_photo";

//         const photo = document.createElement('img');
//         photo.src = "images/public/nophotoshop29-800x532.jpg";
//         photo.alt = "";
//         public_photo.appendChild(photo);

//         public_body.appendChild(public_photo);

//         const public_actions = document.createElement('div');
//         public_actions.className = 'public_actions';
//         const like  = document.createElement('div');
//         like.className = "public_like"
//         like.innerHTML = `
//             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
//                 <path d="M26.6736 13.8659L15.013 25L3.35233 13.8659C2.58321 13.1444 1.97738 12.2771 1.57299 11.3187C1.16861 10.3603 0.974437 9.3316 1.0027 8.29731C1.03095 7.26302 1.28104 6.24558 1.73719 5.30904C2.19335 4.37251 2.84569 3.53718 3.65315 2.85566C4.46061 2.17413 5.4057 1.66117 6.42889 1.34908C7.45208 1.03699 8.53121 0.932535 9.59833 1.04228C10.6655 1.15203 11.6975 1.47361 12.6293 1.98677C13.5612 2.49993 14.3728 3.19355 15.013 4.02395C15.6559 3.19958 16.4684 2.51201 17.3997 2.0043C18.3309 1.49659 19.3608 1.17966 20.4249 1.07334C21.4891 0.96702 22.5645 1.07361 23.5839 1.38642C24.6034 1.69924 25.5449 2.21156 26.3495 2.89131C27.1541 3.57106 27.8045 4.40361 28.2601 5.33686C28.7156 6.2701 28.9664 7.28396 28.9969 8.31496C29.0273 9.34596 28.8366 10.3719 28.4369 11.3286C28.0371 12.2853 27.4368 13.1522 26.6736 13.8749" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>`;
//         public_actions.appendChild(like);  

//         const comment  = document.createElement('div');
//         comment.className = "public_comment"
//         comment.innerHTML = `
//             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
//                 <path d="M5.72738 2.88759C11.5702 -1.24648 19.9207 -0.908574 25.3228 3.68899C30.8194 8.3643 31.5703 16.006 27.0496 21.4767C22.7896 26.6305 15.1106 28.3289 8.71624 25.6706L8.36849 25.5196L1.8107 26.9116L1.69828 26.931L1.5334 26.9444L1.36402 26.9385L1.29807 26.931L1.13319 26.9011L0.975799 26.8503L0.825907 26.7845L0.711988 26.7217L0.550105 26.6065L0.428692 26.4959L0.319271 26.3718L0.239828 26.2597L0.142398 26.0877L0.0794429 25.9292L0.0329764 25.7603L0.0134904 25.6482L0 25.4837L0.00599561 25.3147L0.0134904 25.249L0.0434688 25.0845L0.0764452 24.9768L1.80021 19.8171L1.76723 19.7633C-1.54539 14.161 -0.0449673 7.21603 5.38113 3.14027L5.72589 2.88909L5.72738 2.88759Z" fill="white"/>
//             </svg>`;
//         public_actions.appendChild(comment);  

//         const send  = document.createElement('div');
//         send.className = "public_send"
//         send.innerHTML = `
//             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0281013 5.00583C-0.348597 1.50355 3.13297 -1.06839 6.20885 0.441163L23.5138 8.93126C26.8287 10.5564 26.8287 15.4421 23.5138 17.0672L6.20885 25.5588C3.13297 27.0684 -0.347148 24.4964 0.0281013 20.9942L0.723544 14.4998H12.4852C12.8695 14.4998 13.238 14.3417 13.5097 14.0603C13.7814 13.7789 13.9341 13.3972 13.9341 12.9992C13.9341 12.6013 13.7814 12.2196 13.5097 11.9382C13.238 11.6568 12.8695 11.4987 12.4852 11.4987H0.724993L0.0295503 5.00583H0.0281013Z" fill="white"/>
//             </svg>`;
//         public_actions.appendChild(send);         
//         public_body.appendChild(public_actions);

//         const public_title = document.createElement('div');
//         public_title.className = "public_title";
//         public_title.textContent = update.text;

//         public_body.appendChild(public_title);


//         const public_data = document.createElement('div');
//         public_data.className = "public_data";
//         public_data.textContent = update.data;

//         public_body.appendChild(public_data);




//       // Разделение текста на абзацы и добавление на страницу
//         // const paragraphs = update.text.split('\n');
//         // paragraphs.forEach(paragraph => {
//         //     const paragraphText = document.createTextNode(paragraph);
//         //     textDiv.appendChild(paragraphText);

//         // // Добавление переноса строки между абзацами
//         //     textDiv.appendChild(document.createElement('br'));
//         //     textDiv.appendChild(document.createElement('br'));
//         // });

//         // public_body.appendChild(textDiv);

//         container.appendChild(public_body);
//     });
//   })
// .catch(error => console.error('Ошибка:', error));
fetch('json/gallery.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('place');

    data.forEach(public => {  // Заменили 'update' на 'item'
        const public_body = document.createElement('div');
        public_body.className = 'public_body';

        const public_photo = document.createElement('div');
        public_photo.className = "public_photo";

        const photo = document.createElement('img');
        photo.src = public.photo;
        photo.alt = "";
        public_photo.appendChild(photo);

        public_body.appendChild(public_photo);

        const public_actions = document.createElement('div');
        public_actions.className = 'public_actions';

        const like  = document.createElement('div');
        like.className = "public_action_container";
        like.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
                <path d="M26.6736 13.8659L15.013 25L3.35233 13.8659C2.58321 13.1444 1.97738 12.2771 1.57299 11.3187C1.16861 10.3603 0.974437 9.3316 1.0027 8.29731C1.03095 7.26302 1.28104 6.24558 1.73719 5.30904C2.19335 4.37251 2.84569 3.53718 3.65315 2.85566C4.46061 2.17413 5.4057 1.66117 6.42889 1.34908C7.45208 1.03699 8.53121 0.932535 9.59833 1.04228C10.6655 1.15203 11.6975 1.47361 12.6293 1.98677C13.5612 2.49993 14.3728 3.19355 15.013 4.02395C15.6559 3.19958 16.4684 2.51201 17.3997 2.0043C18.3309 1.49659 19.3608 1.17966 20.4249 1.07334C21.4891 0.96702 22.5645 1.07361 23.5839 1.38642C24.6034 1.69924 25.5449 2.21156 26.3495 2.89131C27.1541 3.57106 27.8045 4.40361 28.2601 5.33686C28.7156 6.2701 28.9664 7.28396 28.9969 8.31496C29.0273 9.34596 28.8366 10.3719 28.4369 11.3286C28.0371 12.2853 27.4368 13.1522 26.6736 13.8749" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        const public_action_count_like = document.createElement('div')
        public_action_count_like.textContent = public.like;
        public_action_count_like.className = 'public_action_count';

        like.appendChild(public_action_count_like);
        public_actions.appendChild(like);  

        const comment  = document.createElement('div');
        comment.className = "public_action_container"
        comment.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
                <path d="M5.72738 2.88759C11.5702 -1.24648 19.9207 -0.908574 25.3228 3.68899C30.8194 8.3643 31.5703 16.006 27.0496 21.4767C22.7896 26.6305 15.1106 28.3289 8.71624 25.6706L8.36849 25.5196L1.8107 26.9116L1.69828 26.931L1.5334 26.9444L1.36402 26.9385L1.29807 26.931L1.13319 26.9011L0.975799 26.8503L0.825907 26.7845L0.711988 26.7217L0.550105 26.6065L0.428692 26.4959L0.319271 26.3718L0.239828 26.2597L0.142398 26.0877L0.0794429 25.9292L0.0329764 25.7603L0.0134904 25.6482L0 25.4837L0.00599561 25.3147L0.0134904 25.249L0.0434688 25.0845L0.0764452 24.9768L1.80021 19.8171L1.76723 19.7633C-1.54539 14.161 -0.0449673 7.21603 5.38113 3.14027L5.72589 2.88909L5.72738 2.88759Z" fill="white"/>
            </svg>`;
        const public_action_count_comment = document.createElement('div')
        public_action_count_comment.textContent = public.comment;
        public_action_count_comment.className = 'public_action_count';

        comment.appendChild(public_action_count_comment);
        public_actions.appendChild(comment);  



        const send  = document.createElement('div');
        send.className = "public_action_container"
        send.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0281013 5.00583C-0.348597 1.50355 3.13297 -1.06839 6.20885 0.441163L23.5138 8.93126C26.8287 10.5564 26.8287 15.4421 23.5138 17.0672L6.20885 25.5588C3.13297 27.0684 -0.347148 24.4964 0.0281013 20.9942L0.723544 14.4998H12.4852C12.8695 14.4998 13.238 14.3417 13.5097 14.0603C13.7814 13.7789 13.9341 13.3972 13.9341 12.9992C13.9341 12.6013 13.7814 12.2196 13.5097 11.9382C13.238 11.6568 12.8695 11.4987 12.4852 11.4987H0.724993L0.0295503 5.00583H0.0281013Z" fill="white"/>
            </svg>`;
        const public_action_count_send = document.createElement('div')
        public_action_count_send.textContent = public.send;
        public_action_count_send.className = 'public_action_count';

        send.appendChild(public_action_count_send);
        public_actions.appendChild(send);       

        public_body.appendChild(public_actions);

        const public_title = document.createElement('div');
        public_title.className = "public_title";
        public_title.textContent = public.text;  // Заменили 'update' на 'item'

        public_body.appendChild(public_title);


        const public_data = document.createElement('div');
        public_data.className = "public_data";
        public_data.textContent = public.data;  // Заменили 'update' на 'item'

        public_body.appendChild(public_data);

        container.appendChild(public_body);
    });
  })
  .catch(error => console.error('Ошибка:', error));

const add_public = document.getElementById('add');

add_public.addEventListener('click', function() {
    window.location.href = "add_public.html"
});