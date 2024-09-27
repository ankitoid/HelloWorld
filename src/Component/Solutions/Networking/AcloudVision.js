import React from 'react';
import arista4 from '../../../Assets/cloudvision.webp';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const AcloudVision = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 mt-16">
        {/* Left Side - Description */}
        <div className="md:w-1/2 w-full text-left mb-6 md:mb-0 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">CloudVision®: The Future of Networking</h2>
          <p className="text-base md:text-lg mb-4">
            Arista has pioneered cloud networking with a software-driven approach that emphasizes consistency and reliability. CloudVision® automates network management across private, public, and hybrid clouds, simplifying operations in wired and wireless environments.
          </p>
          <p className="text-base md:text-lg">
            By leveraging cloud technology, big data analytics, and machine learning, CloudVision Cognitive Unified Edge (CV-CUE) enhances network performance. With root-cause analysis and proactive problem resolution, CV-CUE minimizes troubleshooting efforts and reduces total cost of ownership.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img 
            src={arista4} 
            alt="CloudVision" 
            className="w-full h-auto rounded-lg shadow-md max-w-md md:max-w-full"
          />
        </div>
      </div>

      <ContactCard /> 
      <Footer />
    </>
  );
};

export default AcloudVision;
