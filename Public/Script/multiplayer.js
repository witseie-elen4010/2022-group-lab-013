
function ToMultiPlayerSingleWordPage() {
  document.getElementById("multiPlayer_id").action = "multiplayerSingleWord"          //navigate to multiplayerSingleWord when button is clicked
  document.getElementById("multiPlayer_id").submit();
}

function ToMultiPlayerChooseAWordPage() {
  let userType = prompt("Type in 'c' to create a new game 'j' to join a game ");
  switch(userType) {
      case "c":
          let userName = prompt("What is your username?");
          let userGuessWord= prompt("Choose a 5 letter word for your opponent");
          fetch('/multiplayerSetUpGame', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                userName: userName,
                userGuess: userGuessWord,
                gameID: ''
              })
            })
            .then(data =>data.json())
            .then(data =>{
              let gameID = data;
              console.log(gameID);
              document.getElementById("multiPlayer_id").body = JSON.stringify({gameID: gameID});
              document.getElementById("multiPlayer_id").action = "multiplayerChooseAWord";                //navigate to multiplayerSingleWord when button is clicked
              document.getElementById("multiPlayer_id").submit();
          })
          .catch(err =>{
            console.error(err);
          })
          
        break;
      case "j":
        let gameToJoinID = prompt("What is the gam's ID?");
        let userNameJoin = prompt("What is your username?");
        let userGuessJoin = prompt("Choose a 5 letter word for your opponent");
        fetch('/multiplayerSetUpGame', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userName: userNameJoin,
              userGuess: userGuessJoin,
              gameID: gameToJoinID
            })
          })
          .then(data =>data.json())
          .then(data =>{
            let gameID = data;
            console.log(gameID);
            document.getElementById("multiPlayer_id").body = JSON.stringify({gameID: gameID});
            document.getElementById("multiPlayer_id").action = "multiplayerChooseAWord";                //navigate to multiplayerSingleWord when button is clicked
            document.getElementById("multiPlayer_id").submit();
        })
        .catch(err =>{
          console.error(err);
        })

        break;
    }
}
