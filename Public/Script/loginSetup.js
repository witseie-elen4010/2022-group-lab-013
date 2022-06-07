const loginButton = document.getElementById('LoginSubmit')

function ToViewLogs(){
  document.getElementById("log").action = "GameLog"          //navigate to multiplayerSingleWord when button is clicked
  document.getElementById("log").submit();
}
loginButton.addEventListener('click', function(){
    //let userName = "Guest";
    let userName = document.getElementById('playerUsername').value
    let userPass = document.getElementById('playerPassword').value

      fetch('/Login', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: userName,
          userPassword: userPass
        })
      })
      .then(data =>data.json())
      .then(data =>{
        console.log('in loginsetup')
        if(data.includes('/Home'))
        {
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
