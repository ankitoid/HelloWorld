import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import c1 from "../../Assets/audit.png";
import c2 from "../../Assets/awsfunction.png";
import c3 from "../../Assets/experties.png";
import data1 from "../../Assets/cybertop.png";
import v1 from "../../Assets/CYBERVID.mp4";
import { Link } from "react-router-dom";
function DataCenterDesign() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const nbsp = (count) => Array(count).fill("\u00A0").join("");

  return (
    <div>
      <div className=" w-full  h-screen">
        <div className=" w-full">
          <Navbar />
        </div>
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-14">
          <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-5">
                Data Center Design/Build
              </h2>
              <p className=" mt-8 text-xl text-gray-500 ">
                At GlobalXperts, we design and build state-of-the-art data
                centers tailored to your business, delivering on-time,
                within-budget projects with precision. Our customized network
                architectures, advanced security, and ongoing support ensure
                seamless operations for your business.
              </p>
            </div>
            {/* Image Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
              <img
                className="w-full rounded-lg"
                src={data1}
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
          </div>

          <div className="w-full px-4">
            <h2 className="text-4xl font-bold text-center mt-28">Overview</h2>
            <p className="text-center mt-5 text-gray-700 text-xl">
              GlobalXperts Enterprise Solutions offers comprehensive data center
              design and build services through a team of skilled professionals,
              including Program Managers, Project Managers, Network Architects,
              Security Architects, Network Deployment Engineers, and Training
              Resources.
            </p>
            <div className="mt-3 max-w-4xl mx-auto">
              <div className="bg-gray-100 p-5 ">
                <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
                <ul className="list-disc list-inside space-y-7 ">
                  <li>
                    <strong>Program Managers:</strong> Handle large-scale
                    projects, ensuring timely and budget-friendly delivery while
                    managing risks.
                  </li>

                  <li>
                    <strong>Network Architects:</strong> Design scalable and
                    efficient network infrastructure tailored to business needs.
                  </li>

                  <li>
                    <strong>Network Deployment Engineers:</strong> Deploy and
                    maintain network equipment, ensuring smooth operation and
                    security.
                  </li>
                  <li>
                    <strong>Training Resources:</strong> Provide training to IT
                    staff, keeping them updated with current technologies and
                    best practices.
                  </li>
                  <li>
                    <strong>Security Architects:</strong> Implement security
                    measures and ensure compliance with the latest standards to
                    protect {nbsp(40)} against cyber threats.
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-10 text-gray-700 text-xl">
              GlobalXperts is dedicated to high-quality service, timely project
              completion, and meeting client specifications. Contact them to
              learn more about their data center solutions.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap justify-center gap-14  mt-10 px-4">
              {/* Box 1 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c1}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-bold bg-blueCustomColor bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor ">
                        Audit and Compliance
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2  text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-5">
                        Comprehensive Audit and Compliance Services" entails
                        thorough evaluation of adherence to regulations and
                        standards, including financial audits, internal control
                        assessments, and legal compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c2}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold bg-blueCustomColor bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor ">
                        Security Measures
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        "Proactive Security Measures" focus on preventing
                        security threats through anticipatory actions and
                        continuous monitoring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-bold bg-blueCustomColor bg-opacity-40">
                      <p className="w-full text-center font-semibold bg-blueCustomColor">
                        Expertise and Experience
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Business Management using ConnectWise to streamline
                        operations and improve efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-blueCustomColor p-8 mt-28">
            <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-5">
                <h2 className="text-2xl font-bold text-white sm:text-4xl">
                  Data Center Design and Build
                </h2>
                <p className="mt-3 text-lg text-gray-300 sm:mt-4">
                  Data Center Design and Build involves creating specialized
                  facilities for managing IT infrastructure, including servers,
                  storage, and networking equipment. The process includes:
                </p>
                <ul className="mt-3 text-lg text-gray-300 sm:mt-4 list-disc list-inside pl-6">
                  <li>
                    <strong>Planning:</strong> Assessing needs, capacity, and
                    requirements.
                  </li>
                  <li>
                    <strong>Design:</strong> Creating a blueprint for layout,
                    cooling, power, and network systems.
                  </li>
                  <li>
                    <strong>Site Preparation:</strong> Selecting and preparing
                    the location.
                  </li>
                  <li>
                    <strong>Construction:</strong> Building the facility and
                    installing systems.
                  </li>
                  <li>
                    <strong>Integration:</strong> Configuring and testing
                    equipment.
                  </li>
                  <li>
                    <strong>Commissioning:</strong> Finalizing and handing over
                    the facility.
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
                <video
                  src={v1}
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

          <div className="container mx-auto px-4 py-16">
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
                    How can we ensure a data center is scalable for future
                    growth?
                  </h2>
                  {activeQuestion === 0 && (
                    <p className="text-lg mb-4">
                      We design modular data centers that allow for incremental
                      expansion. This approach lets you add capacity as your
                      business grows without overhauling the entire facility. By
                      planning for scalable power and cooling infrastructure, we
                      ensure your data center can easily handle future demands
                      while minimizing costs and disruptions.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(1)}
                  >
                    What is the most effective way to maintain uptime and
                    reliability in a data center?
                  </h2>
                  {activeQuestion === 1 && (
                    <p className="text-lg mb-4">
                      Our team designs data centers with redundancy in critical
                      systems, including power, cooling, and networking. We
                      implement N+1, 2N, or 2N+1 configurations based on your
                      uptime requirements, ensuring that if one component fails,
                      another is available to take over seamlessly, minimizing
                      downtime and maintaining operational continuity.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(2)}
                  >
                    How can energy efficiency be optimized in data center
                    design?
                  </h2>
                  {activeQuestion === 2 && (
                    <p className="text-lg mb-4">
                      We integrate energy-efficient technologies like hot/cold
                      aisle containment, liquid cooling, and free cooling
                      methods to reduce energy consumption. Additionally, our
                      designs use advanced monitoring systems to optimize energy
                      use, improve Power Usage Effectiveness (PUE), and lower
                      operational costs while meeting sustainability goals.
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
                    What are the key considerations for ensuring physical and
                    cyber security in a data center?
                  </h2>
                  {activeQuestion === 3 && (
                    <p className="text-lg mb-4">
                      We implement comprehensive security solutions including
                      multi-layered physical security with biometric access
                      control, surveillance, and secured access zones. On the
                      cyber front, we deploy advanced firewalls, encryption, and
                      DDoS protection to safeguard against external threats. Our
                      monitoring and response systems ensure swift
                      identification and mitigation of any breaches.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(4)}
                  >
                    How can data center cooling solutions be optimized for
                    different climates?
                  </h2>
                  {activeQuestion === 4 && (
                    <p className="text-lg mb-4">
                      We offer tailored cooling solutions based on the climate
                      and location of your data center. For cooler regions, we
                      implement free air cooling, reducing energy costs. In
                      warmer areas, we use advanced liquid cooling systems or
                      efficient CRAC units. Our approach ensures optimal
                      temperature management while minimizing environmental
                      impact and operational costs.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(5)}
                  >
                    What are the benefits of a modular data center design?
                  </h2>
                  {activeQuestion === 5 && (
                    <p className="text-lg mb-4">
                      A modular data center design allows for quick deployment
                      and scalability. We provide pre-fabricated, plug-and-play
                      modules that can be easily expanded as your needs grow.
                      This reduces upfront costs, shortens build times, and
                      offers the flexibility to meet your business’s evolving
                      requirements without compromising performance or security.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DataCenterDesign;
