import React from "react";
import Navbar from "../Navbar";
import { useState } from "react";
import c1 from "../../Assets/support.jfif";
import c2 from "../../Assets/image (9).png";
import c3 from "../../Assets/image (10).png";
import c4 from "../../Assets/image (11).png";
import c5 from "../../Assets/image (12).png";
import c6 from "../../Assets/image (13).png";
import v11 from "../../Assets/TraningVideo.mp4";
import Footer from "../Footer";
import ContactCard from '../Contact/ContactCard'
import Field from "../../Assets/FieldEngineers.mp4";
import Onsite from "../../Assets/OnsiteService.mp4";
import Refresh from "../../Assets/TechnologyRefresh.png";
import { Link } from "react-router-dom";
const FieldServices = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mt-16 md:flex-row items-center justify-between mx-5 md:mx-28">
            {/* Text Section */}
            <div className="flex-1 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center mt-6 md:mt-28">
                Field Services
              </h2>
              <p className="text-lg text-gray-600 mb-4 text-center">
                Our skilled technicians deliver seamless on-site IT solutions,
                including:
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li className="mb-2">
                  <span className="font-medium">Technology refreshes.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Network rack-and-stack.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Device deployment.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Structured cabling.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Site assessments.</span>
                </li>
                <li className="mb-2">
                  <span className="font-medium">
                    Equipment moves and migrations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex-1 mt-28 ">
              <video
                src={Field}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>
        </div>
        {/* Boxes Section */}
        <div className="max-w-7xl mx-auto mt-20 text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Field Engineering Service
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Need expert IT support beyond the office? Our field engineering
            services offer fast, efficient solutions for network setup, hardware
            maintenance, and IT system deployments. Our engineers come directly
            to your location, minimizing downtime and ensuring smooth
            operations. Contact us today to see how our IT field engineering can
            keep your business running smoothly.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            The value proposition for our IT field engineering service can be
            summarized as follows:
          </p>

          {/* Boxes Section */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 px-4">
            {/* Box 1 */}
            <div className="w-full md:w-60 h-56 bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c1}
                    alt="On-demand support"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-40">
                    <p className="text-center">On-demand support</p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-base py-2 text-gray-200">
                      Our IT field engineering service provides on-demand
                      support for remote locations, offering quick help to
                      minimize downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-full md:w-60 h-56 bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c2}
                    alt="Reduced travel costs"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-40">
                    <p className="text-center">Reduced travel costs</p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-base py-2 text-gray-200">
                      Outsource support to save on travel costs. We dispatch
                      local engineers for maintenance, reducing IT staff travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-full md:w-60 h-56 bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c3}
                    alt="Expertise and experience"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-40">
                    <p className="text-center">Expertise and experience</p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-base py-2 text-gray-200">
                      Our skilled IT professionals specialize in network
                      equipment for remote locations, ensuring uninterrupted
                      business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="w-full md:w-60 h-56 bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c4}
                    alt="Improved network performance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-40">
                    <p className="text-center">Improved network performance</p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-base py-2 text-gray-200">
                      We optimize your remote network, enhancing call quality
                      and data speeds to meet business demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 5 */}
            <div className="w-full md:w-60 h-56 bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c5}
                    alt="Security"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-40">
                    <p className="text-center">Security</p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-base py-2 text-gray-200">
                      We secure remote branches by implementing robust security
                      protocols to protect against cyberattacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 6 */}
            <div className="w-full md:w-60 h-56 bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c6}
                    alt="Scalability"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-40">
                    <p className="text-center">Scalability</p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-base py-2 text-gray-200">
                      As businesses grow, we scale network infrastructure to
                      meet demand, optimizing setups or migrating to cloud-based
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Boxes Section */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mt-32 pb-10">
          {/* Onsite Service Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
            <video
              src={Onsite}
              className="h-full w-full object-cover rounded-sm"
              muted
              autoPlay
              loop
              playsInline
            ></video>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>

          <div className="mt-20 text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Field Services – Onsite Service
            </h2>
            <p className="mt-3 text-lg text-gray-500 sm:mt-4">
              Get on-site IT support for your routers, switches, and WiFi! Our
              expert technicians provide quick installation, configuration,
              maintenance, and repair services. With competitive pricing and
              flexible plans, we tailor solutions to minimize downtime and
              ensure your network runs smoothly.
            </p>
          </div>
        </div>

        {/* Technology Refresh Section */}
        <div className="mt-20 max-w-7xl  mx-auto flex flex-col lg:flex-row items-center justify-between pb-10">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Technology Refresh
            </h2>
            <p className="mt-3 text-lg text-gray-500 sm:mt-4">
              Stay ahead with our Technology Refresh services. We upgrade
              hardware and software, ensuring your IT infrastructure is current
              and optimized. Our seamless transitions enhance performance,
              security, and scalability while minimizing disruption to your
              operations.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
            <img
              className="w-full rounded-lg"
              src={Refresh}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-blueCustomColor p-10 mt-8">
          <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Value Proposition
              </h2>
              <p className="mt-2 text-gray-300">
                Our IT technology refresh program delivers exceptional value by
                providing the latest and most innovative technology solutions.
                Here are key benefits you can expect:
              </p>
              <ul className="service-list text-gray-300 space-y-2 mt-4">
                {[
                  "Improved Productivity and Efficiency",
                  "Enhanced Cybersecurity",
                  "Reduced Downtime",
                  "Increased Employee Satisfaction",
                  "Competitive Advantage",
                ].map((item) => (
                  <li className="flex items-center" key={item}>
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
              <video
                src={v11}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto container  px-4 py-16">
          <div className="flex mb-16">
            <Link
              to="/contact-us"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4"
            >
              Contact Us
            </Link>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
              FAQs
              <span className="ml-2">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(0)}
                >
                  What types of on-site services does your Field Engineering
                  team provide?
                </h2>
                {activeQuestion === 0 && (
                  <p className="text-lg mb-4">
                    We offer comprehensive on-site services, including equipment
                    installation, network setup, structured cabling, site
                    assessments, and troubleshooting for IT infrastructure. Our
                    team ensures efficient, hands-on support to optimize your
                    operations.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(1)}
                >
                  How does your team handle technology upgrades or refreshes?
                </h2>
                {activeQuestion === 1 && (
                  <p className="text-lg mb-4">
                    Our engineers conduct technology refreshes by assessing your
                    current infrastructure, replacing outdated equipment, and
                    upgrading systems to ensure your network stays up-to-date
                    with minimal disruption to business continuity.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(2)}
                >
                  Can you assist with network equipment rack-and-stack services?
                </h2>
                {activeQuestion === 2 && (
                  <p className="text-lg mb-4">
                    we provide expert network rack-and-stack services, ensuring
                    proper installation, configuration, and testing of equipment
                    to optimize performance and reduce downtime.
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(3)}
                >
                  Do you offer site assessments before starting a project?
                </h2>
                {activeQuestion === 3 && (
                  <p className="text-lg mb-4">
                    We perform detailed site assessments to understand your
                    current IT setup and identify any improvements needed for
                    better efficiency, scalability, and performance.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(4)}
                >
                  How do you ensure smooth equipment moves and migrations?
                </h2>
                {activeQuestion === 4 && (
                  <p className="text-lg mb-4">
                    Our team plans and executes equipment moves and migrations
                    with precision, minimizing downtime and ensuring a seamless
                    transition of your systems from one location to another.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(5)}
                >
                  What kind of support can we expect during device deployment?
                </h2>
                {activeQuestion === 5 && (
                  <p className="text-lg mb-4">
                    We provide end-to-end device deployment services, from
                    configuring and installing hardware to testing and ensuring
                    everything works as intended. Our goal is to make the
                    deployment process as efficient and smooth as possible.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactCard/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FieldServices;
