<<<<<<< HEAD
import { Guessword } from './GuessWords.js'
// const func= require('./GuessWords.js')
// const Guessword=func.IsWord;
import { CheckLetterInWord } from './CheckLetterInWord.js'
// const Guessword = require('./GuessWords');
// console.log(Guessword());
let word = Guessword()
// console.log(word)
// let testWord = 'pashc'
=======
//import { Guessword } from './GuessWords.js'
const func= require('./GuessWords.js')
const Guessword=func.IsWord;
import {CheckLetterInWord} from './CheckLetterInWord.js';
//const Guessword = require('./GuessWords');
//console.log(Guessword());
let word = Guessword();
//console.log(word)
//let testWord = 'pashc' 
>>>>>>> parent of b7db574 (added game statistics for single player)

// console.log(CheckLetterInWord(testWord,word));

function NewWord () {
  word = Guessword()
  // console.log(word)
}

function UICorrectnessFeedback (guessedWord) {
  const check = CheckLetterInWord(guessedWord, word)
  return check
}

function GetAnswer () {
  return word
}
export { UICorrectnessFeedback, GetAnswer, NewWord }
