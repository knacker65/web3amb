const router = require('express').Router();
let JobPosting = require('../models/jobPosting.model');

router.route('/').get((req, res) => {
  JobPosting.find()
    .then(jobPostings => res.json(jobPostings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newJobPosting = new JobPosting(req.body);

  newJobPosting.save()
    .then(() => res.json('Job posting added!'))
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

router.route('/update/:id').post((req, res) => {
  JobPosting.findById(req.params.id)
    .then(jobPosting => {
      jobPosting.jobTitle = req.body.jobTitle;
      jobPosting.companyName = req.body.companyName;
      jobPosting.jobLocation = req.body.jobLocation;
      jobPosting.jobType = req.body.jobType;
      jobPosting.jobDescription = req.body.jobDescription;
      jobPosting.rewardStructure = req.body.rewardStructure;
      jobPosting.applicationProcess = req.body.applicationProcess;
      jobPosting.jobRequirements = req.body.jobRequirements;
      jobPosting.skillsAndQualifications = req.body.skillsAndQualifications;

      jobPosting.save()
        .then(() => res.json('Job posting updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
