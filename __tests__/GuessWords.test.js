/* eslint-env jest */
//const words = require('../Public/Script/GuessWords').default;

//import{Guessword} from '../Public/Script/GuessWords';
//import{IsWord} from '../Public/Script/GuessWords';
//const IsWord =require('../Public/Script/GuessWords')


//const funcs=require('../Public/Script/GuessWords')
//const Guessword=funcs.Guessword;
//const IsWord= funcs.IsWord;

test.skip('Check if length of random guess word is 5', () => {
    expect(Guessword().length).toBe(5);
  });
  
  test.skip('Check if the word is in the "databases" of words', () => {
    expect(IsWord("above")).toBeTruthy();
  })

  test.skip('Check if the word is not  in the "databases" of words', () => {
    expect(IsWord("Yeets")).not.toBeTruthy();
  })

