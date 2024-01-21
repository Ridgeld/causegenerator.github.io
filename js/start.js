const text_place = document.getElementById('citata_place');
// localStorage.removeItem('textCitata')
text_place.textContent = localStorage.getItem('textCitata');

if (!localStorage.getItem('textCitata')){
    fetch('assets/citata.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
        const text = lines[randomIndex];
        text_place.textContent = text;
        localStorage.setItem('textCitata', text)
    });
}
if (new Date().getDate() > localStorage.getItem('date')){
    fetch('assets/citata.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
        const text = lines[randomIndex];
        text_place.textContent = text;
        localStorage.setItem('textCitata', text)
        localStorage.setItem('date', new Date().getDate())
        
    });
}else{
    text_place.textContent = localStorage.getItem('textCitata');
}





// function generation(){
//     return fetch('assets/citata.txt')
//         .then(response => response.text())
//         .then(data => {
//             const lines = data.split('\n');
//             const randomIndex = Math.floor(Math.random() * lines.length);
//             const text = lines[randomIndex];
//             text_place.textContent = text
//         });
// }
// generation()
// if (localStorage.getItem('textCitata')){
//     text_place.textContent = localStorage.getItem('textCitata');
//     // localStorage.setItem('date', 17)
//     if (new Date().getDate() > localStorage.getItem('date')){
//         fetch('assets/citata.txt')
//         .then(response => response.text())
//         .then(data => {
//             const lines = data.split('\n');
//             const randomIndex = Math.floor(Math.random() * lines.length);
//             const text = lines[randomIndex];
//             text_place.textContent = text;
//             localStorage.setItem('textCitata', text)
//             localStorage.setItem('date', new Date().getDate())
            
//         });
//     }else{
//         text_place.textContent = localStorage.getItem('textCitata');
//     }
//     // let now = new Date().getDate()
//     // if (now > 17){
//     //     alert(now)
//     // }
//     // setTimeout(function(){
//     // return fetch('assets/citata.txt')
//     // .then(response => response.text())
//     // .then(data => {
//     //     const lines = data.split('\n');
//     //     const randomIndex = Math.floor(Math.random() * lines.length);
//     //     const text = lines[randomIndex];
//     //     localStorage.setItem('textCitata', text);
//     //     text_place.textContent = text
//     // });
//     // }, 3000);
// } else {
//     fetch('assets/citata.txt')
//     .then(response => response.text())
//     .then(data => {
//         const lines = data.split('\n');
//         const randomIndex = Math.floor(Math.random() * lines.length);
//         const text = lines[randomIndex];
//         text_place.textContent = text;
//         localStorage.setItem('textCitata', text)
//     });
// }
// function generation(){
//     return fetch('assets/citata.txt')
//         .then(response => response.text())
//         .then(data => {
//             const lines = data.split('\n');
//             const randomIndex = Math.floor(Math.random() * lines.length);
//             const text = lines[randomIndex];
//             text_place.textContent = text;
//             localStorage.setItem('textCitata', text)
//         });
// }
// setTimeout(function(){
//     localStorage.setItem('date', 17)
// }, 2000);
// setInterval(function(){
//     return fetch('assets/citata.txt')
//     .then(response => response.text())
//     .then(data => {
//         const lines = data.split('\n');
//         const randomIndex = Math.floor(Math.random() * lines.length);
//         const text = lines[randomIndex];
//         text_place.textContent = text
//     });
// }, 10000);
