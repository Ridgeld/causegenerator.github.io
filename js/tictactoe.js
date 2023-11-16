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


window.onload = function(){
    setGame();
}
const handleGameOver = () =>{
    const popup = document.querySelector('.popup');

    popup_title.textContent = "Поздравляем!";
    gradient.classList.add("gradient_green");
    svg_place.innerHTML= `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M0 10.5C0 7.84784 1.05357 5.3043 2.92893 3.42893C4.8043 1.55357 7.34784 0.5 10 0.5C12.6522 0.5 15.1957 1.55357 17.0711 3.42893C18.9464 5.3043 20 7.84784 20 10.5C20 13.1522 18.9464 15.6957 17.0711 17.5711C15.1957 19.4464 12.6522 20.5 10 20.5C7.34784 20.5 4.8043 19.4464 2.92893 17.5711C1.05357 15.6957 0 13.1522 0 10.5ZM14.708 8.708C14.801 8.61502 14.8747 8.50465 14.925 8.38317C14.9754 8.26169 15.0013 8.13149 15.0013 8C15.0013 7.86851 14.9754 7.73831 14.925 7.61683C14.8747 7.49535 14.801 7.38498 14.708 7.292C14.615 7.19902 14.5046 7.12527 14.3832 7.07495C14.2617 7.02463 14.1315 6.99874 14 6.99874C13.8685 6.99874 13.7383 7.02463 13.6168 7.07495C13.4954 7.12527 13.385 7.19902 13.292 7.292L9 11.586L6.708 9.292C6.61502 9.19902 6.50465 9.12527 6.38317 9.07495C6.26169 9.02464 6.13149 8.99874 6 8.99874C5.86851 8.99874 5.73831 9.02464 5.61683 9.07495C5.49535 9.12527 5.38498 9.19902 5.292 9.292C5.19902 9.38498 5.12527 9.49535 5.07495 9.61683C5.02464 9.73831 4.99874 9.86851 4.99874 10C4.99874 10.1315 5.02464 10.2617 5.07495 10.3832C5.12527 10.5046 5.19902 10.615 5.292 10.708L8.292 13.708C8.38489 13.8011 8.49524 13.875 8.61673 13.9254C8.73822 13.9758 8.86847 14.0018 9 14.0018C9.13153 14.0018 9.26178 13.9758 9.38327 13.9254C9.50476 13.875 9.61511 13.8011 9.708 13.708L14.708 8.708Z" fill="#00FF75"/>
    </svg>`;
    popup.classList.add('open');
    return
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

function setTile() {
    if (gameOver){
        return
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
            return handleGameOver();
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
            return handleGameOver();
        }
    }
    // diagnoly
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != " "){
        for (let i = 0; i < 3; i++){
            let tile = document.getElementById(i.toString() + "-" + i.toString());
            tile.classList.add("winner");
        }
        gameOver = true;
        return handleGameOver();
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
        return handleGameOver();
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
