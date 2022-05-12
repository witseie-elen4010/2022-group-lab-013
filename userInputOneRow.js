'use strict'

let currentletterBlock = document.getElementById('boardBlock1')

document.addEventListener('keyup', inputLetter);        //event:user releases key

let guessesWord=[]                                      //array with guessed letters
let rowNo=0;
let columnNo = 0;

function inputLetter(event){
    var keyValue = event.key
    var keyCodeValue = event.code
	
    //user entry must be an alphabet and must not exceed 5 letters
    if(event.code >= "KeyA" && event.code<= "KeyZ" && columnNo<5){
    columnNo++

    currentletterBlock=keyValue.toUpperCase()
    guessesWord.push(currentletterBlock)                            ////user letter intput is added to array
    }
    
    if(columnNo === 5 && event.code === "Enter"){

        //testing purposes
        console.log(guessesWord)

        guessesWord=[]                                              //empty guessed word array after the end of a guess
        columnNo=0                                                  //set column number back to 0 for next guess
        rowNo++
    }
}