import { useRouter } from 'next/router';
import Navbar from './Navbar'; // Import the Navbar component

const PreRegistration = () => {
  const router = useRouter();

  const handleUserClick = () => {
    router.push('/applicant-register');
  };

  const handleProjectClick = () => {
    router.push('/company-application');
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-gray-100">
      <Navbar /> {/* Render the Navbar component */}
      <div className="flex flex-col items-center justify-center flex-grow p-8 bg-white rounded shadow-md w-full max-w-md mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Pre Registration</h2>
        <p className="mb-6 text-center text-gray-600">Welcome to our community! Please choose your registration type:</p>
        <button 
          onClick={handleUserClick} 
          className="w-full py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          User
        </button>
        <button 
          onClick={handleProjectClick} 
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Project
        </button>
      </div>
    </div>
  );
};

export default PreRegistration;
