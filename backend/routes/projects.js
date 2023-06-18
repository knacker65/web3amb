router.route('/add').post((req, res) => {
  console.log(req.body);  // Add this line
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newProject = new Project({
    username,
    description,
    duration,
    date,
  });

  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
