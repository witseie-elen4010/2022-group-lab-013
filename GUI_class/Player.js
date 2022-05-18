import { initBoard } from './boardScript.js'
import { Guessword } from '../GuessWords.js'
import { inputLetter } from './inputLetters.js'

//Class to instance of each player
class Player {

    constructor(word) {//takes the random word as an imput

        this.RemainingTurns = 6;//declare the remaining turns
        this.obj = {//declare object to store current row,colum, and boolean of whether one turn has been completed
            row: 0,
            col: 0,
            Played: false

        };
        this.Guessletters = [],// variable to store the current guesses letters

            this.word = word//assign random word to be stored within the class
    }

    start() {//start the game
        initBoard()//initilize the board
    
        document.addEventListener("keyup", (event) => {//check for an event

            if (this.getRemainingTurns() > 0) {//if the remaining number of turns is bigger than zero

                let ans = inputLetter(event, this.obj, this.Guessletters, this.word)
                this.Guessletters = ans[0]
                this.obj.Played = ans[1]

                if (this.obj.Played == true) {
                    this.CompleteTurn();
                }
            }
  
        })

    }

    getRemainingTurns() {
        return this.RemainingTurns;
    }

    resetTurns() {
        this.RemainingTurns = 6;
    }

    CompleteTurn() {
        this.RemainingTurns--;
    }

    HasTurns()  //turns status
    {
        if (this.RemainingTurns > 0) {
            return true;
        }
        else {
            return false;
        }
    }

}

export {Player}

let x = Guessword();
console.log(x);
let Player1 = new Player(x)
Player1.start()