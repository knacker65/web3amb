const router = require('express').Router();
let JobPosting = require('../models/jobPosting.model');

router.route('/').get((req, res) => {
  JobPosting.find()
    .then(jobPostings => res.json(jobPostings))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  JobPosting.findById(req.params.id)
    .then(jobPosting => res.json(jobPosting))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  JobPosting.findByIdAndDelete(req.params.id)
    .then(() => res.json('Job posting deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
  const newJobPosting = new JobPosting({
    jobTitle: req.body.jobTitle,
    companyName: req.body.companyName,
    jobLocation: req.body.jobLocation,
    jobType: req.body.jobType,
    jobDescription: req.body.jobDescription,
    rewardStructure: req.body.rewardStructure,
    applicationProcess: req.body.applicationProcess,
    jobRequirements: req.body.jobRequirements,
    skillsAndQualifications: req.body.skillsAndQualifications,
    deadline: req.body.deadline, // Include the deadline in the data you're saving
  });

  newJobPosting.save()
    .then(() => res.json('Job posting added!'))
    .catch(err => {
      console.error(err.message); // Log the error message to the console
      res.status(400).json('Error: ' + err.message); // Send the error message in the response
    });
});

module.exports = router;
