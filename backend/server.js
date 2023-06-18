const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/user.model');
const Project = require('./models/project.model');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// User routes

// Create a new user
app.post('/users', async (req, res) => {
  const newUser = new User(req.body);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific user
app.get('/users/:id', getUser, (req, res) => {
  res.json(res.user);
});

// Update a specific user
app.put('/users/:id', getUser, async (req, res) => {
  Object.assign(res.user, req.body);

  try {
    await res.user.save();
    res.json(res.user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a specific user
app.delete('/users/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware function for getting user by ID
async function getUser(req, res, next) {
  let user;

  try {
    user = await User.findById(req.params.id);

    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

// Project routes

// Create a new project
app.post('/projects', async (req, res) => {
  const newProject = new Project(req.body);

  try {
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific project
app.get('/projects/:id', getProject, (req, res) => {
  res.json(res.project);
});

// Update a specific project
app.put('/projects/:id', getProject, async (req, res) =>The message got cut off. Here's the rest of the code:

```javascript
{
  Object.assign(res.project, req.body);

  try {
    await res.project.save();
    res.json(res.project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a specific project
app.delete('/projects/:id', getProject, async (req, res) => {
  try {
    await res.project.remove();
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware function for getting project by ID
async function getProject(req, res, next) {
  let project;

  try {
    project = await Project.findById(req.params.id);

    if (project == null) {
      return res.status(404).json({ message: 'Cannot find project' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.project = project;
  next();
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
