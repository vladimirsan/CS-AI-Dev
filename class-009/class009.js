// alert("This is a message");


// // We can say that every bit of data has a type

// let iAmANumber = 8;
// let iAmANumberToo = "8";

// alert("28"); // Line 3 is a string that happens to look like a number
// alert(28); // Here is an actual number
function greetUser(firstName, otherValue){
    alert(`Hi ${firstName}. This is your name in lowercase ${firstName.toLowerCase()}`)

    if(otherValue === 'vinicio') {
        alert(` That \'s very value`);
    } else {
        alert('That is a value...');
    }
}


// alert(`Look! I can combine numbers and strings like this ${8}`);
// alert('Look! I can combine numbers and strings like this ' +  8);

// I'm calling the function prompt, and I'm sending "What's your name as an argument"
// I can capture 'return' values from functions in variables
let nameIgotByTheUser = prompt("What's your name");

let someValue = 'Vinicio';

greetUser(nameIgotByTheUser, someValue);



// alert(`Hi ${userName}. Nice to meet you!`);

// alert('Hi ' + userName + ' Nice to meet you!');


// the actual prompt, it has a parameter, and that's used to communicate to the user
// function prompt2(message) {
//     // Here I'm going to have all the logic to show the prompt
//     return 'some value';
//     // somewhere inside the real prompt, there is a return
//     // we can capture that value and assigning it to a variable
// }

