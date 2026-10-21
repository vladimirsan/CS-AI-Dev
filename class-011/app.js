// Features I need to build
// - know if someone won lost the game -> Function + variable
// - keep track of who goes in the game: X, 0 -> Variable
// - keep track of the 'board' --> array
// - 'somehow' track when users select X or 0 -> DOM, variables, events, functions
// - restart the game (once someone wins or loses) -> Function

// tools I have
// arrays, objects, functions, variables, if


// flexbox, display, block mode, inline mode

// How can I start to represent the 'rules' and 'state' of the game into
// objects and values, and functions

let game = {
    whoGoes: 'player-1', // player-1 or player-2
    board: [
        '','','',
        '','','',
        '','',''
    ],
};

// Basic rule to keep in mind when thinking about turns
// Once player 1 moves, player 2 goes


// What data from outside the function do I need inside my function?

function changeTurn(currentPlayer){
 //if player one just 'moved'
 // It's player two turn to move

 // if player two just 'moved'
 // It's player one turn to move

 // -----------------------------------------------------------------

 // if whoGoes is equal to player1 ->  whoGoes === 'player-1'
 // who goes now is going to be equal to playertwo ->  whoGoes = 'player-2'
 if(currentPlayer === 'player-1') {
    return 'player-2';
 }

 // if whoGoes is equal to player2 ->  whoGoes === 'player-2'
 // who goes now is going to be equal to player one ->  whoGoes = 'player-1'

 if(currentPlayer === 'player-2') {
    return 'player-1';
 }

 // -----------------------------------------------------------------
}



// While the game is running, the values would look like this
// '0','','',
// 'x','x','',
// '0','','x'



// The DOM is the HTML, but from the point of view of JS
// const thisIsMyBoardHTMLElementButFromJs = document.querySelector(".board");

// console.log(thisIsMyDivButFromJs.textContent);
// thisIsMyDivButFromJs.textContent = 'I set this value from JS';


const whoGoesDiv = document.querySelector("#who-goes-tracker");
whoGoesDiv.textContent = game.whoGoes;











// My high-level goal is to connect HTML to Javascript through a button
// 1 - Create my button and assign an id
// 2 - create a function with the behavior I want
// 3 - somehow, link my function to my button through the DOM
// 4 - get my button from the DOM
// 5 - link the function as an event to the DOM element
// 6 - double-check my ids are the same in the HTML and in JS (variable name is not as important)
function doSomethingWithTheButton(){
    const slot1 = document.querySelector("#slot1")
    slot1.textContent = 'X';
}

const testButton = document.querySelector("#test-button");
testButton.addEventListener("click", doSomethingWithTheButton);
whoGoesDiv.addEventListener("mousedown", doSomethingWithTheButton);


// Senting the call to the function would look like this
// testButton.addEventListener("click", doSomethingWithTheButton());














// Hints for Rock Paper Scissor. n_o wink wink - Use at your own free-will

// if(player1 === 'rock' && player2 === 'paper') {
// console.log('paper wins')
// }