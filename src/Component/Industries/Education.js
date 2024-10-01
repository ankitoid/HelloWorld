import React, { useState, useRef } from "react";
import edu from "../../Assets/edu.png";
import Navbar from "../Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import itEdu from "../../Assets/itedu.png";

const Education = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-gray-100 min-h-screen">
          <div className="p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
            {/* Main Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-8">
                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Education
                  </h2>
                  <p className="mt-3 text-lg sm:text-xl text-gray-500">
                    IT services enable cloud tools and virtual learning,
                    streamlining education and preparing students for the
                    digital age.
                  </p>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2">
                  <img
                    className="w-full rounded-lg shadow-lg object-cover"
                    src={edu}
                    alt="A classroom setting with students engaged in digital learning."
                  />
                </div>
              </div>
              <div className="mt-12 flex">
                <button
                  onClick={handleContactUsClick}
                  className="px-6 py-3 border-2 border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md text-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="px-4 sm:px-6 lg:px-8 mb-32">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Overview
            </h2>
            <p className="text-center mt-5 text-lg sm:text-xl text-gray-700 max-w-5xl mx-auto">
              IT services streamline education, improve outcomes, and create
              engaging learning experiences, preparing students for the digital
              age.
            </p>

            <div className="mt-5 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">
                  Our Education Solutions
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>
                    <strong>Digital Learning Platforms:</strong> Secure,
                    scalable platforms for online learning and content
                    management.
                  </li>
                  <li>
                    <strong>Network Infrastructure:</strong> Robust solutions to
                    enhance connectivity and collaboration.
                  </li>
                  <li>
                    <strong>Cybersecurity:</strong> Protect data and ensure
                    compliance with security standards.
                  </li>
                  <li>
                    <strong>Cloud Services:</strong> Migrate resources to the
                    cloud for flexibility and cost efficiency.
                  </li>
                  <li>
                    <strong>IT Support & Training:</strong> Ongoing support and
                    training for educators.
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center mt-10 text-lg sm:text-xl text-gray-700">
              Partner with GlobalXperts to revolutionize education with advanced
              IT solutions.
            </p>
          </div>

          {/* Customized Solutions Section */}
          <div className="bg-blueCustomColor p-6 sm:p-10 lg:p-12 mt-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-8">
              {/* Text Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Customized IT Solutions for Education
                </h2>
                <p className="mt-3 text-lg sm:text-xl text-gray-300">
                  We offer tailored IT solutions to meet the challenges of
                  education, from infrastructure to cybersecurity, ensuring a
                  safe and efficient learning environment.
                </p>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2">
                <img
                  className="w-full rounded-lg shadow-lg object-cover"
                  src={itEdu}
                  alt="A secure and connected digital learning environment."
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div ref={contactRef}>
            <ContactCard />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Education;
