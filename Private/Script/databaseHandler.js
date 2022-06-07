///     Install before use
///     npm install mongoose express body-parser nodemon
/////=> to run script using nodemon=> npx nodemon index.js
'use strict'
let db;

//const { model } = require("mongoose");

const PlayerSheet = require('./PlayerSheet.js');
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');

ConnectToDatabase();

async function AddnewPlayer(username, password) {
    await bcrypt.hash(password, 10, function (err, hash) {


        const newPlayersheet = new PlayerSheet({
            Username: username,
            Password: hash,
            MultiplayerWins: 0,
            MultiplayerGames: 0,
            SingleplayerWins: 0,
            SingleplayerGames: 0,
        })

        newPlayersheet.save()

    });
}

async function UserExits(name) {
    const newPlayersheet = await PlayerSheet.where('Username').equals(name)
    // console.log(newPlayersheet);
    if (newPlayersheet.length == 0) {
        return false
    }
    else {
        return true
    }
}

async function ValidLogin(name, password) {

    const newPlayersheet =await PlayerSheet.where('Username').equals(name).where('Password').equals(password);
    console.log(newPlayersheet);
    //const result = await newPlayersheet.comparePassword(password);


    newPlayersheet.comparePassword(password)(result =>{
         console.log(result)
    })



    console.log(result);
    console.log(results);
    if (newPlayersheet.length == 0) {
        console.log('Wrong password');
        //DisconnectFromDatabase();
        return false
    }

    else {
        console.log('Right password');
        // bcrypt.compare(password, newPlayersheet.Password).then(function(result) {
        return true
        // });
        //DisconnectFromDatabase();
    }
}

async function UpdatePassword(name, password) {
    const newPlayersheet = await PlayerSheet.updateOne({ 'Username': name }, { $set: { 'Password': password } })
    console.log("Password Updated");
    alert("Password Updated");
}

async function UpdateMultiplayerWins(name) {
    const newPlayersheet = await newPlayersheet.updateOne({ 'Username': name }, { $inc: { 'MultiplayerWins': 1 } })
    console.log('MultiplayerWins updated');
}

async function UpdateMultiplayerGames(name) {
    const newPlayersheet = await newPlayersheet.updateOne({ 'Username': name }, { $inc: { 'MultiplayerGames': 1 } })
    console.log('MultiplayerGames updated');
}

async function UpdateSingleplayerWins(name) {
    const newPlayersheet = await newPlayersheet.updateOne({ 'Username': name }, { $inc: { 'SingleplayerWins': 1 } })
    console.log('SingleplayerWins updated');
}

async function UpdateSingleplayerGames(name) {
    const newPlayersheet = await PlayerSheet.updateOne({ 'Username': name }, { $inc: { 'SingleplayerGames': 1 } })
    console.log('SinglePlayerGames updated');
}

async function GetPleyerId(name) {
    const PlayerObject = await PlayerSheet.findOne({ 'Username': name });
    //console.log(PlayerObject._id);
    if (PlayerObject) {
        console.log('Id of ' + name + ' = ' + PlayerObject._id);
        return PlayerObject._id;
    }
    else {
        console.log('Id of ' + name + ' = not found');
        return false
    }
}

async function GetSinglePlayerWins(name) {
    const PlayerObject = await PlayerSheet.findOne({ 'Username': name });
    if (PlayerObject) {
        return PlayerObject.SingleplayerWins;
    }
    else {
        return false
    }
}

async function GetSinglePlayerGames(name) {
    const PlayerObject = await PlayerSheet.findOne({ 'Username': name });
    if (PlayerObject) {
        return PlayerObject.SingleplayerGames;
    }
    else {
        return false
    }
}

async function GetMultiPlayerWins(name) {
    const PlayerObject = await PlayerSheet.findOne({ 'Username': name });
    if (PlayerObject) {
        return PlayerObject.MultiplayerWins;
    }
    else {
        return false
    }
}

async function GetMultiplayerGames(name) {
    const PlayerObject = await PlayerSheet.findOne({ 'Username': name });
    if (PlayerObject) {
        return PlayerObject.MultiplayerGames;
    }
    else {
        return false
    }
}

async function ConnectToDatabase() {
    const uri = "mongodb+srv://Software3:Sprinters@cluster0.nuwj9.mongodb.net/Guessle?retryWrites=true&w=majority";
    const app = express()

    app.use(bodyParser.json())
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.set('view engine', 'ejs');  // register view engine
    app.use(express.static('public'));  // middleware & static files
    app.use((req, res, next) => {
        res.locals.path = req.path;
        next();
    });
    app.get("/", (req, res) => {
        res.set({
            "Allow-access-Allow-Origin": '*'
        })
    });
    db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then((dbConnection) => {
        db = dbConnection;

    });
    //.then(result => app.listen(80))
    // .catch(err => console.log(err));
    console.log('Connected done');

}

async function DisconnectFromDatabase() {
    db.disconnect();
    console.log('disconnect successful')
}


module.exports = {
    AddnewPlayer, UpdatePassword, UserExits, ValidLogin, UpdateSingleplayerGames,
    UpdateSingleplayerWins, UpdateMultiplayerGames, UpdateMultiplayerWins,
    GetPleyerId, GetSinglePlayerWins, GetSinglePlayerGames, GetMultiPlayerWins, GetMultiplayerGames
}
