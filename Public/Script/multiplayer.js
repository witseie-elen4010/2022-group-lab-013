
function ToMultiPlayerSingleWordPage() {
  document.getElementById("multiPlayer_id").action = "multiplayerSingleWord"          //navigate to multiplayerSingleWord when button is clicked
  document.getElementById("multiPlayer_id").submit();
}

async function ToMultiPlayerChooseAWordPage() {
  let userType = prompt("Type in 'c' to create a new game 'j' to join a game ");
  switch(userType) {
      case "c":
          let userName = prompt("What is your username?");
          let userGuessWord= prompt("Choose a 5 letter word for your opponent");
          let emptyId = "";
          await fetch('/multiplayerSetUpGame', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                userName: userName,
                userGuess: userGuessWord,
                gameID: emptyId,
              })
            })
            .then(res =>res.json())
            .then(data =>{
              document.getElementById("multiPlayer_id").action = "multiplayerChooseAWord";                //navigate to multiplayerSingleWord when button is clicked
              document.getElementById("multiPlayer_id").submit();
          })
          .catch(err =>{
            console.error(err);
          })
          
        break;
      case "j":
        let gameToJoinID = prompt("What is the game's ID?");
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
            document.getElementById("multiPlayer_id").action = "multiplayerChooseAWord";                //navigate to multiplayerSingleWord when button is clicked
            document.getElementById("multiPlayer_id").submit();
        })
        .catch(err =>{
          console.error(err);
        })

        break;
    }
}
