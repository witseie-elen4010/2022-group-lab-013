const path = require('path')
const express = require('express')
const gameRouter = express.Router()

const app = express()

app.use('', gameRouter)
app.use('/Public', express.static('Public'))

app.set('view engine', 'ejs')

gameRouter.get('', function (req, res) {
  res.render(path.join(__dirname, 'Public', 'View', 'loginPage.ejs'))
})

gameRouter.get('/homePage', function (req, res) {
  res.render(path.join(__dirname, 'Public', 'View', 'homePage.ejs'))
})

/// /////////////////////////////////////
gameRouter.get('/multiPlayerModes', function (req, res) {
  res.render(path.join(__dirname, 'Public', 'View', 'multiplayerModes.ejs'))
})
gameRouter.get('/signupPage', function (req, res) {
  res.render(path.join(__dirname, 'Public', 'View', 'signupPage.ejs'))
})
gameRouter.get('/SinglePlayer', function (req, res) {
  res.render(path.join(__dirname, 'Public', 'View', 'SinglePlayer.ejs'))
})

gameRouter.get('/forgotPasswordPage', function (req, res) {
  res.sendFile(path.join(__dirname, 'Public', 'View', 'forgotPasswordPage.html'))
})

/// /////////////////////////////////////
const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
