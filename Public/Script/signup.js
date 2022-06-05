let button = document.getElementById("loginButton")

button.addEventListener('click', function(){
  var username = document.getElementById("playerUsername")
  var password = document.getElementById("playerPassword")
  var verifyPassword = document.getElementById("playerPasswordCheck")

if(password.value !== verifyPassword.value){
    alert("Passwords do not match")
}else{
    if(username.value == "Group13" && password.value == "password"){
        alert("Loading")
    }else{
        alert("Incorrect username or password")
    }}
})