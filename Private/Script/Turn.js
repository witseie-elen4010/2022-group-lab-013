module.exports = class Turn {

    constructor() {

        this.RemainingTurns = 6;
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


