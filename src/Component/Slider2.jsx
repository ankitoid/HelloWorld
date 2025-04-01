import React from "react";
import { Link } from "react-router-dom";

function Slider2() {
  return (
    <div className="container mx-auto mt-2 p-4 md:p-0">
      <h1 className="text-3xl md:text-5xl font-bold py-4 text-center md:text-left">
      Let Us Transform Your Business
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Professional Service Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/AIEnhancedServices.png"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
            alt="AI-Enhanced Services"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
          Professional Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          We build cutting-edge solutions, perform technical surveys and cloud migrations, offer technical consulting, supplement technical staff, and much more.          </p>
          <Link
            to="service/professional-services"
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </div>

        {/* Managed Service Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/managedServices.png"
            alt="Customers"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
          Managed Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          We can provide day 2 support, help desk services, network operations center (NOC) services, and many more services to help your business thrive.          </p>
          <Link
            to="service/Managed-Services"
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </div>

        {/* Networking Consulting Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/NetworkingConsulting.png"
            alt="IT Operations"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
          Cloud Solutions
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          We build cloud solutions, and we can incorporate powerful innovations such as AI, data analytics, and more. We can build hybrid cloud and multi-cloud solutions to help you optimize costs, performance, and security.</p>
          <Link
            to="/solutions/Networking"
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
