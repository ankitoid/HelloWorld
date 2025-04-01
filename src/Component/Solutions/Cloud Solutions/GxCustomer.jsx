import React, { useRef, useState } from "react";
import Navbar from "../../Navbar";
import { FaCloudscale } from "react-icons/fa";
import {  AiOutlineSmile, AiOutlineSolution } from "react-icons/ai";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { TiMediaFastForward } from "react-icons/ti";
import { RiRobotLine, RiSecurePaymentFill } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { Helmet } from "react-helmet";

const GxCustomer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqData = [
    {
      question: "What is GX Customer Connect?",
      answer:
        "GX Customer Connect is a cloud-based contact center solution designed to enhance customer service, reduce costs, and improve operational efficiency. It transforms customer interactions with advanced features tailored for modern businesses.",
    },
    {
      question: "What are the key features of GX Customer Connect?",
      answer:
        "GX Customer Connect offers a range of key features, including omnichannel and self-service options, IVR and telephony, chatbots and automation, web/mobile chat, omnichannel routing, and caller authentication to improve customer experiences and streamline operations.",
    },
    {
      question: "How does GX Customer Connect improve customer experience?",
      answer:
        "GX Customer Connect enhances customer experience through omnichannel communication and self-service options. It provides seamless interaction channels like web and mobile chat, chatbots, IVR, and caller authentication, making it easier for customers to get support on their preferred platform.",
    },
    {
      question: "What analytics and optimization features are available?",
      answer:
        "GX Customer Connect offers data-driven insights for improving customer service efficiency, including real-time analytics, sentiment analysis, call summarization, forecasting and scheduling, and contact scoring.",
    },
    {
      question: "How does GX Customer Connect boost agent productivity?",
      answer:
        "The solution includes features like high-quality telephony, IVR, chatbots, and contact center automation. With omnichannel routing, skills-based routing, task management, predictive dialing, and answering machine detection, it helps agents focus on high-value interactions, enhancing productivity.",
    },
    {
      question: "What security features does GX Customer Connect include?",
      answer:
        "GX Customer Connect offers caller authentication and fraud risk detection to secure interactions and protect customer data, enhancing trust and security within the contact center environment.",
    },
  ];

  return (
    <div className="w-full">
      <Helmet>
        <title>GX-Customer Connect</title>
      </Helmet>
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                GX Customer Connect
              </h1>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base text-left lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                This solution is your ticket to elevated customer engagement.
                If immediate, personalized responses are your goal, this
                solution is for you. Enjoy enhanced satisfaction and loyalty,
                seamlessly blended technology, and flexibility for unmatched
                service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-6">
              GX Customer Connect
            </h2>
            <p className="mt-3 text-lg text-gray-600 sm:mt-4">
              Are you looking for a contact center solution with omni-channel
              communication, automation, scalability, CRM integration, and AI
              options? Meet GX Customer Connect, a cloud-based contact center
              solution designed to provide a seamless, efficient, and scalable
              customer interaction experience. Whether you’re a startup or an
              enterprise, our platform can be tailored to your unique business
              needs.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/gxConnect.png"
              alt="GX Connect"
            />
          </div>
        </div>

        {/* Features Section */}

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-100 rounded-lg shadow-lg p-8 mt-12">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
                Solution Features
              </h2>
              <p className="text-lg text-gray-600">
                Explore the powerful features designed to enhance customer
                interactions and streamline your contact center operations.
              </p>
            </div>

            {/* Features List */}
            <ul className="text-gray-700 list-disc ml-6 mt-8 space-y-4">
              <li>
                <strong>Omnichannel Communication:</strong> Engage with
                customers through their preferred channels, such as voice, chat,
                video, or email, ensuring a consistent experience across all
                touchpoints.
              </li>
              <li>
                <strong>Interactive Voice Response (IVR):</strong> Automate
                customer interactions, directing them to the right department or
                providing self-service options, reducing wait times and
                improving efficiency.
              </li>
              <li>
                <strong>Intelligent Routing and Queuing:</strong> Distribute
                incoming calls intelligently among your agents based on their
                skills, availability, or other criteria to maximize
                productivity.
              </li>
              <li>
                <strong>Real-Time Monitoring and Analytics:</strong> Gain
                valuable insights into customer interactions, agent performance,
                and overall call center metrics to make data-driven decisions.
              </li>
              <li>
                <strong>Outbound Dialing:</strong>Proactively reach out to your
                customers for surveys, reminders, or promotions, fostering
                initiative-taking engagement and enhancing customer
                satisfaction.
              </li>
              <li>
                <strong>Call Recording and Transcription:</strong>Record and
                transcribe customer interactions for quality assurance,
                compliance, and future training purposes.
              </li>
              <li>
                <strong>CRM Integration:</strong> Seamlessly integrate our
                contact center with your existing CRM software, enabling agents
                to access customer information instantly, leading to
                personalized interactions.
              </li>
              <li>
                <strong>Chatbots and AI-Powered Insights (Silver Tier):</strong>{" "}
                Leverage AI powered chatbots to manage routine inquiries,
                freeing up agents’ time for more complex customer interactions.
              </li>
              <li>
                <strong>AI-Powered Virtual Assistant (Gold Tier):</strong>{" "}
                Leverage the power of AI to handle repetitive inquiries, answer
                frequently asked questions, and reduce the workload on your
                human agents.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benifit of customer connect  */}
      <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-1 ">
        <h1 className=" text-3xl font-bold text-center  mb-6 mt-4 md:py-1 lg:py-0">
          Benefits of Customer Connect
        </h1>

        <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 sm:mb-12 md:mb-4 md:p-8 lg:p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
            {/*  Improved Productivity and Efficiency Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <AiOutlineSolution                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Cost-Effective Solution
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  Our contact center solution effortlessly communicates with
                  Amazon Web Services which offers a pay-as-you-go pricing
                  model, eliminating the need for large upfront investments and
                  enabling businesses to scale their customer service operations
                  cost-effectively.
                </p>
              </div>
            </div>

            {/*  Cards */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow ">
                <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaCloudscale />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Flexibility and Scalability
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  As your business grows, GX Customer Connect scales to
                  accommodate increased call volumes and agent teams, always
                  ensuring a seamless customer experience.
                </p>
              </div>
            </div>

            {/* Onsite IT Support Card */}
            <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <TiMediaFastForward />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Faster Time to Market
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  GlobalXperts user-friendly interface and easy integration with
                  existing systems allow businesses to deploy the contact center
                  solution swiftly, getting you up and running with minimal
                  disruption.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl  p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px] ">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <RiSecurePaymentFill />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Secure & Reliable
                </h3>
                <p className="text-sm text-gray-600 mb-4   text-center">
                  Rest assured that your data is safe. We prioritize your
                  security with encrypted communication and a robust suite of
                  protective tools.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <IoAccessibility />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                  24/7 Accessibility
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Offer your customers round-the-clock support, allowing them to
                  reach your business at their convenience, enhancing customer
                  satisfaction. Our web-based interface ensures your team can
                  connect from anywhere, anytime, ensuring uninterrupted
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-0">
          {/* Omnichannel and Self-service */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center">
              <RiRobotLine className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Improved Agent Productivity (Silver Tier){" "}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                With advanced routing, automation, and AI features, agents can
                focus on high-value tasks, resulting in improved productivity
                and reduced operational costs.
              </p>
            </div>
          </div>

          {/* Analytics and Optimization */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center">
              <AiOutlineSmile className="h-10 w-10 text-blue-500 mb-4" />
            
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Enhanced Customer Experience (Gold Tier)
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Rapid issue resolution and personalized interactions create a
                positive impression on customers, leading to increased loyalty
                and brand advocacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-center">
          3-Tiered Solution
        </h1>
        <p className="text-center text-gray-700">
          We have a 3-tiered approach to this solution so that you can get
          exactly the features that you need for your business. If you need only
          the contact center feature, the Bronze Tier may be right for you. If
          you also need virtual assistant capabilities, the Silver Tier may suit
          your business better. If you need to go all out with Agent Assist and
          GenAI capabilities, the Gold Tier may best suit your business.
        </p>
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-2  2xl:bg-white max-w-7xl mx-auto px-4 py-4">
              {[
                {
                  title: "Bronze Tier – Contact Center Only",
                  points: [
                    "Omni-channel communication",
                    "High quality voice calls",
                    "Chat, SMS, and messaging",
                    "In-app/web calling and video conferencing",
                    "Task management",
                  ],
                },
                {
                  title: "Silver Tier – OmniBot Virtual Assistant",
                  points: [
                    "A conversational and/or a graphical interface to help decision making",
                    "Enterprise knowledge management",
                    "Customer sentiment-driven workflow",
                    "Build omni-channel communication",
                    "GenAI capability on AWS",
                    "Leverage AWS Chatbot",
                  ],
                },
              ].map((box, index) => (
                <div
                  key={index}
                  className="bg-white 2xl:bg-gray-100    rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl text-center font-semibold text-blue-700 mb-2">
                      {box.title}
                    </h3>
                    <div className="border-t-2 border-blue-700 mt-2 mb-4"></div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800 justify-center">
                      {box.points.map((point, i) => (
                        <li key={i} className="text-md">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white 2xl:bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden py-4 px-4 max-w-6xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl text-center font-semibold text-blue-700 mb-2">
                Gold Tier – Agent Assist
              </h3>
              <div className="border-t-2 border-blue-700 mt-2 mb-4"></div>
              <div className="mt-3 mb-0 text-lg font-bold">
                Agent Assist Capabilities{" "}
              </div>
              <div className="border-t-2 border-cyan-800 mt-0 mb-2 w-56 rounded-lg"></div>

              <ul className="list-disc pl-6 space-y-2 text-gray-800 justify-center">
                <li className="text-md">
                  Generate real-time suggested responses and actions.
                </li>
                <li className="text-md">
                  Generate summarizations of content & knowledge bases.
                </li>
                <li className="text-md">
                  Help agents solve customer problems quickly and accurately.
                </li>
              </ul>
              <div className="mt-3 mb-0 text-lg font-bold">
                Enhanced Manager Assist
              </div>
              <div className="border-t-2 border-cyan-800 mt-0 mb-2 w-56 rounded-lg"></div>

              <ul className="list-disc pl-6 space-y-2 text-gray-800 justify-center">
                <li className="text-md">
                  {" "}
                  Deliver concise contact summarization.
                </li>
                <li className="text-md">
                  Reduce time spent taking/reviewing notes or sharing context
                  during agent transfers.
                </li>
                <li className="text-md">
                  {" "}
                  Provide further insights into agent performance.
                </li>
              </ul>
              <div className="mt-3 mb-4 text-lg font-bold">
                Improved Customer Self-Service Experience
              </div>
              <div className="border-t-2 border-cyan-800 mt-0 mb-2 w-96 rounded-lg"></div>

              <ul className="list-disc pl-6 space-y-2 text-gray-800 justify-center">
                <li className="text-md">
                  Easily understand a customer's intent.
                </li>
                <li className="text-md">
                  Deliver LLM-powered recommendations for automated workflow
                  configurations.
                </li>
                <li className="text-md">
                  Offer bots that provide at-par customer experience as agents.
                </li>
              </ul>
            </div>
            <p className="text-gray-800 text-lg mt-4 p-4">
              Would you like to revolutionize the way that your business
              communicates? GX Customer Connect is the contact center solution
              of the future. Contact us today to learn more.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
        {/* Left Side Content */}
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> GX Customer Connect?</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over 120 countries supported
              with local technical resources.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Round-the-clock support for
              emergencies and planned maintenance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong>Avoid staffing overhead while
              accessing skilled IT professionals when and where you need them.
            </li>
          </ul>
          {/* Download Brochure Button */}
          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Customer+Connect+Brochure.pdf"
            download ="Gx_Connect.pdf"
            target="_blank"
            className="ml-8 mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        {/* Right Side Image */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5  ">
          {/* Embedded image */}
          <div className="relative">
            <img
              className="w-full aspect-video rounded-md shadow-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/GX-CC.png"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto container px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">FAQs</h1>
        <p className="text-lg mb-12">
          Dive into FAQs related to GX Customer Connect and its features.
        </p>
        <div className="flex mb-16">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">
            Contact Us
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
            FAQs
            <span className="ml-2">→</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {faqData.map((faq, index) => (
            <div key={index}>
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </h2>
              {activeIndex === index && (
                <p className="text-base text-gray-700 mb-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="mt-12">
        <ContactCard />
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default GxCustomer;
