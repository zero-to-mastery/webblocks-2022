const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const startBtn = document.querySelector("#startBtn");
const rematchBtn = document.querySelector("#rematchBtn");
const restartBtn = document.querySelector('#restartBtn');
const startgame = document.querySelector('#startgame');
const container = document.querySelector('#container');
const gameContainer = document.querySelector("#gameContainer");
const playerX = document.querySelector("#playerX");
const playerO = document.querySelector("#playerO");
const dispX = document.querySelector("#dispX");
const dispO = document.querySelector("#dispO");
const scoreX = document.querySelector("#scoreX");
const scoreO = document.querySelector("#scoreO");
let sx = 0;
let so = 0;
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["", "", "", "", "", "" ,"" ,"" ,""];
let currentPlayer = "X";
let running = false;
scoreX.textContent = `${sx}`;
scoreO.textContent = `${so}`;  


initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
     
}
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner() {
    let roundWon = false;
    for(let i=0; i<winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]]; 

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        if (currentPlayer === "X") {
            statusText.textContent = `${playerX.value} wins`;
            sx += 1;
            scoreX.textContent = `${sx}`;
        } 
        else {
            statusText.textContent = `${playerO.value} wins`;
            so += 1;
            scoreO.textContent = `${so}`;
        }
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = 'Draw!';
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "" ,"" ,"" ,""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true; 
    gameContainer.classList.add("gameContainerHide");
    container.classList.remove("startgamehide");
    document.body.style.backgroundColor = 'rgb(255, 255, 255)'
    playerX.value = '';
    playerO.value = '';
    sx = 0;
    so = 0;
    scoreX.textContent = `${sx}`;
    scoreO.textContent = `${so}`;
}

function gameScreen() {
    container.classList.add("startgamehide");
    gameContainer.classList.remove("gameContainerHide");
    document.body.style.backgroundColor = 'rgb(26, 26, 70)'
    dispX.textContent = playerX.value;
    dispO.textContent = playerO.value;
    if (playerX.value === '') {
        dispX.textContent = 'X';
    }
    if (playerO.value === '') {
        dispO.textContent = 'O';
    }
    return false;
}

rematchBtn.addEventListener('click', () => {
    options = ["", "", "", "", "", "", "", "", ""];
    running = true;
    cells.forEach(cell => cell.textContent = "");
    statusText.textContent = `${currentPlayer}'s turn`;

})