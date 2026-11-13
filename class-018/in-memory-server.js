const express = require("express"); 

const server = express();
const PORT = 5002; 

let nextId = 3;

const database = [ {
    id: 1,
    name: "Kali",
}, 
{
    id: 2,
    name: "Khal"
}];

const serverisUp = () => {
    console.log(`Server is up!`);
};

// middleware
server.use(express.json());

server.get("/pets", (request, response) => {
    console.log("Got a GET request on the /numbers endpoint");
    // response.json(database);
    response.send({
        pets: database,
    });
});

server.post("/pets", (request, response) => {
    console.log('Got a post request');


    console.log('This is what user sent as the body of the request', request.body);

    const newPet = {id: nextId, name: request.body.name};

    nextId = nextId + 1;
    // nextId++;

    database.push(newPet);
    response.status(201).json(newPet);
});

server.get("/pets/:id", (request, response) => {
    // http://localhost:5002/pets/28
    console.log("The user wants to know information about a specific pet");
    console.log(`They want info for the pet with Id ${request.params.id}`);

    const idAsNumber = Number(request.params.id);

    // if(The value is not a number)
    // return a error response

    const petTheUserWants = database.find((currentPet) => {
        if(currentPet.id === idAsNumber) {
            return true;
        }
        else{
            return false;
        }
        // return currentPet.id === idAsNumber;
    });

    // is petTheUserWants undefined?
    if(petTheUserWants === undefined) {
        response.status(404).json({message: "Not Found"});
        return;
    }

    console.log(`We found`, petTheUserWants)
    response.send({
        pet: petTheUserWants // this becomes undefined if there is no pet
    });
});

server.listen(PORT, serverisUp);