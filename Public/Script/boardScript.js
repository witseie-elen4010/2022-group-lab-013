/* eslint-env jest */

//Function to initializa game board
function GameBoardInitialization (id) {
  let gameBoard = document.getElementById(`game-board${id}`) //gameBoard is of type HTMLElement


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
  //console.log('Board Initialised')  //Log message used for testing
  const Play = new Player()
  Play.Play();
}

function ResetGameBoard(){
  let gameBoard = document.getElementById('game-board')

  let word = Array.from(gameBoard.children)
  //console.log(word)
  //console.log(word.length)
  for(let i = 0;i < word.length ;i++){
      let letters = Array.from(word[i].children)
      for(let j = 0; j < 5;j++){
        letters[j].textContent =''
        ChangeLetterContainerColour('',i,j)
      }
  }
  const Play = new Player()
  Play.Play();
}

//Function to populate a given wordContainer with a given word
async function UpdateWordContainer (guessesWord, guessNo) {
  
  let wordContainer  = document.getElementsByClassName('letter-row')[guessNo]  //wordContainer is specified by guessNo
  if(wordContainer){
    //await UpdateDatabase(guessesWord);
    for (let i = 0; i < 5; i++) { //Insert each letter of the given word (guessesWord) into letterContainers of wordContainer
    let letterContainer = wordContainer.children[i]
    letterContainer.textContent = guessesWord[i]
    letterContainer.classList.add('filled-box')
  }
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
  else if(boxCorrectnessStatus ===''){
    letterContainer.style.backgroundColor = 'white'
  }
}


//Game statistic modal code
const openStatsButtons = document.querySelectorAll('[data-modal-target]')
const closeStatsButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
//document.getElementById("Output").innerHTML = "Bonjour";

openStatsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const stats = document.querySelector(button.dataset.modalTarget)
    openStats(stats)

  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.stats.active')
  modals.forEach(stat => {
    closeStats(stat)
  })
})

function closeStats(stats) {
  if (stats == null) return
  stats.classList.remove('active')
  overlay.classList.remove('active')
}

closeStatsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const stats = button.closest('.stats')
    closeStats(stats)
  })
})

function openStats(stats) {
  if (stats == null) return
  stats.classList.add('active')
  overlay.classList.add('active')
  const Play = new Player()
  document.getElementById('Output').innerHTML="Games played: "+Play.getPlayed().toString()+" Games won: "+Play.getwonGames().toString()
}


class Player{
 static gamesPlayed=0;
 static gamesWon=0;
 Play() { Player.gamesPlayed++;}
 won(){ Player.gamesWon++;}
 getPlayed(){return Player.gamesPlayed;}
 getwonGames(){return Player.gamesWon;}
}




//Initialize the board 
let numOfPlayers =  document.getElementById("numberOfPlayers").innerHTML;
if(numOfPlayers > 1)


for(let i = 1; i <= numOfPlayers; i++){                               //initalising board for multiplayer
  GameBoardInitialization(i)
}
else
GameBoardInitialization('')                                           //initalising board for single player
//Export functions for use in other .js files
export {GameBoardInitialization as initBoard}
export {UpdateWordContainer  as populateRow}
export {ChangeLetterContainerColour as changeBoxColour}
export {ResetGameBoard}
export{Player}