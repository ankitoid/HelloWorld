// NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to use react-router-dom for navigation

const NotFound = () => {
  const navigate = useNavigate();

  // Handle back button click
  const handleGoBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={handleGoBack}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
