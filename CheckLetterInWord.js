/*class CheckLetterInWord{
    constructor(checkletter,templateWord){
    this.checkletter = checkletter;
    this.templateWord = templateWord;
    }
    isInWord(){
        for(let iter of this.templateWord){
            if (this.#isInWord(this.checkletter[iter])){
                log("true");
                return true;
            }
        }
    }

    bool #isInWord(letter){
        if(letter = checkletter){
            return true;
        }
    }
}*/

function CheckLetterInWord(wordToCheck,templateWord){
    arrayLength = wordToCheck.length;
    let rightnessArray =[];
    for (let i =0;i<arrayLength;i++){
        variable = templateWord.indexOf(wordToCheck[i]);
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

module.exports = CheckLetterInWord