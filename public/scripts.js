// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.

// https://github.com/jdmar3/coinserver
const shot = document.getElementById("shot");

shot.addEventListener("click", shoot);

async function shoot() {
    const endpoint = "app/rps/";
    const url = document.baseURI+endpoint;
    await fetch(url)
        .then(function(response) {
            return response.json();
        })
            .then(function(result) {
                console.log(result);
                document.getElementById("result").innerHTML;
            })
}