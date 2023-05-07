// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.

// https://github.com/jdmar3/coinserver

// alert("Script file connected");

const rpsalone = document.getElementById("rpsalone");
rpsalone.addEventListener("click", playRPSAlone);
async function playRPSAlone() {
    await fetch(document.baseURI+'app/rps/')
        .then(function(response) {
            return response.json();
        })
            .then(function(result) {
                console.log(result);
                document.getElementById("rpsplayer").innerHTML = result.player;
                document.getElementById("rpsopponent").innerHTML = "";
                document.getElementById("rpsresult").innerHTML = "";
                  })
};

const rps = document.getElementById("rpsform");
rps.addEventListener("submit", playRPS);
async function playRPS(event) {
    event.preventDefault();
    const formEvent = event.currentTarget;
    const formData = new FormData(formEvent);
    const shot = formData.get("shot");
    await fetch(document.baseURI+'app/rps/play/'+shot)
      .then(function(response) {
        return response.json();
      })
        .then(function(result) {
          console.log(result);
          document.getElementById("rpsplayer").innerHTML = result.player;
          document.getElementById("rpsopponent").innerHTML = result.opponent;
          document.getElementById("rpsresult").innerHTML = result.result;
        })
};

const rpslsalone = document.getElementById("rpslsalone");
rpslsalone.addEventListener("click", playRPSLSAlone);
async function playRPSLSAlone() {
    await fetch(document.baseURI+'app/rpsls/')
        .then(function(response) {
            return response.json();
        })
            .then(function(result) {
                console.log(result);
                document.getElementById("rpslsplayer").innerHTML = result.player;
                document.getElementById("rpslsopponent").innerHTML = "";
                document.getElementById("rpslsresult").innerHTML = "";
                  })
};

const rpsls = document.getElementById("rpslsform");
rpsls.addEventListener("submit", playRPSLS);
async function playRPSLS(event) {
    event.preventDefault();
    const formEvent = event.currentTarget;
    const formData = new FormData(formEvent);
    const shot = formData.get("shot");
    await fetch(document.baseURI+'app/rpsls/play/'+shot)
      .then(function(response) {
        return response.json();
      })
        .then(function(result) {
          console.log(result);
          document.getElementById("rpslsplayer").innerHTML = result.player;
          document.getElementById("rpslsopponent").innerHTML = result.opponent;
          document.getElementById("rpslsresult").innerHTML = result.result;
  })
};



function homeNav() {
    document.getElementById("hometab").className = "active";
    document.getElementById("home").className = "active";
    document.getElementById("rpstab").className = "";
    document.getElementById("rps").className = "inactive";
    document.getElementById("rpslstab").className = "";
    document.getElementById("rpsls").className = "inactive";
  }
  function rpsNav() {
    document.getElementById("hometab").className = "";
    document.getElementById("home").className = "inactive";
    document.getElementById("rpstab").className = "active";
    document.getElementById("rps").className = "active";
    document.getElementById("rpslstab").className = "";
    document.getElementById("rpsls").className = "inactive";
  }
  function rpslsNav() {
    document.getElementById("hometab").className = "";
    document.getElementById("home").className = "inactive";
    document.getElementById("rpstab").className = "";
    document.getElementById("rps").className = "inactive";
    document.getElementById("rpslstab").className = "active";
    document.getElementById("rpsls").className = "active";
  }
  

