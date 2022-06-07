const mongoose = require('mongoose');

const MoveSheetSchema = new mongoose.Schema({
    GameID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Player1: [String],
    Player2: [String],
    Player3: [String],
    Player4: [String],
    Player5: [String],
    Player6: [String],
    GameComplete:{
        type: Boolean
    },
    GameWinner: {
        type: mongoose.Schema.Types.ObjectId
    }
}, { timestamps: true });

module.exports = mongoose.model('MoveSheet', MoveSheetSchema);