import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import companyImage from "../../Assets/imageAbout.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutImg from "../../Assets/About.png";
import About3 from "../../Assets/About3.mp4";
import CollebrationAbout from "../../Assets/CollegrationAbout.png";
import value from "../../Assets/value.png";
import Diversity from "../../Assets/Diversity.png";
import GlobalImpact from "../../Assets/GlobalImpact.png";
import ContactCard from "../Contact/ContactCard";

const About = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <Navbar />
      <div
        className="bg-blueCustomColor text-white min-h-screen flex items-center justify-center bg-cover bg-center mt-8"
        style={{ backgroundImage: `url(${companyImage})` }}
      >
        <div className="2xl:max-w-7xl w-full mx-auto text-left justify-center px-4">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-64 2xl:mb-96">
            Discover how the world works with <br></br>GlobalXperts
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center 2xl:mt-96 ">
            <button
              onClick={() => navigate("/Insights/Media-Library")} 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            >
              <svg
                className="inline-block mr-2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Watch Video
            </button>
            <button
              onClick={() => navigate("/Insights/CaseStudies")} 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              View Fact Sheet
              <svg
                className="inline-block ml-2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 17h8l-4-4-4 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blueCustomColor text-white flex items-center justify-center py-16">
        <div className="2xl:max-w-7xl text-center justify-center mt-20 2xl:mx-auto">
          <p className="text-lg sm:text-xl mb-8">
            We help organizations of every size, in every industry, put AI to
            work for people.
          </p>
        </div>
        <div className="w-full max-w-4xl mt-12 rounded-lg overflow-hidden px-4">
          <img
            className="w-full h-full object-cover rounded-md"
            src={AboutImg}
            alt="People in an office setting"
          />
        </div>
      </div>

      <div className="2xl:max-w-7xl 2xl:mx-auto w-full flex flex-col md:flex-row p-5 mt-10 gap-4">
        <div className="w-full rounded-lg">
          <video
            src={About3}
            className="h-full w-full object-cover rounded-md"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className="w-full mx-5 mt-5 md:mt-0">
          <h1 className="text-3xl sm:text-4xl text-center py-5 text-black font-bold">
            About GlobalXperts
          </h1>
          <p className="text-lg px-2 font-medium">
            Founded in 2005 and headquartered in Raleigh, North Carolina,
            GlobalXperts operates in three key areas: Professional Services,
            Technical Staffing, and Managed Services support...
          </p>
        </div>
      </div>

      <div className="2xl:max-w-7xl 2xl:mx-auto mt-10">
        <div className="bg-gray-100 py-16 px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Our Services
              </h2>
              <p className="text-lg text-gray-600">
                We provide cutting-edge Multi-Cloud, DevOps, AI-driven, and
                Networking solutions...
              </p>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/contact-us")} 
              >
                Contact
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={CollebrationAbout}
                alt="People talking"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="text-center mt-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-800">
                  100%
                </h3>
                <p className="text-gray-600">
                  of the Fortune 500® work with GlobalXperts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container 2xl:max-w-7xl 2xl:mx-auto mt-10 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold py-4 text-center">
          Our Commitments
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={value}
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
              alt="Values"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Values</h2>
            <p className="text-gray-600 text-base">
              Our values guide us to always do the right thing...
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={Diversity}
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
              alt="Diversity"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Diversity, Equity, and Inclusion
            </h2>
            <p className="text-gray-600 text-base">
              Building equity at home is the first step to global progress...
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={GlobalImpact}
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
              alt="Global Impact"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Global Impact
            </h2>
            <p className="text-gray-600 text-base">
              Through promoting a net-zero carbon environment...
            </p>
          </div>
        </div>
      </div>

      <ContactCard />
      <Footer />
    </>
  );
};

export default About;
