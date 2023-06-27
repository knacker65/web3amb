const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  projectEmail: { type: String, required: true },
  projectWebsite: { type: String, required: true },
  industry: { type: String, required: true },
  description: { type: String, required: true },
  blockchainPlatform: { type: String, required: true },
  roles: { type: [String], required: true },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
