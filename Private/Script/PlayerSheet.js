const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

PlayerSheetSchema.methods.compared= function()
{
return true;
};

PlayerSheetSchema.methods.comparePassword = async function (password) {
  if (!password) throw new Error('Password is mission, can not compare!');

  try {
    const result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error) {
    console.log('Error while comparing password!', error.message);
  }
};


module.exports = mongoose.model('PlayerSheet', PlayerSheetSchema);
