// think about a branch as 'version' of the repo itself


alert("welcome to class 17");

let game = {
    whoGoes: 'player-1', 
    board: [ '','','', '', '','', '', '','' ],
};

const whoGoesDiv = document.querySelector("#who-goes-tracker");
whoGoesDiv.textContent = game.whoGoes;


function changeTurn(currentPlayer){

    // is the value in currentPlayer equal to the string 'player-'?
    // Yes / No
    if(currentPlayer === 'player-1') {
        return 'player-2';
    }

    if(currentPlayer === 'player-2') {
        return 'player-1';
    }
}


function resetState(){
    const allSlots = document.querySelectorAll(".slot");

    allSlots.forEach((thisParticularSlot) => {
        thisParticularSlot.textContent = "";
    });

    game.board = [ '','','', '', '','', '', '','' ];
}

const testButton = document.querySelector("#reset-button");
testButton.addEventListener("click", resetState);
whoGoesDiv.addEventListener("mousedown", resetState);


function addIntructions() {

    const bodyElement= document.querySelector("#body");
    
    let myNewH1 = document.createElement("h1");
    myNewH1.textContent = "Welcome To my Tic Tac Toe";
    bodyElement.prepend(myNewH1);
}


function deleteUnwantedDiv() {
    const divIDoNotWant = document.querySelector("#no");
    divIDoNotWant.remove();
}

function changeValueInBoard(index, valueToChange){
    game.board[index] = valueToChange;
}

function weHaveALine(firstIndex, secondIndex, thirdIndex){
    const doWeHaveALineOfTheSameCharacter = game.board[firstIndex] === game.board[secondIndex] && game.board[secondIndex] === game.board[thirdIndex];
    const isItDifferentThanEmptySpace = game.board[firstIndex] !== ''

    if(doWeHaveALineOfTheSameCharacter &&  isItDifferentThanEmptySpace ){
        return true;
    } 

    return false;
}

function checkIfSomeoneWon(){
    const possibleLines = [ [0,3,6] , [0,4,8]];

    if(weHaveALine(0, 3, 6)){
       whoGoesDiv.textContent = "We Have a Line!"; 
    }
    if(weHaveALine(0, 4, 8)){
       whoGoesDiv.textContent = "We Have a Line!"; 
    }
}

function handleClickOnSlot(event){
    const clickedSlot = event.target;

    if(game.whoGoes === 'player-1') {
        clickedSlot.textContent = 'X';
        changeValueInBoard(clickedSlot.dataset.index, "X");
        game.whoGoes = 'player-2';
    } else {
        clickedSlot.textContent = '0';
        game.whoGoes = 'player-1';
        changeValueInBoard(clickedSlot.dataset.index, "0");
    }

    checkIfSomeoneWon();
}

function registerCLickHandlers(){
    const allSlots = document.querySelectorAll(".slot");

    allSlots.forEach((thisParticularSlot) => {
        thisParticularSlot.addEventListener('mousedown', handleClickOnSlot);
    });
}


addIntructions();
deleteUnwantedDiv(); 
registerCLickHandlers();















