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
              Small and medium businesses (SMBs) are rapidly adopting cloud
              computing to transform their IT operations, drive efficiency, and
              stay competitive in a digital-first world. Cloud solutions empower
              SMBs by providing access to scalable, flexible, and cost-effective
              IT resources that eliminate the need for substantial upfront
              investments in physical hardware and infrastructure. By leveraging
              cloud technology, SMBs can optimize their operations, reduce
              overhead costs, and easily scale their resources up or down to
              meet evolving business demands. This approach not only enhances
              agility but also ensures businesses can focus on innovation and
              growth rather than managing complex IT environments.
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
        <button
          onClick={handleContactUsClick}
          className="px-6 py-2 border-2 mt-16 2xl:ml-72  border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
        >
          Contact Us
        </button>
      </div>

      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
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
