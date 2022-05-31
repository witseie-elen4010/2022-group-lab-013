const path = require('path')
const express = require('express')
const gameRouter = express.Router()

const app = express();

app.use('', gameRouter)
app.use('/Public', express.static('Public'));

app.set('view engine', 'ejs');

gameRouter.get('', function (req, res) {
    res.render(path.join(__dirname, 'Public', 'View', 'loginPage.ejs'))
})

gameRouter.get('/homePage', function (req, res) {
    res.render(path.join(__dirname, 'Public', 'View', 'homePage.ejs'))
})

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)