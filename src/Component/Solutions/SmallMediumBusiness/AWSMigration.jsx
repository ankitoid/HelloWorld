import React, { useRef, useState } from "react";
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
import sm from "../../../Assets/awsMigration.webp";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

// Card Component
const Card = ({ title, description, details, icon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
          <FontAwesomeIcon icon={icon} className="text-blue-500" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-base mb-4">{description}</p>
      <p className="text-gray-500 text-base">{details}</p>{" "}
      {/* Display detailed content */}
    </div>
  );
};

// Main AWSMigration Component
const AWSMigration = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is AWS Migration Hub?",
      answer:
        "AWS Migration Hub is a central platform that helps streamline cloud migration by providing planning, tracking, and insights, allowing you to monitor the progress of your applications across various AWS and partner migration tools.",
    },
    {
      question: "What services are available for cloud data migration?",
      answer:
        "AWS offers multiple services for seamless data migration, including AWS File Gateway, AWS Tape Gateway, and AWS Volume Gateway, which facilitate the movement of on-premises data to AWS with minimal disruption.",
    },
    {
      question: "How does AWS File Gateway work?",
      answer:
        "AWS File Gateway enables on-premises applications to access and store files in AWS with local caching, providing a seamless file interface that integrates with cloud storage and maintains low-latency access for frequently used data.",
    },
    {
      question: "What is AWS Tape Gateway used for?",
      answer:
        "AWS Tape Gateway replaces physical tape backups with a cloud-based solution, allowing you to manage backups in AWS securely. It provides a virtual tape library interface, making it a cost-effective and scalable alternative to traditional tape systems.",
    },
    {
      question: "How does AWS Volume Gateway support on-premises applications?",
      answer:
        "AWS Volume Gateway offers cloud-backed storage volumes that can be mounted as local disks on on-premises applications. It uses Amazon S3 as a backing store, ensuring low-latency access to your data while offering scalability in the cloud.",
    },
    {
      question: "What offline data transfer options are available?",
      answer:
        "AWS provides offline data transfer options like AWS Snowball, Snowball Edge, Snowcone, and Snowmobile. These solutions enable secure migration of large data volumes to AWS without needing continuous network connectivity.",
    },
    {
      question: "What is AWS Snowball, and how does it work?",
      answer:
        "AWS Snowball is a rugged, portable data transport solution for transferring large data volumes (terabytes to petabytes) to and from AWS. It reduces transfer costs and time by providing a secure and reliable method for moving data.",
    },
    {
      question: "What features does AWS Snowball Edge offer?",
      answer:
        "AWS Snowball Edge includes both compute and storage capabilities, allowing edge computing in remote or disconnected environments. It can run AWS Lambda functions and store data locally before transferring it to the cloud.",
    },
    {
      question: "When should I use AWS Snowcone?",
      answer:
        "AWS Snowcone is ideal for small-scale data transfers in remote locations. It is compact, lightweight, and rugged, making it well-suited for securely migrating data to AWS from locations with limited connectivity.",
    },
    {
      question: "What is AWS Snowmobile used for?",
      answer:
        "AWS Snowmobile is designed for large-scale data migrations, enabling transfer of up to 100 petabytes of data to AWS. It is suitable for massive data migrations, significantly reducing transfer time compared to traditional methods.",
    },
  ];

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
          Explore cloud gateways for seamless data migration from on-premises to
          AWS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="AWS File Gateway"
            description="Access and store files in the cloud with local caching."
            details="AWS File Gateway allows you to seamlessly connect on-premises applications to cloud storage. By providing a file interface, you can access and store files directly in AWS while maintaining low-latency local caching for frequently accessed files."
            icon={faFileAlt}
          />
          <Card
            title="AWS Tape Gateway"
            description="Seamlessly replace physical tapes with cloud backups."
            details="With AWS Tape Gateway, you can transition from traditional tape backup systems to a more cost-effective and scalable cloud solution. This service allows you to securely store and manage backups directly in the cloud while providing a virtual tape library interface."
            icon={faArchive}
          />
          <Card
            title="AWS Volume Gateway"
            description="Cloud-backed storage for on-premises applications."
            details="AWS Volume Gateway provides block storage volumes that are backed by Amazon S3. It enables you to create storage volumes in the cloud that can be mounted as local disks on your on-premises applications, ensuring low-latency access to your data."
            icon={faDatabase}
          />
        </div>
      </div>

      {/* Offline Data Transfer Section */}
      <div className="bg-white text-black p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Offline Data Transfer
        </h1>
        <p className="mb-6 text-center">
          Securely migrate large amounts of data with AWS Snowball and
          Snowmobile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="AWS Snowball"
            description="Move terabytes to petabytes of data to AWS with rugged, portable devices."
            details="AWS Snowball is a secure data transport solution that enables you to transfer large amounts of data to and from AWS. With its rugged design, Snowball can be used in harsh environments and simplifies the data transfer process, reducing costs and time."
            icon={faCloudDownloadAlt}
          />
          <Card
            title="AWS Snowball Edge"
            description="Edge computing and storage in austere environments."
            details="AWS Snowball Edge combines compute and storage capabilities for edge environments. It allows you to run AWS Lambda functions and store data locally before transferring it to the cloud, making it ideal for use cases with intermittent connectivity."
            icon={faCogs}
          />
          <Card
            title="AWS Snowcone"
            description="Compact and rugged device for small-scale data transfers."
            details="AWS Snowcone is a small, lightweight, and portable data transfer device. It enables you to securely migrate data into and out of AWS, making it suitable for remote locations and small-scale data transfers."
            icon={faMobileAlt}
          />
          <Card
            title="AWS Snowmobile"
            description="Transfer up to 100 PB of data with this large-scale migration service."
            details="AWS Snowmobile is a secure data transfer service that allows you to move massive amounts of data (up to 100 PB) to AWS. It is ideal for large-scale migrations and can significantly reduce the time required for data transfers compared to traditional methods."
            icon={faTruck}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto container px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">FAQs</h1>
        <p className="text-lg mb-12">
          Dive into FAQs related to AWS Migration Services.
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

      {/* Contact Section */}
      <div ref={contactRef} className="bg-white py-12">
        <ContactCard />
      </div>
      <Footer />
    </div>
  );
};

export default AWSMigration;
