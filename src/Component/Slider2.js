import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../Assets/solution-explorer-app-development.sm.webp";
import Img2 from "../Assets/solution-explorer-customers.sm.webp";
import Img3 from "../Assets/solution-explorer-technology-operations.sm.webp";

function Slider2() {
  return (
    <div className="container mx-auto mt-5 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-4 mx-5 text-center md:text-left">
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            AI-Enhanced Professional Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Transform Your Business with Intelligent IT Solutions. Leverage
            cutting-edge AI and cloud technologies to optimize efficiency,
            safeguard your data, and streamline expenditures. Our advanced
            services drive innovation and operational excellence, propelling
            your business forward.
          </p>
          <ul className="mt-10 ">
            <li className="text-blue-500 hover:underline mb-2">
              <Link to="/professional-services">Read More</Link>{" "}
              {/* Redirect to Professional Services page */}
            </li>
          </ul>
        </div>

        {/* Managed Service Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={Img2}
            alt="Customers"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Managed Services with Intelligent Automation
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Looking for a smart, seamless managed services solution? Unlock your
            business’s potential with our AI-powered, cloud-integrated services.
            Boost efficiency, cut costs, and enhance security all in one package
            to keep you ahead.
          </p>
          <ul className="mt-16">
            <li className="text-blue-500 hover:underline mb-4">
              <Link to="/managed-services">Read More</Link>{" "}
              {/* Redirect to Managed Services page */}
            </li>
          </ul>
        </div>

        {/* Networking Consulting Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={Img3}
            alt="IT Operations"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            AI-Powered Networking Consulting
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Boost your business with our AI-driven consulting services! We
            optimize your network's performance, cut costs, and elevate
            security. Let us transform your network into a powerful, reliable
            backbone for success.{" "}
          </p>
          <ul className="mt-16 md:">
            <li className="text-blue-500 hover:underline mb-4">
              <Link to="/networking-consulting">Read More</Link>{" "}
              {/* Redirect to Networking Consulting page */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
