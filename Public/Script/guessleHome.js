

let button = document.getElementById("instructionBtn")
button.onclick=function(){instructions()}

function instructions(){
  var popUp = document.getElementById("instructionList");
  if (popUp.style.display === "none") {
    popUp.style.display = "block";
  } else {
    popUp.style.display = "none";
  }
}

let backButton = document.getElementById("backButton")
backButton.addEventListener('click', function(){
  window.location.href='../View/loginPage.html'
})

let singlePlayerButton = document.getElementById("singlePlayerButton")
backButton.addEventListener('click', function(){
  window.location.href='../View/SinglePlayer.html'
})