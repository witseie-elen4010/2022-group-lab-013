
/*
let userType = prompt("Create game or Join game");

switch(userType) {
    case "create":
        let userName = prompt("What is your username?");
        /////////////////////////////////////////////////////////////
        // method="post" action="/multiplayerChooseAWord"
        fetch('/multiplayerChooseAWord', {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userName: userName,
              userGuess: 'guess'
            })
          })
          .then(data =>data.json())
          .then(data =>{
            let gameID = data;
            console.log(gameID);
        })
        .catch(err =>{
          console.error(err);
        })
        /////////////////////////////////////////////////////////////
      break;
    case "join":
        let gameId = prompt("Input the game ID");
      break;
  }
/*

makeButton.addEventListener('click',function(){
    fetch('/MultiplayerGame', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: userName
        })
      })
      .then(data =>data.json())
      .then(data =>{
          /*
        if(data.includes('/Home'))
        {
          //window.location.replace(data);
        }
        *//*
    })
    .catch(err =>{
      console.error(err);
    })
})
*/

