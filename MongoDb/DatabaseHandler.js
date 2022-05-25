const { model } = require("mongoose");
const PlayerSheet = require('./PlayerSheet.js');

async function AddnewPlayer(username, password) {
    const newPlayersheet = new PlayerSheet({
        Username: username,
        Password: password,
        MultiplayerWins: 0,
        MultiplayerGames: 0,
        SingleplayerWins: 0,
        SingleplayerGames: 0,
    })

    newPlayersheet.save()
        .then(result => {
           // console.log(result);
            res.send(result);
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
    const newPlayersheet = await newPlayersheet.updateOne({ 'Username': name }, { $inc: { 'MultiplayerWins': 1} })
   console.log('MultiplayerWins updated');
}


async function UpdateMultiplayerGames(name) {
    const newPlayersheet = await newPlayersheet.updateOne({ 'Username': name }, { $inc: { 'MultiplayerGames': 1} })
   console.log('MultiplayerGames updated');
}


async function UpdateSingleplayerWins(name) {
    const newPlayersheet =await newPlayersheet.updateOne({ 'Username': name }, { $inc: { 'SingleplayerWins': 1} })
   console.log('SingleplayerWins updated');
}

async function UpdateSingleplayerGames(name) {
    const newPlayersheet = await PlayerSheet.updateOne({ 'Username': name }, { $inc: { 'SingleplayerGames': 1} })
   console.log('SinglePlayerGames updated');
}

async function GetPleyerId(name) {
    const PlayerObject = await PlayerSheet.findOne({'Username': name});
    console.log(PlayerObject._id);

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
module.exports={AddnewPlayer,UpdatePassword,UserExits,ValidLogin,UpdateSingleplayerGames,
    UpdateSingleplayerWins,UpdateMultiplayerGames,UpdateMultiplayerWins,
    GetPleyerId,GetSinglePlayerWins,GetSinglePlayerGames,GetMultiPlayerWins,GetMultiplayerGames}