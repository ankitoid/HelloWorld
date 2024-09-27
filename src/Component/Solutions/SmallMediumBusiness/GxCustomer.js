import React, { useRef } from "react";
import Navbar from "../../Navbar";
import sm from "../../../Assets/cyber.png";
import { CheckBadgeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

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
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-6">
              GX Customer Connect
            </h2>
            <p className="mt-3 text-lg text-gray-600 sm:mt-4">
              A cloud-based contact center solution that enhances customer service, cuts costs, and boosts operational efficiency. Transform customer interactions today!
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="Server room"
            />
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="flex justify-center lg:justify-start max-w-7xl mx-auto mt-8">
          <button
            onClick={handleContactUsClick}
            className="px-6 py-3 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Overview Section */}
        <div className="mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Omnichannel and Self-service */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                  <CheckBadgeIcon className="h-10 w-10 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    Omnichannel & Self-service
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Enhance customer experience with advanced self-service options and omnichannel communication.
                  </p>
                </div>
                <ul className="text-gray-700 list-disc ml-4 space-y-2">
                  <li>IVR & Telephony</li>
                  <li>Chatbots & automation</li>
                  <li>Web/mobile chat</li>
                  <li>Omnichannel routing</li>
                  <li>Caller authentication</li>
                </ul>
              </div>

              {/* Analytics and Optimization */}
              <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                  <LockClosedIcon className="h-10 w-10 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    Analytics & Optimization
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Use data-driven insights to improve customer service efficiency.
                  </p>
                </div>
                <ul className="text-gray-700 list-disc ml-4 space-y-2">
                  <li>Real-time analytics</li>
                  <li>Sentiment analysis</li>
                  <li>Call summarization</li>
                  <li>Forecasting & scheduling</li>
                  <li>Contact scoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="mt-12">
        <ContactCard />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GxCustomer;
