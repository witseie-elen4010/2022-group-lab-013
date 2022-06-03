const express = require('express')
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('users/loginpage');
})

module.exports = router;