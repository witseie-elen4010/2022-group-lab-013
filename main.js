const path = require('path')
const express = require('express')
//const gameRouter = express.Router()
//const loginRouter =require('./Routes/loginroute')
const landingRouter = require('./Routes/landingRoute')
const homeRouter = require('./Routes/homeRouter')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/Public', express.static('Public'));
app.use('/',landingRouter)
//app.use('/Login',loginRouter)
app.use('/Home',homeRouter)
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
/*app.use('', gameRouter)

app.use('/Login', loginRouter)



gameRouter.get('', function (req, res) {
    res.render(path.join(__dirname, 'Public', 'View', 'loginPage.ejs'))
})

gameRouter.get('/homePage', function (req, res) {
    res.render(path.join(__dirname, 'Public', 'View', 'homePage.ejs'))
})

////////////////////////////////////////
gameRouter.get('/multiPlayerModes', function (req, res) {
    res.render(path.join(__dirname, 'Public', 'View', 'multiplayerModes.ejs'))
})
gameRouter.get('/signupPage', function (req, res) {
    res.render(path.join(__dirname, 'Public', 'View', 'signupPage.ejs'))
})
gameRouter.get('/SinglePlayer', function (req, res) {
    res.render(path.join(__dirname, 'Public', 'View', 'SinglePlayer.ejs'))
})
////////////////////////////////////////
const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)

/*const port = 3000,
    express = require("express"),
    app = express();
app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send('This is the page for ${veg}');
});
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});
app.listen(port, () => {
    console.log('Server running on port: ${port}');
});*/