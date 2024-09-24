import React from 'react';
import Navbar from '../../Navbar';
import hpe from '../../../Assets/azure.jfif';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const MSAzurePartner = () => {
  return (
    <>
      <Navbar />

      {/* Main Content Section */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Hewlett Packard
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              HPE delivers technology solutions to improve business models and operational efficiency.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={hpe}
              alt="Hewlett Packard Solutions"
            />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Overview Text */}
          <div className="lg:w-3/4">
            <h3 className="text-2xl font-bold text-gray-900">Overview</h3>
            <p className="mt-3 text-lg text-gray-700">
              Microsoft Azure helps optimize workloads with a flexible cloud platform. Start with pay-as-you-go pricing and no upfront commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Azure Cloud Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-blue-600 text-2xl font-semibold">Azure Cloud Information</h2>
        <p className="mt-3 text-lg text-gray-700">
          Microsoft Azure is a comprehensive cloud computing platform offering services like computing, storage, and networking. It provides seamless integration with other Microsoft products and robust security features.
        </p>

        <ul className="list-disc pl-5 mt-4 space-y-3 text-gray-700">
          <li><strong>Microsoft integration:</strong> Azure integrates smoothly with existing Microsoft tools.</li>
          <li><strong>Strong security:</strong> Features include encryption and access management.</li>
          <li><strong>Hybrid cloud:</strong> Easily integrate on-premises infrastructure with the cloud.</li>
          <li><strong>Scalability:</strong> Adjust resources dynamically as your needs change.</li>
        </ul>
      </div>

      {/* Contact & Footer */}
      <ContactCard />
      <Footer />
    </>
  );
};

export default MSAzurePartner;
