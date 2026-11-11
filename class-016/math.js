function sum(number1, number2){
    // write some code to make sure the input is a number
    // write some code to make sure that I have both inputs
    return number1 + number2;
}


/**
 * Happy path -> ok -> 2,3 -> 5
 * Negative numbers, 0, -1 1 -> 0
 * Decimal numbers
 * 
 * Edge cases: Things that will break the code
 * "1", "2"
 * "aoeu", 2
 * no input
*/

module.exports = { sum };