// let userName = prompt("What is your name, friend?");

// function challenge(n){
//     alert("Hello " + n);
//     alert(`Hello ${n}`);
// } 

// challenge(userName);

let name2 = "Vinicio";
console.log(name2);


function greet(n){
    console.log(`Nice to meet you ${n}. Kali is cute!`);
} 

greet("Vinicio");
greet("Kali");
greet("Khal");
greet("Gregor");
greet("Hound");


function square(num){
    return num * num;
    // return Math.pow(num, 2);
    // // pow -> Power
    // //console.log
} 

const squareArrow = (num) => {
    return num * num;
    // return Math.pow(num, 2);
    // // pow -> Power
    // //console.log
} 

// let result = square(5);
// console.log(result);

console.log(square(5));
// console.log(25);


function calculateRectangleArea(length, width){
    return length * width;
}

const calculateRectangleArea2 = (length, width) => {
    return length * width;
}


const myLength = 10;
const myWidth = 10;
const areaResult = calculateRectangleArea(myLength, myWidth);
console.log(`I called my function with length: ${myLength}, width: ${myWidth}, and the result was ${result}`);