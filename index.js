'use strict'
const express = require('express')
const app = express()
// loading our routers
const gameRouter = require('./gameRoutes.js')
// mounting our routers


app.use('/', gameRouter)
app.use('/Public', express.static('Public'));
const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)

//http://127.0.0.1:3000/SinglePlayer for checkingno

//Test MongoDb
const functions = require('./Private/Script/DatabaseHandler');
const ConnectToDatabase = functions.ConnectToDatabase;
ConnectToDatabase();