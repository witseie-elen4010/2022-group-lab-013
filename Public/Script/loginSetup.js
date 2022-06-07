const loginButton = document.getElementById('LoginSubmit')

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
