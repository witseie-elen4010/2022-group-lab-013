const functions = require('../../Private/Script/DatabaseHandler.js');
const ConnectToDatabase = functions.ConnectToDatabase;
const ValidLogin = functions.ValidLogin;
const AddnewPlayer = functions.AddnewPlayer;
const UserExits=functions.UserExits;

let button = document.getElementById("loginButton");

button.addEventListener('click', function () {
  ConnectToDatabase();

  var username = document.getElementById("playerUsername");
  var password = document.getElementById("playerPassword");

  UserExits(username).then(response => {
    let checked = response;
    if (checked==false) {
        AddnewPlayer(username, password)
    } else {
      alert("Username exits");
    }
    });

    var passwordverify = document.getElementById("playerPasswordCheck");
    
    ValidLogin(username, passwordverify).then(response => {
        let passed = response;
        if (passed) {
          alert("Loading");
        } else {
          alert("Password does not match");
        }
    });

})
