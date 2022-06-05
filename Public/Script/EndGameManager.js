'use strict'
<<<<<<< HEAD
<<<<<<< HEAD
import { Player } from './boardScript.js'
=======

>>>>>>> parent of b7db574 (added game statistics for single player)
=======
import {Player} from './boardScript.js'
>>>>>>> parent of c05a0f5 (added coding conventions and coding guide,applied standard to all file)
let turns = 0
let winFlag = false
let endFlag = false
let gameOverText =''

function OpenForm(endGamePopUp){
    //console.log('opening')
    endGamePopUp.style.display ='flex'
}

function CloseForm(endGamePopUp){
    //console.log('closing')
   endGamePopUp.style.display = 'none'
}

function Restart(endGamePopUp){
    turns = 0
    winFlag = false
    endFlag = false
    gameOverText =''
    endGamePopUp.style.display = 'none'
}

function GiveUp(answer,endGamePopUp,popUpText){
    endFlag = true
    

    if(turns>1)
    {
     gameOverText = `You have given up after ${turns} tries \n The correct word is \n ${answer.toUpperCase()}`
    }
    else
    {
        gameOverText = `You have given up after ${turns} try \n The correct word is \n ${answer.toUpperCase()}`
    }
    
    popUpText.textContent = gameOverText
    OpenForm(endGamePopUp)
    return endFlag
}
function IncreaseTurnCounter(){
    turns+=1
    return turns
}

<<<<<<< HEAD
<<<<<<< HEAD
export { EndGameCheck, IncreaseTurnCounter, CloseForm, Restart, GiveUp }
=======
=======
>>>>>>> parent of c05a0f5 (added coding conventions and coding guide,applied standard to all file)
function EndGameCheck(rightnessArray,answer,endGamePopUp,popUpText){
    if(!endFlag){
        for(let i = 0;i<rightnessArray.length;i++){
        if(rightnessArray[i]!='correct'){
            winFlag = false
            break}

        else if(rightnessArray[i]=='correct'){
            winFlag = true
        }
    }

    if(winFlag === true){
<<<<<<< HEAD
        gameOverText = `You have won in ${turns} tries\n The correct word is \n ${answer.toUpperCase()}`
            //setTimeout(function(){alert(gameOverText))
            
=======
        const Play = new Player()
        Play.won();
        gameOverText = `You have won in ${turns} tries\n The correct word is \n ${answer.toUpperCase()}`
            //setTimeout(function(){alert(gameOverText))
>>>>>>> parent of c05a0f5 (added coding conventions and coding guide,applied standard to all file)
        endFlag = true
        //console.log("win",endFlag)
            }
        
    if (turns === 6 && winFlag === false){
        gameOverText = `Game Over \n The correct word is \n ${answer.toUpperCase()}`
            //setTimeout(function(){alert(gameOverText))
<<<<<<< HEAD
            
=======
>>>>>>> parent of c05a0f5 (added coding conventions and coding guide,applied standard to all file)
            endFlag = true
            console.log("gameover",endFlag)
        }
    
    }

    if(endFlag === true){
        popUpText.textContent = gameOverText
        OpenForm(endGamePopUp)
        //gameOverText = `You have given up in ${turns} tries \n The correct word is \n ${answer.toUpperCase()}`
    }
    
    return endFlag
}

export {EndGameCheck,IncreaseTurnCounter,CloseForm,Restart,GiveUp}

<<<<<<< HEAD
>>>>>>> parent of b7db574 (added game statistics for single player)
=======
>>>>>>> parent of c05a0f5 (added coding conventions and coding guide,applied standard to all file)
