'use strict'

function CheckLetterInWord (userInputWord, randomWordToGuess) {
  const arrayLength = userInputWord.length
  const rightnessArray = []
  let isRepeatedInWordToGuess = false
  let repeatLetter = ''
  let firstRepeat = -1
  for (let i = 0; i < arrayLength; i++) {
    const posIfInWord = randomWordToGuess.indexOf(userInputWord[i])

    if (posIfInWord != -1 && randomWordToGuess.indexOf(userInputWord[i], posIfInWord + 1) != -1) {
      isRepeatedInWordToGuess = true
      repeatLetter = userInputWord[i]
    }

    if (userInputWord.indexOf(userInputWord[i], i + 1) != -1 && firstRepeat == -1) {
      firstRepeat = i
    }
    //* *************Actual checks********************//
    if (posIfInWord === -1) {
      rightnessArray[i] = 'wrong'// returns 'wrong' if letter is wrong
    } else if (userInputWord[i] === randomWordToGuess[i]) {
      rightnessArray[i] = 'correct'// returns 'correct' if letter is in correct place
    } else {
      rightnessArray[i] = 'wrongPos'// returns 'wrongPos' if letter is in word but in the wrong place
      if (!isRepeatedInWordToGuess && firstRepeat != -1 && i != firstRepeat) {
        rightnessArray[i] = 'wrong'
        // This code accounts for repeated letters in the input wourd
      }
    }
  }
  return rightnessArray
}

export { CheckLetterInWord }
