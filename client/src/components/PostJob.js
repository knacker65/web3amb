import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addJob } from '../actions/jobActions';

const PostJob = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  
    const jobData = {
      jobTitle: evt.target['job-title'].value,
      companyName: evt.target['company-name'].value,
      jobLocation: evt.target['job-location'].value,
      jobType: evt.target['job-type'].value,
      rewardType: evt.target['reward-type'].value, // new field
      jobDescription: evt.target['job-description'].value,
      rewardStructure: evt.target['reward-structure'].value,
      applicationProcess: evt.target['application-process'].value,
      jobRequirements: evt.target['job-requirements'].value,
      skillsAndQualifications: evt.target['skills-and-qualifications'].value,
      deadline: evt.target['deadline'].value, // Include the deadline
    };
    
    dispatch(addJob(jobData));
  
    axios.post('http://localhost:5000/jobPostings/add', jobData)
      .then(response => {
        console.log(response);
        // You can add any success handling here
      })
      .catch(error => {
        console.error(error.message);
        // You can add any error handling here
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Post an Ambassador Job</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job-title">
              Job Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="job-title"
              type="text"
              placeholder="Enter job title"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company-name">
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company-name"
              type="text"
              placeholder="Enter company name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job-location">
              Job Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="job-location"
              type="text"
              placeholder="Enter job location"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job-type">
              Job Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="job-type"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reward-type">
              Reward Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="reward-type"
            >
              <option value="money">Money</option>
              <option value="time">Time</option>
              <option value="developer">Developer</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job-description">
              Job Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="job-description"
              placeholder="Enter job description"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reward-structure">
              Reward Structure
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="reward-structure"
              placeholder="Describe the reward structure for ambassadors"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="application-process">
              Application Process
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="application-process"
              placeholder="Describe the application process for candidates"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job-requirements">
              Job Requirements
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="job-requirements"
              placeholder="List the job requirements for candidates"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
              Deadline
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="deadline"
              type="date" // Use the "date" type for the deadline
              placeholder="Enter the deadline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills-and-qualifications">
              Skills and Qualifications
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="skills-and-qualifications"
              placeholder="List the desired skills and qualifications for candidates"
              rows="5"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default PostJob;
