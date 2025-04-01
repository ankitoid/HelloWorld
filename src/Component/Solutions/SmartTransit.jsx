import React from "react";
import { Link } from "react-router-dom";
import {
  FaEyeSlash,
  FaCogs,
  FaUsers,
  FaVideo,
  FaShieldAlt,
  FaMicrochip,
  FaChartLine,
  FaBell,
} from "react-icons/fa";
import {
  FaRobot,
  FaSyncAlt,
  FaClipboardList,
} from "react-icons/fa";
import ContactCard from "../Contact/ContactCard";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
const SmartTransit = () => {
  return (
    <>
      <Helmet>
        <title>Smart Transit Solutions</title>
      </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Smart Transit
              </h1>
              <div className=" px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-right  lg:mt-20 mt-8 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                As population growth in our great cities increases, the strain
                on public transit increases. A crowded transit system can
                experience breakdowns, delays, and hazards to public safety.
                GlobalXperts presents Smart Transit – a solution that uses the
                power of AI, machine learning, and data analytics to provide key
                insights that can solve these problems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  py-4 space-y-8 bg-gray-100 text-gray-900 p-2">
        <h2 className="text-3xl font-bold text-center">
          Today’s Transit Challenges
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaEyeSlash className="text-blue-500 w-12 h-12 mx-auto" />,
              title: "Limited Visibility",
              description:
                "Transit agencies lack real-time insights into passenger flow, asset utilization, and potential safety hazards.",
            },
            {
              icon: <FaCogs className="text-blue-500 w-12 h-12 mx-auto" />,
              title: "Inefficient Operations",
              description:
                "Manual data collection hinders proactive decision-making and resource allocation.",
            },
            {
              icon: <FaUsers className="text-blue-500 w-12 h-12 mx-auto" />,
              title: "Passenger Experience",
              description:
                "Passenger satisfaction has degraded due to inaccurate ETAs, overcrowding, and safety concerns.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-4"
            >
              {item.icon}
              <h3 className="font-semibold text-xl">{item.title}</h3>
              {/* <div className="border-b-4 border-blue-600 w-12 my-2"></div> */}
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center">The Solution</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <FaChartLine className="text-green-500 w-12 h-12 mx-auto" />
              ),
              title: "Passenger Counting & Predictive Flow Analysis",
              description:
                "Expecting a rush hour at a particular station? With Smart Transit, you can monitor passenger numbers in real time and receive predictive analytics to optimize vehicle deployment.",
            },
            {
              icon: <FaCogs className="text-green-500 w-12 h-12 mx-auto" />,
              title: "Operational Efficiency & Planning",
              description:
                "Gain insights into asset utilization, route optimization, and predictive maintenance to optimize costs.",
            },
            {
              icon: <FaBell className="text-green-500 w-12 h-12 mx-auto" />,
              title: "Automated Incident Detection",
              description:
                "Detect and respond to incidents like overcrowding, suspicious activity, and safety hazards in real time.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-4"
            >
              {item.icon}
              <h3 className="font-semibold text-xl">{item.title}</h3>
              {/* <div className="border-b-4 border-green-600 w-12 my-2"></div> */}
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center">Solution Components</h2>

        <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto ">
          <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-12 md:p-8 lg:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mb-8">
              {/*  Improved Productivity and Efficiency Card */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaVideo />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Video Analytics
                  </h3>
                  <ul className="text-gray-600 list-disc  text-left text-sm  space-y-2">
                    <li className="">
                      Smart Transit video analytics can detect anomalies, and
                      identify patterns in real-time, providing valuable data
                      for operations, security, and business intelligence.
                    </li>
                    <li>
                      Analyze traffic patterns, dwell times, and queue lengths
                      to improve station layout and improve the overall
                      passenger experience.
                    </li>
                    <li>
                      Detect suspicious activity, identify potential threats,
                      and enable faster response times in public spaces.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaMicrochip />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    IoT Sensors
                  </h3>
                  <ul className="text-gray-600 list-disc  text-left text-sm  space-y-2">
                    <li className="">
                      For Smart Transit, we can install and manage IoT sensors,
                      and we can help you collect, analyze, and interpret data
                      from these sensors to optimize operations, improve
                      efficiency, and drive business decisions.
                    </li>
                    <li>
                      Environmental conditions such as temperature, humidity,
                      and air quality can be monitored by the Smart Transit
                      sensors, and this data can be used to optimize building
                      management systems, improve energy efficiency, and ensure
                      occupant comfort.
                    </li>
                    <li>
                      In addition, other Smart Transit IoT devices provide asset
                      tracking, traffic flow monitoring, and predictive
                      maintenance capabilities, all in real-time, reducing
                      downtime and improving passenger safety.
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Cards */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow ">
                  <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Physical Security
                  </h3>
                  <ul className="text-gray-600 list-disc  text-left text-sm  space-y-2">
                    <li className="">
                      Our services for Smart Transit include the supply,
                      installation, and support of cameras, access control
                      systems, and emergency response systems tailored to the
                      needs of your transit system. We provide end-to-end
                      support, from initial consultation and system design to
                      installation, training, and ongoing maintenance.
                    </li>
                    <li>
                      Secure your transit system with IP cameras, thermal
                      cameras, panoramic cameras, biometric scanners, card
                      readers, and mobile credentials. Smart Transit is a
                      scalable solution which we can seamlessly integrate with
                      your existing infrastructure.
                    </li>
                    <li>
                      Be ready for anything. For Smart Transit, we can install
                      and manage intrusion detection systems, fire alarm
                      systems, and mass notification systems. We can provide
                      24/7 monitoring and rapid response capabilities to
                      mitigate risks and ensure the safety of your personnel,
                      passengers, and assets.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Onsite IT Support Card */}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto bg-gray-100 py-2 px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
            AI & Machine Learning Solutions
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="md:w-1/2 w-full">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/aimodels.png"
                alt="AI Model"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 w-full">
              <p className="text-lg text-gray-800">
                Machine Learning (ML) is the driving force behind modern AI
                solutions, transforming industries with intelligent automation
                and data-driven insights. Our expertise includes:
              </p>
              <ul className="list-disc ml-6 text-md mt-4 text-gray-700">
                <li>
                  Large Language Models (LLMs) for advanced text understanding
                </li>
                <li>
                  Small Language Models (SLMs) for lightweight applications
                </li>
                <li>Foundation Models for general-purpose AI tasks</li>
                <li>Custom ML Models tailored to specific business needs</li>
              </ul>
              <p className="text-md text-gray-800 mt-4">
                Machine learning enables many different types of solutions. Here
                are just a few examples:
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Smart Assistants
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRobot className="text-blue-600 w-12 h-12" />,
              title: "Document Transformations & Problem Solving",
              content: [
                "Generate real-time suggested responses and actions.",
                "Generate summarizations of content & knowledge bases.",
                "Help support teams solve customer problems quickly and accurately.",
              ],
            },
            {
              icon: <FaSyncAlt className="text-green-600 w-12 h-12" />,
              title: "Enhanced Manager Assist",
              content: [
                "Deliver concise contact summarization.",
                "Reduce time spent taking/reviewing notes or sharing context during agent transfers.",
                "Provide further insights into support performance.",
              ],
            },
            {
              icon: <FaClipboardList className="text-purple-600 w-12 h-12" />,
              title: "Improved Customer Self-Service Experience",
              content: [
                "Easily understand a customer's intent.",
                "Deliver LLM-powered recommendations for automated workflow configurations.",
                "Chatbots that act as customer-server agents.",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center gap-4"
            >
              <div className="bg-gray-100 p-4 rounded-full">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <ul className="text-gray-600 text-left list-disc list-inside">
                {item.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 mb-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default SmartTransit;
