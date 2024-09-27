import React, { useRef } from "react";
import Navbar from "../../Navbar";
import sm from "../../../Assets/virtualbox.jpg";
import ContactCard from "../../Contact/ContactCard";

const VirtualWork = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-20">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-8">
              Virtual Workx
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Amazon WorkSpaces offers secure, managed cloud desktops, providing access to your workspace from any device, hassle-free.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-start max-w-7xl mx-auto mt-8">
          <button
            onClick={handleContactUsClick}
            className="px-6 py-3 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Demo Section */}
        <div className="mt-16 p-8 bg-white border-t border-gray-200">
          {/* Title Section */}
          <h2 className="text-3xl font-bold flex items-center mb-4">
            <span className="border-l-4 border-blue-500 pl-2">
              Plan Your Demo Today
            </span>
          </h2>

          {/* Content Section */}
          <p className="text-gray-700 mb-4">
            Easily provision cloud-based virtual desktops for your users with Amazon WorkSpaces. Whether supporting a remote workforce or simplifying desktop management, we have you covered.
          </p>

          <p className="text-gray-700 mb-4">
            For a limited time, try Amazon WorkSpaces for free with two standard bundle virtual desktops for 3 billing cycles. Experience the full capabilities of WorkSpaces to see how it benefits your organization.
          </p>

          <p className="text-gray-700">
            Don’t wait! Contact our Sales team today to take advantage of this demo offer and discover the power of Amazon WorkSpaces.
          </p>
        </div>
      </div>

      {/* Contact Card Section */}
      <div ref={contactRef}>
        <ContactCard />
      </div>
    </div>
  );
};

export default VirtualWork;
