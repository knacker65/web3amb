import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Navbar from './Navbar'; // Import the Navbar component

const validationSchema = Yup.object({
  fullName: Yup.string().notRequired(),
  email: Yup.string().email('Please enter a valid email address').required('Email is a required field'),
  telegramHandle: Yup.string().notRequired(),
  twitterHandle: Yup.string().required('Twitter Handle is a required field'),
  linkedinProfile: Yup.string().url('Please enter a valid LinkedIn Profile URL'),
  discordHandle: Yup.string().required('Discord Handle is a required field'),
  jobTitle: Yup.string().notRequired(),
  company: Yup.string().notRequired(),
  experienceLevel: Yup.string().notRequired(),
  bio: Yup.string().max(200, 'Short Bio must be at most 200 characters').notRequired(),
  termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the terms and conditions to proceed'),
  allowEmails: Yup.boolean().notRequired(),
  otherCheckbox: Yup.boolean().notRequired(),
  isCompany: Yup.boolean().notRequired(),
});

const ApplicationForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [file, setFile] = useState(null);
  const router = useRouter();

  const [applyAs, setApplyAs] = useState('applicant');

  const handleApplicantTypeChange = (value) => {
    setApplyAs(value);
  };

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          telegramHandle: '',
          twitterHandle: '',
          linkedinProfile: '',
          discordHandle: '',
          jobTitle: '',
          company: '',
          experienceLevel: '',
          bio: '',
          termsAndConditions: false,
          allowEmails: false,
          otherCheckbox: false,
          isCompany: false,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // form submission logic

          // Set the success message after successful submission
          setSuccessMessage('Application submitted successfully! Thank you for applying.');

          if (applyAs === 'company') {
            router.push('/company-application');
          } else {
            router.push('/applicant-register');
          }
        }}
      >
        {({ isSubmitting }) => (
        <>
          {successMessage && <p className="text-green-500 mb-4 font-semibold">{successMessage}</p>}
          <Form className="flex flex-wrap max-w-xl p-8 bg-white rounded-lg shadow-md space-y-4">
            {/* Add your form fields here */}
            <div className="w-full">
              <label htmlFor="fullName" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <Field
                name="fullName"
                type="text"
                className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="w-full">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue                focus:border-blue-500"
                />
                <ErrorMessage
                  name="email"
                  className="text-red-500 text-sm mt-1"
                  component="p"
                />
              </div>
  
              <div className="w-full">
                <label htmlFor="telegramHandle" className="block text-gray-700 font-medium">
                  Telegram Handle
                </label>
                <Field
                  name="telegramHandle"
                  type="text"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
  
              <div className="w-full">
                <label htmlFor="twitterHandle" className="block text-gray-700 font-medium">
                  Twitter Handle
                </label>
                <Field
                  name="twitterHandle"
                  type="text"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="twitterHandle"
                  className="text-red-500 text-sm mt-1"
                  component="p"
                />
              </div>
  
              <div className="w-full">
                <label htmlFor="linkedinProfile" className="block text-gray-700 font-medium">
                  LinkedIn Profile
                </label>
                <Field
                  name="linkedinProfile"
                  type="url"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="linkedinProfile"
                  className="text-red-500 text-sm mt-1"
                  component="p"
                />
              </div>
  
              <div className="w-full">
                <label htmlFor="discordHandle" className="block text-gray-700 font-medium">
                  Discord Handle
                </label>
                <Field
                  name="discordHandle"
                  type="text"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="discordHandle"
                  className="text-red-500 text-sm mt-1"
                  component="p"
                />
              </div>
  
              <div className="w-full">
                <label htmlFor="jobTitle" className="block text-gray-700 font-medium">
                  Job Title
                </label>
                <Field
                  name="jobTitle"
                  type="text"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
  
              <div className="w-full">
                <label htmlFor="company" className="block text-gray-700 font-medium">
                  Company
                </label>
                <Field
                  name="company"
                  type="text"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
  
              <div className="w-full">
                <label htmlFor="experienceLevel" className="block text-gray-700 font-medium">
                  Experience Level
                </label>
                <Field
                  name="experienceLevel"
                  as="select"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                >
                                   <option value="">Select an option</option>
                  <option value="entry">Entry Level</option>
                  <option value="intermediate">Intermediate Level</option>
                  <option value="advanced">Advanced Level</option>
                </Field>
              </div>

              <div className="w-full">
                <label htmlFor="bio" className="block text-gray-700 font-medium">
                  Short Bio
                </label>
                <Field
                  name="bio"
                  as="textarea"
                  rows="3"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="bio"
                  className="text-red-500 text-sm mt-1"
                  component="p"
                />
              </div>

              <div className="w-full">
                <label htmlFor="applyAs" className="block text-gray-700 font-medium">
                  Apply As
                </label>
                <Field
                  name="applyAs"
                  as="select"
                  className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                  onChange={(e) => handleApplicantTypeChange(e.target.value)}
                >
                  <option value="applicant">Applicant</option>
                  <option value="company">Company</option>
                </Field>
              </div>

              <div className="w-full">
                <Field
                  name="termsAndConditions"
                  type="checkbox"
                  className="mt-2"
                />
                <label htmlFor="termsAndConditions" className="ml-2 text-gray-700 font-medium">
                  I accept the terms and conditions
                </label>
                <ErrorMessage
                  name="termsAndConditions"
                  className="text-red-500 text-sm mt-1"
                  component="p"
                />
              </div>

              <div className="w-full">
                <Field
                  name="allowEmails"
                  type="checkbox"
                  className="mt-2"
                />
                <label htmlFor="allowEmails" className="ml-2 text-gray-700 font-medium">
                  Allow receiving emails
                </label>
              </div>

              <div className="w-full">
                <Field
                  name="otherCheckbox"
                  type="checkbox"
                  className="mt-2"
                />
                <label htmlFor="otherCheckbox" className="ml-2 text-gray-700 font-medium">
                  Other checkbox
                </label>
              </div>

              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium mt-4"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </div>
              </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default ApplicationForm;
