import React from 'react';
import CompanyApplicationForm from '../components/CompanyApplicationForm';


const CompanyApplicationPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Company Application Form</h1>
      <CompanyApplicationForm />
    </div>
  );
};

export default CompanyApplicationPage;
