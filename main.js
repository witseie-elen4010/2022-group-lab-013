const path = require('path')
const express = require('express')
//const gameRouter = express.Router()
//const loginRouter =require('./Routes/loginroute')
const landingRouter = require('./Routes/landingRoute')
const homeRouter = require('./Routes/homeRouter')
//const signUpRouter = require('./Routes/signupRoute')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/Public', express.static('Public'));
app.use('/',landingRouter)
app.use('/Home',homeRouter)

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)