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
import Footer from '../../Footer';

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
      <p className="text-gray-600 text-base">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Read More
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
              Plan, migrate, and track your applications seamlessly with AWS Migration Hub, the ultimate solution designed to streamline your journey to the cloud. AWS Migration Hub serves as a strategic command center, enabling organizations to efficiently move data center resources to the cloud while providing critical insights and guidance at every step.
            </p>
            <button
              onClick={handleContactUsClick}
              className="text-blue-500 font-medium hover:underline mt-4"
            >
              Contact Us
            </button>
          </div>
          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center">
            <img
              className="w-full max-w-sm lg:max-w-full rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>
      </div>

      {/* Cloud Data Migration Section */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Cloud Data Migration
        </h1>
        <p className="text-lg mb-8 text-center">
          Each gateway listed below is a VM that resides outside the cloud in a remote location. The Hypervisors supported are: KVM, VMware, AWS EC2 local, Microsoft Hypervisor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="AWS File Gateway"
            description="AWS File Gateway offers on-premises applications the ability to seamlessly access and store files in the cloud. This service presents a file system interface, where data is cached locally and asynchronously uploaded to Amazon Simple Storage Service (S3)."
            link="#"
            icon={faFileAlt}
          />
          <Card
            title="AWS Tape Gateway"
            description="AWS Tape Gateway provides a cloud-based solution to replace physical tapes used on-premises. It helps you archive data to the cloud while maintaining the same format as physical tapes, enabling seamless data backup and recovery."
            link="#"
            icon={faArchive}
          />
          <Card
            title="AWS Volume Gateway"
            description="AWS Volume Gateway presents cloud-backed iSCSI block storage volumes to your on-premises applications. It offers both cached and stored modes to optimize data access and backup, making it a flexible solution for your storage needs."
            link="#"
            icon={faDatabase}
          />
        </div>
      </div>

      {/* Offline Data Transfer Section */}
      <div className="bg-blueCustomColor text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Offline Data Transfer</h1>
        <p className="mb-6">
          Data Transfer service is used when migrating large amounts of data. The method that we use to collect information about the size of the data-set, calculate the WAN link data rate being used at the business location or data center, determine usable bandwidth to transfer information, and calculate the time to transfer into the cloud.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="AWS Snowball"
            description="AWS Snowball is a secure, rugged, and cost-effective appliance that accelerates moving terabytes to petabytes of data to AWS. It is a portable, rugged device that can be used in austere environments."
            link="#"
            icon={faCloudDownloadAlt}
          />
          <Card
            title="AWS Snowball Edge"
            description="AWS Snowball Edge brings powerful computing and storage to remote, disconnected, or austere environments, allowing data collection, processing, and storage closer to where it's generated."
            link="#"
            icon={faCogs}
          />
          <Card
            title="AWS Snowcone"
            description="AWS Snowcone is a small, rugged, and secure device offering edge computing, data storage, and data transfer on-the-go, designed to operate in austere environments with little or no connectivity."
            link="#"
            icon={faMobileAlt}
          />
          <Card
            title="AWS Snowmobile"
            description="AWS Snowmobile moves extremely large amounts of data to AWS. Transfer up to 100 PB per Snowmobile, a 45-foot-long ruggedized shipping container."
            link="#"
            icon={faTruck}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="bg-white py-12">
        <ContactCard />
      </div>
      <Footer/>
    </div>
  );
};

export default AWSMigration;
