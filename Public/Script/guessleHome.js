const button = document.getElementById('instructionBtn')
// button.onclick = instructions();

function instructions () {
  const popUp = document.getElementById('instructionList')
  if (popUp.style.display === 'none') {
    popUp.style.display = 'block'
  } else {
    popUp.style.display = 'none'
  }
}

function ToSinglePlayerPage () {
  document.getElementById('single_id').action = 'SinglePlayer'
  document.getElementById('single_id').submit()
}

function ToMultiPlayerPage () {
  document.getElementById('multi_id').action = 'multiplayerModes'
  document.getElementById('multi_id').submit()
}

function ToLoginPage () {
  document.getElementById('logout_id').action = '/'
  document.getElementById('logout_id').submit()
}
