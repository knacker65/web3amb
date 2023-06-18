import React, { useState } from 'react';
import axios from 'axios';

const CompanyApplicationForm = () => {
  const [formValues, setFormValues] = useState({
    companyName: '',
    companyEmail: '',
    companyWebsite: '',
    projectType: '',
    otherProjectType: '',
    blockchainPlatform: '',
    otherBlockchainPlatform: '',
    roles: [],
    otherRole: '',
    description: '',
  });
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleProjectTypeChange = (event) => {
    const { options } = event.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormValues({ ...formValues, projectType: selectedOptions });
  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    if (event.target.checked) {
      setFormValues((prevValues) => ({ ...prevValues, [name]: [...prevValues[name], value] }));
    } else {
      setFormValues((prevValues) => ({ ...prevValues, [name]: prevValues[name].filter((role) => role !== value) }));
    }
  };
  

  const handleRolesNeededChange = (event) => {
    const { value, checked } = event.target;
    let rolesNeeded = [...formValues.rolesNeeded];

    if (checked) {
      rolesNeeded.push(value);
    } else {
      rolesNeeded = rolesNeeded.filter((role) => role !== value);
    }

    setFormValues({ ...formValues, rolesNeeded });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Company application submitted:', formValues);
    // Perform additional actions like sending the form data to a backend server
  };

  const showOtherProjectTypeInput = formValues.projectType.includes('other');
  const showOtherBlockchainPlatformInput = formValues.blockchainPlatform === 'other';

  onSubmit: (values, { setSubmitting, resetForm }) => {
    axios.post('http://localhost:5000/applications', values)
      .then(response => {
        console.log(response);
        setSubmitting(false);
        resetForm();
        // Redirect to the dashboard page
        history.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
        setSubmitting(false);
      });
  }

  return (
    
    <form onSubmit={handleSubmit} className="flex flex-wrap max-w-xl p-8 bg-white rounded-lg shadow-md space-y-4">
      <div className="w-full">
        <label htmlFor="ProjectName" className="block text-gray-700 font-medium">
          Project Name
        </label>
        <input
          type="text"
          id="ProjectName"
          name="ProjectName"
          value={formValues.ProjectName}
          onChange={handleChange}
          className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="w-full">
        <label htmlFor="ProjectEmail" className="block text-gray-700 font-medium">
          Project Email
        </label>
        <input
          type="email"
          id="ProjectEmail"
          name="ProjectEmail"
          value={formValues.ProjectEmail}
          onChange={handleChange}
          className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="w-full">
        <label htmlFor="ProjectWebsite" className="block text-gray-700 font-medium">
          Project Website
        </label>
        <input
          type="url"
          id="ProjectWebsite"
          name="ProjectWebsite"
          value={formValues.ProjectWebsite}
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
        <select
          id="blockchainPlatform"
          name="blockchainPlatform"
          value={formValues.blockchainPlatform}
          onChange={handleChange}
          className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select blockchain platform</option>
          <option value="ethereum">Ethereum</option>
          <option value="multichain">Multichain</option>
          <option value="nft">NFT</option>
          <option value="defi">DeFi</option>
          <option value="other">Other</option>
        </select>
      </div>
    
      <div className="w-full">
        <label className="block text-gray-700 font-medium">Roles Needed</label>
        <div className="mt-2 space-y-2">
          <label>
            <input
              type="checkbox"
              name="roles"
              value="technicalAmbassador"
              checked={formValues.roles.includes('technicalAmbassador')}
              onChange={handleCheckboxChange}
            />{' '}
            Technical Ambassador
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="communityAmbassador"
              checked={formValues.roles.includes('communityAmbassador')}
              onChange={handleCheckboxChange}
            />{' '}
            Community Ambassador
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="marketingAmbassador"
              checked={formValues.roles.includes('marketingAmbassador')}
              onChange={handleCheckboxChange}
            />{' '}
            Marketing Ambassador
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="communityManager"
              checked={formValues.roles.includes('communityManager')}
              onChange={handleCheckboxChange}
            />{' '}
            Community Manager
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="moderator"
              checked={formValues.roles.includes('moderator')}
              onChange={handleCheckboxChange}
            />{' '}
            Moderator
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font
        medium rounded-lg focus:outline-none focus:bg-blue-600 hover:bg-blue-600"
        >
          Finish registration
        </button>
      </form>
      );
      };
      
      export default CompanyApplicationForm;
