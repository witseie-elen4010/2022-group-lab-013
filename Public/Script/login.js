
let button = document.getElementById("loginButton")

button.addEventListener('click', function(){
  var username = document.getElementById("playerUsername")
  var password = document.getElementById("playerPassword")
    if(username.value == "Group13" && password.value == "password"){
        alert("Loading")
      } else{
        alert("Incorrect username or password")
      } 
})