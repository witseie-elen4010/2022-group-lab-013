const loginButton = document.getElementById('LoginSubmit')


function ToViewLogs(){
  document.getElementById("log").action = "GameLog"          //navigate to multiplayerSingleWord when button is clicked
  document.getElementById("log").submit();
}
loginButton.addEventListener('click', function(){

function ToSignUp(){
  document.getElementById("sign").action = "SignUpPage"          //navigate to multiplayerSingleWord when button is clicked
  document.getElementById("sign").submit();
}

loginButton.addEventListener('click', async function(){

    //let userName = "Guest";
    let userName = await document.getElementById('playerUsername').value
    let userPass = await document.getElementById('playerPassword').value

      await fetch('/Login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: userName,
          userPassword: userPass
        })
      })
      .then(data => data.json())
      .then(data => {
        if(data.includes('/Home')){
          window.location.replace(data);
        }
        else if (!data.includes('/Home')){
          window.alert('login failed, check credentials');
          window.location.replace(data);
        }
    })
    .catch(err =>{
      console.error(err);
    })
})
