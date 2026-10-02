// This is a comment

// data and behavior
// numbers
// 8 + 1
// 8.1 - 2

// string -> text
// "hello, I am a string"
// 'hello, I am a string'
// `hello, I am a fancy string`


// we need data because we want to use it

// we use names to be able to use data
// variable names should be unique (..in the execution context)
// text values are called strings in JS

let message = 'Kali is Cute';

//no spaces in names please
// do not use upper case on the first letter (for now)
// names are case-sensitive in JS
let thisIsAVeryLongName = 'Kali is Cute';
const thisIsAVeryLongNameAndNowItsConst = 'Kali is Cute';

//  modern JS development does not use var
//  (but var is 'bassicaly' a worse let)
var iAmAVarVariable = 'Kali is Cute';



// goal behavior: I want to show 4, by adding 2 + 2
let kalisAge =  2;
// kalisAge + 2; This will create a new value, but it's not kalisAge
kalisAge = kalisAge + 2;
kalisAge += 2; // kalisAge = kalisAge + 2; Syntacic Sugar

alert(kalisAge);
alert(iAmAVarVariable);