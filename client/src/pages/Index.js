import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 fixed w-full z-10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-white font-bold">Web3 Ambassador Jobs</div>
            {/* Navigation */}
            <button className="text-white lg:hidden" onClick={toggleNav}>
              &#9776;
            </button>
            <ul
              className={`${
                isNavOpen ? 'block' : 'hidden'
              } lg:flex lg:space-x-6`}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-white hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                
                <a
                  href="browse-jobs"
                  className="block py-2 px-4 text-white hover:text-blue-500"
                >
                  Browse Jobs
                </a>
              </li>
              <li>
                <a
                  href="post-jobs"
                  className="block py-2 px-4 text-white hover:text-blue-500"
                >
                  Post a Job
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-white hover:text-blue-500"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-white hover:text-blue-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="block py-2 px-4 bg-blue-500 rounded text-white hover:bg-blue-600"
                >
                  Sign Up / Log In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              Discover Exciting Web3 and Ambassador Job Opportunities
            </h1>
            <p className="text-xl mb-4">
              Connect with innovative projects and become a key player in the
              adoption of Web3 technologies.
            </p>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
              Browse Jobs
            </button>
          </div>
        </section>

        {/* Job Search Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Search Bar */}
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                type="text"
                placeholder="Search for jobs, job titles, or companies"
              />
              {/* Filter Options */}
<div className="flex justify-between mt-4 space-x-2">
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
<option value="">Job Type</option>
<option value="full-time">Full-time</option>
<option value="part-time">Part-time</option>
<option value="freelance">Freelance</option>
</select>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
<option value="">Location</option>
<option value="remote">Remote</option>
<option value="new-york">New York</option>
<option value="san-francisco">San Francisco</option>
</select>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
<option value="">Industry</option>
<option value="blockchain">Blockchain</option>
<option value="fintech">Fintech</option>
<option value="gaming">Gaming</option>
</select>
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
<option value="">Experience Level</option>
<option value="entry-level">Entry Level</option>
<option value="mid-level">Mid Level</option>
<option value="senior-level">Senior Level</option>
</select>
</div>
</div>
</div>
</section>
    {/* Featured Jobs Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Job Card */}
          {/* Add as many job cards as needed */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Job Title</h3>
            <p className="text-gray-500 mb-4">Company Name</p>
            <p className="mb-4">Job Location, Job Type</p>
            <p className="text-gray-700">
              Brief job description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 mt-8">
          View All Jobs
        </button>
      </div>
    </section>

    {/* How it Works Section */}
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">How it Works</h2>
        {/* Step-by-Step Guide */}
        {/* Replace with appropriate infographic or illustration */}
        <img
          src="file:///C:/Users/salih/Downloads/enlarge_knacker65_webdesign_for_jobs_for_web3_and_blockchain_vector_art_9368f19d-059d-494b-91ae-f39a9a167d17.png"
          alt="Step-by-step guide"
          className="w-full rounded-lg"
        />
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Success Stories /}
{/ Add as many testimonials as needed */}
<div className="bg-white p-6 rounded-lg shadow-md">
<p className="text-gray-700 mb-4">
"I found my dream job as a Web3 ambassador through this
platform. The process was seamless, and the support was
outstanding. Highly recommended!"
</p>
<p className="font-bold">Jane Doe</p>
<p className="text-gray-500">Web3 Ambassador</p>
</div>
</div>
</div>
</section>
    {/* Call to Action (CTA) Section */}
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Join the Web3 Ambassador Jobs Platform
        </h2>
        <p className="text-xl mb-4">
          Sign up to access personalized job recommendations, exclusive job
          postings, and a user-friendly dashboard.
        </p>
        <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
          Sign Up Now
        </button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            {/* Add appropriate social media icons */}
            <p>Social media icons go here</p>
          </div>
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
            <input
              className="w-full px-4 py-2 mb-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  </main>
</div>
);
}
