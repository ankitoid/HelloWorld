import React, { useRef } from "react";
import GenA from "../../Assets/genaii.png";
import Navbar from "../Navbar";
import Experience from "../../Assets/NewExp.png";
import Productivity from "../../Assets/Productivity.png";
import Insights from "../../Assets/insight.png";
import Creativity from "../../Assets/creativity.png";
import { FaCheckCircle } from "react-icons/fa";
import ContactCard from "../Contact/ContactCard";
import Footer from "../Footer";

const GenAI = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar Section */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Generative AI
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Generative AI transforms collaboration by automating tasks,
              generating insights, and enhancing team connectivity for efficient
              workflows and better decision-making.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={GenA}
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start lg:ml-9 2xl:ml-80 max-w-7xl mx-auto mt-8">
        <button
          onClick={handleContactUsClick}
          className="px-6 py-3 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor transition-colors duration-300"
        >
          Contact Us
        </button>
      </div>

      {/* Generative AI Section */}
      <div className="bg-white text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-10 text-center text-black">
            Generative AI Creates Significant Business Value
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* New Experiences */}
            <div className="relative bg-[#161E2D] p-6 rounded-lg text-center flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700"></div>
              <img src={Experience} alt="New Experiences" className="mb-6 h-20 mx-auto" />
              <h2 className="text-xl font-bold mb-4 mt-10 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                NEW EXPERIENCES
              </h2>
              <p className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 bg-clip-text text-transparent">
                Create innovative ways to interact with customers and employees.
              </p>
            </div>

            {/* Productivity */}
            <div className="relative bg-[#161E2D] p-6 rounded-lg text-center flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700"></div>
              <img src={Productivity} alt="Productivity" className="mb-6 h-20 mx-auto" />
              <h2 className="text-xl font-semibold mb-4 mt-10 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                PRODUCTIVITY
              </h2>
              <p className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 bg-clip-text text-transparent">
                Radically improve productivity across all lines of business.
              </p>
            </div>

            {/* Insights */}
            <div className="relative bg-[#161E2D] p-6 rounded-lg text-center flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700"></div>
              <img src={Insights} alt="Insights" className="mb-6 h-20 mx-auto" />
              <h2 className="text-xl font-semibold mb-2 mt-4 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                INSIGHTS
              </h2>
              <p className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 bg-clip-text text-transparent mt-8">
                Extract insights from corporate information for faster decisions.
              </p>
            </div>

            {/* Creativity */}
            <div className="relative bg-[#161E2D] p-6 rounded-lg text-center flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700"></div>
              <img src={Creativity} alt="Creativity" className="mb-4 h-20 mx-auto" />
              <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                CREATIVITY
              </h2>
              <p className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 bg-clip-text text-transparent">
                Create new content and ideas, including conversations and stories.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:max-w-7xl mx-auto bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-bold mb-8">
          Generative AI Enables New and Improved Use Cases
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* New Generative AI Use Cases */}
          <div className="bg-[#1f2937] border border-cyan-500 rounded-lg p-6 flex flex-col items-center text-center">
            <FaCheckCircle className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-cyan-400 text-xl font-bold mb-4">
              New Generative AI Use Cases
            </h3>
            <p className="text-white">
              Generative AI capabilities enable new use cases (e.g., Content creation)
            </p>
          </div>

          {/* Improved AI Use Cases */}
          <div className="bg-[#1f2937] border border-orange-500 rounded-lg p-6 flex flex-col items-center text-center">
            <FaCheckCircle className="text-orange-400 text-4xl mb-4" />
            <h3 className="text-orange-400 text-xl font-bold mb-4">
              Improved AI Use Cases
            </h3>
            <p className="text-white">
              Combines traditional ML and deep learning with generative AI for improved use cases.
            </p>
          </div>

          {/* High-Value Non-Generative AI Use Cases */}
          <div className="bg-[#1f2937] border border-pink-500 rounded-lg p-6 flex flex-col items-center text-center">
            <FaCheckCircle className="text-pink-400 text-4xl mb-4" />
            <h3 className="text-pink-400 text-xl font-bold mb-4">
              High-Value Non-Generative AI Use Cases
            </h3>
            <p className="text-white">
              Traditional AI use cases that remain high value (e.g., Predictive analytics)
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <ContactCard />
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default GenAI;
