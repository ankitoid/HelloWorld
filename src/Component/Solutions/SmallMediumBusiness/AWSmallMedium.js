import React, { useRef } from "react";
import Navbar from "../../Navbar";
import sm from "../../../Assets/AI2.jpg";
import ContactCard from "../../Contact/ContactCard";

const AWSmallMedium = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const solutions = [
    {
      title: "GlobalXperts - CollabHub",
      description: "Cloud Storage file share",
      icon: "🔗",
    },
    {
      title: "GlobalXperts - VirtualWorkx",
      description: "Virtual Desktop or DaaS",
      icon: "💻",
    },
    {
      title: "GX Customer Connect",
      description: "Call Center",
      icon: "📞",
    },
    {
      title: "GlobalXperts WebMail",
      description: "Exchange like email service",
      icon: "✉️",
    },
    {
      title: "Titan GX Simple Storage",
      description: "Backed by Amazon S3",
      icon: "🗂️",
    },
    {
      title: "GlobalXperts - Converse",
      description: "Workplace Chat with video",
      icon: "💬",
    },
    {
      title: "GlobalXperts - CloudDirectory",
      description: "Managed Microsoft Active Directory",
      icon: "🗃️",
    },
    {
      title: "GlobalXperts - IdentityOne",
      description: "AWS Single Sign-On",
      icon: "🔑",
    },
  ];

  return (
    <div className="w-full">
      <Navbar />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-8">
              Small and Medium Business
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              SMBs are adopting cloud computing to enhance efficiency and
              scalability, reducing costs while focusing on innovation and
              growth.
            </p>
          </div>

          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="A man working on a laptop in a server room."
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

      <div className="max-w-7xl mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Solutions for the Business Office
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
            >
              <div className="text-3xl">{solution.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {solution.title}
                </h3>
                <p className="text-gray-500">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={contactRef}>
        <ContactCard />
      </div>
    </div>
  );
};

export default AWSmallMedium;
