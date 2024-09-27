import React from 'react';
import arista5 from '../../../Assets/aristaEdge.png';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const AristaEdge = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 mt-12">
        {/* Left Side - Description */}
        <div className="md:w-1/2 w-full text-left mb-6 md:mb-0 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-900">
            Edge Threat Management with Arista Networks
          </h2>
          <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            Edge Threat Management is a crucial part of Arista Networks' Cognitive Unified Edge (CUE), enabling businesses to innovate by integrating security and networking functions into a comprehensive “edge as a service” solution.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            CUE offers a plug-and-play experience for small enterprise LAN, Wi-Fi, security, and micro WAN connectivity, providing the flexibility and performance needed to thrive in a rapidly changing digital environment.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img 
            src={arista5} 
            alt="Arista Edge" 
            className="w-full h-auto rounded-lg shadow-md max-w-md md:max-w-full"
          />
        </div>
      </div>

      <ContactCard />
      <Footer />
    </>
  );
};

export default AristaEdge;
