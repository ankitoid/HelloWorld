import React, { useRef } from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import sm from "../../../Assets/AI2.jpg";
import { FaDatabase, FaTachometerAlt, FaUniversity } from "react-icons/fa";
import { SiAmazon } from "react-icons/si";

const TitanGx = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <Navbar />

      {/* Main Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-20">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-4">
              Titan GX On-Site Storage
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Our cloud solutions offer unmatched flexibility and security. 
              TrueNAS Scale supports hyperconverged storage that easily scales 
              and integrates with Linux containers and VMs in hybrid cloud 
              environments, using OpenZFS for reliable performance.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="Storage Solutions"
            />
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center lg:justify-start max-w-7xl mx-auto mt-8">
          <button
            onClick={handleContactUsClick}
            className="px-6 py-3 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-8">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "Remote Backups",
                description:
                  "Meet and exceed requirements for unlimited off-site backups with high availability.",
              },
              {
                title: "Disaster Recovery",
                description:
                  "Ensure your data is backed up and accessible for quick recovery in disaster scenarios.",
              },
              {
                title: "Data Assurance",
                description:
                  "Robust solution for data integrity and validation to secure and restore backups.",
              },
            ].map((useCase) => (
              <div key={useCase.title}>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-500">{useCase.description}</p>
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className="mt-10 text-center">
            <p className="text-xl text-gray-500">
              Deploy this virtual server to place your storage items on remote 
              Amazon Backup Services, including:
            </p>
            <ul className="mt-4 text-xl text-gray-500 list-disc list-inside">
              {["File Gateway", "Storage Gateway", "Volume Gateway", "Tape Gateway"].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Product Offerings Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-10">
            <span className="text-blue-600">Product Offerings</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <FaDatabase className="mx-auto text-5xl text-blue-500 mb-4" />,
                title: "TrueNAS Scale Basic",
                description:
                  "Simple file storage with no hardware redundancy and AWS backup in the cloud.",
              },
              {
                icon: <FaTachometerAlt className="mx-auto text-5xl text-blue-500 mb-4" />,
                title: "TrueNAS Scale Enhanced",
                description:
                  "High availability (HA) object storage solution with redundant hardware and cloud backup.",
              },
              {
                icon: <FaUniversity className="mx-auto text-5xl text-blue-500 mb-4" />,
                title: "TrueNAS Scale Ultra",
                description:
                  "HA object storage with redundant cross-connect and 10/100 Gig switching hardware - Cloud backup.",
              },
              {
                icon: <SiAmazon className="mx-auto text-5xl text-blue-500 mb-4" />,
                title: "AWS File Gateway",
                description:
                  "Advanced features to provide more control over backed-up files.",
              },
              {
                icon: <SiAmazon className="mx-auto text-5xl text-blue-500 mb-4" />,
                title: "AWS Volume Gateway",
                description:
                  "Works with Microsoft VSS or Linux Volumes, part of the Data Assurance Program.",
              },
            ].map(({ icon, title, description }) => (
              <div className="text-center mt-4" key={title}>
                {icon}
                <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
                <p className="text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <ContactCard />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default TitanGx;
