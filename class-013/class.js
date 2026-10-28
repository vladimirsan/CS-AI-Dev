// Part 1 - These two functions showcase the call stack

// function sayHiAgain() {
//     alert("Hello everyone...again");
// }


// function sayHi() {
//     alert("Hello everyone");

//     sayHiAgain();
    
//     alert("Wow! the Call Stack in action!");

// }


// sayHi();


// Part 2 - Sync vs Async
function runTimer(){
    alert("Timer Done");
}


alert("we are going to start a timer");

setTimeout(
    runTimer, 5000
); // First-class functions get functions as arguments (and return functions often)


alert("This is sync code, so there is no delays, no waits");