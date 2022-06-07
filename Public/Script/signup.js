const signupButton = document.getElementById("submitButton")

signupButton.addEventListener('click', function () {
    let username = document.getElementById("playerUsername").value
    let password = document.getElementById("playerPassword").value
    let verifyPassword = document.getElementById("playerPasswordCheck").value

    fetch('/SignUp', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: username,
            userPassword: password,
            userPasswordCheck: verifyPassword
        })
    })
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            if (data.includes('exists')) {
                window.alert('Username already taken.')
                window.location.replace('/SignUpPage')
            }
            else if (data.includes('passNo')){
                window.alert('Passwords do not match, please try again.')
                window.location.replace('/SignUpPage')
            }
            else if (data.includes('Home')){
                window.location.replace('/Home')
            }
        })
        .catch(err => {
            console.error(err);
        })
})