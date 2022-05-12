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

function CheckLetterInWord(letterToCheck,letterPosition,templateWord){
    variable = templateWord.indexOf(letterToCheck);
    if(variable = -1){
        return 0;//returns 0 if letter is wrong
    }
    else if (variable = letterPosition){
        return 2;//returns 2 if letter is in word but in the wrong place
    }
    return 1;//returns 1 if letter is in correct place
}

module.exports = CheckLetterInWord