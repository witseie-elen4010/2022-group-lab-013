///    Install before use
///npm install mongoose express body-parser nodemon
/////=> to run script using nodemon=> npx nodemon Tempindex.js

const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const PlayerSheet = require('./PlayerSheet.js');
const functions =require('./DatabaseHandler.js');
const AddnewPlayer=functions.AddnewPlayer;
const UpdatePassword=functions.UpdatePassword;
const UserExits=functions.UserExits;
const ValidLogin=functions.ValidLogin;
const UpdateSingleplayerGames=functions.UpdateSingleplayerGames;
const UpdateSingleplayerWins=functions.UpdateSingleplayerWins;
const UpdateMultiplayerGames=functions.UpdateMultiplayerGames;
const UpdateMultiplayerWins=functions.UpdateMultiplayerWins;
const GetPleyerId=functions.GetPleyerId;
const GetSinglePlayerWins=functions.GetSinglePlayerWins;
const GetSinglePlayerGames=functions.GetSinglePlayerGames;
const GetMultiPlayerWins=functions.GetMultiPlayerWins;
const GetMultiplayerGames=functions.GetMultiplayerGames;

const uri = "mongodb+srv://Software3:Sprinters@cluster0.nuwj9.mongodb.net/Guessle?retryWrites=true&w=majority";

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

ValidLogin('Sprint3','8').then(response=> 
    {let checked=response
     console.log(checked)
    });

UpdateSingleplayerGames('Sprint3','4')

//Potential way to use functions
/*
let PlayerId = await GetPleyerId('Sprint2');
console.log(PlayerId);
*/
GetPleyerId('Sprint3').then(response=> 
    {let PlayerId=response
     console.log(PlayerId)
    });

