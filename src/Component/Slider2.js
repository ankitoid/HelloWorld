import React from 'react';
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
        {/* Employees Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={Img1} className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4" alt="Employees"/>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Employees</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Deliver scalable employee experiences to increase engagement, foster talent development, and boost productivity.
          </p>
          <ul className="mt-4">
            <li className="text-blue-500 hover:underline mb-2">HR Service Delivery</li>
            <li className="text-blue-500 hover:underline">Workplace Service Delivery</li>
          </ul>
        </div>

        {/* Customers Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={Img2} alt="Customers" className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"/>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Customers</h2>
          <p className="text-gray-600 text-sm md:text-base">
            With AI and automation you can empower agents and field technicians to proactively serve, helping to reduce customer effort.
          </p>
          <ul className="mt-4">
            <li className="text-blue-500 hover:underline mb-2">Customer Service Management</li>
            <li className="text-blue-500 hover:underline">Field Service Management</li>
          </ul>
        </div>

        {/* IT Operations Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={Img3} alt="IT Operations" className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"/>
          <h2 className="text-xl md:text-2xl font-bold mb-4">IT Operations</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Unite on a single platform to deliver resilient digital services, extraordinary experiences, and increased productivity.
          </p>
          <ul className="mt-4">
            <li className="text-blue-500 hover:underline mb-2">IT Operations Management</li>
            <li className="text-blue-500 hover:underline">IT Service Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
