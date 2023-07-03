const router = require('express').Router();
let Form = require('../models/Form');

// Endpoint to get all forms
router.route('/').get((req, res) => {
  Form.find()
    .then(forms => res.json(forms))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint to add a new form
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const fields = req.body.fields;
  const newForm = new Form({title, fields});

  newForm.save()
    .then(() => res.json('Form added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint to get a form by id
router.route('/:id').get((req, res) => {
  Form.findById(req.params.id)
    .then(form => res.json(form))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
