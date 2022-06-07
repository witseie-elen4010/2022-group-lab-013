const mongoose = require('mongoose');

const GameSheetSchema = new mongoose.Schema({
    GameMode: {
        type: Number,
    },
    PlayerIDs: [mongoose.Schema.Types.ObjectId],
    GuessWords: [String],
    GameComplete:{
        type: Boolean
    },
    GameWinner: {
        type: mongoose.Schema.Types.ObjectId
    }
}, { timestamps: true });

module.exports = mongoose.model('GameSheet', GameSheetSchema);
