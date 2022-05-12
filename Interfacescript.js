//import { Guessword } from './GuessWords.js'
const CheckLetterInWord = require('./CheckLetterInWord');
//const Guessword = require('./GuessWords');

//console.log(Guessword());
let word = 'caste';
//let testWord = 'pashc' 

console.log(CheckLetterInWord(testWord,word));

function UICorrectnessFeedback(guessedWord){
    CheckLetterInWord(guessedWord,word);
    return Check;
}

module.exports = UICorrectnessFeedback;