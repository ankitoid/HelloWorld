import React from "react";
import ciscoimg from "../../../Assets/cisco.jpg";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import certification1 from "../../../Assets/ciscoSecurity.png";
import certification2 from "../../../Assets/ciscoDATA.png";
import certification3 from "../../../Assets/ciscoLife.png";

const CiscoPartner = () => {
  return (
    <>
      <Navbar />

      {/* Main Container for Partner Information */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        {/* Two-column Layout for Image and Content */}
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Left Column: Text */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Cisco Meraki Partner Information
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              As a certified Cisco Meraki partner, GlobalXperts offers
              leading-edge cloud-managed IT solutions for networking, security,
              and mobility. Whether it's deploying secure SD-WAN, managing Wi-Fi
              networks, or ensuring robust cybersecurity, we provide
              comprehensive support and expertise to optimize your
              infrastructure.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={ciscoimg}
              alt="Cisco Meraki Partner"
            />
          </div>
        </div>
      </div>

      {/* Container for Certifications */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Our staff possess one or more of the following certifications:
        </h1>
        <p className="text-lg text-center text-gray-500 max-w-3xl mx-auto mb-10">
          Earning a Cisco certification demonstrates expertise in designing, 
          deploying, and managing enterprise network infrastructure solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Certification 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={certification1}
              alt="CCIE Emeritus"
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              CCIE Emeritus holders possess the certification for 10+ years, 
              demonstrating long-term expertise in networking solutions.
            </p>
          </div>

          {/* Certification 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={certification2}
              alt="CCIE Data Center"
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              CCIE Data Center holders specialize in designing and managing 
              data center infrastructure solutions.
            </p>
          </div>

          {/* Certification 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={certification3}
              alt="CCIE Security"
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              CCIE Security holders can architect and manage Cisco security 
              technologies using industry best practices.
            </p>
          </div>

          {/* Certification 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={certification3}
              alt="CCIE Enterprise"
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              CCIE Enterprise holders build and maintain complex enterprise 
              networks with expertise in virtualization, automation, and security.
            </p>
          </div>
        </div>
      </div>

      {/* GX Capabilities Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 space-y-12 py-16">
        <h2 className="text-4xl font-bold mb-8 text-black text-center">
          GX Capabilities
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-center">
          As a Cisco partner, GlobalXperts offers comprehensive services, including 
          configuration, maintenance, support, and troubleshooting of Cisco devices. 
          We also provide network patching and network security services.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700 text-center">
          We also offer services involving these industry solutions:
        </p>
        <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-2 text-left">
          <li>Edge Firewalls (MX Series)</li>
          <li>Switches</li>
          <li>Wi-Fi Solutions</li>
          <li>AI-assisted Cameras</li>
          <li>Cloud management from a single portal</li>
          <li>Contact center solutions</li>
          <li>Collaboration solutions</li>
        </ul>
      </div>

      {/* Contact Card and Footer */}
      <ContactCard />
      <Footer />
    </>
  );
};

export default CiscoPartner;
