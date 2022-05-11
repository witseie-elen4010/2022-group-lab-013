'use strict'

let currentletterBlock = document.getElementById('boardBlock1')
let selectedLetter = document.getElementById('letter')


selectedLetter.addEventListener('keyup', inputLetter);

function inputLetter(event){
    var keyValue = event.key
    var keyCodeValue = event.code
	
    if(event.code >= "KeyA" && event.code<= "KeyZ"){
    console.log(keyValue)
    console.log(keyCodeValue)
    currentletterBlock.innerText=keyValue.toUpperCase()
    }
}

