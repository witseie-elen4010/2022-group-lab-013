const button = document.getElementById('loginButton')

button.addEventListener('click', function () {
  const username = document.getElementById('playerUsername')
  const password = document.getElementById('playerPassword')
  const verifyPassword = document.getElementById('playerPasswordCheck')

  if (password.value !== verifyPassword.value) {
    alert('Passwords do not match')
  } else {
    if (username.value == 'Group13' && password.value == 'password') {
      alert('Loading')
    } else {
      alert('Incorrect username or password')
    }
  }
})
