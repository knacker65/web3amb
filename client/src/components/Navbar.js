import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navigateHome = () => {
    window.location.href = '/Index';
  };

  return (
    <header className="bg-gray-900 fixed w-full z-10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div
            className="text-white font-bold cursor-pointer"
            onClick={navigateHome}
          >
            Web3 Ambassador Jobs
          </div>
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
                onClick={navigateHome}
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
  );
};

export default Navbar;
