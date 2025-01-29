// src/AristaCaseStudy.js
import React from 'react';
import Navbar from '../../Navbar'; // Adjust the path if needed
import AristaCS from '../../../Assets/aristaCS1.webp';
import Aristalogo from '../../../Assets/Aristalogo.png';
import DeliverablesImage from '../../../Assets/deliverbalesCS1.webp';
import { FaTools } from 'react-icons/fa'; // Icon for Solution
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const CaseStudies1 = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white px-6 py-8 mt-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Arista Data Center Implementation
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={AristaCS}
              alt="Arista Data Center"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Case Study Detail</h2>
            <hr className="border-black mb-4" />
            <p className="text-md mb-2">
              <strong>Company name:</strong> Arista
            </p>
            <p className="text-md mb-2">
              <strong>Case Study Title:</strong> Arista Data Center Implementation – Jackson, MI
            </p>
            <p className="text-md mb-2">
              <strong>Case Study Short Description:</strong> CMS Energy requested implementation assistance from GX
            </p>
            <p className="text-md mb-2">
              <strong>Country of Work:</strong> USA &nbsp;&nbsp;&nbsp;&nbsp; <strong>Year:</strong> 2018
            </p>
            <p className="text-md mb-2">
              <strong>Market:</strong> Service Provider &nbsp;&nbsp;&nbsp;&nbsp; <strong>Solution:</strong> Professional Services
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">About Arista</h2>
            <hr className="border-black mb-4" />
            <p className="text-md">
              Arista Networks was founded to pioneer and deliver software-driven cloud networking solutions for large data center storage and computing environments. Arista’s award-winning platforms, ranging in Ethernet speeds from 10 to 400 gigabits per second, redefine scalability, agility, and resilience. Arista has shipped more than 20 million cloud networking ports worldwide with Cloud Vision and EOS, an advanced network operating system. Committed to open standards, Arista is a founding member of the 25/50GbE consortium. Arista Networks products are available worldwide directly and through partners.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={Aristalogo}
              alt="Arista Logo"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 bg-white">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={DeliverablesImage}
            alt="Deliverables"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Right Side - Deliverables */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Deliverables</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Attend CMS and Arista project/progress meetings.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Gather relevant CMS technical information for use in Arista design and migration development.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Validation and confirmation of CMS technical information.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Participate in Arista design and migration planning development.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Communicate and promote Arista design and migration approaches to CMS.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Coordinate required resources to carry out project tasks successfully.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Solution deployment according to design provided by Arista.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Discover and perform onsite network troubleshooting.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Maintain active issues list and ensure all technical or procedural issues raised by CMS are closed.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start px-6 py-8 bg-white">
        {/* Needs */}
        <div className="w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-gray-300">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Needs</h2>
          <p className="text-gray-600">
            CMS Energy required Arista's assistance with architectural design and implementation assistance for the
            successful deployment of Arista data center products and technologies.
          </p>
        </div>

        {/* Benefits */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Benefits</h2>
          <p className="text-gray-600">
            Thanks to GlobalXperts’ execution of best practices and architectural thoroughness, PHC/LCS was able to have
            their entire UCS system enhanced for optimal communication delivery.
          </p>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-gray-50 px-6 py-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaTools className="text-blue-500 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Solution</h2>
        </div>
        <p className="text-gray-600">
          GXE will provide CMS with architectural design and implementation assistance for the successful deployment of
          Arista data center products and technologies. The GXE will analyze and document the existing CMS network
          environment, and provide migration, integration, application deployment, testing, and troubleshooting services
          for CMS’s data center network.
        </p>
      </div>
      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
      <Footer/>

      </div>
    </>
  );
};

export default CaseStudies1;
