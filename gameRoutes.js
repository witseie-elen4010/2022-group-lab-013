const path = require('path')
const express = require('express')
const gameRouter = express.Router()

gameRouter.get('/', function (req, res) {
res.sendFile(path.join(__dirname,'Public', 'View', 'loginPage.html'))
})

gameRouter.get('/homePage', function (req, res) {
res.sendFile(path.join(__dirname,'Public', 'View', 'homePage.html'))
})

module.exports = gameRouter
