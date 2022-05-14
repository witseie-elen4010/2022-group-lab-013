/* eslint-env jest */

//Function to initializa game board
function GameBoardInitialization () {
  let gameBoard = document.getElementById('playable-board') //gameboard is of type HTMLElement

  for (let j = 0; j < 6; j++) { //Create 6 rows to contain words
    let wordContainer = document.createElement('div') //row is of type HTMLElement
    wordContainer.className = 'word-container'

    for (let k = 0; k < 5; k++) { //Create 5 letter containers for each row
      let letterContainer = document.createElement('div') //letterContainer is of type HTMLElement
      letterContainer.className = 'character-container'
      wordContainer.appendChild(letterContainer)  //Add letterContainer as a child element of the current row
    }
    gameBoard.appendChild(wordContainer)  //Add wordContainer as a child element of the game board
  }
  console.log('Board Initialised')  //Log message used for testing
}

//Function to populate a given row with a given word
function UpdateWordContainer (guessesWord, guessNo) {
  let wordContainer = document.getElementsByClassName('word-container')[guessNo]  //wordContainer is specified by guessNo

  for (let j = 0; j < 5; j++) { //Insert each letter of the given word (guessesWord) into letter containers of word container
    let letterContainer = wordContainer.children[j]
    letterContainer.textContent = guessesWord[j]
    letterContainer.classList.add('filled-character-container')
  }
}

//Function to change the colour of a given letter container in a given word container
function ChangeLetterContainerColour (boxCorrectnessStatus, guessNo, letterNo) {
  let wordContainer = document.getElementsByClassName('word-container')[guessNo]  //wordContainer is specified by rowNo
  let letterContainer = wordContainer.children[letterNo] //box is specified by letterNo

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
export{GameBoardInitialization, UpdateWordContainer, ChangeLetterContainerColour}
//export UpdateWordContainer
//export ChangeLetterContainerColour
