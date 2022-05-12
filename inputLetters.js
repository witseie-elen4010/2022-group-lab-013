'use strict'

let currentletterBlock = document.getElementById('boardBlock1')

document.addEventListener('keyup', inputLetter);        //event:user releases key

let guessesWord=[]                                      //array with guessed letters
let rowNo=0;

function inputLetter(event){
    var keyValue = event.key
    var keyCodeValue = event.code
	
    //user entry must be an alphabet
    if(event.code >= "KeyA" && event.code<= "KeyZ"){       
    currentletterBlock=keyValue.toUpperCase()           
    guessesWord.push(currentletterBlock)                //user letter intput is added to array
    
    //testing purposes
    console.log(keyValue)
    console.log(keyCodeValue)
    console.log(guessesWord)
    }
}