import { Guessword } from './GuessWords.js'
import {CheckLetterInWord} from './CheckLetterInWord.js';
let word = Guessword();

function NewWord(){
    word = Guessword()
    //console.log(word)
}

function UICorrectnessFeedback(guessedWord){
    let check=CheckLetterInWord(guessedWord,word);
    return check
}

function GetAnswer(){
    return word
}
export {UICorrectnessFeedback,GetAnswer,NewWord};
