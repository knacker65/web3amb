// Part 1
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const CompanyApplicationForm = () => {
  const [formValues, setFormValues] = useState({
    projectName: '',
    projectEmail: '',
    projectWebsite: '',
    industry: '',
    description: '',
    blockchainPlatform: '',
    roles: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRolesNeededChange = (event) => {
    const { value, checked } = event.target;
    let rolesNeeded = [...formValues.roles];

    if (checked) {
      rolesNeeded.push(value);
    } else {
      rolesNeeded = rolesNeeded.filter((role) => role !== value);
    }

    setFormValues({ ...formValues, roles: rolesNeeded });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Company application submitted:', formValues);
    axios.post('http://localhost:5000/projects/add', formValues)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar className="fixed w-full top-0 z-50" />
      <div className="mt-20"> {/* This div pushes the form down to make space for the navbar */}
        <form onSubmit={handleSubmit} className="flex flex-wrap max-w-xl p-8 bg-white rounded-lg shadow-md space-y-8 mx-auto">
          <div className="w-full">
            <label htmlFor="projectName" className="block text-gray-700 font-medium">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formValues.projectName}
              onChange={handleChange}
              className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="projectEmail" className="block text-gray-700 font-medium">
              Project Email
            </label>
            <input
              type="email"
              id="projectEmail"
              name="projectEmail"
              value={formValues.projectEmail}
              onChange={handleChange}
              className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="projectWebsite" className="block text-gray-700 font-medium">
              Project Website
            </label>
            <input
              type="url"
              id="projectWebsite"
              name="projectWebsite"
              value={formValues.projectWebsite}
              onChange={handleChange}
              className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="industry" className="block text-gray-700 font-medium">
              Industry
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formValues.industry}
              onChange={handleChange}
        
              className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="description" className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Provide a brief description of your Project"
            ></textarea>
          </div>
          <div className="w-full">
            <label htmlFor="blockchainPlatform" className="block text-gray-700 font-medium">
              Blockchain Platform
            </label>
            <input
              type="text"
              id="blockchainPlatform"
              name="blockchainPlatform"
              value={formValues.blockchainPlatform}
              onChange={handleChange}
              className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 font-medium">
              Roles Needed
            </label>
            <div>
              <input
                type="checkbox"
                id="role1"
                name="role1"
                value="Role 1"
                checked={formValues.roles.includes("Role 1")}
                onChange={handleRolesNeededChange}
              />
              <label htmlFor="role1">Role 1</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="role2"
                name="role2"
                value="Role 2"
                checked={formValues.roles.includes("Role 2")}
                onChange={handleRolesNeededChange}
              />
              <label htmlFor="role2">Role 2</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="role3"
                name="role3"
                value="Role 3"
                checked={formValues.roles.includes("Role 3")}
                onChange={handleRolesNeededChange}
              />
              <label htmlFor="role3">Role 3</label>
            </div>
          </div>
          <div className="w-full">
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompanyApplicationForm;
