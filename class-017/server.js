const express = require("express"); // this requires express to be installed


const server = express();
const PORT = 1234; // 3000, 3001 - 3010,  5432


// Request handlers are what take care of requests
// to define a requset handler we need a route
// to define a requset handler we need a route
// I want to create a **get** request handler


server.get("/hello", (request, response) => {
    console.log("We got a request!!!!");

    // This is going to be packaged into an HTTP response
    response.send("Hello World from an Express Server! (Did you know kali is cute?)");
});

server.get("/object", (request, response) => {
    console.log("We got a request - /object");

    response.json({
        name: 'Kali',
        age: 8,
        personality: 'Shy, but very sweet (scary to strangers)'
    });
});


// This just starts the server, but we have to define what to do with requests
server.listen(PORT, () => {
    console.log(`server is up at the port ${PORT}`);
});