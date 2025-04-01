import React from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaRocket, FaCogs } from "react-icons/fa";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
const AviationCloud = () => {
  return (
    <>
    <Navbar/>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Aviation in the Cloud
              </h1>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                GlobalXperts brings innovative IT expertise to the aviation
                sector, helping airlines and aviation companies to optimize
                operations and enhance passenger experiences. With deep
                experience in both on-premises infrastructure and cloud-based
                solutions, we provide the comprehensive support necessary to
                keep your critical systems operating at peak performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Aviation IT Solutions by GlobalXperts
        </h1>

        {/* Design and Implementation Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <FaCogs className="text-blue-500" /> Design & Implementation
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our team specializes in architecting, designing, implementing, and
            supporting complex IT systems, including airline crew management and
            tracking software. From requirements gathering and project
            management to software architecture and design, we partner with
            aviation organizations to deliver tailored solutions that meet the
            unique challenges of the industry.
          </p>
        </div>

        {/* Cloud Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-4 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <FaCloud className="text-blue-500" /> Cloud Services
          </h2>
          <p className="mt-4 text-gray-700">
            GlobalXperts offers expertise in cloud migration, helping airlines
            transition seamlessly to scalable, secure, and high-performance
            cloud environments. Our managed services solution delivers
            proactive, end-to-end IT support, ensuring 24/7 availability, rapid
            issue resolution, and optimal system efficiency.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>24/7 availability with proactive support.</li>
            <li>Rapid issue resolution and optimal system efficiency.</li>
            <li>High-performance computing with high availability.</li>
            <li>Rock-solid security features for strict compliance.</li>
          </ul>

          <p className="mt-4 text-gray-700">
            We understand that the aviation industry has plenty of compliance
            requirements, which vary by state and country. Thus, we can help you
            take advantage of these AWS benefits:
          </p>
          {/* AWS Benefits Section */}
          <div className="grid md:grid-cols-2 gap-8  mt-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                AWS Benefits
              </h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>
                  World’s widest network of cloud regions and edge locations.
                </li>
                <li>
                  Hybrid cloud capabilities with AWS Outposts and AWS Direct
                  Connect.
                </li>
                <li>
                  Meeting of data residency requirements with AWS Wavelength.
                </li>
              </ul>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                Compliance & Security
              </h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>
                  Strict compliance with global aviation security policies.
                </li>
                <li>End-to-end encryption and secure cloud transitions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="bg-blueCustomColor text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaRocket className="text-yellow-400" /> Innovation & Future
            Technologies
          </h2>
          <p className="mt-4 text-gray-300">
            Whether you need to modernize legacy systems, implement new
            technologies, leverage AI/ML to accelerate performance or maintain
            compliance with evolving industry regulations, GlobalXperts is your
            trusted IT partner. We understand the critical role technology plays
            in flight operations, crew scheduling, and passenger satisfaction.
            With a focus on reliability, innovation, and operational excellence,
            we help aviation businesses achieve their goals.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
            <li>
              Real-time monitoring, asset tracking, and passenger tracking.
            </li>
            <li>AI and machine learning solutions like virtual assistants.</li>
            <li>Predictive analytics to identify suspicious behavior.</li>
            <li>
              Data analytics solutions that can help identify issues and suggest
              fixes.
            </li>{" "}
            <li>Predictive maintenance and automated repair scheduling.</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default AviationCloud;
