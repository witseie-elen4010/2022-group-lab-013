const path = require('path')
const express = require('express')
const gameRouter = express.Router()

gameRouter.get('/SinglePlayer', function (req, res) {
res.sendFile(path.join(__dirname,'SinglePlayer.html'))
})

module.exports = gameRouter
