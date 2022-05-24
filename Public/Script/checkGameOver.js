'use strict'

let turns = 0
let winFlag = false

function EndGameCheck(){
    if(winFlag === true){
            setTimeout(function(){alert(`You have won in ${turns} tries`)
            })
        }
    if (turns === 6 && winFlag === false){
            setTimeout(function(){alert('Game Over')
        })
    }
}

function IncreaseTurnCounter(){
    turns+=1
}

function WinCheck(rightnessArray){
    
    for(let i = 0;i<rightnessArray.length;i++){
        if(rightnessArray[i]!='correct'){break}

        else if(rightnessArray[i]=='correct'){
            winFlag = true
        }
    }
}

export {EndGameCheck,IncreaseTurnCounter,WinCheck}
