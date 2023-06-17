import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const BrowseJobs = () => {
  const sampleJobData = [
    {
      id: 1,
      title: 'Web3 Ambassador',
      company: 'Company A',
      location: 'Remote',
      type: 'Full-time',
      description: 'Description of the job...',
    },
    {
      id: 2,
      title: 'Blockchain Developer',
      company: 'Company B',
      location: 'New York',
      type: 'Part-time',
      description: 'Description of the job...',
    },
    // More job data...
  ];

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
          {sampleJobData.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 p-4 rounded bg-white shadow"
            >
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-500 mb-2">{job.company}</p>
              <p className="text-gray-500 mb-2">{job.location}</p>
              <p className="text-gray-500 mb-2">{job.type}</p>
              <p className="text-gray-500 mb-2">{job.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                Apply Now
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
