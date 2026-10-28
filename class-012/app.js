
let game = {
    whoGoes: 'player-1', // player-1 or player-2
    board: [
        '','','',
        '','','',
        '','',''
    ],
};

function changeTurn(currentPlayer){
 if(currentPlayer === 'player-1') {
    return 'player-2';
 }

 if(currentPlayer === 'player-2') {
    return 'player-1';
 }
}


const whoGoesDiv = document.querySelector("#who-goes-tracker");
whoGoesDiv.textContent = game.whoGoes;

function resetState(){
    // First, I need to get references to all the divs
    // Change all of them to have _ as text content, _
    const allSlots = document.querySelectorAll(".slot");

    // const clearSlot = (thisParticularSlot) => {
    //     alert(thisParticularSlot.textContent);

    // };

    // allSlots.forEach(clearSlot);

    allSlots.forEach((thisParticularSlot) => {
        thisParticularSlot.textContent = "_";
    });


}

const testButton = document.querySelector("#reset-button");
testButton.addEventListener("click", resetState);
whoGoesDiv.addEventListener("mousedown", resetState);


// Whenever I want to do something 'big', I'm going to
// 1 - creating a function 
function addIntructions() {

    // Whenever I want to  add something to de DOM, I need a reference point
    const bodyElement= document.querySelector("#body");
    
    let myNewH1 = document.createElement("h1");
    myNewH1.textContent = "Welcome To my Tic Tac Toe";
    bodyElement.prepend(myNewH1);
    // Recipe: Add something to the dom
    // Decide what element you want to add
    // Find a reference point
    // set the element content
    // prepend or append the element in the dom
}


function deleteUnwantedDiv() {
    // Recipe: Remove something to the dom
    // I need a reference to the element
    const divIDoNotWant = document.querySelector("#no");
    divIDoNotWant.remove();
}

function changeValueInBoard(index, valueToChange){
    game.board[index] = valueToChange;
}

function checkIfSomeoneWon(){
    alert("did someone win?")
}

// playTurn is a handler
function handleClickOnSlot(event){
    // find the div I clicked on --> ASsume it's always the first div
    const slotElement1 = document.querySelector("#slot1");
    // I'm going to name things based on my problem domain
    const clickedSlot = event.target;
    // change the contents of the div to X or O depending on the player's turn
    // slotElement1.textContent = 'X';

    // think about the target as the 'target element'
    // console.log(event.target);
    if(game.whoGoes === 'player-1') {
        // whenever player 1 goes, I want to change the div they clicked to X
        // and then it's player's 2 turn
        clickedSlot.textContent = 'X';
        changeValueInBoard(clickedSlot.dataset.index, "X");
        game.whoGoes = 'player-2';
    } else {
        // whenever player 2 goes, I want to change the div they clicked to 0
        // and then it's player's 1 turn
        clickedSlot.textContent = '0';
        game.whoGoes = 'player-1';
        changeValueInBoard(clickedSlot.dataset.index, "0");
    }

    checkIfSomeoneWon();

    // (At some point), see if someone lost or won the game
    // Recipe: Changing a DOM element
    // I need a reference to the element
}

function registerCLickHandlers(){
    // const slotElement = document.querySelector("#slot1");
    // slotElement.addEventListener('mousedown', playTurn);

    //slotElement1 is invalid here because is not in this scope, AND it's not global
    // slotElement1.textContent = 'aeouaoeu';

    // Braces create 'scopes'
    // Scope is a fancy name for area where names are visible
    // Things outside braces are technically 'global', those are always fair game
    // In code, ideally, we want to minizime global names, especially in teams
    // functions create scopes
    const allSlots = document.querySelectorAll(".slot");

    allSlots.forEach((thisParticularSlot) => {
        thisParticularSlot.addEventListener('mousedown', handleClickOnSlot);
    });

    // allSlots.forEach(function test(thisParticularSlot){
    //     thisParticularSlot.addEventListener('mousedown', playTurn);
    // });
}


addIntructions();
deleteUnwantedDiv(); 
registerCLickHandlers();