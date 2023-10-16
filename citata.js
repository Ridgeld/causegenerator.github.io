// const text = document.getElementById("text");
// const button = document.getElementById("btn");

//   fetch('assets/citata.txt')
//     .then(response => response.text())
//     .then(data => {
//       const lines = data.split('\n');
//       const randomIndex = Math.floor(Math.random() * lines.length);
//       text.textContent = lines[randomIndex];
//     });
// });

let usedTexts = [];
let lines;

function showRandomText() {
    if (usedTexts.length === lines.length) {
        location.reload();
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * lines.length);
    } while (usedTexts.includes(randomIndex));

    usedTexts.push(randomIndex);
    const randomText = lines[randomIndex];

    const text = document.getElementById("text");
    text.textContent = randomText;
}

fetch("assets/citata.txt")
    .then(response => response.text())
    .then(text => {
        lines = text.split('\n');
        document.querySelector("#button").addEventListener("click", showRandomText);
    });
