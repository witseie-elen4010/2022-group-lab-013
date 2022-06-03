const path = require('path')
const express = require('express')
const router = express.Router();
const dbFunctions = require('../Private/Script/databaseHandler')

router.post('/Login',async function (req, res) {

    let userId = req.body.userName;
    let userPassword = req.body.userPassword;
    let loginResult = await dbFunctions.ValidLogin(userId, userPassword)

    if (loginResult){
        res.redirect('/Home')
    }
    else{
        res.redirect('/')
    }
})
module.exports = router;