const loadDogButtonElement = document.querySelector("#load-dog");
const statusElement = document.querySelector("#status");
const pictureElement = document.querySelector("#dog-image");


const loadMyDogWithAnHTTPRequest = () => {
    // I want to make a get request to the computer
    // API - Application Programming Interface

    // Then is callback for success
    fetch("https://dog.ceo/api/breeds/image/random")
    // First I need to wait until I get the data, I need a callback
    .then((response) => {
        console.log("I am running as a callback that is going to run after the fetch is done");
        console.log(response);

        return response.json();
    // Then I need to wait until I have the data in JSON, then I need another callback
    }).then((data) => {
        console.log(data.message);
        console.log(data.status);

        statusElement.textContent = data.status;        
        pictureElement.src = data.message;
        pictureElement.hidden = false;
    });
};


loadDogButtonElement.addEventListener("click", loadMyDogWithAnHTTPRequest);