import React, { useRef, useState } from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import sm from "../../../Assets/On-site-Storage.png";
import { FaDatabase, FaTachometerAlt, FaUniversity } from "react-icons/fa";
import { SiAmazon } from "react-icons/si";

const TitanGx = () => {
  
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const faqData = [
    {
      question: "What is Titan GX On-Site Storage?",
      answer:
        "Titan GX On-Site Storage ensures your data is safe, secure, and always available with scalable cloud solutions tailored to your needs. It includes Hyperconverged Storage with options for single node or cluster deployments and hybrid cloud capabilities.",
    },
    {
      question: "What is the TrueNAS Scale storage solution?",
      answer:
        "TrueNAS Scale offers hyperconverged storage that scales up or out, integrates Linux containers & VMs, and uses Open ZFS for high-performance. It's ideal for hybrid cloud deployments and provides enterprise-level file systems for small to medium businesses.",
    },
    {
      question: "What is IX systems TrueNAS Enterprise?",
      answer:
        "IX systems' TrueNAS Enterprise provides hardware, software, and support tailored to SMBs. It fills the gap between commodity hardware and enterprise solutions with high availability, cost-effectiveness, and a range of support options.",
    },
    {
      question: "What support options are available for hardware?",
      answer:
        "Support levels include Bronze, Silver, and Gold. Bronze covers basic support during business hours. Silver offers 24/5 support for critical issues, and Gold provides 24/7 support for all critical business operations, with SLAs tailored to each level.",
    },
    {
      question: "What are the features of Amazon S3 Storage?",
      answer:
        "Amazon S3 provides a scalable object storage solution with built-in data durability, security, and compliance features. It supports easy management, integration with AWS services, and pay-as-you-go pricing. Perfect for diverse data storage needs.",
    },
    {
      question: "What is AWS File Gateway?",
      answer:
        "AWS File Gateway allows for advanced control over file backups to the cloud, offering a streamlined approach to cloud-based file storage and recovery.",
    },
    {
      question: "What is AWS Volume Gateway?",
      answer:
        "AWS Volume Gateway provides backup solutions for both Microsoft VSS and Linux volumes, serving as a key component in data assurance and disaster recovery programs.",
    },
    {
      question: "What use cases does Titan GX Storage support?",
      answer:
        "Titan GX supports remote backups, disaster recovery, and data assurance, providing robust storage solutions for on-premise and hybrid cloud environments.",
    },
    {
      question: "What are the product offerings for TrueNAS Scale?",
      answer:
        "TrueNAS Scale includes Basic, Enhanced, and Ultra versions. Basic offers simple file storage, Enhanced provides high availability with redundancy, and Ultra includes cross-connect hardware for robust HA storage solutions.",
    },
  ];
  
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
            <ul className="mt-4 text-xl text-gray-500 list-disc list-inside text-center">
              {[ "Storage Gateway","Volume Gateway", "Tape Gateway","File Gateway"].map(item => (
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
                <h3 className=" text-2xl font-bold text-black mb-2">{title}</h3>
                <p className="text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
        {/* Left Side Content */}
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Titan GX?</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over 120 countries supported
              with local technical resources.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Round-the-clock support for
              emergencies and planned maintenance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong>Avoid staffing overhead while
              accessing skilled IT professionals when and where you need them.
            </li>
          </ul>
          {/* Download Brochure Button */}
          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Titan+X+Brochure.pdf.pdf"
            download ="TitanGx.pdf"
            className="ml-8 mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        {/* Right Side Image */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5  ">
          {/* Embedded image */}
          <div className="relative">
            <img
              className="w-full aspect-video rounded-md shadow-lg"
              src={TitanGx}
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto container px-4 py-16">
            <h1 className="text-3xl font-bold mb-8">FAQs</h1>
            <p className="text-lg mb-12">
              Dive into FAQs related to Titan GX On-Site Storage.
            </p>
            <div className="flex mb-16">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                Contact Us
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                FAQs
                <span className="ml-2">→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {faqData.map((faq, index) => (
                <div key={index}>
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => toggleAnswer(index)}
                  >
                    {faq.question}
                  </h2>
                  {activeIndex === index && (
                    <p className="text-base text-gray-700 mb-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

      {/* Contact Us Section */}
      <div className="mt-8">
      <ContactCard />

      </div>

      {/* Footer Section */}
      <div className="mt-8">
      <Footer />
      </div>
    </div>
  );
};

export default TitanGx;
