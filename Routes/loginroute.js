const path = require('path')
const express = require('express')
const router = express.Router();
const dbFunctions = require('../Private/Script/databaseHandler')

router.post('/Login',function (req, res) {
    let userId = req.body.userName;
    let userPassword = req.body.userPassword;
    //dbFunctions.ConnectToDatabase();
        //console.log('Connected');
    
    //if (userId=='Guest'){
    if (dbFunctions.ValidLogin(userId, userPassword)){
        res.redirect('/Home')
    }
    else{
        res.redirect('/')
    }
})

module.exports = router;