import React, { useRef } from "react";
import financialImage from "../../Assets/financial.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Financial = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-gray-100">
          <div className="p-4 sm:p-8 max-w-7xl mx-auto">
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Financial Services Solutions
                  </h2>
                  <p className="mt-3 text-lg sm:text-xl text-gray-500">
                    Elevate your financial success with GlobalXperts' advanced IT solutions. We help financial institutions boost efficiency, manage risks, and deliver superior customer experiences.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-8 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg object-cover"
                    src={financialImage}
                    alt="Financial services and IT solutions"
                  />
                </div>
                
              </div>
              <div className="text-left mt-8">
                <button
                  onClick={handleContactUsClick}
                  className="px-6 py-2 border-2 border-transparent bg-greenCustomColor2 text-white font-semibold rounded-md hover:bg-blueCustomColor hover:text-white transition-colors duration-300 shadow-md"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="max-w-4xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                We provide specialized IT solutions for financial institutions, focusing on efficiency, risk management, and innovative cloud-based platforms to optimize performance and enhance security.
              </p>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
                Our Expertise in Financial IT Solutions
              </h3>
              <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">
                    Risk Management Solutions
                  </h4>
                  <p className="text-gray-700">
                    Robust security measures and data analytics to ensure compliance and protect sensitive financial data.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">
                    Cloud Integration
                  </h4>
                  <p className="text-gray-700">
                    Scalable cloud solutions tailored to financial sector needs, improving data management and operations.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">
                    Advanced Data Analytics
                  </h4>
                  <p className="text-gray-700">
                    Data-driven insights to improve decision-making, customer experiences, and financial performance.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">
                    Cybersecurity Solutions
                  </h4>
                  <p className="text-gray-700">
                    Customized security solutions to safeguard financial assets and maintain customer trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-100 py-12">
            <div ref={contactRef} className="mt-12">
              <ContactCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Financial;
