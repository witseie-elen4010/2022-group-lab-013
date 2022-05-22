'use strict'

function CheckLetterInWord(wordToCheck,templateWord){
    let arrayLength = wordToCheck.length;
    let rightnessArray =[];
    let repeatedTemplate = false;
    let repeatLetter='';
    let firstRepeat = -1;
    for (let i =0;i<arrayLength;i++){
        let posIfInWord = templateWord.indexOf(wordToCheck[i]);
        ;
        
        if(posIfInWord != -1 && templateWord.indexOf(wordToCheck[i],posIfInWord+1)!=-1){
            repeatedTemplate = true;
            repeatLetter=wordToCheck[i];
        }

        if(wordToCheck.indexOf(wordToCheck[i],i+1)!=-1&&firstRepeat==-1)
        {
            firstRepeat=i;
            console.log(firstRepeat)
        }
        if(posIfInWord === -1){
            rightnessArray[i] = 'wrong';//returns 'wrong' if letter is wrong
        }
        else if (wordToCheck[i] === templateWord[i]){
            rightnessArray[i] = 'correct';//returns 'correct' if letter is in correct place
        }
        else{
            rightnessArray[i] = 'wrongPos';//returns 'wrongPos' if letter is in word but in the wrong place
            console.log('loop')
            console.log(i)
            if(!repeatedTemplate && firstRepeat!=-1 && i!=firstRepeat){
                rightnessArray[i] = 'wrong';
                console.log('here')
            }
        }
        
    }
    return rightnessArray;
}

export {CheckLetterInWord};