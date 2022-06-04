'use strict'

import {populateRow} from './boardScript.js'
import {changeBoxColour} from './boardScript.js'
import {ResetGameBoard} from './boardScript.js'
//import {UICorrectnessFeedback} from '../Interfacescript.js'
import {UICorrectnessFeedback} from './Interfacescript.js'
import{GetAnswer} from './Interfacescript.js'
import{NewWord} from './Interfacescript.js'


import{IsWord} from './GuessWords.js'
import{GiveUp, IncreaseTurnCounter} from './EndGameManager.js'
import{EndGameCheck} from './EndGameManager.js'
import{CloseForm} from './EndGameManager.js'
import{Restart} from './EndGameManager.js'


let currentletterBlock = document.getElementById('currentBlock')
let popUpText = document.getElementById('GameOver-Text')
let endGamePopUp = document.getElementById('GameOver-Popup')
const reButton = document.getElementById('restartButton')
const closeButton = document.getElementById('closeButton')
const giveUpButton = document.getElementById('giveUpButton')

let answer = GetAnswer()
document.addEventListener('keyup', inputLetter);        //event:user releases key

let guessesWord=[]                                      //array with guessed letters
let rowNo=0;
let columnNo = 0;
let currentTurn = 0
let endFlag = false
let keyboardLetter = ""

/////////////////////////////////////////////////////////////////////////
//KeyBoard//

let Keyboard = window.SimpleKeyboard.default;
let keeptrack = 0

let guessleKeyboard = new Keyboard({
  onChange: function (data) {
    keyboardLetter = data.toUpperCase()
    
    if(data.length > keeptrack)
    letterInput(keyboardLetter[keyboardLetter.length-1])            //function call: letterInput stores user input

    keeptrack = data.length
     populateRow (guessesWord, rowNo)
  },

  onKeyPress: function(key){
    if(key == '{enter}') letterInput("ENTER")
    if(key == '{bksp}') letterInput("BACKSPACE")
  }
});
/////////////////////////////////////////////////////////////////////////////


function letterInput(value){
   if((value >= "A" && value<= "Z" && value.length == 1) && columnNo<5 && currentTurn <6 && endFlag === false){
     columnNo++
     currentletterBlock=value.toUpperCase()
     guessesWord.push(value)                                    //user letter intput is added to array                      
     populateRow (guessesWord, rowNo)
   }
   if(value === "BACKSPACE" && columnNo>0){
       guessesWord.pop()
       columnNo-=1                                             //decrement the column by 1 when user deleted letter
       populateRow (guessesWord, rowNo)
   }
 
   if(columnNo === 5 && value === "ENTER"){
 
     for(let a=0;a<5;a++){
         guessesWord[a]= guessesWord[a].toLowerCase();
     }
 
     let boxCoulourCorrectnessArray = UICorrectnessFeedback(guessesWord);
     if(IsWord(guessesWord)){
         for (let j = 0; j < 5; j++) {
             changeBoxColour(boxCoulourCorrectnessArray[j],rowNo,j)
         }
         guessesWord=[]                                              //empty guessed word array after the end of a guess
         columnNo=0                                                  //set column number back to 0 for next guess
         rowNo++
         populateRow (guessesWord, rowNo)
         currentTurn  = IncreaseTurnCounter()
         endFlag = EndGameCheck(boxCoulourCorrectnessArray,answer,endGamePopUp,popUpText)
     }
     else{
         setTimeout(function(){alert('Not a valid Guessle word, please try again')})
         guessesWord=[]                                              
         columnNo=0                                                  
         populateRow (guessesWord, rowNo)
     }            
   }
 }
 

 function inputLetter(event){
  var keyValue = event.key
  var keyCodeValue = event.code
  var keyValueUpper = keyValue.toUpperCase()

  letterInput(keyValueUpper)
}

closeButton.addEventListener('click',function(){
  CloseForm(endGamePopUp)
})

reButton.addEventListener('click',function(){
  guessesWord=[]  
  rowNo=0;
  columnNo = 0;
  currentTurn = 0
  endFlag = false
  NewWord()
  answer = GetAnswer()
  
  ResetGameBoard()
  Restart(endGamePopUp)
  
})

giveUpButton.addEventListener('click',function(){

endFlag = GiveUp(answer,endGamePopUp,popUpText) 
})