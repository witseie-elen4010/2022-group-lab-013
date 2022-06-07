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
    
    dbFunctions.ValidLogin(userId, userPassword)
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
    res.render('users/multiplayerChooseAWord',  {numberOfPlayers: 3});
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