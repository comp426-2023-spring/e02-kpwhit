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
                document.getElementById("rpsplayerdiv").className = "active";
                document.getElementById("rpsopponentdiv").className = "inactive";
                document.getElementById("rpsresultdiv").className = "inactive";
                document.getElementById("rpsresetbuttondiv").className = "active";
                document.getElementById("rpsplayer").innerHTML = result.player;
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
          document.getElementById("rpsplayerdiv").className = "active";
          document.getElementById("rpsopponentdiv").className = "active";
          document.getElementById("rpsresultdiv").className = "active";
          document.getElementById("rpsresetbuttondiv").className = "active";
          document.getElementById("rpsplayer").innerHTML = result.player;
          document.getElementById("rpsopponent").innerHTML = result.opponent;
          document.getElementById("rpsresult").innerHTML = result.result;
        })
};

const resetrps = document.getElementById("resetrps");
resetrps.addEventListener("click", resetRPS);
async function resetRPS() {
  console.log("Reset");
  document.getElementById("rpsplayerdiv").className = "inactive";
  document.getElementById("rpsopponentdiv").className = "inactive";
  document.getElementById("rpsresultdiv").className = "inactive";
  document.getElementById("rpsresetbuttondiv").className = "inactive";
}

const rpslsalone = document.getElementById("rpslsalone");
rpslsalone.addEventListener("click", playRPSLSAlone);
async function playRPSLSAlone() {
    await fetch(document.baseURI+'app/rpsls/')
        .then(function(response) {
            return response.json();
        })
            .then(function(result) {
                console.log(result);
                document.getElementById("rpslsplayerdiv").className = "active";
                document.getElementById("rpslsopponentdiv").className = "inactive";
                document.getElementById("rpslsresultdiv").className = "inactive";
                document.getElementById("rpslsresetbuttondiv").className = "active";
                document.getElementById("rpslsplayer").innerHTML = result.player;
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
          document.getElementById("rpslsplayerdiv").className = "active";
          document.getElementById("rpslsopponentdiv").className = "active";
          document.getElementById("rpslsresultdiv").className = "active";
          document.getElementById("rpslsresetbuttondiv").className = "active";
          document.getElementById("rpslsplayer").innerHTML = result.player;
          document.getElementById("rpslsopponent").innerHTML = result.opponent;
          document.getElementById("rpslsresult").innerHTML = result.result;
  })
};

const resetrpsls = document.getElementById("resetrpsls");
resetrpsls.addEventListener("click", resetRPSLS);
async function resetRPSLS() {
  document.getElementById("rpslsplayerdiv").className = "inactive";
  document.getElementById("rpslsopponentdiv").className = "inactive";
  document.getElementById("rpslsresultdiv").className = "inactive";
  document.getElementById("rpslsresetbuttondiv").className = "inactive";
}

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
  

