import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faArchive,
  faDatabase,
  faCloudDownloadAlt,
  faCogs,
  faMobileAlt,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Navbar";
import sm from "../../../Assets/AI2.jpg";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

// Card Component
const Card = ({ title, description, link, icon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
          <FontAwesomeIcon icon={icon} className="text-blue-500" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-base mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Learn More
      </a>
    </div>
  );
};

// Main AWSMigration Component
const AWSMigration = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <Navbar />

      {/* Main Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-6">
              AWS Migration Services
            </h2>
            <p className="mt-3 text-lg text-gray-500 sm:mt-4">
              Streamline your cloud migration with AWS Migration Hub, offering
              seamless planning, tracking, and insights.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="Cloud migration illustration"
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-start max-w-7xl mx-auto mt-8">
          <button
            onClick={handleContactUsClick}
            className="px-6 py-3 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Cloud Data Migration Section */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Cloud Data Migration
        </h1>
        <p className="text-lg mb-8 text-center">
          Explore cloud gateways for seamless data migration from on-premises to AWS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="AWS File Gateway"
            description="Access and store files in the cloud with local caching."
            link="#"
            icon={faFileAlt}
          />
          <Card
            title="AWS Tape Gateway"
            description="Seamlessly replace physical tapes with cloud backups."
            link="#"
            icon={faArchive}
          />
          <Card
            title="AWS Volume Gateway"
            description="Cloud-backed storage for on-premises applications."
            link="#"
            icon={faDatabase}
          />
        </div>
      </div>

      {/* Offline Data Transfer Section */}
      <div className="bg-blueCustomColor text-white p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Offline Data Transfer</h1>
        <p className="mb-6 text-center">
          Securely migrate large amounts of data with AWS Snowball and Snowmobile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="AWS Snowball"
            description="Move terabytes to petabytes of data to AWS with rugged, portable devices."
            link="#"
            icon={faCloudDownloadAlt}
          />
          <Card
            title="AWS Snowball Edge"
            description="Edge computing and storage in austere environments."
            link="#"
            icon={faCogs}
          />
          <Card
            title="AWS Snowcone"
            description="Compact and rugged device for small-scale data transfers."
            link="#"
            icon={faMobileAlt}
          />
          <Card
            title="AWS Snowmobile"
            description="Transfer up to 100 PB of data with this large-scale migration service."
            link="#"
            icon={faTruck}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="bg-white py-12">
        <ContactCard />
      </div>
      <Footer />
    </div>
  );
};

export default AWSMigration;
