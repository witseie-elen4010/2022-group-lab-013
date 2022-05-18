//import { Guessword } from './GuessWords.js'
import {CheckLetterInWord} from './CheckLetterInWord.js';
//const Guessword = require('./GuessWords');
//console.log(Guessword());
//let word = 'caste';
//let testWord = 'pashc' 

//console.log(CheckLetterInWord(testWord,word));

function UICorrectnessFeedback(guessedWord,word){
    let check=CheckLetterInWord(guessedWord,word);
    return check;
}

export {UICorrectnessFeedback};