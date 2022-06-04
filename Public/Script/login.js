
const button = document.getElementById('loginButton')

function GuestLogin () {
  document.getElementById('playerUsername').value = 'Guest'
  document.getElementById('playerPassword').value = 'Guest'
  alert('If you log in as a guest you can only play single player mode')
  Validation()
}

function Validation () {
  const username = document.getElementById('playerUsername')
  const password = document.getElementById('playerPassword')

  if (username.value == 'Guest' && password.value == 'Guest') {
    document.getElementById('form_id').action = 'homePage'
    document.getElementById('form_id').submit()
  } else {
    alert('Wrong username or password')
  }

  if (username.value === '' || password.value === '') {
    alert('Please fill in all fields')
  }
}

function Signup () {
  document.getElementById('form_id').action = 'signupPage'
  document.getElementById('form_id').submit()
}
