<<<<<<< HEAD
import { Guessword } from './GuessWords.js'
<<<<<<< HEAD
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
=======
//const func= require('./GuessWords.js')
//const Guessword=func.IsWord;
>>>>>>> parent of c05a0f5 (added coding conventions and coding guide,applied standard to all file)
import {CheckLetterInWord} from './CheckLetterInWord.js';
//const Guessword = require('./GuessWords');
//console.log(Guessword());
let word = Guessword();
//console.log(word)
//let testWord = 'pashc' 
<<<<<<< HEAD
>>>>>>> parent of b7db574 (added game statistics for single player)
=======
>>>>>>> parent of c05a0f5 (added coding conventions and coding guide,applied standard to all file)

//console.log(CheckLetterInWord(testWord,word));

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
