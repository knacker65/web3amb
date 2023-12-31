const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => {
      console.error(err);
      res.status(400).json('Error: ' + err);
    });
});

router.route('/add').post((req, res) => {
  const newProject = new Project(req.body);

  newProject.save()
    .then(() => {
      console.log('Project added:', req.body);
      res.json('Project added!');
    })
    .catch(err => {
      console.error(err);
      res.status(400).json('Error: ' + err);
    });
});

module.exports = router;
