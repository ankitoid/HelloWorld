import React from 'react';
import { Link } from 'react-router-dom';
import gxilogo from '../Assets/gxiLogo.svg';  // Replace with actual path to logo
import illustration404 from '../Assets/404ilution.svg';  // Replace with actual path to 404 illustration

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center p-8">
      {/* GlobalXperts Logo */}
      <img src={gxilogo} alt="GlobalXperts Logo" className="w-64" />

      {/* 404 Illustration */}
      <img
        src={illustration404}
        alt="404 Illustration"
        className="mb-5 w-72"
      />

      {/* Company Message */}
      <p className="text-lg text-gray-700 mb-6">
        At GlobalXperts, we keep networks secure and reliable, but it seems we’ve lost our way this time.
      </p>

      {/* Navigation Links */}
      <div className="flex space-x-4 mb-28">
        <Link
          to="/"
          className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
        <Link
          to="/contact-us"
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md shadow hover:bg-gray-300 transition"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
