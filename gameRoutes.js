const path = require('path')
const express = require('express')
const router = express.Router()
router.get('/SinglePlayer', function (req, res) {
res.sendFile(path.join(__dirname,'Public', 'View', 'SinglePlayer.html'))
})

module.exports = router
