const path = require('path')
const express = require('express')
const dbFunctions = require('../Private/Script/databaseHandler')
const router = express.Router();
 
router.get('/',(req,res) =>{
    res.render('users/loginPage');
})
 
router.post('/Login',async function (req, res) {
 
    let userId = req.body.userName;
    let userPassword = req.body.userPassword;
    
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

router.get('/signupPage',async function (req, res) {
    res.render('users/signupPage');
})

router.get('/multiplayerChooseAWord',async function (req, res) {
    let gameID = req.body.gameID;
    console.log('Recieved gameID')
    res.render('users/multiplayerChooseAWord',  {numberOfPlayers: 3});
})

router.post('/multiplayerSetUpGame',async function (req, res) {
    let userId = req.body.userName;
    let userGuess = req.body.userGuess;
    let gameID = req.body.gameID;
    if(gameID == ''){
        let player1ID = await dbFunctions.GetPleyerId(userId);
        console.log(player1ID);
        gameID = await dbFunctions.AddnewGame(2, player1ID, userGuess);
        console.log("Game added");
    }else{
        let player2ID = await dbFunctions.GetPleyerId(userId);
        console.log(player2ID);
        await dbFunctions.UpdatePlayerID(gameID, player2ID);
        console.log("Player added");
        await dbFunctions.UpdateGameGuessWord(gameID, userGuess);
        console.log("Word added");
    }

    res.json(gameID)
})

router.get('/multiplayerSingleWord',async function (req, res) {
    res.render('users/multiplayerSingleWord',  {numberOfPlayers: 3});
})

module.exports = router;

// gameRouter.get('/multiplayerSingleWord', function (req, res) {
//     res.render(path.join(__dirname, 'Public', 'View', 'multiplayerSingleWord.ejs'), {numberOfPlayers: 3})
// })
// gameRouter.get('/multiplayerGame', function (req, res) {
//     res.render(path.join(__dirname, 'Public', 'View', 'multiplayerGame.ejs'), {numberOfPlayers: 3})
// })