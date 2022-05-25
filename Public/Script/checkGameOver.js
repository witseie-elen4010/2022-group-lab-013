'use strict'

let turns = 0
let winFlag = false
let gameOverText =''
function EndGameCheck(answer){
    if(winFlag === true){
        gameOverText = `You have won in ${turns} tries\n The correct word is \n ${answer.toUpperCase()}`
            setTimeout(function(){alert(gameOverText)
            })
        }
    if (turns === 6 && winFlag === false){
        gameOverText = `Game Over \n The correct word is \n ${answer.toUpperCase()}`
            setTimeout(function(){alert(gameOverText)
        })
    }
}

function IncreaseTurnCounter(){
    turns+=1
    return turns
}

function WinCheck(rightnessArray){
    
    for(let i = 0;i<rightnessArray.length;i++){
        if(rightnessArray[i]!='correct'){
            winFlag = false
            break}

        else if(rightnessArray[i]=='correct'){
            winFlag = true
        }
    }
    return winFlag
}

export {EndGameCheck,IncreaseTurnCounter,WinCheck}

