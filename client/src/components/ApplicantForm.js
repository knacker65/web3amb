import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Navbar from './Navbar'; // Import the Navbar component

const validationSchema = Yup.object({
  // ...validation schema
});

const ApplicationForm = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const router = useRouter();

  return (
    
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        ethAddress: '',
        twitterHandle: '',
        discordHandle: '',
        interests: '',
        ambassadorExperience: '',
        termsAndConditions: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        // form submission logic

        // Set the success message after successful submission
        setSuccessMessage('Application submitted successfully! Thank you for applying.');

        // Redirect after successful submission
        router.push('/applicant-dashboard');
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
              <ErrorMessage
                name="fullName"
                className="text-red-500 text-sm mt-1"
                component="p"
              />
            </div>

            <div className="w-full">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                className="text-red-500 text-sm mt-1"
                component="p"
              />
            </div>

            <div className="w-full">
              <label htmlFor="ethAddress" className="block text-gray-700 font-medium">
                Ethereum Address
              </label>
              <Field
                name="ethAddress"
                type="text"
                className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="ethAddress"
                className="text-red-500 text-sm mt-1"
                component="p"
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
          <label htmlFor="interests" className="block text-gray-700 font-medium">
            Interests (Web3, NFTs, DeFi, etc.)
          </label>
          <Field
            name="interests"
            as="textarea"
            rows="3"
            className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="interests"
            className="text-red-500 text-sm mt-1"
            component="p"
          />
        </div>

        <div className="w-full">
          <label htmlFor="ambassadorExperience" className="block text-gray-700 font-medium">
            Previous Ambassador Experience (if any)
          </label>
          <Field
            name="ambassadorExperience"
            as="textarea"
            rows="3"
            className="w-full mt-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="ambassadorExperience"
            className="text-red-500 text-sm mt-1"
            component="p"
          />
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
);
};

export default ApplicationForm;