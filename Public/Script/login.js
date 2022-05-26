const functions = require('../../Private/Script/DatabaseHandler.js');
const ConnectToDatabase = functions.ConnectToDatabase;
const ValidLogin = functions.ValidLogin;

let button = document.getElementById("loginButton");
console.log('here')

button.addEventListener('click', function () {
  ConnectToDatabase();

  var username = document.getElementById("playerUsername");
  console.log(username);
  var password = document.getElementById("playerPassword");
  console.log(password);

  ValidLogin(username, password).then(response => {
    let passed = response;
    if (passed) {
      console.log("Loading");
      window.location.href='../View/SinglePlayer.html';
    } else {
      alert("Incorrect username or password");
      console.log("wrong");
    }
  });

})