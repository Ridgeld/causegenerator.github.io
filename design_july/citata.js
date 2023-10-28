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
        document.querySelector("#btn").addEventListener("click", showRandomText);
});
