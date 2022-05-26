

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
