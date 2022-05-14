'use strict'

function CheckLetterInWord(wordToCheck,templateWord){
    let arrayLength = wordToCheck.length;
    let rightnessArray =[];
    for (let i =0;i<arrayLength;i++){
        let variable = templateWord.indexOf(wordToCheck[i]);
        if(variable === -1){
            rightnessArray[i] = 'wrong';//returns 0 if letter is wrong
        }
        else if (wordToCheck[i] === templateWord[i]){
            rightnessArray[i] = 'correct';//returns 1 if letter is in correct place
        }
        else{
            rightnessArray[i] = 'wrongPos';//returns 2 if letter is in word but in the wrong place
        }
        
    }
    return rightnessArray;
}

export {CheckLetterInWord};