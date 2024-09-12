import React from "react";
import Navbar from "../../Navbar";
import ContactUs from "../../ContactUs"; // Add your ContactUs component
import Footer from "../../Footer"; // Add your Footer component
import sm from "../../../Assets/AI2.jpg";
import { FaDatabase, FaTachometerAlt, FaUniversity } from "react-icons/fa";
import { SiAmazon } from "react-icons/si"; // Ensure this is a valid icon import
import ContactCard from "../../Contact/ContactCard";

const TitanGx = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-20">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-8">
              Titan GX On-Site Storage
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Data storage is a cornerstone of modern business operations, and
              our cloud storage solutions are designed to meet diverse needs
              with unmatched flexibility and security. Our offerings include
              TrueNAS Scale, which supports hyperconverged storage that scales
              effortlessly both up and out. Enjoy seamless integration with
              Linux containers and VMs, and deploy as either a single node or a
              clustered setup. Designed for hybrid cloud environments, TrueNAS
              Scale utilizes OpenZFS, the most advanced and high-performing file
              system available today, ensuring robust performance and
              reliability.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-10">
            Use Cases
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Remote Backups
              </h3>
              <p className="text-gray-500">
                This technology is used to meet and exceed the requirements of
                unlimited off-site backups with life cycles enabled with a high
                degree of availability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Disaster Recovery
              </h3>
              <p className="text-gray-500">
                Ensures your data is backed up and accessible in case of
                disaster scenarios, allowing for a quick recovery of critical
                business information.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Data Assurance
              </h3>
              <p className="text-gray-500">
                Provides a robust solution for data integrity and validation to
                ensure that your backups are secure and can be restored when
                needed.
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-10 text-center">
            <p className="text-xl text-gray-500">
              This on-premise virtual server, when deployed, can place your
              different storage items onto remote Amazon Backup Services,
              including:
            </p>

            <ul className="mt-4 text-xl text-gray-500 list-disc list-inside">
              <li>File Gateway</li>
              <li>Storage Gateway</li>
              <li>Volume Gateway</li>
              <li>Tape Gateway</li>
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

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* TrueNAS Scale Basic */}
            <div className="text-center mt-4">
              <FaDatabase className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">
                TrueNAS Scale Basic
              </h3>
              <p className="text-gray-500">
                Simple file storage solution offers no hardware redundancy with
                AWS backup target in the cloud utilizing S3 Storage.
              </p>
            </div>

            {/* TrueNAS Scale Enhanced */}
            <div className="text-center mt-4">
              <FaTachometerAlt className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">
                TrueNAS Scale Enhanced
              </h3>
              <p className="text-gray-500">
                High availability (HA) object storage solution with redundant
                hardware - cloud backup.
              </p>
            </div>

            {/* TrueNAS Scale Ultra */}
            <div className="text-center mt-4">
              <FaUniversity className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">
                TrueNAS Scale Ultra
              </h3>
              <p className="text-gray-500">
                High availability (HA) object storage solution with redundant
                cross-connect and 10/100 Gig switching hardware - Cloud backup.
              </p>
            </div>

            {/* AWS File Gateway */}
            <div className="text-center mt-4">
              <SiAmazon className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">
                AWS File Gateway
              </h3>
              <p className="text-gray-500">
                Offers advanced features to provide more control over files
                being backed up.
              </p>
            </div>

            {/* AWS Volume Gateway */}
            <div className="text-center mt-4">
              <SiAmazon className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">
                AWS Volume Gateway
              </h3>
              <p className="text-gray-500">
                Works with Microsoft VSS or Linux Volumes. Part of the standard
                deployment for our Data Assurance Program.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <ContactCard/>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default TitanGx;
