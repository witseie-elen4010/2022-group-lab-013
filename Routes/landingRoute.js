const path = require('path')
const express = require('express')
const dbFunctions = require('../Private/Script/databaseHandler')
const router = express.Router();

let GAMEID;
let USERID;
let INPUTWORD = '';
let INPUTCOUNT = 0;
 
router.get('/',(req,res) =>{
    res.render('users/loginPage');
})
 
router.post('/Login',async function (req, res) {
 
    let userId = await req.body.userName;
    let userPassword = await req.body.userPassword;
    USERID = userId

    await dbFunctions.ValidLogin(userId, userPassword)
    .then((loginResult) => {
        console.log('in here',loginResult)
        if (loginResult==true){
            console.log('true')
            res.json('/Home')
        }
        else if (loginResult == false){
            console.log('false lroute')
            res.json('/')
        }
    })
})
 
router.get('/SinglePlayer',async function (req, res) {
    res.render('users/SinglePlayer');
})

router.get('/multiPlayerModes',async function (req, res) {
    res.render('users/multiplayerModes');
})

router.get('/SignUpPage',async function (req, res) {
    res.render('users/signupPage');
})

router.post('/SignUp',async function(req,res){
    let desiredUsername = req.body.userName;
    let desiredPassword = req.body.userPassword;
    let desiredPasswordCheck = req.body.userPasswordCheck;
    //Checks for the username
    dbFunctions.UserExits(desiredUsername)
    .then((exists) => {
        if(exists){
            res.json('exists')
        }
        else if (desiredPassword != desiredPasswordCheck){
            res.json('passNo')
        }
        else{
            dbFunctions.AddnewPlayer(desiredUsername,desiredPassword)
            res.json('Home')
        }
    })
})
router.get('/multiplayerChooseAWord',async function (req, res) {
    res.render('users/multiplayerChooseAWord',  {gameID: GAMEID, numberOfPlayers: 3});
})

router.post('/multiplayerSetUpGame',async function (req, res) {
    let userId = req.body.userName;
    let userGuess = req.body.userGuess;
    let gameID = req.body.gameID;
    if(gameID == ''){
        let player1ID = await dbFunctions.GetPleyerId(userId);
        USERID = player1ID;
        console.log(player1ID);
        gameID = await dbFunctions.AddnewGame(2, player1ID, userGuess);
        console.log("Game added");
        let movesinit = await dbFunctions.InitMoves(gameID);
        console.log("Moves added");
    }else{
        let player2ID = await dbFunctions.GetPleyerId(userId);
        USERID = player2ID;
        console.log(player2ID);
        await dbFunctions.UpdatePlayerID(gameID, player2ID);
        console.log("Player added");
        await dbFunctions.UpdateGameGuessWord(gameID, userGuess);
        console.log("Word added");
    }
    GAMEID = String(gameID);

    res.json(GAMEID);
})
router.post('/multiplayerGuessedWordUpdate',async function (req, res) {
    let INPUTCOUNTs = req.body.GuessedWord;

    //INPUTCOUNT = String(INPUTCOUNT);
    console.log(INPUTCOUNTs);
    INPUTWORD = INPUTCOUNTs.join('');
    console.log(INPUTWORD);

        let PlayerNumber;
        let playersPlaying = await dbFunctions.GetPlayerIDs(GAMEID);
        console.log(String(playersPlaying));
        console.log(String(USERID));
        console.log('Tested');
        for(let i= 0; i < playersPlaying.length; i++){
            if(String(USERID) == String(playersPlaying)){
                PlayerNumber = i;
            }
        }
        //PlayerNumber = 0;
        console.log(PlayerNumber);
        switch(PlayerNumber) {
            case 0:
                await dbFunctions.UpdatePlayer1(GAMEID, INPUTWORD);
            break;
            case 1:
                await dbFunctions.UpdatePlayer2(GAMEID, INPUTWORD);
            break;
            case 2:
                await dbFunctions.UpdatePlayer3(GAMEID, INPUTWORD);
            break;
            case 3:
                await dbFunctions.UpdatePlayer4(GAMEID, INPUTWORD);
            break;
            case 4:
                await dbFunctions.UpdatePlayer5(GAMEID, INPUTWORD);
            break;
            case 5:
                await dbFunctions.UpdatePlayer6(GAMEID, INPUTWORD);
            break;
        }
        
    
    res.json(GAMEID);
})

router.get('/multiplayerSingleWord',async function (req, res) {
    res.render('users/multiplayerSingleWord',  {numberOfPlayers: 3});
})

router.get('/GameLog', async function(req,res){
    res.render('users/gameLog')
})

router.post('/Log', async function(req,res) {
    let GID = req.body.gameId;

    //dbFunctions.GetGuessWords(GID)
    //.then(game =>{
        res.json('no log available')
   // })
})

module.exports = router;

// gameRouter.get('/multiplayerSingleWord', function (req, res) {
//     res.render(path.join(__dirname, 'Public', 'View', 'multiplayerSingleWord.ejs'), {numberOfPlayers: 3})
// })
// gameRouter.get('/multiplayerGame', function (req, res) {
//     res.render(path.join(__dirname, 'Public', 'View', 'multiplayerGame.ejs'), {numberOfPlayers: 3})
// })