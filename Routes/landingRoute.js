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
 
module.exports = router;