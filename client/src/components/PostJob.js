import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const PostJob = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const jobData = {
      jobTitle: event.target['job-title'].value,
      companyName: event.target['company-name'].value,
      jobLocation: event.target['job-location'].value,
      jobType: event.target['job-type'].value,
      jobDescription: event.target['job-description'].value,
      rewardStructure: event.target['reward-structure'].value,
      applicationProcess: event.target['application-process'].value,
      jobRequirements: event.target['job-requirements'].value,
      skillsAndQualifications: event.target['skills-and-qualifications'].value,
    };

    axios.post('http://localhost:5000/jobs/add', jobData)
      .then(response => {
        console.log(response);
        // You can add any success handling here
      })
      .catch(error => {
        console.log(error);
        // You can add any error handling here
      });
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Post an Ambassador Job</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"onSubmit={handleSubmit}>
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
