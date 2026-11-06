// scope is the area of the code in which names are usable
// global scope is available everwhere in this file
// global is the biggest scope
const iamGlobalScope = "global";

const confusion = "Vinicio"; // Global Scope




function sayHi(){
    // global scope can't access here
    // This creates a new (smaller) scope area
    const secret = "secret code";
    console.log(secret);

    const confusion = "Kali"; // Scope defined by function

    console.log(confusion);
}


sayHi();




const dogName = "Kali";

if(dogName === "Kali"){
    // global scope can't access here

    // the brackets create a new area of scope
    const dogSnack = "Meat -- inside scope";
    console.log(dogSnack);

    const confusion = "Re-defining confusion"; // Block Scope - if Statement

    console.log(confusion);
}












































































































































