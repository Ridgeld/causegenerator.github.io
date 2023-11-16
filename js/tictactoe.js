let board;
let playerO = "O";
let playerX = "X";
let currPlayer = playerO;


let gameOver = false;

// Попап
const close_button = document.getElementById("close");
const continue_button = document.getElementById("continue");
const space_area = document.getElementById("area");
const popup_text = document.getElementById("text");
const popup_title = document.getElementById("title");
const svg_place = document.getElementById("svg");
const gradient = document.getElementById("gradient");


const handleGameOver = () =>{
    const popup = document.querySelector('.popup');
    clearInterval(setIntervalId);
    popup_title.textContent = "Поздравляем!";
    gradient.classList.add("gradient_red");
    svg_place.innerHTML= `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.5C20 16.023 15.523 20.5 10 20.5C4.477 20.5 0 16.023 0 10.5C0 4.977 4.477 0.5 10 0.5C15.523 0.5 20 4.977 20 10.5ZM6.97 7.47C7.11063 7.32955 7.30125 7.25066 7.5 7.25066C7.69875 7.25066 7.88937 7.32955 8.03 7.47L10 9.44L11.97 7.47C12.1122 7.33752 12.3002 7.2654 12.4945 7.26882C12.6888 7.27225 12.8742 7.35097 13.0116 7.48838C13.149 7.62579 13.2277 7.81118 13.2312 8.00548C13.2346 8.19978 13.1625 8.38782 13.03 8.53L11.06 10.5L13.03 12.47C13.1625 12.6122 13.2346 12.8002 13.2312 12.9945C13.2277 13.1888 13.149 13.3742 13.0116 13.5116C12.8742 13.649 12.6888 13.7277 12.4945 13.7312C12.3002 13.7346 12.1122 13.6625 11.97 13.53L10 11.56L8.03 13.53C7.88782 13.6625 7.69978 13.7346 7.50548 13.7312C7.31118 13.7277 7.12579 13.649 6.98838 13.5116C6.85097 13.3742 6.77225 13.1888 6.76882 12.9945C6.7654 12.8002 6.83752 12.6122 6.97 12.47L8.94 10.5L6.97 8.53C6.82955 8.38937 6.75066 8.19875 6.75066 8C6.75066 7.80125 6.82955 7.61063 6.97 7.47Z" fill="#FF003D"/>
    </svg>`;
    popup.classList.add('open');
    return
}

window.onload = function(){
    setGame();
}

function setGame(){
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '] 
    ]

    for (let r = 0; r < 3; r++){
        for (let c = 0; c < 3; c++){
            let tile = document.createElement('div');
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add('tile');
            tile.classList.add('tile');

            if ( r === 0 || r === 1){
                tile.classList.add("horizontal-line");
            }
            if ( c === 0 || c === 1){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", setTile);
            document.getElementById('board').appendChild(tile);

        }
    }
}

function setTile(){
    if (gameOver){
        return handleGameOver();
    }

    let coords = this.id.split("-")
    let r = parseInt(coords[0]);
    let c = parseInt(coords [1]);

    if (board[r][c] != ' '){
        return
    }

    board[r][c] = currPlayer;
    this.innerText = currPlayer;
    if (currPlayer == playerX){
        this.classList.add("X");
    }
    else{
        this.classList.add("O");
    }
    if (currPlayer == playerO){
        currPlayer = playerX;
    }
    else{
        currPlayer = playerO;
        currPlayer.className = "O";
    }

    checkWinner()
}

function checkWinner(){
    // horizontaly
    for (let r = 0; r < 3; r++){
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != " "){
            for (let i = 0; i < 3; i++){
                let tile = document.getElementById(r.toString() + "-" + i.toString());
                tile.classList.add("winner");
            }
            gameOver = true;
            return
        }
    }
    // verticaly 
    for (let c = 0; c < 3; c++){
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != " "){
            for (let i = 0; i < 3; i++){
                let tile = document.getElementById(i.toString() + "-" + c.toString());
                tile.classList.add("winner");
            }
            gameOver = true;
            return
        }
    }
    // diagnoly
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != " "){
        for (let i = 0; i < 3; i++){
            let tile = document.getElementById(i.toString() + "-" + i.toString());
            tile.classList.add("winner");
        }
        gameOver = true;
        return
    }

    // anti-diagnolly
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != " "){

        let tile = document.getElementById("0-2");
        tile.classList.add("winner");

        tile = document.getElementById("1-1");
        tile.classList.add("winner");

        tile = document.getElementById("2-0");
        tile.classList.add("winner");

        gameOver = true;
        return
    }
}


close_button.addEventListener('click', function(){
    popup.classList.remove('open');
    location.href="games_menu.html";
});
continue_button.addEventListener('click', function(){
    popup.classList.remove('open');
    location.reload();
});
space_area.addEventListener('click', function(){
    popup.classList.remove('open');
    location.reload();
});
