const mongoose = require('mongoose');

const PlayerSheetSchema = new mongoose.Schema({
    Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  MultiplayerWins: {
    type: Number,
  },
  MultiplayerGames: {
    type: Number,
  },
  SingleplayerWins: {
    type: Number,
  },
  SingleplayerGames: {
    type: Number,
  },
}, { timestamps: true });

module.exports = mongoose.model('PlayerSheet', PlayerSheetSchema);
