const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Middleware to log the request body
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.path, req.body);
  next();
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const jobPostingsRouter = require('./routes/jobPostings'); // Add this line

app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/jobPostings', jobPostingsRouter); // Add this line

// Error handling for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
