const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  mission: { type: String, required: true },
  keyInitiatives: { type: [String], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  milestones: { type: [String], required: true },
  programStructure: { type: String, required: true },
  rewards: { type: [String], required: true },
  rewardStructure: { type: String, required: true },
  brandAssets: { type: [String], required: true },
  onboardingTasklist: { type: [String], required: true },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
