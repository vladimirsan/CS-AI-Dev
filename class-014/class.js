// Ways to control async code:
// Callbacks --> Oldest tool -> Nesting Code
// Promises  --> Sugar over callbacks -> a group of two call backs -> success, and one for error
// Async/Await --> Newest tool --> Syntactic sugar over promises


// The cal stack decides the order, we have no control
// setTimeout(() => {
//     console.log("one");
// }, 2000); // 1000ms ==== 1s

// setTimeout(() => {
//     console.log("three");
// }, 100); 

// setTimeout(() => {
//     console.log("two");
// }, 1000); 
//three, two, one


// 1 - callbacks just means nesting code
// setTimeout(() => {
//     console.log("one");

//     setTimeout(() => {
//         console.log("two");

//         setTimeout(() => {
//             console.log("three");
//         }, 100); 
//     }, 1000); 
// }, 2000); // 1000ms ==== 1s

// 1.5 a nicer callback

// setTimeout(() => {
//     console.log("one");

//     setTimeout(() => {
//         console.log("two");

//         setTimeout(() => {
//             console.log("three");
//         }, 100); 
//     }, 1000); 
// }, 2000); // 1000ms ==== 1s



// function three(){
//     setTimeout(() => {
//         console.log("three");
//     }, 100); 
// }

// function two(){
//     setTimeout(() => {
//         console.log("two");

//         three();
//     }, 1000); 
// }

function one(){
    setTimeout(() => { // whenever one runs, wait 2000 ms and then run this function
        console.log("one");

        two();
    }, 2000); // 1000ms ==== 1s
}

// one();


// This is just a helper that allows us to create delayed functions
// This is called a callback because you call the function back
function aNiceCallback(message, time, callMeWheneverTheConsoleLogIsDone){
    setTimeout( () => {
        console.log(message)

        console.log(callMeWheneverTheConsoleLogIsDone);

        if(callMeWheneverTheConsoleLogIsDone !== undefined) {
            callMeWheneverTheConsoleLogIsDone(); // callMeMaybe is a function I got as an argument        
        }

    }, time);
}


function three(){
    aNiceCallback("three", 100)
}

function two(){
    aNiceCallback("two", 1000, three)
}

aNiceCallback("one", 2000, two)




// function three(){
//     setTimeout(() => {
//         console.log("three");
//     }, 100); 
// }

