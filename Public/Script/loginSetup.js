const loginButton = document.getElementById('LoginSubmit')

loginButton.addEventListener('click', function(){
    let userName = "Guest";
      fetch('/Login/Login', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: 'Sprint3',
          userPassword: '4'
        })
      }).then(data=>data.json()).then(data=> {
        console.log(data);
        window.location.replace(data.url);
    })
});
