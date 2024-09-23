import React from "react";
import AWS1 from "../../../Assets/awspartner1.png";
import AWS2 from "../../../Assets/awspartner2.png";
import AWSCloud from "../../../Assets/aws.jpg";
import c1 from "../../../Assets/certi1.png";
import c2 from "../../../Assets/certi2.png";
import c3 from "../../../Assets/certi3.png";
import c4 from "../../../Assets/certi4.png";
import c5 from "../../../Assets/certi5.png";
import c6 from "../../../Assets/certi6.png";
import trunas from "../../../Assets/trnas.png";
import veeam from "../../../Assets/veeam.webp";
import Navbar from "../../Navbar";

import spTier from "../../../Assets/spTier.png";
import ContactCard from "../../Contact/ContactCard";
const AWSPartner = () => {
  const certifications = [
    {
      title: "Solutions Architect",
      level: "Professional",
      description:
        "Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals. They demonstrated the ability to balance best practices...",
      imageUrl: c1,
    },
    {
      title: "Solutions Architect",
      level: "Associate",
      description:
        "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions...",
      imageUrl: c2, // Add the correct image path
    },
    {
      title: "Security",
      level: "Specialty",
      description:
        "Earners of this certification have an in-depth understanding of AWS security services and the shared responsibility model (between AWS and the customer)...",
      imageUrl: c3,
    },
    {
      title: "Solutions Architect",
      level: "Professional",
      description:
        "Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals. They demonstrated the ability to balance best practices...",
      imageUrl: c4,
    },
    {
      title: "Solutions Architect",
      level: "Associate",
      description:
        "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions...",
      imageUrl: c5, // Add the correct image path
    },
    {
      title: "Security",
      level: "Specialty",
      description:
        "Earners of this certification have an in-depth understanding of AWS security services and the shared responsibility model (between AWS and the customer)...",
      imageUrl: c6,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mt-20 px-4">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Amazon Partner Information
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            GlobalXperts leverages its extensive cloud expertise to support
            clients worldwide at every stage of their cloud journey. From
            consulting and migration to 24/7 managed services, DevOps, and cost
            optimization, we provide comprehensive solutions tailored to your
            unique needs.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <img
            className="w-full rounded-lg"
            src={AWSCloud}
            alt="A man working on a laptop in a server room."
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            {/* You can add additional content here if needed */}
          </div>
        </div>
      </div>
      <div className="bg-white py-12 mt-8 ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mt-20">
              Staff Members - AWS Technology Competencies
            </h2>
            <p className="text-gray-600">
              AWS Technology Competencies are a way for AWS Partners to
              demonstrate their deep technical expertise and proven customer
              success in specialized areas across industry, use case, and
              workload. AWS Partners are vetted and validated against a high bar
              to achieve the AWS Competency designation.
            </p>
          </div>

          {/* Badge Section */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Block Storage Badge */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-white rounded-lg flex items-center justify-center mb-4">
                {/* Placeholder for image (can replace with actual image src) */}
                <img
                  src={AWS1}
                  alt="block-storage-1"
                  className="object-contain max-h-40 w-auto"
                />
              </div>
              <h3 className="text-gray-800 font-bold mb-2">block-storage-1</h3>
              <p className="text-gray-500">
                Earners of this badge have developed the technical skills and
                knowledge of AWS storage services with a focus on Amazon Elastic
                Block Store (EBS).
              </p>
            </div>

            {/* Data Protection Badge */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-white rounded-lg flex items-center justify-center mb-4">
                {/* Placeholder for image */}
                <img
                  src={AWS2}
                  alt="AWS Technology Badge"
                  className="object-contain max-h-48 w-auto"
                />
              </div>
              <h3 className="text-gray-800 font-bold mb-2">
                AWS Data Protection Badge
              </h3>
              <p className="text-gray-500">
                Earners of this badge have developed technical skills and
                knowledge of AWS storage services with a focus on data
                protection and disaster recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center mb-2">
        Staff Members - AWS Certifications
      </h2>
      <p className="text-center text-gray-600 mb-10">
        AWS Architect certification is to demonstrate your skills and knowledge
        in designing, deploying, and managing cloud solutions on AWS.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={cert.imageUrl}
              alt={`${cert.title} ${cert.level}`}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2">
              {cert.title} - {cert.level}
            </h3>
            <p className="text-gray-600 text-center">{cert.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-center mb-8 mt-8 ">
        Staff Members - AWS Certifications
      </h2>
      <div></div>
      <div className=" max-w-7xl mx-auto flex items-center space-x-2 mb-8">
        <h2 className=" text-start  ml-10 text-3xl font-bold">
          AWS Storage Partners
        </h2>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Veeam Partner */}
        <div className="max-w-7xl mx-auto flex-col items-center">
          <img src={veeam} alt="Veeam Logo" className="w-48 mb-4" />
          <p className="text-center">
            <strong>Veeam is the #1 Market Leader</strong> used by:
          </p>
          <ul className="list-disc list-inside">
            <li>81 percent of Fortune 500 companies</li>
            <li>72 percent of the Global 2000</li>
          </ul>
        </div>

        {/* TrueNAS Partner */}
        <div className="flex flex-col items-center">
          <img src={trunas} alt="TrueNAS Logo" className="w-48 mb-4" />
          <p className="text-center">
            <strong>IX Systems – TrueNAS Enterprise</strong> software/hardware
            and services are a good fit for small and medium businesses. They
            help fill the gap between commodity hardware and enterprise
            solutions. Their support offerings and high availability deployments
            and attractive price point make it a viable option for small and
            medium businesses when on-site storage is an operational
            requirement.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center">
        {/* Partner Status Heading */}
        <div className="font-bold text-3xl ml-0 md:ml-4 flex flex-col justify-center">
          <h1 className="text-left">Partner Status</h1>
        </div>

        {/* Partner Image */}
        <div className="flex flex-col items-start w-full h-full">
          <img
            src={spTier}
            alt="Partner Logo"
            className="w-full h-auto max-w-4xl" // Full width, maintain aspect ratio
          />
        </div>
      </div>

      {/* capabilities */}
      <h2 className=" max-w-7xl mx-auto text-4xl text-center mt-10   font-bold mb-8 text-black">
        GX Capabilities
      </h2>

      {/* Capability Sections */}
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 space-y-12 py-10">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-start">
          <div className="w-full lg:max-w-3xl text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2">AWS Cloud Solutions</h3>
            <p className="text-gray-700">
              We offer a variety of AWS solutions for seamless migration and
              efficient management. Explore more on our Cloud Space page.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-start">
          <div className="w-full lg:max-w-3xl text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2">AWS Migration Services</h3>
            <p className="text-gray-700">
              Our migration services ensure smooth transitions with minimal
              disruption, optimizing cost and performance.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-start">
          <div className="w-full lg:max-w-3xl text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2">AWS Optimization</h3>
            <p className="text-gray-700 mb-10">
              Maximize AWS performance and cost efficiency with our tailored
              optimization services.
            </p>
          </div>
        </div>
      </div>

      <ContactCard />
    </>
  );
};

export default AWSPartner;
