const loginButton = document.getElementById('LoginSubmit')

loginButton.addEventListener('click', async function(){
    //let userName = "Guest";
      fetch('/Login/login', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: 'Sprint3',
          userPassword: '4'
        })
      }).then(data => {
        window.location.replace(data.url);
    })
});
