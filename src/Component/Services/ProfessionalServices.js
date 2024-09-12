import React from "react";
import Navbar from "../Navbar";
import { useState } from "react";

import v1 from "../../Assets/expert.jpg";
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
        '"Bringing innovation to teamwork - Collaborate smarter with IT technologies." Overview Looking to enhance your business\'s communication and collaboration capabilities? Look no further than our',
    },
    {
      title: "Cyber Security Practice",
      description:
        '"Proper management of your security infrastructure is crucial to protecting your assets." Overview Our security defense team takes protecting your business from cyber threats very',
    },
    {
      title: "Network Consulting",
      description:
        '"Empowering Your Network for Business Success" Overview Welcome to GlobalXperts network consulting and design services! We are a team of highly skilled network professionals dedicated',
    },
    {
      title: "Professional Services",
      description:
        '"Get In Touch Fill out the form below and one of our experts will be in touch shortly. Call +1 919-342-5482. If you have any',
    },
    {
      title: "Project and Program Management",
      description:
        "Value Proposition Are you looking for a reliable and efficient partner to manage your projects and programs? Look no further than our professional services for",
    },
    {
      title: "Site Surveys | Data Center | Wireless",
      description:
        "Overview Looking for a reliable and experienced team to conduct professional site surveys for your business? Look no further than our professional services! Our team",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center mt-32">
            Professional Services
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between ml-14 mr-14">
            {/* Text Section */}
            <div className="flex-1 md:pr-8 mb-8 md:mb-0">
              <p className="text-lg text-gray-600 mb-8 ">
                "Our Professional Services provide cutting-edge IT solutions to
                empower your business in the digital era. We offer innovative
                services designed to enhance your operations, improve
                efficiency, and drive sustainable growth. With a focus on
                delivering excellence, we tailor our approach to meet your
                unique needs, ensuring your business thrives in a competitive
                landscape."
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <video
                src={Professional}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen mt-28 bg-gray-100">
          <div className="grid grid-cols-3 gap-4 py-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg border border-greenCustomColor"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
          <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
            <video
              src={DataCenterMigration}
              className="h-full w-full object-cover mr-10" // Added margin-right here
              muted
              autoPlay
              loop
              playsInline
            ></video>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Data Center Migration
            </h2>
            <p className="mt-3 text-lg text-gray-500 sm:mt-4">
              Struggling with the complexity and high costs of managing your
              data center? Our data center migration solutions offer a seamless
              transition to the cloud, combining flexibility, scalability, and
              security. Partnering with industry leaders like Cisco and Arista,
              we deliver cutting-edge networking technologies and hybrid cloud
              solutions, ensuring a private, secure infrastructure.
              <br />
              <br />
              Our expert team guides you through planning, design,
              implementation, and optimization, reducing costs and increasing
              efficiency, so you can focus on your core business. Contact us
              today to learn more!
            </p>
          </div>
          {/* Image Section */}
        </div>

        <div className="mt-20 text-center">
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
                      GlobalXperts partners with clients to tailor solutions
                      that fit their unique business needs and requirements.
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
                      GlobalXperts offers cost-effective solutions to optimize
                      IT infrastructure, cut costs, and boost operational
                      efficiency.
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

        {/* Boxes Section */}

        {/* Boxes Section */}
        <div className="max-w-7xl  flex flex-col lg:flex-row items-center  mx-5 justify-between mt-36 pb-10">
          <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
            <video
              src={SiteSurveys}
              className="h-full w-full object-cover mr-10" // Added margin-right here
              muted
              autoPlay
              loop
              playsInline
            ></video>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
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
          {/* Image Section */}
        </div>

        <div className=" ">
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>{" "}
          </div>
          <div className="grid grid-cols-2 gap-8 mr-10 ml-10 mt-5 bg-white">
            <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg ">
              Our site surveys are designed to provide your business with the
              highest level of expertise and attention to detail. We understand
              that accurate site surveys are critical to the success of any
              project, which is why we have assembled a team of highly skilled
              professionals with a focus on pre data center moves and wireless
              technologies.
            </p>
            <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
              With our pre data center move site surveys, you can rest assured
              that your data center relocation will go smoothly and without any
              surprises. Our team will identify any potential issues or
              obstacles and provide you with a comprehensive report that
              outlines all of the necessary steps to ensure a successful
              transition.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mr-10 ml-10">
            <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
              Our wireless site surveys are equally valuable, providing you with
              the information you need to design, install, and optimize your
              wireless network. We’ll help you identify the best locations for
              access points, assess signal strength and coverage, and make
              recommendations for improving your wireless network.
            </p>
            <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
              Our site surveys give you peace of mind, knowing that experienced
              professionals are managing your project. Focus on your business
              while we handle the details.
            </p>
          </div>
        </div>

        {/* Boxes Section */}

        <div className="mt-20 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
          <p className="text-lg text-gray-600 mb-8"></p>

          {/* Boxes Section */}
          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Technical Staff Augmentation
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Elevate your business with our staff augmentation program. We
                provide top-tier Enterprise Network Architects, Cloud
                Architects, and Application Developers to help you succeed
                without the hassle of recruiting and managing new employees.
                Benefit from expert support tailored to your needs and focus on
                your goals while we handle the rest. Contact us today to learn
                more!
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <video
                src={TechnicalStaffAugmentation}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            {/* Text Section */}

            {/* Image Section */}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>{" "}
          </div>
          <div className="grid grid-cols-2 gap-8 mr-10 ml-10 mt-5">
            <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg ">
              Our staff augmentation program offers a cost-effective way to
              quickly expand your IT team with skilled professionals like
              Enterprise Architects, Cloud Architects, and Application
              Developers. Enhance your IT environment, streamline operations,
              and accelerate growth with our flexible solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
              Our staff augmentation program integrates top-tier professionals
              with your team, offering flexible scaling without the costs and
              risks of traditional hiring. We ensure high-quality talent through
              a rigorous screening process to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mr-10 ml-10">
            <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
              Leverage our staff augmentation to quickly scale your IT team,
              access skilled experts, and enhance your IT operations. Focus on
              core business functions while we manage complex IT needs, offering
              flexibility and control over your workforce.
            </p>
            <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
              Overall, our professional services staff augmentation program
              provides a turnkey solution for organizations seeking to augment
              their IT staff with highly skilled professionals, allowing you to
              achieve your strategic objectives faster and with greater
              confidence.
            </p>
          </div>

          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <video
                src={Network}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Network Consulting
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Welcome to GlobalXperts' network consulting and design services!
                Our experienced team offers tailored solutions for <br />
                building and optimizing your network infrastructure. We analyze
                your current setup, design a customized network to
                <br />
                enhance performance and security, and use the latest
                technologies to ensure flexibility and scalability. We also{" "}
                <br />
                provide ongoing support to meet your evolving needs. Contact us
                to elevate your network and achieve your business
                <br />
                goals!
              </p>
            </div>
            {/* Image Section */}
          </div>
        </div>

        <div className="mt-20 text-center mx-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Value Proposition
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            GlobalXperts network consulting and design team offers a
            comprehensive solution for businesses that are looking to build or
            optimize their network infrastructure. Our value proposition
            includes:
          </p>

          {/* Boxes Section */}
        </div>
        <div className="grid grid-cols-2 gap-8 mr-10 ml-10 mt-5">
          <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
            Customized Solutions – We understand that every business is unique,
            and we provide customized solutions that are tailored to your
            specific needs and requirements. Our team of experts will work
            closely with you to design a network that is optimized for your
            business goals, whether it’s improving performance, reducing costs,
            or enhancing security.
          </p>
          <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
            Expertise – Our team of experienced network consultants has the
            expertise to help you build a reliable, scalable, and secure network
            infrastructure. We use industry-standard best practices and
            cutting-edge technologies to ensure that your network is robust,
            flexible, and future-proof.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mr-10 ml-10">
          <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
            Ongoing Support – We don’t just design and implement your network
            infrastructure and leave you to it. Our team provides ongoing
            support to help you maintain and optimize your network, ensuring
            that it continues to meet your evolving business needs.
          </p>
          <p className="text-lg text-gray-600 mb-8 border  p-5 shadow-xl  bg-grayCustomColor rounded-lg">
            Cost-Effective – We understand the importance of managing costs, and
            we work with you to develop a network infrastructure that is
            cost-effective without compromising on performance or security.
          </p>
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

        <div className="container mx-auto px-4 py-16 mt-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    including data center migration, site surveys (data center
                    and wireless), technical staff augmentation, and network
                    consulting.
                  </p>
                )}
              </div>
              <div className="mb-4">
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
                    focus on your operations while we handle the migration
                    process efficiently.
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
                    Our site surveys provide detailed insights for pre-data
                    center moves and wireless technologies, ensuring optimal
                    design, installation, and network performance tailored to
                    your needs.
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="mb-4">
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
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(4)}
                >
                  What kind of support do you offer through Network Consulting?
                </h2>
                {activeQuestion === 4 && (
                  <p className="text-lg mb-4">
                    Our Network Consulting services help you design, implement,
                    and optimize robust, secure network infrastructures that
                    align with your business goals and enhance performance.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(5)}
                >
                  How do customized solutions fit into your Professional
                  Services?
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
      </div>
    </>
  );
};

export default ProfessionalServices;
