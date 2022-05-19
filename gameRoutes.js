const path = require('path')
const express = require('express')
const router = express.Router()
router.get('/',function(req,res){
  res.send('Hello World')
})
router.get('/SinglePlayer', function (req, res) {
res.sendFile(path.join(__dirname,'Public', 'View', 'SinglePlayer.html'))
})

module.exports = router
