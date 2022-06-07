let button = document.getElementById("logSubmit")

button.addEventListener('click', function () {
    var gameID = document.getElementById("gameID")
    fetch('/Log', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gameId: gameID
        })
    })
        .then(data => data.json())
        .then(data => {
            window.alert(data)
            window.location.replace('/GameLog')
        })
        .catch(err => {
            console.error(err);
        })
})