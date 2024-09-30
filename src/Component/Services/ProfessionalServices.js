import React from "react";
import Navbar from "../Navbar";
import { useState } from "react";

import Footer from "../Footer";
import Professional from "../../Assets/Professional.mp4";
import DataCenterMigration from "../../Assets/DataCenterMigration.mp4";
import Expertise from "../../Assets/Experts.jpg";
import CustomizedSolutions from "../../Assets/CustomizedSolutions.png";
import ReducedDowntimeRisk from "../../Assets/ReducedDowntimeRisk.jpg";
import FasterTimeValue from "../../Assets/FasterTimeValue.png";
import CostEffectiveSolutions from "../../Assets/CostEffectiveSolutions.webp";
import OngoingSupport from "../../Assets/OngoingSupport.avif";
import SiteSurveys from "../../Assets/SiteSurveys.mp4";
import TechnicalStaffAugmentation from "../../Assets/TechnicalStaffAugmentation.mp4";
import Network from "../../Assets/Network.mp4";
import ProfessionalF from "../../Assets/ProfessionalF.mp4";
import { Link } from "react-router-dom";

const ProfessionalServices = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const cards = [
    {
      title: "Collaboration Technologies Design/Build",
      description:
        "Enhance teamwork with innovative IT solutions. Our services improve communication and collaboration within your business.",
    },
    {
      title: "Cyber Security Practice",
      description:
        "Safeguard your assets with effective security management. Our defense team protects your business from cyber threats.",
    },
    {
      title: "Network Consulting",
      description:
        "Empower your network for success. Our skilled professionals provide comprehensive consulting and design services.",
    },
    {
      title: "Professional Services",
      description:
        "Connect with us! Fill out the form below or call +1 919-342-5482 for expert assistance.",
    },
    {
      title: "Project and Program Management",
      description:
        "Partner with us for reliable project and program management, ensuring efficiency and success.",
    },
    {
      title: "Site Surveys | Data Center | Wireless",
      description:
        "Trust our experienced team for professional site surveys that meet your business needs.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between  mt-16">
        {/* Text Section */}
        <div className="flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center mt-32">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Our Professional Services offer cutting-edge IT solutions to enhance
            operations, improve efficiency, and drive growth. We tailor our
            innovative services to meet your unique needs, ensuring your
            business thrives in a competitive landscape.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative mt-16 2xl:mt-10 rounded-md 2xl:rounded-md mb-10 lg:mt-0 lg:w-1/2 ">
          <video
            src={Professional}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-center items-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg border border-greenCustomColor transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(0,150,255,0.7)]  duration-300 ease-in-out flex flex-col justify-between"
            >
              <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 mt-auto flex justify-center">
                <button className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center  justify-between mt-32 pb-10 ">
        {/* Video Section */}
        <div className="relative  lg:mt-0 lg:w-1/2 px-5 rounded-md">
          <video
            src={DataCenterMigration}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-4">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Data Center Migration
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            Simplify your data center management with our cloud migration
            solutions. We provide flexibility, scalability, and security through
            partnerships with industry leaders like Cisco and Arista. Our expert
            team will guide you, reducing costs and boosting efficiency so you
            can focus on your core business. Contact us today to learn more!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Value Proposition
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The value proposition for using GlobalXperts for data center
          migrations, Cisco, Arista, and hybrid cloud is as follows:
        </p>

        {/* Boxes Section */}
        <div className="flex flex-wrap justify-center gap-14 px-4">
          {/* Box 1 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={Expertise}
                  alt="Service Image"
                  className="w-full h-full object-cover"
                />
                <div className="bg-blueCustomColor  flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                  <p className="w-full text-center bg-blueCustomColor">
                    Expertise and experience
                  </p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-10 text-gray-300">
                  <p className="text-lg py-2 text-gray-200 mt-10">
                    GlobalXperts boasts a team of experts specializing in data
                    center migrations and cloud computing. With deep knowledge
                    of the latest technologies and best practices, we ensure
                    seamless and successful transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={CustomizedSolutions}
                  alt="Service Image"
                  className="w-full h-full object-cover"
                />
                <div className="bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                  <p className="w-full text-center bg-blueCustomColor">
                    Customized solutions
                  </p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-10 text-gray-300">
                  <p className="text-lg py-2 text-gray-200 mt-10">
                    GlobalXperts partners with clients to tailor solutions that
                    fit their unique business needs and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={ReducedDowntimeRisk}
                  className="h-full w-full object-cover"
                />
                <div className=" bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                  <p className="w-full text-center bg-blueCustomColor">
                    Reduced downtime, risk
                  </p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-10 text-gray-300">
                  <p className="text-lg py-2 text-gray-200 mt-10">
                    GlobalXperts employs proven methods and advanced tools to
                    minimize downtime and risk, ensuring smooth and
                    uninterrupted business operations during migration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[225px] bg-transparent mt-10 cursor-pointer group perspective  ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={FasterTimeValue}
                  alt="Service Image"
                  className="w-full h-full object-cover"
                />
                <div className="bg-blueCustomColor  flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                  <p className="w-full text-center bg-blueCustomColor">
                    Faster time-to-value
                  </p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-10 text-gray-300">
                  <p className="text-lg py-2 text-gray-200 mt-10">
                    GlobalXperts delivers data center migrations and cloud
                    deployments faster than traditional methods, enabling
                    clients to benefit from their new infrastructure sooner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-[300px] h-[225px] bg-transparent mt-10 cursor-pointer group perspective  ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={CostEffectiveSolutions}
                  alt="Service Image"
                  className="w-full h-full object-cover"
                />
                <div className="bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                  <p className="w-full text-center bg-blueCustomColor">
                    Cost-effective solutions
                  </p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-10 text-gray-300">
                  <p className="text-lg py-2 text-gray-200 mt-10">
                    GlobalXperts offers cost-effective solutions to optimize IT
                    infrastructure, cut costs, and boost operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-[300px] h-[225px] bg-transparent mt-10 cursor-pointer group perspective  ">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={OngoingSupport}
                  className="h-full w-full object-cover"
                />
                <div className=" bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                  <p className="w-full text-center bg-blueCustomColor">
                    Ongoing support
                  </p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-10 text-gray-300">
                  <p className="text-lg py-2 text-gray-200 mt-10">
                    GlobalXperts offers ongoing support to keep clients’ IT
                    infrastructure up-to-date, secure, and aligned with the
                    latest technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <div className="h-1 bg-blueCustomColor relative overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
        </div>
      </div>

      {/* Boxes Section */}
      <div className="max-w-7xl flex flex-col lg:flex-row items-center mx-auto justify-between mt-32 md:mt-20 pb-10">
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
          <video
            src={SiteSurveys}
            className="h-full w-full object-cover rounded-lg" // Added rounded-lg here
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
        </div>
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Site Surveys | Data Center | Wireless
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Need expert site surveys? GlobalXperts offers specialized services
            for pre-data center moves and wireless technologies. Our skilled
            team provides detailed reports to ensure smooth transitions and
            optimized networks. Contact us today!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-20 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Value Proposition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 bg-white">
          <p className="text-lg text-gray-600 border p-6 shadow-xl bg-grayCustomColor rounded-lg transition duration-300 hover:shadow-2xl">
            Our site surveys provide expert insights essential for success. Our
            skilled professionals focus on pre-data center moves and wireless
            technologies to ensure precision and attention to detail.
          </p>
          <p className="text-lg text-gray-600 border p-6 shadow-xl bg-grayCustomColor rounded-lg transition duration-300 hover:shadow-2xl">
            Expect a seamless relocation with our pre-data center move surveys.
            We identify potential issues and provide a detailed report for a
            smooth transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
          <p className="text-lg text-gray-600 border p-6 shadow-xl bg-grayCustomColor rounded-lg transition duration-300 hover:shadow-2xl">
            Our wireless site surveys assist in designing and optimizing your
            network. We identify optimal access point locations and assess
            signal strength for effective coverage.
          </p>
          <p className="text-lg text-gray-600 border p-6 shadow-xl bg-grayCustomColor rounded-lg transition duration-300 hover:shadow-2xl">
            Enjoy peace of mind knowing experienced professionals manage your
            project while you focus on your business.
          </p>
        </div>
      </div>

      <div className="mt-28">
        <div className="h-1 bg-blueCustomColor relative overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="max-w-7xl mx-auto mt-20">
          <div className="max-w-7xl flex flex-col lg:flex-row items-center mx-5 justify-between pb-10">
            {/* Text Section for Technical Staff Augmentation */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Technical Staff Augmentation
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Elevate your business with our staff augmentation program. We
                provide top-tier Enterprise Network Architects, Cloud
                Architects, and Application Developers, allowing you to focus on
                your goals while we handle the rest. Contact us today to learn
                more!
              </p>
            </div>
            {/* Video Section for Technical Staff Augmentation */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
              <video
                src={TechnicalStaffAugmentation}
                className="h-full w-full object-cover rounded-lg"
                muted
                autoPlay
                loop
                playsInline
              ></video>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
          </div>

          <div className=" mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10">
            <p className="text-lg text-gray-600 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
              Our staff augmentation program offers a cost-effective way to
              quickly expand your IT team with skilled professionals. Enhance
              your IT environment, streamline operations, and accelerate growth
              with our flexible solutions.
            </p>
            <p className="text-lg text-gray-600 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
              We integrate top-tier professionals with your team, offering
              flexible scaling without the costs and risks of traditional
              hiring. Our rigorous screening process ensures high-quality talent
              to meet your specific needs.
            </p>
            <p className="text-lg text-gray-600 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
              Quickly scale your IT team and access skilled experts while we
              manage complex IT needs. Focus on core business functions and
              enjoy flexibility and control over your workforce.
            </p>
            <p className="text-lg text-gray-600 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
              Our professional services provide a turnkey solution for
              organizations seeking to augment their IT staff with highly
              skilled professionals, allowing you to achieve your strategic
              objectives faster and with confidence.
            </p>
          </div>
        </div>
        <div className="mt-28">
          <div className="h-1 bg-blueCustomColor relative overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
          </div>
        </div>
        <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row items-center  justify-between mt-32 pb-10">
          {/* Video Section for Network Consulting */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
            <video
              src={Network}
              className="h-full w-full object-cover rounded-lg"
              muted
              autoPlay
              loop
              playsInline
            ></video>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
          {/* Text Section for Network Consulting */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Network Consulting
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Welcome to GlobalXperts' network consulting services! Our expert
              team provides tailored solutions to optimize your network
              infrastructure. We analyze your setup, design a customized network
              for enhanced performance and security, and offer ongoing support
              to meet your evolving needs. Contact us to elevate your network
              and achieve your business goals!
            </p>
          </div>
        </div>

        <div className="  mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Value Proposition
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  <p className="text-lg text-gray-600 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
    GlobalXperts provides network consulting and design solutions to build or optimize your infrastructure. Our value proposition includes:
  </p>
  <p className="text-lg text-gray-600 mb-8 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
    Customized Solutions – Tailored designs focusing on performance, cost reduction, and enhanced security.
  </p>
  <p className="text-lg text-gray-600 mb-8 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
    Expertise – Experienced consultants leveraging best practices and advanced technologies for reliable and secure networks.
  </p>
  <p className="text-lg text-gray-600 mb-8 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
    Ongoing Support – Continuous assistance to maintain and optimize your network.
  </p>
  <p className="text-lg text-gray-600 mb-8 border p-5 shadow-xl bg-grayCustomColor rounded-lg">
    Cost-Effective – Efficient solutions that don’t compromise performance or security.
  </p>
</div>

      </div>

      {/* Boxes Section */}
      <div className="bg-blueCustomColor p-10 mt-20 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Professional Services
            </h2>
            <div className="security-services mt-2">
              <p className="text-gray-300">
                Our Professional Services offer a comprehensive range of
                solutions designed to support and enhance your business
                operations. Here's how our expertise can benefit you:
              </p>
              <ul className="service-list text-gray-300 space-y-2 mt-4">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 16l3 3L22 7"
                    ></path>
                  </svg>
                  Data Center Migration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 16l3 3L22 7"
                    ></path>
                  </svg>
                  Site Surveys | Data Center | Wireless
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 16l3 3L22 7"
                    ></path>
                  </svg>
                  Technical Staff Augmentation
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 16l3 3L22 7"
                    ></path>
                  </svg>
                  Network Consulting
                </li>
              </ul>
            </div>
          </div>
          {/* Video Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <video
              src={ProfessionalF}
              className="h-full w-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            ></video>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto container px-4 py-16 mt-10">
        <div className="flex mb-16">
          <Link
            to="/contact-us"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4"
          >
            Contact Us
          </Link>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
            FAQs
            <span className="ml-2">→</span>
          </button>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(0)}
              >
                What does your Professional Services cover?
              </h2>
              {activeQuestion === 0 && (
                <p className="text-lg mb-4">
                  Our Professional Services offer comprehensive solutions,
                  including data center migration, site surveys (data center and
                  wireless), technical staff augmentation, and network
                  consulting.
                </p>
              )}
            </div>
            <div className="max-w-7xl mx-auto mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(1)}
              >
                How can Data Center Migration services benefit my business?
              </h2>
              {activeQuestion === 1 && (
                <p className="text-lg mb-4">
                  Our Data Center Migration services ensure a seamless
                  transition with minimal downtime and risk, allowing you to
                  focus on your operations while we handle the migration process
                  efficiently.
                </p>
              )}
            </div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(2)}
              >
                What is the purpose of Site Surveys for data centers and
                wireless networks?
              </h2>
              {activeQuestion === 2 && (
                <p className="text-lg mb-4">
                  Our site surveys provide detailed insights for pre-data center
                  moves and wireless technologies, ensuring optimal design,
                  installation, and network performance tailored to your needs.
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="max-w-7xl mx-auto mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(3)}
              >
                How does Technical Staff Augmentation work?
              </h2>
              {activeQuestion === 3 && (
                <p className="text-lg mb-4">
                  Our Technical Staff Augmentation allows you to scale your
                  workforce with skilled professionals, including network
                  architects and application developers, without the costs and
                  risks of traditional hiring.
                </p>
              )}
            </div>
            <div className=" max-w-7xl mx-auto mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(4)}
              >
                What kind of support do you offer through Network Consulting?
              </h2>
              {activeQuestion === 4 && (
                <p className="text-lg mb-4">
                  Our Network Consulting services help you design, implement,
                  and optimize robust, secure network infrastructures that align
                  with your business goals and enhance performance.
                </p>
              )}
            </div>
            <div className="mb-4 max-w-7xl mx-auto">
              <h2
                className="max-w-7xl mx-auto text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(5)}
              >
                How do customized solutions fit into your Professional Services?
              </h2>
              {activeQuestion === 5 && (
                <p className="text-lg mb-4">
                  We work closely with your business to provide tailored
                  solutions that address your unique challenges, optimizing
                  operations, reducing costs, and boosting security and
                  performance.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default ProfessionalServices;
