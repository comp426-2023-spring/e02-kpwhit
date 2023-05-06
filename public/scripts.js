// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.

// https://github.com/jdmar3/coinserver

alert("Script file connected");

const rps = document.getElementById("rps");
rps.addEventListener("click", play);
async function play() {
    await fetch(document.baseURI+'app/rps/')
        .then(function(response) {
            return response.json();
        })
            .then(function(result) {
                console.log(result);
                document.getElementById("result").innerHTML = result.player;
            })
};



