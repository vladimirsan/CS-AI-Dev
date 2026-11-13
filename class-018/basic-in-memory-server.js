const express = require("express"); 

const server = express();
const PORT = 5002; 

const database = [1,2,3,5];

const serverisUp = () => {
    console.log(`Server is up!`);
};

server.get("/numbers", (request, response) => {
    console.log("Got a GET request on the /numbers endpoint");
    response.send(database.toString());
});

server.listen(PORT, serverisUp);