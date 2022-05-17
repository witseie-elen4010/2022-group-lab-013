import { Guessword } from './GuessWords.js'
import {CheckLetterInWord} from './CheckLetterInWord.js';
//const Guessword = require('./GuessWords');
//console.log(Guessword());
let wordGuessed = Guessword();
let word = wordGuessed[0]+wordGuessed[1]+wordGuessed[2]+wordGuessed[3]+wordGuessed[4]
console.log(word)
//let testWord = 'pashc' 

//console.log(CheckLetterInWord(testWord,word));

function UICorrectnessFeedback(guessedWord){
    let check=CheckLetterInWord(guessedWord,word);
    return check;
}

export {UICorrectnessFeedback};