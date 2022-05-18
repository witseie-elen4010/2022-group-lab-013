/* eslint-env jest */

//Function to initializa game board
function GameBoardInitialization () {
  let gameBoard = document.getElementById('game-board') //gameBoard is of type HTMLElement

  for (let i = 0; i < 6; i++) { //Create 6 word containers
    let wordContainer = document.createElement('div') //wordContainer is of type HTMLElement
    wordContainer.className = 'letter-row'

    for (let j = 0; j < 5; j++) { //Create 5 letter container for each wordContainer
      let letterContainer = document.createElement('div') //letterContainer is of type HTMLElement
      letterContainer.className = 'letter-box'
      wordContainer.appendChild(letterContainer)  //Add letterContainer as a child element of the current wordContainer
    }
    gameBoard.appendChild(wordContainer)  //Add wordContainer as a child element of the board
  }
  console.log('Board Initialised')  //Log message used for testing
}

//Function to populate a given wordContainer with a given word
function UpdateWordContainer (guessesWord, guessNo) {
  let wordContainer  = document.getElementsByClassName('letter-row')[guessNo]  //wordContainer is specified by guessNo

  for (let i = 0; i < 5; i++) { //Insert each letter of the given word (guessesWord) into letterContainers of wordContainer
    let letterContainer = wordContainer.children[i]
    letterContainer.textContent = guessesWord[i]
    letterContainer.classList.add('filled-box')
  }
}

//Function to change the colour of a given box in a given wordContainer
function ChangeLetterContainerColour (boxCorrectnessStatus, guessNo, letterNo) {
  let wordContainer = document.getElementsByClassName('letter-row')[guessNo]  //wordContainer is specified by guessNo
  let letterContainer = wordContainer.children[letterNo] //letterContainer is specified by letterNo

  if (boxCorrectnessStatus === 'wrong') {
    letterContainer.style.backgroundColor = 'grey'  //Grey means letter is not in word
  } else
  if (boxCorrectnessStatus === 'wrongPos') {
    letterContainer.style.backgroundColor = '#baa817' //Yellow means letter is in word but in the wrong position
  } else
  if (boxCorrectnessStatus === 'correct') {
    letterContainer.style.backgroundColor = 'green' //Green means the letter is in word and correct position
  }
}

//Initialize the board
GameBoardInitialization()
//Export functions for use in other .js files
export {GameBoardInitialization as initBoard}
export {UpdateWordContainer  as populateRow}
export {ChangeLetterContainerColour as changeBoxColour}
