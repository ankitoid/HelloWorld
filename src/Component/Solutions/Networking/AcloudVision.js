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
            Arista has pioneered the cloud networking movement with its software-driven approach, built on cloud principles with consistent, reliable software offerings, open standards-based designs, and native programmability. CloudVision® extends the same architectural approach of simplification through software consistency as a multi-domain management plane for automating the entire network across private, public, and hybrid clouds as well as wired and wireless campus.
          </p>
          <p className="text-base md:text-lg">
            Harnessing the power of the cloud, big data analytics, machine learning, and automation, CloudVision Cognitive Unified Edge (CV-CUE) brings the power of intelligence, speed, and accuracy to wireless and wired networks. Through root-cause analysis and proactive problem resolution options, CV-CUE reduces the “mean-time-to-resolve” problems, minimizing network troubleshooting efforts while reducing total cost of ownership.
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
