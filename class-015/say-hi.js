
const secret = "secret value";

function sayHi(name){
    console.log(`Hi ${name}`);
}


// node js defines a global object for us called module


// this file is going to export a name, and that name is sayHi
// exporting things makes them visible outside of the file
// this is what we call commonJS modules
// notice how secret stays global to this file, but it's not visible from the other file
module.exports = sayHi;
