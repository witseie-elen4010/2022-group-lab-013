///     Install before use
///     npm install mongoose express body-parser nodemon
/////=> to run script using nodemon=> npx nodemon index.js
'use strict'

const { model } = require("mongoose");

const PlayerSheet = require('./PlayerSheet.js');
const GameSheet = require('./GameSheet.js');
const MoveSheet = require('./MoveSheet.js');
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

//////////////////////////////////////////////////////////////////////////////////////
//PlayerSheet
//////////////////////////////////////////////////////////////////////////////////////
async function AddnewPlayer(username, password) {
    const newPlayersheet = new PlayerSheet({
        Username: username,
        Password: password,
        MultiplayerWins: 0,
        MultiplayerGames: 0,
        SingleplayerWins: 0,
        SingleplayerGames: 0,
    })
    await newPlayersheet.save()
        .then(res => {
             console.log(res);
            //res.send(result);
        })
        .catch(err => {
            console.log(err);
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
    const newPlayersheet = await PlayerSheet.where('Username').equals(name).where('Password').equals(password)
    //console.log(newPlayersheet);
    if (newPlayersheet.length == 0) {
        return false
    }
    else {
        return true
    }
}
async function UpdatePassword(name, password) {
    const newPlayersheet = await PlayerSheet.updateOne({ 'Username': name }, { $set: { 'Password': password } })
    console.log("Password Updated");
    alert("Password Updated");
}
async function UpdateMultiplayerWins(name) {
    const newPlayersheet = await Playersheet.updateOne({ 'Username': name }, { $inc: { 'MultiplayerWins': 1} })
   console.log('MultiplayerWins updated');
}
async function UpdateMultiplayerGames(name) {
    const newPlayersheet = await Playersheet.updateOne({ 'Username': name }, { $inc: { 'MultiplayerGames': 1} })
   console.log('MultiplayerGames updated');
}
async function UpdateSingleplayerWins(name) {
    const newPlayersheet =await Playersheet.updateOne({ 'Username': name }, { $inc: { 'SingleplayerWins': 1} })
   console.log('SingleplayerWins updated');
}
async function UpdateSingleplayerGames(name) {
    const newPlayersheet = await PlayerSheet.updateOne({ 'Username': name }, { $inc: { 'SingleplayerGames': 1} })
   console.log('SinglePlayerGames updated');
}
async function GetPlayerId(name) {
    const PlayerObject = await PlayerSheet.findOne({'Username': name});
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
    const PlayerObject = await PlayerSheet.findOne({'Username': name});
    if (PlayerObject) {
        return PlayerObject.SingleplayerWins;
    }
    else {
        return false
    }
}
async function GetSinglePlayerGames(name) {
    const PlayerObject = await PlayerSheet.findOne({'Username': name});
    if (PlayerObject) {
        return PlayerObject.SingleplayerGames;
    }
    else {
        return false
    }
}
async function GetMultiPlayerWins(name) {
    const PlayerObject = await PlayerSheet.findOne({'Username': name});
    if (PlayerObject) {
        return PlayerObject.MultiplayerWins;
    }
    else {
        return false
    }
}
async function GetMultiplayerGames(name) {
    const PlayerObject = await PlayerSheet.findOne({'Username': name});
    if (PlayerObject) {
        return PlayerObject.MultiplayerGames;
    }
    else {
        return false
    }
}

//////////////////////////////////////////////////////////////////////////////////////
//GameSheet
//////////////////////////////////////////////////////////////////////////////////////
async function AddnewGame(mode, playerIDs, guessWords) {
    const newGameSheet = new GameSheet({
        GameMode: mode,
        PlayerIDs: [playerIDs],
        GuessWords: [guessWords],
        GameComplete:false,
        GameWinner:"629ee1d13a2cf5251a197e9a"
    })
    await newGameSheet.save()
        .then(res => {
            console.log(res);
            //res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
    return newGameSheet._id;
}
async function UpdatePlayerID(gameID, playerIDs) {
    const newGameSheet = await GameSheet.updateOne({'_id': gameID}, {$push: {"PlayerIDs": playerIDs}})
    console.log('Multiplayer-game player updated');
}
async function UpdateGameGuessWord(gameID, guessWords) {
    const newGameSheet = await GameSheet.updateOne({'_id': gameID}, {$push: {"GuessWords": guessWords}})
    console.log('Multiplayer-game word updated');
}
async function UpdateGameStatus(gameID, gameComplete) {
    const newGameSheet = await GameSheet.updateOne({'_id': gameID}, {$set: {"GameComplete": gameComplete}})
    console.log('Multiplayer-game status updated');
}
async function UpdateGameWinner(gameID, gameWinner) {
    const newGameSheet = await GameSheet.updateOne({'_id': gameID}, {$set: {"GameWinner": gameWinner}})
    console.log('Multiplayer-game winner updated');
}
async function GetMode(gameID) {
    const GameObject = await GameSheet.findOne({'_id': gameID});
    if (GameObject) {
        return GameObject.GameMode;
    }
    else {
        return false
    }
}
async function GetPlayerIDs(gameID) {
    const GameObject = await GameSheet.findOne({'_id': gameID});
    if (GameObject) {
        return GameObject.PlayerIDs;
    }
    else {
        return false
    }
}
async function GetGuessWords(gameID) {
    const GameObject = await GameSheet.findOne({'_id': gameID});
    if (GameObject) {
        return GameObject.GuessWords;
    }
    else {
        return false
    }
}
async function GetGameComplete(gameID) {
    const GameObject = await GameSheet.findOne({'_id': gameID});
    if (GameObject) {
        return GameObject.GameComplete;
    }
    else {
        return false
    }
}
async function GetGameWinner(gameID) {
    const GameObject = await GameSheet.findOne({'_id': gameID});
    if (GameObject) {
        return GameObject.GameWinner;
    }
    else {
        return false
    }
}

//////////////////////////////////////////////////////////////////////////////////////
//MoveSheet
//////////////////////////////////////////////////////////////////////////////////////
async function InitMoves(gameID) {
    const newMoveSheet = new MoveSheet({
        GameID: gameID,
        Player1: [],
        Player2: [],
        Player3: [],
        Player4: [],
        Player5: [],
        Player6: [],
    })
    await newMoveSheet.save()
        .then(res => {
            console.log(res);
            //res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
    return true;
}
async function UpdatePlayer1(gameID, guessWords) {
    const newMoveSheet = await MoveSheet.updateOne({'GameID': gameID}, {$push: {"Player1": guessWords}})
    console.log('Multiplayer-game player 1 guess updated');
}
async function UpdatePlayer2(gameID, guessWords) {
    const newMoveSheet = await MoveSheet.updateOne({'GameID': gameID}, {$push: {"Player2": guessWords}})
    console.log('Multiplayer-game player 2 guess updated');
}
async function UpdatePlayer3(gameID, guessWords) {
    const newMoveSheet = await MoveSheet.updateOne({'GameID': gameID}, {$push: {"Player3": guessWords}})
    console.log('Multiplayer-game player 3 guess updated');
}
async function UpdatePlayer4(gameID, guessWords) {
    const newMoveSheet = await MoveSheet.updateOne({'GameID': gameID}, {$push: {"Player4": guessWords}})
    console.log('Multiplayer-game player 4 guess updated');
}
async function UpdatePlayer5(gameID, guessWords) {
    const newMoveSheet = await MoveSheet.updateOne({'GameID': gameID}, {$push: {"Player5": guessWords}})
    console.log('Multiplayer-game player 5 guess updated');
}
async function UpdatePlayer6(gameID, guessWords) {
    const newMoveSheet = await MoveSheet.updateOne({'GameID': gameID}, {$push: {"Player6": guessWords}})
    console.log('Multiplayer-game player 6 guess updated');
}
async function UpdateMoveGameStatus(gameID, gameComplete) {
    const newMoveSheet = await MoveSheet.updateOne({'GameID': gameID}, {$set: {"GameComplete": gameComplete}})
    console.log('Multiplayer-game status updated');
}
async function UpdateMoveGameWinner(gameID, gameWinner) {
    const newMoveSheet = await MoveSheet.updateOne({'GameID': gameID}, {$set: {"GameWinner": gameWinner}})
    console.log('Multiplayer-game winner updated');
}
async function GetPlayer1(gameID) {
    const MoveObject = await MoveSheet.findOne({'GameID': gameID});
    if (MoveObject) {
        return MoveObject.Player1;
    }
    else {
        return false
    }
}
async function GetPlayer2(gameID) {
    const MoveObject = await MoveSheet.findOne({'GameID': gameID});
    if (MoveObject) {
        return MoveObject.Player2;
    }
    else {
        return false
    }
}
async function GetPlayer3(gameID) {
    const MoveObject = await MoveSheet.findOne({'GameID': gameID});
    if (MoveObject) {
        return MoveObject.Player3;
    }
    else {
        return false
    }
}
async function GetPlayer4(gameID) {
    const MoveObject = await MoveSheet.findOne({'GameID': gameID});
    if (MoveObject) {
        return MoveObject.Player4;
    }
    else {
        return false
    }
}
async function GetPlayer5(gameID) {
    const MoveObject = await MoveSheet.findOne({'GameID': gameID});
    if (MoveObject) {
        return MoveObject.Player5;
    }
    else {
        return false
    }
}
async function GetPlayer6(gameID) {
    const MoveObject = await MoveSheet.findOne({'GameID': gameID});
    if (MoveObject) {
        return MoveObject.Player6;
    }
    else {
        return false
    }
}
async function GetMoveGameComplete(gameID) {
    const MoveObject = await MoveSheet.findOne({'GameID': gameID});
    if (MoveObject) {
        return MoveObject.GameComplete;
    }
    else {
        return false
    }
}
async function GetMoveGameWinner(gameID) {
    const MoveObject = await MoveSheet.findOne({'GameID': gameID});
    if (MoveObject) {
        return MoveObject.GameWinner;
    }
    else {
        return false
    }
}
//////////////////////////////////////////////////////////////////////////////////////
//Database controlls
//////////////////////////////////////////////////////////////////////////////////////
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
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => app.listen(3000))
        .catch(err => console.log(err));
}

//Tested with:
//npx nodemon databaseHandler.js
/*
async function main(){
    await ConnectToDatabase();
    //Added game
    console.log("Pre playerID");
    let player1ID = await GetPlayerId("Sprint3");
    console.log(player1ID);
    let gameID = await AddnewGame(1, player1ID, 'guess');
    console.log("Game added");
    //Add player
    let player2ID = await GetPlayerId("Guest");
    await UpdatePlayerID(gameID, player2ID);
    console.log("Player added");
    //Add guess word
    await UpdateGameGuessWord(gameID, "helps");
    console.log("Word added");
    //Game status
    await UpdateGameStatus(gameID, true);
    console.log("Game status");
    //Game winner
    await UpdateGameWinner(gameID, player1ID);
    console.log("Game status");
    //Get players
    let playersPlaying = await GetPlayerIDs(gameID);
    console.log(playersPlaying);
     //Get players
     let guessWordsMultiplayer = await GetGuessWords(gameID);
     console.log(guessWordsMultiplayer);

     //Set up movesSheet
     let movesinit = await InitMoves(gameID);
     console.log(movesinit);
     //Update player moves
     await UpdatePlayer1(gameID, "solos");
     await UpdatePlayer1(gameID, "snoke");
     await UpdatePlayer2(gameID, "obion");
     await UpdatePlayer2(gameID, "kenob");
     //Get player moves
     let Player1Moves = await GetPlayer1(gameID);
     console.log(Player1Moves);
     let Player2Moves = await GetPlayer2(gameID);
     console.log(Player2Moves);
     let Player3Moves = await GetPlayer3(gameID);
     console.log(Player3Moves);
}

main();
*/

module.exports={AddnewPlayer,UpdatePassword,UserExits,ValidLogin,
    UpdateSingleplayerGames,UpdateSingleplayerWins,UpdateMultiplayerGames,UpdateMultiplayerWins,
    GetPleyerId: GetPlayerId,GetSinglePlayerWins,GetSinglePlayerGames,GetMultiPlayerWins,GetMultiplayerGames,
    AddnewGame, UpdatePlayerID, UpdateGameGuessWord, UpdateGameStatus,UpdateGameWinner,
    GetMode, GetPlayerIDs, GetGuessWords, GetGameComplete, GetGameWinner,
    InitMoves, UpdatePlayer1,UpdatePlayer2,UpdatePlayer3,UpdatePlayer4,UpdatePlayer5,UpdatePlayer6, UpdateMoveGameStatus, UpdateMoveGameWinner,
    GetPlayer1, GetPlayer2, GetPlayer3, GetPlayer4, GetPlayer5, GetPlayer6, GetMoveGameComplete, GetMoveGameWinner,
    ConnectToDatabase}
