import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const BrowseJobs = () => {
  const jobsFromRedux = useSelector(state => state.jobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/jobPostings')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title && job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">Browse Jobs</h2>

        <div className="mb-8">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="mb-8 flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Full-time
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Part-time
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Freelance
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {jobs.map((job) => (
    <div
      key={job._id}
      className="border border-gray-200 p-4 rounded bg-white shadow"
    >
      <h3 className="text-xl font-bold mb-2">{job.jobTitle}</h3>
      <p className="text-gray-500 mb-2">Company: {job.companyName}</p>
      <p className="text-gray-500 mb-2">Location: {job.jobLocation}</p>
      <p className="text-gray-500 mb-2">Type: {job.jobType}</p>
      <p className="text-gray-500 mb-2">Description: {job.jobDescription}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Apply Now
      </button>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded ml-4">
        View Details
      </button>
    </div>
  ))}
</div>

      </div>
      <Footer />
    </div>
  );
};

export default BrowseJobs;
