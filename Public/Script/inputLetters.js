'use strict'

import {populateRow} from './boardScript.js'
import {changeBoxColour} from './boardScript.js'
//import {UICorrectnessFeedback} from '../Interfacescript.js'
import {UICorrectnessFeedback} from './Interfacescript.js'
import{GetAnswer} from './Interfacescript.js'
import{IsWord} from './GuessWords.js'
import{IncreaseTurnCounter} from './checkGameOver.js'
import{EndGameCheck} from './checkGameOver.js'
import{WinCheck} from './checkGameOver.js'


let currentletterBlock = document.getElementById('currentBlock')

document.addEventListener('keyup', inputLetter);        //event:user releases key

let guessesWord=[]                                      //array with guessed letters
let rowNo=0;
let columnNo = 0;
let currentTurn = 0
let winFlag = false
const answer = GetAnswer()
function inputLetter(event){
    var keyValue = event.key
    var keyCodeValue = event.code
	
    //user entry must be an alphabet
    if(event.code >= "KeyA" && event.code<= "KeyZ" && columnNo<5 && currentTurn <6 && winFlag === false){
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
                winFlag = WinCheck(boxCoulourCorrectnessArray)
                EndGameCheck(answer)
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