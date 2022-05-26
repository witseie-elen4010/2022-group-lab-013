const functions = require('./DatabaseHandler.js');
const ConnectToDatabase = functions.ConnectToDatabase;
const ValidLogin = functions.ValidLogin;

let button = document.getElementById("loginButton");

button.addEventListener('click', function () {
  ConnectToDatabase();

  var username = document.getElementById("playerUsername");
  var password = document.getElementById("playerPassword");

  ValidLogin(username, password).then(response => {
    let passed = response;
    if (passed) {
      alert("Loading");
    } else {
      alert("Incorrect username or password");
    }
  });

})