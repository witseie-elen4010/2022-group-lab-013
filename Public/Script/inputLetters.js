'use strict'

import {populateRow} from './boardScript.js'
import {changeBoxColour} from './boardScript.js'
import {ResetGameBoard} from './boardScript.js'
//import {UICorrectnessFeedback} from '../Interfacescript.js'
import {UICorrectnessFeedback} from './Interfacescript.js'
import{GetAnswer} from './Interfacescript.js'
import{NewWord} from './Interfacescript.js'

const func= require('./GuessWords.js')
const IsWord=func.IsWord;

//import{IsWord} from './GuessWords.js'
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

function inputLetter(event){
    var keyValue = event.key
    var keyCodeValue = event.code
	
    //user entry must be an alphabet
    if(event.code >= "KeyA" && event.code<= "KeyZ" && columnNo<5 && currentTurn <6 && endFlag === false){
        columnNo++
    
        currentletterBlock=keyValue.toUpperCase()
        guessesWord.push(currentletterBlock)                            //user letter intput is added to array
        populateRow (guessesWord, rowNo)
        }
    
        //Case when user deletes letter
        if(event.code === "Backspace" && columnNo>0){
            guessesWord.pop()
            columnNo-=1                                             //decrement the column by 1 when user deleted letter
            populateRow (guessesWord, rowNo)
        }
    
        //User selects Enter to go to nect Row
        if(columnNo === 5 && event.code === "Enter"){

            for(let a=0;a<5;a++){
                guessesWord[a]= guessesWord[a].toLowerCase();
            }

            let boxCoulourCorrectnessArray = UICorrectnessFeedback(guessesWord);
            //console.log(guessesWord);
            if(IsWord(guessesWord)){
                for (let j = 0; j < 5; j++) {
                    changeBoxColour(boxCoulourCorrectnessArray[j],rowNo,j)
                }
                guessesWord=[]                                              //empty guessed word array after the end of a guess
                columnNo=0                                                  //set column number back to 0 for next guess
                rowNo++
                populateRow (guessesWord, rowNo)
                currentTurn  = IncreaseTurnCounter()
                //console.log('checkAnswer',answer)
                endFlag = EndGameCheck(boxCoulourCorrectnessArray,answer,endGamePopUp,popUpText)
            }
            else{
                //console.log('not a valid Guessle word');
                setTimeout(function(){alert('Not a valid Guessle word, please try again')})
                guessesWord=[]                                              
                columnNo=0                                                  
                populateRow (guessesWord, rowNo)
            }            
        }
        
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
    //console.log('newgame',answer)
    ResetGameBoard()
    Restart(endGamePopUp)
    
})

giveUpButton.addEventListener('click',function(){

        endFlag = GiveUp(answer,endGamePopUp,popUpText) 
})
