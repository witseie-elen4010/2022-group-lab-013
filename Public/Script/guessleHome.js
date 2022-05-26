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

let logoutButton = document.getElementById("logoutButton")
logoutButton.addEventListener('click', function(){
  window.location.href='/Public/View/loginPage.html';
})

let singlePlayerButton = document.getElementById("singlePlayerButton")
singlePlayerButton.addEventListener('click', function(){
  window.location.href='/Public/View/SinglePlayer.html';
})


let multiPlayerButton = document.getElementById("multiPlayerButton")
multiPlayerButton.addEventListener('click', function(){
 alert('Error 404 ')
})


