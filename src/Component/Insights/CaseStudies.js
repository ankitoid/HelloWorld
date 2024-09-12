// src/CaseStudies.js
import React from "react";
import ContactCard from "../Contact/ContactCard";
import Navbar from "../Navbar";
import AwsLogo from "../../Assets/awsparter.png";
import AristaLogo from "../../Assets/Aristalogo.png";
import ServiceImgage from "../../Assets/casestudy.png"

const CaseStudies = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Blog
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    Discover the latest news and updates from GlobalXperts.
                    Learn how we are revolutionizing the service provider
                    industry with cutting-edge technologies and expert
                    solutions.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src={ServiceImgage}
                    alt="Service providers working on IT solutions"
                  />
                </div>
              </div>
              </div>
      <div className="bg-gray-100 min-h-screen mt-10">
        
        <div className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 p-1 flex items-center justify-center">
          <img
            src={AwsLogo}
            alt="AWS Partner Logo"
            className="max-w-full h-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>

        <div className="flex justify-center mt-8 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-2">
              Case Study: Media Streaming Tier 1 Sporting Franchise
            </h2>
            <p className="text-sm text-gray-700">
              Service Type: Managed Services Vertical: Media and Entertainment
              Contract: Active Challenge: The "Sports Franchise" faced
              increasing fan frustration due to unreliable live streaming during
              games.
            </p>
            <a
              href="#"
              className="text-green-600 font-bold mt-2 block hover:underline"
            >
              READ MORE »
            </a>
            <p className="text-xs text-gray-500 mt-2">April 16, 2024</p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-2">
              Case Study: Close Up Foundation AWS EC2 Project
            </h2>
            <p className="text-sm text-gray-700">
              Service Type: Professional Services Vertical: Non-Profit Contract:
              Complete Customer Information: Founded in 1971, Close Up
              Foundation is a nonprofit, nonpartisan, civic education
              organization.
            </p>
            <a
              href="#"
              className="text-green-600 font-bold mt-2 block hover:underline"
            >
              READ MORE »
            </a>
            <p className="text-xs text-gray-500 mt-2">April 25, 2021</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen">
        <div className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 p-2 flex items-center justify-center">
          <img
            src={AristaLogo}
            alt="AWS Partner Logo"
            className="max-w-full h-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>

        <div className="flex justify-center mt-8 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-2">
              Arista Data Center Implementation
            </h2>
            <p className="text-sm text-gray-700"></p>
            <a
              href="#"
              className="text-green-600 font-bold mt-32 block hover:underline"
            >
              READ MORE »
            </a>
            <p className="text-xs text-gray-500 mt-2">April 16, 2024</p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-80">
                   <a
 className="text-lg font-semibold mb-2">
              Arista Install Services for Entel-Chile – Case Study
            </a>
            <p className="text-sm text-gray-700">
              Case Study Detail Company name: Arista/EntelCase Study Title:
              Arista Implementation Services for EntelCase Study Short
              Description: Arista was seeking onsite professional services,
              implementation, and travel, as well as
            </p>
            <a
              href="#"
              className="text-green-600 font-bold mt-2 block hover:underline"
            >
              READ MORE »
            </a>
            <p className="text-xs text-gray-500 mt-2">April 25, 2021</p>
          </div>
        </div>
      </div>

      <div>
        <ContactCard />
      </div>
    </>
  );
};

export default CaseStudies;
