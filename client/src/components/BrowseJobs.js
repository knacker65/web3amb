import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faClock, faCode } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

const BrowseJobs = () => {
  const jobsFromRedux = useSelector(state => state.jobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/jobPostings')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.log(error);
        // Add your error handling code here
      });
  }, []);
  

  const filteredJobs = jobs.filter(job =>
    job.jobTitle && job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };
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
  {filteredJobs.map((job) => (
    <motion.div key={job._id} className="border border-gray-200 p-4 rounded bg-white shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-2">{job.jobTitle}</h3>
      <p className="text-gray-500 mb-2">Company: {job.companyName}</p>
      <p className="text-gray-500 mb-2">Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
      <p className="text-gray-500 mb-2">Description: {job.jobDescription.substring(0, 80)}...</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded ml-4" onClick={() => handleViewDetails(job)}>
        View Details
      </button>
    </motion.div>
  ))}
</div>
{selectedJob && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal} // Add this line
          >
            <motion.div className="bg-white p-8 rounded shadow-lg relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-0 right-0 p-4" onClick={handleCloseModal}>X</button>
              <h2 className="text-xl font-bold mb-2">{selectedJob.jobTitle}</h2>
              <p className="text-gray-500 mb-2">Company: {selectedJob.companyName}</p>
              <p className="text-gray-500 mb-2">Location: {selectedJob.jobLocation}</p>
              <p className="text-gray-500 mb-2">Type: {selectedJob.jobType}</p>
              <p className="text-gray-500 mb-2">Description: {selectedJob.jobDescription}</p>
              <p className="text-gray-500 mb-2">Reward Structure: {selectedJob.rewardStructure}</p>
              <p className="text-gray-500 mb-2">Application Process: {selectedJob.applicationProcess}</p>
              <p className="text-gray-500 mb-2">Job Requirements: {selectedJob.jobRequirements}</p>
              <p className="text-gray-500 mb-2">Skills and Qualifications: {selectedJob.skillsAndQualifications}</p>
              <p className="text-gray-500 mb-2">Deadline: {new Date(selectedJob.deadline).toLocaleDateString()}</p>
              <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded ml-4">
                Apply
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseJobs;
