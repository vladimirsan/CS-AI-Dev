
function sayHi(){
    alert("Hi");
}


let n = 15;
let myName = "Vinicio";

// using the function as a value
let myFunction = sayHi;

// Like For Each n_o, wink wink
function fancyFunction(operation){ //First-order functions
    // calling the function
    operation();
}

// sayHi();
// myFunction();
// fancyFunction(() => { alert("Hi, from the cool kids!");});


let kaliName = 'Kali';
let kaliAge = 8;
let kaliLooks = "Brown, cute dog";
let kalisPersonality = "Scary at first, but sweet dog";


// Object-Oriented Programming

let kali = {
    name: 'Kali',
    age: 8,
    looks: "Brown, cute dog",
    personality: "Scary at first, but sweet dog",
    behave: sayHi,
};

// console.log(kaliName);
// console.log(kali.name);


let score1 = 10;
let score2 = 1;
let score3 = 9;
let score4 = 8;
let score5 = 7;

let grades = [-1,10, 1, 9, 8, 7]; //Array


// console.log(kali);
// console.log(kali.name);
// console.log(score1);
// console.log(grades);
console.log(`The first value in my array is ${
    grades[0]
}`)
kali.behave();