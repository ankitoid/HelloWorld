import React from "react";
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
              Advanced Collaboration Technologies with Generative AI
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Advanced Collaboration Technologies, powered by Generative AI, are
              revolutionizing the way teams communicate and collaborate. These
              technologies leverage AI-driven systems to create intelligent,
              context-aware solutions that enhance productivity and
              connectivity. By integrating generative AI, organizations can
              automate routine tasks, generate insightful reports, and
              facilitate seamless interactions. This leads to more efficient
              workflows, improved decision-making, and a more connected team
              environment. From automating meeting summaries to providing
              real-time collaborative tools, generative AI is at the forefront
              of transforming team collaboration.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 lg:pl-8">
            <img
              className="w-full rounded-lg shadow-lg"
              src={GenA}
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>
      </div>

      {/* Generative AI Section */}
      <div className="bg-white text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-10 text-center text-black">
            Generative AI Creates Significant Business Value
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* New Experiences */}
            <div className="relative bg-[#161E2D] p-10 rounded-lg text-center flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700"></div>
              <img src={Experience} alt="New Experiences" className="mb-6" />
              <h2 className="text-xl font-bold mb-4 mt-10 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                NEW EXPERIENCES
              </h2>
              <p className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 bg-clip-text text-transparent">
                Create new innovative and engaging ways of interacting with your
                customers and employees.
              </p>
            </div>

            {/* Productivity */}
            <div className="relative bg-[#161E2D] p-10 rounded-lg text-center flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700"></div>
              <img src={Productivity} alt="Productivity" className="mb-6" />
              <h2 className="text-xl font-semibold mb-4 mt-10 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                PRODUCTIVITY
              </h2>
              <p className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 bg-clip-text text-transparent">
                Radically improve productivity across all lines of business. For
                example, Amazon Code Whisperer completed tasks 57% faster.
              </p>
            </div>

            {/* Insights */}
            <div className="relative bg-[#161E2D] p-10 rounded-lg text-center flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700"></div>
              <img src={Insights} alt="Insights" className="mb-6" />
              <h2 className="text-xl font-semibold mb-2 mt-4 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                INSIGHTS
              </h2>
              <p className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 bg-clip-text text-transparent mt-8">
                Extract insights and clear answers from all your corporate
                information, enabling faster and better decisions.
              </p>
            </div>

            {/* Creativity */}
            <div className="relative bg-[#161E2D] p-10 rounded-lg text-center flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700"></div>
              <img src={Creativity} alt="Creativity" className="mb-4" />
              <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                CREATIVITY
              </h2>
              <p className="bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200 bg-clip-text text-transparent ">
                Create new content and ideas, including conversations, stories,
                images, videos, and music.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col items-center justify-center py-12 px-6">
        <h1 className="text-center text-3xl font-bold mb-8">
          Generative AI enables new and improved use cases
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* New Generative AI Use Cases */}
          <div className="bg-[#1f2937] border border-cyan-500 rounded-lg p-6 flex flex-col items-center text-center">
            <FaCheckCircle className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-cyan-400 text-xl font-bold mb-4">
              New generative AI use cases
            </h3>
            <p className="text-white">
              Generative AI capabilities enable completely new use cases (e.g.,
              Content creation)
            </p>
          </div>

          {/* Improved AI Use Cases */}
          <div className="bg-[#1f2937] border border-orange-500 rounded-lg p-6 flex flex-col items-center text-center">
            <FaCheckCircle className="text-orange-400 text-4xl mb-4" />
            <h3 className="text-orange-400 text-xl font-bold mb-4">
              Improved AI use cases
            </h3>
            <p className="text-white">
              Combines traditional ML and deep learning with generative AI
              capabilities to enable improved AI use cases (e.g., Call
              transcript summarization)
            </p>
          </div>

          {/* High-Value Non-Generative AI Use Cases */}
          <div className="bg-[#1f2937] border border-pink-500 rounded-lg p-6 flex flex-col items-center text-center">
            <FaCheckCircle className="text-pink-400 text-4xl mb-4" />
            <h3 className="text-pink-400 text-xl font-bold mb-4">
              High-value non-generative AI use cases
            </h3>
            <p className="text-white">
              Traditional AI use cases that do not require nor benefit from
              generative AI capabilities (e.g., Condition monitoring)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#161E2D]">
        {/* Additional Information Section */}
        <div className="text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Enhance Customer Experience */}
            <div className="bg-[#161E2D] bg-opacity-60 p-10 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                Enhance Customer Experience
              </h2>
              <ul className="mb-6">
                <li className="mb-2">Chatbots</li>
                <li className="mb-2">Virtual Assistants</li>
                <li className="mb-2">Post-call Analytics</li>
                <li className="mb-2">Personalization</li>
                <li className="mb-2">Identity Verification</li>
              </ul>
            </div>

            {/* Boost Employee Productivity */}
            <div className="bg-[#161E2D] bg-opacity-60 p-10 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                Boost Employee Productivity
              </h2>
              <ul className="mb-6">
                <li className="mb-2">Conversational Search</li>
                <li className="mb-2">Agent Assist</li>
                <li className="mb-2">Content Creation</li>
                <li className="mb-2">Code Generation</li>
                <li className="mb-2">Text Summarization</li>
                <li className="mb-2">Sales Scripts</li>
              </ul>
            </div>

            {/* Creativity & Content Creation */}
            <div className="bg-[#161E2D] bg-opacity-60 p-10 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                Creativity & Content Creation
              </h2>
              <ul className="mb-6">
                <li className="mb-2">Conversational Design</li>
                <li className="mb-2">Image & Video Generation</li>
                <li className="mb-2">Content Moderation</li>
                <li className="mb-2">Text-to-Speech</li>
              </ul>
            </div>

            {/* Accelerate Decision Making */}
            <div className="bg-[#161E2D] bg-opacity-60 p-10 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-800 via-pink-300 to-blue-700 bg-clip-text text-transparent">
                Accelerate Decision Making
              </h2>
              <ul className="mb-6">
                <li className="mb-2">Demand Forecasting</li>
                <li className="mb-2">Financial Planning</li>
                <li className="mb-2">Predictive Maintenance</li>
                <li className="mb-2">Fraud Detection</li>
              </ul>
            </div>
          </div>
        </div>
        <ContactCard/>
        <Footer/>
      </div>
    
    </>
  );
};

export default GenAI;
