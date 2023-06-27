const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  ethAddress: { type: String, required: true },
  twitterHandle: { type: String, required: true },
  discordHandle: { type: String, required: true },
  interests: { type: String, required: true },
  ambassadorExperience: { type: String, required: true },
  termsAndConditions: { type: Boolean, required: true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
