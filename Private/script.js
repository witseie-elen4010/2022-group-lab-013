import { WORDS } from './words.js'
const noOfGuesses = 6

//let row = document.getElementsByClassName("letter-row")[row_number]
//let box = row.children[box_number]
function initBoard () {
  let board = document.getElementById('game-board')

  for (let i = 0; i < noOfGuesses; i++) {
    let row = document.createElement('div')
    row.className = 'letter-row'

    for (let j = 0; j < 5; j++) {
      let box = document.createElement('div')
      box.className = 'letter-box'
      row.appendChild(box)
    }
    board.appendChild(row)
  }
}

function populateRow (guessesWord, rowNo) {
  let row = document.getElementsByClassName('letter-row')[rowNo]

  for (let i = 0; i < 5; i++) {
    let box = row.children[i]
    box.textContent = guessesWord[i]
    box.classList.add('filled-box')
  }
}

function changeBoxColour (Colour, rowNo, boxNo) {
  let row = document.getElementsByClassName('letter-row')[rowNo]
  let box = row.children[boxNo]

  if (Colour === 'grey') {
    box.style.backgroundColor = 'grey'
  } else
  if (Colour === 'yellow') {
    box.style.backgroundColor = '#baa817'
  } else
  if (Colour === 'green') {
    box.style.backgroundColor = 'green'
  }
}

//console.log('Init board begin')
//initBoard()
//console.log('Init board complete')
//populateRow('Start', 0)
//populateRow(WORDS[0], 1)
//
//changeBoxColour('green', 0, 0)
//changeBoxColour('yellow', 0, 1)
//changeBoxColour('grey', 0, 2)

module.exports ={
    initBoard,
    populateRow,
    changeBoxColour
}