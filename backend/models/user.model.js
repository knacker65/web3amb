const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  language: { type: String, required: true },
  timeCommitment: { type: String, required: true },
  motivation: { type: String, required: true },
  discordUsername: { type: String, required: true },
  socialProfiles: { type: [String], required: true },
  web3Knowledge: { type: String, required: true },
  interests: { type: [String], required: true },
  onboardingInfo: { type: String, required: true },
  taskCompletion: { type: [String], required: true },
  progress: { type: String, required: true },
  growth: { type: String, required: true },
  internalKPIs: { type: String, required: true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
