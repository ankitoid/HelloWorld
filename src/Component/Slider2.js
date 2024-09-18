import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../Assets/solution-explorer-app-development.sm.webp";
import Img2 from "../Assets/solution-explorer-customers.sm.webp";
import Img3 from "../Assets/solution-explorer-technology-operations.sm.webp";

function Slider2() {
  return (
    <div className="container mx-auto mt-5 p-4 md:p-6">
      <h1 className="text-7xl md:text-5xl font-bold py-4 text-center md:text-left">
        Transform your business with Us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Professional Service Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={Img1}
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
            alt="Employees"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            AI-Enhanced Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Optimize your business with AI and cloud technologies to enhance efficiency and cut costs.
          </p>
          <Link
            to="/professional-services"
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </div>

        {/* Managed Service Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={Img2}
            alt="Customers"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Managed Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Improve efficiency with AI-powered, cloud-integrated managed services to stay ahead.
          </p>
          <Link
            to="/managed-services"
            className="text-blue-500 hover:underline"
          >
            Read More
          </Link>
        </div>

        {/* Networking Consulting Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={Img3}
            alt="IT Operations"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Networking Consulting
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Leverage AI to enhance network performance, reduce costs, and boost security.
          </p>
          <Link
            to="/networking-consulting"
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
