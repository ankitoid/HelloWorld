import React from 'react';
import cloudSerive from "../../../Assets/azureIMG.webp";
import Navbar from '../../Navbar'
const Azure = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Azure
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              GlobalXperts leverages its extensive cloud expertise to support clients worldwide at every stage of their cloud journey. From consulting and migration to 24/7 managed services, DevOps, and cost optimization, we provide comprehensive solutions tailored to your unique needs.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={cloudSerive}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              {/* You can add additional content here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azure;
