// functions only run if you call them!
function kaliSayHi(treat){
    console.log(`Kali says hi!, and eats a ${treat}`);
}

function gregorSaysHi(treat){
    console.log(`Gregor (Cat) says hi!, and eats a ${treat}`);
}




























































function doSomething(success, failure) { // This eventually becomes a promise
}





function sayHiEveryone(callback, callback2, snack) {
    // This function is in control
    console.log("Everyone is going say Hi, and eat a treat!");
    // sayHiEveryone is trusting that the caller sends them a function that says Hi
    callback(snack);
    callback2(snack);
}


// We want most of the control here
sayHiEveryone(gregorSaysHi, kaliSayHi, "Meat");