
let button = document.getElementById("loginButton")

function validation() {

  var username = document.getElementById("playerUsername")
  var password = document.getElementById("playerPassword")

  if (username.value == "Guest" && password.value == "Guest") {

    document.getElementById("form_id").action = "homePage"
    document.getElementById("form_id").submit();
  } else {
    alert('Wrong username or password');
  }
    
  if (username.value === '' || password.value === '') {
    alert('Please fill in all fields');
  }


}