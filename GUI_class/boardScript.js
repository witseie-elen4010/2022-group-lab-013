/* eslint-env jest */
//import { WORDS } from './words.js'
const noOfGuesses = 6

//Function to initializa game board
function initBoard () {
  let board = document.getElementById('game-board') //board is of type HTMLElement

  for (let i = 0; i < 6; i++) { //Create 6 rows
    let row = document.createElement('div') //row is of type HTMLElement
    row.className = 'letter-row'

    for (let j = 0; j < 5; j++) { //Create 5 boxes for each row
      let box = document.createElement('div') //box is of type HTMLElement
      box.className = 'letter-box'
      row.appendChild(box)  //Add box as a child element of the current row
    }
    board.appendChild(row)  //Add row as a child element of the board
  }
  console.log('Board Initialised')  //Log message used for testing
}

//Function to populate a given row with a given word
function populateRow (guessesWord, rowNo) {
  let row = document.getElementsByClassName('letter-row')[rowNo]  //row is specified by rowNo

  for (let i = 0; i < 5; i++) { //Insert each letter of the given word (guessesWord) into boxes of row
    let box = row.children[i]
    box.textContent = guessesWord[i]
    box.classList.add('filled-box')
  }
}

//Function to change the colour of a given box in a given row
function changeBoxColour (boxCorrectnessStatus, rowNo, boxNo) {
  let row = document.getElementsByClassName('letter-row')[rowNo]  //row is specified by rowNo
  let box = row.children[boxNo] //box is specified by boxNo

  if (boxCorrectnessStatus === 'wrong') {
    box.style.backgroundColor = 'grey'  //Grey means letter is not in word
  } else
  if (boxCorrectnessStatus === 'wrongPos') {
    box.style.backgroundColor = '#baa817' //Yellow means letter is in word but in the wrong position
  } else
  if (boxCorrectnessStatus === 'correct') {
    box.style.backgroundColor = 'green' //Green means the letter is in word and correct position
  }
}

//Initialize the board
initBoard()
//Export functions for use in other .js files
module.exports = initBoard;
module.exports = populateRow;
module.exports = changeBoxColour;
