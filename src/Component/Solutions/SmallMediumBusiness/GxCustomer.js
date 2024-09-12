import React, { useRef } from 'react';
import Navbar from '../../Navbar'; 
import sm from "../../../Assets/cyber.png";
import { CheckBadgeIcon, LockClosedIcon } from '@heroicons/react/24/outline';  // Correct imports for Heroicons v2
import ContactCard from "../../Contact/ContactCard";
import Footer from '../../Footer';

const GxCustomer = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-8">
              GX Customer Connect
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Are you looking for a powerful and flexible cloud-based contact center solution that can help you improve customer service and streamline your operations? GX Customer Connect may be the solution for your company!
              <br /><br />
              GX Customer Connect is a cloud-based contact center solution that can help you deliver exceptional customer service while reducing costs and improving efficiency. With GX Customer Connect, you get a variety of features and benefits, including:
              <br /><br />
              With GX Customer Connect, you can transform the way you interact with your customers and provide a superior customer experience that sets you apart from your competitors. So why wait? Sign up for GX Customer Connect today and start delivering exceptional customer service while reducing costs and improving efficiency!
            </p>
           
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>
        <button
              onClick={handleContactUsClick}
              className="text-blue-500 font-medium hover:underline"
            >
              Contact Us
            </button>

        {/* Overview Section */}
        <div className="mt-12">
          <h1 className="text-2xl font-bold text-center mb-6">Overview</h1>
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">GX Customer Connect Features</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Omnichannel and Self-service */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                  <CheckBadgeIcon className="h-12 w-12 text-blue-500 mb-4" /> {/* Updated Icon */}
                  <h2 className="text-xl font-semibold text-blue-600 mb-2">Omnichannel and self-service</h2>
                  <p className="text-gray-600 text-center mb-4">
                    GX Connect has several features related to Omnichannel.
                  </p>
                </div>
                <ul className="text-gray-700 list-disc ml-4">
                  <li>Telephony High-quality audio IVR</li>
                  <li>Chatbots, and contact center automation</li>
                  <li>Web and mobile chat</li>
                  <li>Omnichannel outbound campaigns</li>
                  <li>Predictive dialer with answering machine detection</li>
                  <li>Omnichannel routing and Skills-based routing Task management</li>
                  <li>Caller authentication and fraud risk detection</li>
                </ul>
              </div>

              {/* Analytics and Optimization */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                  <LockClosedIcon className="h-12 w-12 text-blue-500 mb-4" /> {/* Same Icon */}
                  <h2 className="text-xl font-semibold text-blue-600 mb-2">Analytics and optimization</h2>
                  <p className="text-gray-600 text-center mb-4">
                    These are the features that provide analytics and optimization.
                  </p>
                </div>
                <ul className="text-gray-700 list-disc ml-4">
                  <li>Self-service flow builder</li>
                  <li>Contact forecasting</li>
                  <li>Capacity planning and Scheduling</li>
                  <li>Real-time conversational analytics with sentiment analysis</li>
                  <li>Call summarization and recording</li>
                  <li>Data redaction</li>
                  <li>Evaluation forms and contact scoring</li>
                  <li>Automated chatbot designer</li>
                  <li>Real-time and historical analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef}>
        <ContactCard />
      </div>
      <Footer/>
    </div>
  );
}

export default GxCustomer;
