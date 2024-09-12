import React from "react";
import Navbar from "../Navbar";
import { useState } from "react";
import c1 from "../../Assets/support.jfif";
import c2 from "../../Assets/image (9).png";
import c3 from "../../Assets/image (10).png";
import c4 from "../../Assets/image (11).png";
import c5 from "../../Assets/image (12).png";
import c6 from "../../Assets/image (13).png";
import v1 from "../../Assets/expert.jpg";
import Footer from "../Footer";
const FieldServices = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center mt-32">
            Field Services
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Our team of experienced technicians and engineers are ready to
            facilitate the most important <br></br> on-site factor in the IT
            service equation: Field Services. We provide:
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between ml-28">
            {/* Text Section */}
            <div className="flex-1 md:pr-8 mb-8 md:mb-0">
              <ul className="text-gray-600 mb-8 list-disc list-inside">
                <li className="mb-2">
                  <span className="font-medium">
                    Complex technology refreshes
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">
                    Network equipment rack-and-stack
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Device deployment</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">
                    Structured cabling services
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Site assessments</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">
                    Equipment moves and migrations
                  </span>
                </li>
              </ul>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPsc6871mNjhzzbDY4_L2EcjIio7MhcDYkQ&s"
                alt="Field Services Technician"
                className="rounded-lg shadow-lg w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
 
        {/* Boxes Section */}
        <div className="mt-20 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Field Engineering Service</h2>
  <p className="text-lg text-gray-600 mb-8">
    Need expert IT support beyond the office? Our field engineering services offer fast, efficient solutions for network setup,
    hardware<br/>  maintenance, and IT system deployments. Our experienced engineers come directly to your location, minimizing<br/>
     downtime and ensuring smooth operations. With tailored solutions, competitive pricing, and flexible plans, we meet your<br/>
      unique needs. Contact us today to see how our IT field engineering can keep your business running smoothly.
  </p>
  <p className="text-lg text-gray-600 mb-8">
    The value proposition for our IT field engineering service that supports network equipment for remote branch offices <br/>
    or data center locations can be summarized as follows:
  </p>
 
  {/* Boxes Section */}
  <div className="flex flex-wrap justify-center gap-14 px-4">
    {/* Box 1 */}
    <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/* Front side with image */}
        <div className="absolute backface-hidden w-full h-full">
          <img src={c1} alt="Service Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
            <p className="w-full text-center">On-demand support</p>
          </div>
        </div>
        {/* Back side with content */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
            <p className="text-lg py-2 text-gray-200 mt-10">
              Our IT field engineering service provides on-demand support for remote locations, offering quick and efficient help to minimize downtime and keep your business running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
 
    {/* Box 2 */}
    <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/* Front side with image */}
        <div className="absolute backface-hidden w-full h-full">
          <img src={c2} alt="Service Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
            <p className="w-full text-center">Reduced travel costs</p>
          </div>
        </div>
        {/* Back side with content */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
            <p className="text-lg py-2 text-gray-200 mt-10">
              Outsource network equipment support to save on travel costs. GlobalXperts dispatches local engineers for maintenance and troubleshooting, reducing the need for IT staff travel.
            </p>
          </div>
        </div>
      </div>
    </div>
 
    {/* Box 3 */}
    <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/* Front side with image */}
        <div className="absolute backface-hidden w-full h-full">
          <img src={c3} alt="Service Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
            <p className="w-full text-center">Expertise and experience</p>
          </div>
        </div>
        {/* Back side with content */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
            <p className="text-lg py-2 text-gray-200 mt-10">
            GlobalXperts provides a team of skilled IT professionals specializing in network equipment for remote locations. They offer quick and efficient troubleshooting to ensure
            uninterrupted business operations.
            </p>
          </div>
        </div>
      </div>
    </div>
 
    {/* Box 4 */}
    <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/* Front side with image */}
        <div className="absolute backface-hidden w-full h-full">
          <img src={c4} alt="Service Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
            <p className="w-full text-center">Improved network performance</p>
          </div>
        </div>
        {/* Back side with content */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
            <p className="text-lg py-2 text-gray-200 mt-10">
              GlobalXperts optimizes your remote network, enhancing call quality, data speeds, and overall reliability to meet your business demands.
            </p>
          </div>
        </div>
      </div>
    </div>
 
    {/* Box 5 */}
    <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/* Front side with image */}
        <div className="absolute backface-hidden w-full h-full">
          <img src={c5} alt="Service Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
            <p className="w-full text-center">Scalability</p>
          </div>
        </div>
        {/* Back side with content */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
            <p className="text-base py-2 text-gray-200 mt-10">
              As businesses grow, our IT field engineering service scales network infrastructure to meet increased demand, including adding new equipment, optimizing existing setups, or migrating to cloud-based solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
 
    {/* Box 6 */}
    <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/* Front side with image */}
        <div className="absolute backface-hidden w-full h-full">
          <img src={c6} alt="Service Image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
            <p className="w-full text-center">Security</p>
          </div>
        </div>
        {/* Back side with content */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
            <p className="text-lg py-2 text-gray-200 mt-10">
              Our IT field engineering service helps secure remote branches and data centers by implementing robust security protocols and best practices to protect against cyberattacks and data breaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
 
        {/* Boxes Section */}
        <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
        <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
                  <img
                    className="w-full rounded-lg"
                    src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bc-ce1-marquee.sm.jpg"
                    alt="A man working on a laptop in a server room."
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
                </div>
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Field Services – Onsite Service
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                  Need on-site IT support for your routers, switches, and WiFi? Our expert technicians offer fast and efficient installation, configuration, maintenance, and repair. Equipped with the latest tools, we minimize downtime and tailor solutions to your needs. With competitive pricing and flexible plans, we ensure you get the support you need. Contact us today to keep your network running smoothly.
                  </p>
                </div>
                {/* Image Section */}
             
 
              </div>
 
 
 
              <div className="mt-20 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
  <p className="text-lg text-gray-600 mb-8">
 
  </p>
 
 
 
 
 {/* Boxes Section */}
 <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
        <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
                  <img
                    className="w-full rounded-lg"
                    src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bc-ce1-marquee.sm.jpg"
                    alt="A man working on a laptop in a server room."
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
                </div>
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Technology Refresh
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                  Is outdated technology slowing your business? Upgrade with a technology refresh to boost productivity, efficiency,<br/>
   and security. New hardware and software handle complex tasks, enhance cybersecurity, and improve employee morale.<br/>
    Don't let old tech hold you back—contact us today to revitalize your IT systems and stay ahead of the competition.
                  </p>
                 
                </div>
                {/* Image Section */}
             
 
              </div>
 
 
 
  {/* Boxes Section */}
  <div className="bg-blueCustomColor p-10 mt-5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Value Proposition
                </h2>
                <div className="security-services mt-2">
                  <p className="text-gray-300">
                  Our IT technology refresh program is designed to deliver exceptional value to your business by providing you with the latest and most innovative technology solutions available in the market. Here are some of
                  the key benefits that you can expect from our program:
                  </p>
                  <ul className="service-list text-gray-300 space-y-2 mt-4">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Improved Productivity and Efficiency
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Enhanced Cybersecurity
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Reduced Downtime
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Increased Employee Satisfaction
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Competitive Advantage
                    </li>
                   
                  </ul>
                </div>
              </div>
              {/* Video Section */}
              <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                <img
                  className="w-full rounded-lg"
                 
                  src={v1}
                  alt="A man working on a laptop in a server room."
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
              </div>
            </div>
          </div>
</div>
 
<div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold  mb-8">FAQs</h1>
      <p className="text-lg  mb-12">
        Dive into FAQs related to Cloud & DevOps.
      </p>
      <div className="flex  mb-16">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">
          Solve this type Problem
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
          See All FAQs
          <span className="ml-2">→</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">
            <a href="#" className="text-blue-500">
              What is an API integration?
            </a>
          </h2>
          <h2 className="text-xl font-bold mb-2">
            <a href="#" className="text-blue-500">
              What is hyperautomation?
            </a>
          </h2>
          <h2 className="text-xl font-bold mb-2">
            <a href="#" className="text-blue-500">
              What is low code?
            </a>
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">
            <a href="#" className="text-blue-500">
              What is no code?
            </a>
          </h2>
          <h2 className="text-xl font-bold mb-2">
            <a href="#" className="text-blue-500">
              What is generative AI?
            </a>
          </h2>
          <h2 className="text-xl font-bold mb-2">
            <a href="#" className="text-blue-500">
              What is the difference between ServiceNow and Jira?
            </a>
          </h2>
        </div>
      </div>
    </div>
 
    <div>
      <Footer/>
    </div>
 
 
 
      </div>
    </>
  );
};
 
export default FieldServices;
 
 