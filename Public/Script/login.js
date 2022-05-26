
let button = document.getElementById("loginButton")

button.addEventListener('click', function () {
  var username = document.getElementById("playerUsername")
  var password = document.getElementById("playerPassword")
  if (username.value == "Guest" && password.value == "Guest") {
      window.location.href ='/Public/View/homePage.html';
      }
      else
      {
        alert('Page not found')
      }

})