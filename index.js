'use strict'
const express = require('express')
const app = express()
// loading our routers
const gameRouter = require('./gameRoutes.js')
// mounting our routers

app.use('/', gameRouter)
app.use('/cdn', express.static('public'));
app.listen(3000)
console.log('Express server running on port 3000')

//http://127.0.0.1:3000/SinglePlayer for checking