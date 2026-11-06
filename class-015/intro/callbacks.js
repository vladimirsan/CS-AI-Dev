// functions only run if you call them!
function kaliSayHi(){
    console.log("Kali says hi!");
}

function khalSaysHi(){
    console.log("Khal (Cat) says hi!");
}

function gregorSaysHi(){
    console.log("Gregor (Cat) says hi!");
}

































































function sayHiEveryone(callback, callback2) {
    // This function is in control
    console.log("Everyone is going say Hi");
    // sayHiEveryone is trusting that the caller sends them a function that says Hi
    callback();
    callback2();
}


sayHiEveryone(gregorSaysHi, kaliSayHi);