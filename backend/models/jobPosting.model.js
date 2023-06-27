const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobPostingSchema = new Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  jobLocation: { type: String, required: true },
  jobType: { type: String, required: true },
  jobDescription: { type: String, required: true },
  rewardStructure: { type: String, required: true },
  applicationProcess: { type: String, required: true },
  jobRequirements: { type: String, required: true },
  skillsAndQualifications: { type: String, required: true },
  datePosted: { type: Date, default: Date.now }, // This will automatically set the date when the job is posted
  deadline: { type: Date, required: true }, // New field for the deadline
}, {
  timestamps: true,
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;
