import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import {
  FaRegClipboard,
  FaProjectDiagram,
  FaClipboardCheck,
  FaUserEdit,
  FaEye,
  FaUsers,
  FaToolbox,
  FaCogs,
} from "react-icons/fa";

import { FaDraftingCompass } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiChatVoiceLine } from "react-icons/ri";
import { FiTrendingUp } from "react-icons/fi";
import ContactCard from "../Contact/ContactCard";
function CollaborationTechnologies() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToFAQs = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Scroll to the start of the section
      });
    }
  };

  const services = [
    {
      title: "Collaboration Tools",
      description:
        "Document sharing, real-time collaborative editing, project management, and more.",
    },
    {
      title: "Voice Services",
      description:
        "VoIP solutions, IP telephony, call routing, and voicemail services.",
    },
    {
      title: "Video Services",
      description:
        "Video conferencing, telepresence solutions, and video collaboration platforms.",
    },
    {
      title: "Messaging Services",
      description:
        "Instant messaging, unified messaging, and team collaboration tools.",
    },
    {
      title: "Conferencing Services",
      description:
        "Audio conferencing, web conferencing, virtual meetings, and webinars.",
    },
    {
      title: "Mobility Services",
      description:
        "Mobile UC applications, device management, and integration with mobile platforms.",
    },
    {
      title: "Contact Center Solutions",
      description:
        "On-Premises & Cloud-based contact centers, CRM integration, IVR, Omnichannel, and customer engagement strategies.",
    },
  ];
  const benefits = [
    {
      icon: <FaRegClipboard className="text-blue-600 text-3xl mb-4" />,
      title: "Accurate and Competitive Project Budgeting and Scoping",
    },
    {
      icon: <FaProjectDiagram className="text-green-600 text-3xl mb-4" />,
      title: "Reduced Risk of Project Failure",
    },
    {
      icon: <FaClipboardCheck className="text-yellow-600 text-3xl mb-4" />,
      title: "Requirements Management",
    },
    {
      icon: <FaUserEdit className="text-red-600 text-3xl mb-4" />,
      title: "Hands-On Project Management",
    },
    {
      icon: <FaEye className="text-purple-600 text-3xl mb-4" />,
      title: "Improved Visibility into the Project to Ensure Smooth Handover",
    },
    {
      icon: <FaUsers className="text-teal-600 text-3xl mb-4" />,
      title: "End User Training",
    },
    {
      icon: <FaToolbox className="text-orange-600 text-3xl mb-4" />,
      title:
        "Extended Packaged Tools to Improve User Acceptance and Integration",
    },
    {
      icon: <FaCogs className="text-pink-600 text-3xl mb-4" />,
      title: "Streamlined Maintenance Management",
    },
  ];
  const faqs = [
    {
      question: "What is Slack, and how does it improve team collaboration?",
      answer:
        "Slack is a communication platform that brings team conversations, files, and tools into one place. It improves collaboration by allowing teams to organize communication in channels, share files instantly, and integrate with various productivity apps, making workflows more efficient and reducing email clutter.",
    },
    {
      question: "How does Microsoft Teams enhance remote work?",
      answer:
        "Microsoft Teams is a collaboration tool that combines chat, video conferencing, file sharing, and app integration. It enhances remote work by providing a centralized hub where teams can communicate, conduct virtual meetings, collaborate on documents in real-time, and integrate with Microsoft 365 apps for seamless workflows.",
    },
    {
      question:
        "What is Google Workspace, and why is it popular for team collaboration?",
      answer:
        "Google Workspace is a suite of cloud-based productivity and collaboration tools, including Gmail, Google Drive, Docs, Sheets, and Meet. It is popular for team collaboration due to its real-time editing capabilities, easy file sharing, and integration with other Google services, making team communication and project management more effective.",
    },
    {
      question: "How does Asana help in managing team projects?",
      answer:
        "Asana is a project management tool designed to help teams organize, track, and manage their work. It allows teams to create projects, assign tasks, set deadlines, and track progress in a visually appealing way, improving productivity and ensuring that everyone stays on the same page.",
    },
    {
      question: "What is Trello, and how does it support team workflows?",
      answer:
        "Trello is a visual project management tool that uses boards, lists, and cards to organize tasks and projects. It supports team workflows by providing a clear, visual overview of work progress, enabling teams to manage tasks, assign responsibilities, and streamline communication in a flexible and user-friendly format.",
    },
    {
      question: "How does Zoom facilitate virtual meetings?",
      answer:
        "Zoom is a video conferencing platform that facilitates virtual meetings, webinars, and online collaboration. It allows teams to connect face-to-face from anywhere, share screens, record sessions, and collaborate in real-time, making it an essential tool for remote and hybrid work environments.",
    },
  ];
  return (
    <>
      <div>
        <Navbar />
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Collaboration Technologies
                </h1>
                <div className=" px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact-us"
                    className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Contact Us
                  </Link>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                    onClick={scrollToFAQs}
                  >
                    FAQs <span className="ml-2">→</span>
                  </button>
                </div>
              </div>

              <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2 p-4">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto text-left lg:mx-0 lg:mb-0 leading-relaxed">
                  Here at GlobalXperts, our team of skilled professionals is
                  dedicated to helping you leverage the latest technologies to
                  improve communications, streamline operations, and enhance
                  customer service. We specialize in three key products: Cisco
                  Unified Communications, ConnectWise, and Amazon Connect.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 text-gray-800 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="bg-gray-50 text-black py-16">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4">
                How Collaboration Technologies are Changing the Game
              </h2>
              <p className="text-lg mb-6 text-left">
                The business environment today can be characterized by
                accelerated go-to-market cycles, rapid rollout of information,
                and an increasingly competitive environment.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className=" bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 items-center justify-center">
                Benefits of Deploying Collaboration Technologies
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center"
                  >
                    {benefit.icon}
                    <p className="font-medium text-gray-700">{benefit.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Services Section */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What GlobalXperts Offers Your Business
              </h2>

              <p className="text-lg  mb-4 text-left">
                GlobalXperts has developed a deep understanding of collaboration
                technologies, specifically how to design, implement, and manage
                such solutions. Solutions providers and end user organizations
                can have peace of mind knowing that their business is in good
                hands with our array of services.
              </p>

              <p className="text-lg text-left font-bold mb-4">
                Our team members are well-versed in three key products:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Cisco Unified Communications",
                    description:
                      " Cisco Unified Communications is a comprehensive solution that integrates voice, video, messaging, and collaboration into a single platform. Our experts can design and build a custom solution tailored to your specific needs, enabling your team to communicate more efficiently and effectively.",
                  },
                  {
                    title: "ConnectWise",
                    description:
                      "ConnectWise is a powerful business management platform that streamlines operations and improves efficiency. Our professionals can help you leverage the full capabilities of ConnectWise to enhance your project management, service delivery, and customer support.",
                  },
                  {
                    title: "GX Customer Connect",
                    description:
                      "GX Customer Connect is a cloud-based contact center solution built on Amazon Connect that allows you to provide exceptional customer service from anywhere in the world. Our team can help you design and build a scalable, reliable, and secure contact center that meets your business requirements and supports your growth.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Expectations Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What You Can Expect
              </h2>
              <p className="text-lg mb-12 text-gray-700 text-center max-w-3xl mx-auto">
                With our comprehensive suite of services, you can leverage the
                latest technologies and stay ahead of the competition in
                communication and collaboration capabilities. By partnering with
                GlobalXperts, you can expect:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Improved Communication and Collaboration",
                    description:
                      "Leverage the latest technologies to improve your team’s communications, both internally and with external stakeholders.",
                  },
                  {
                    title: "Increased Productivity and Efficiency",
                    description:
                      "Streamline operations and improve efficiency, enabling your team to focus on what matters most.",
                  },
                  {
                    title: "Scalable and Flexible Solutions",
                    description:
                      "Understanding the importance of scalability and flexibility, grow and adapt with your organization’s changing needs through well-tailored solutions.",
                  },
                  {
                    title: "Enhanced Customer Experience",
                    description:
                      "Deliver exceptional customer service and support, helping your business build stronger relationships with your customers.",
                  },
                  {
                    title: "Cost Savings",
                    description:
                      "Optimize your resources and reduce costs, enabling your business to maximize your ROI and remain competitive.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg mt-12 text-gray-700 text-center max-w-3xl mx-auto">
                In short, our collaboration technologies services are for
                organizations looking to leverage the latest technologies and
                improve their communication, collaboration, and customer service
                capabilities.{" "}
                <span className="font-medium text-blue-600">
                  Contact us today
                </span>{" "}
                to learn more and see how GlobalXperts can help your business
                grow.
              </p>
            </div>
          </section>
        </div>

        <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4 ">
          <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-12 md:p-8 lg:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
              {/*  Improved Productivity and Efficiency Card */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <MdPeopleAlt />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Collaboration
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    In today’s fast-paced digital world, work is no longer
                    confined to a specific location. It’s an activity that
                    happens wherever your team is, and seamless collaboration is
                    the key to success. At GlobalXperts, we empower businesses
                    to connect, communicate, and collaborate effectively, no
                    matter where their employees are located.
                  </p>
                </div>
              </div>

              {/*  Cards */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow ">
                  <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <HiOutlineOfficeBuilding />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Collaboration Solutions for the Modern Workplace
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    At GlobalXperts, we specialize in designing and building
                    collaboration solutions that bring people together using the
                    latest technologies. Our expertise in Cisco Unified
                    Communications and AWS Connect ensures that your
                    organization can communicate with ease, whether through
                    voice, video, or messaging. Our solutions are tailored to
                    meet the unique needs of your business, enabling efficient
                    and effective communication across your entire team.
                  </p>
                </div>
              </div>

              {/* Onsite IT Support Card */}
              <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaDraftingCompass />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Design/Build Collaboration Technologies
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    We believe in smarter teamwork through innovation. Our team
                    of skilled professionals is dedicated to helping you
                    leverage advanced technology to enhance your organization’s
                    communication capabilities. From designing a unified
                    communication system to building a scalable, cloud-based
                    contact center, we provide end-to-end solutions that drive
                    productivity and improve business outcomes.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl  p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] ">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <RiChatVoiceLine />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Unified Communications
                  </h3>
                  <p className="text-sm text-gray-600 mb-4   text-left">
                    GlobalXperts offers a comprehensive range of services that
                    integrate audio, video, messaging, and more into a unified
                    collaboration environment. Our vendor-neutral approach
                    ensures that your collaboration tools are seamlessly
                    integrated, allowing your team to work from any location or
                    device. Our managed services enable you to support your
                    users wherever they are, ensuring they have the best
                    collaboration experience possible.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FiTrendingUp />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                    Maximizing Productivity
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-left">
                    Collaboration is at the heart of any successful project.
                    Without it, deadlines are missed, communication breaks down,
                    and morale suffers. At GlobalXperts, we’ve spent years
                    perfecting the art of seamless collaboration. Whether it’s
                    conducting meetings with high-definition video conferencing
                    or enabling real-time collaborative editing, we provide the
                    tools and expertise needed to keep your team connected and
                    productive.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <AiOutlineGlobal />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                    Worldwide Connectivity
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-left">
                    Distance is no longer a barrier to effective collaboration.
                    With GlobalXperts’ advanced solutions, your geographically
                    dispersed teams can communicate as if they were in the same
                    room. Whether using IP-connected devices or state-of-the-art
                    conference rooms, our solutions ensure that your meetings,
                    seminars, training sessions, and presentations are conducted
                    with the highest quality, making remote work as efficient as
                    being on-site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold mb-8 text-center">
              Collaboration Services
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              GlobalXperts offers a wide range of collaboration services to meet
              the diverse communication needs of your workforce.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Enterprise Voice Solutions Section */}
            <div className="mt-16 bg-white p-10 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Enterprise Voice Solutions
              </h2>
              <p className="text-gray-700 mb-4">
                Your workforce is diverse, and so are their communication needs.
                GlobalXperts provides integrated strategies that combine voice,
                video, and team collaboration apps into a cohesive system. We
                evaluate your current technology and user habits to design
                solutions that meet the unique needs of your business, ensuring
                that your employees have the tools they need to communicate and
                collaborate effectively, whether on-premises, mobile, or remote.
              </p>
            </div>

            {/* Contact Center Solutions Section */}
            <div className="mt-12 bg-gray-100 p-10 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Better Customer Engagement Starts with Your Contact Center
              </h2>
              <p className="text-gray-700 mb-4">
                Customer experience is critical in today’s competitive
                landscape. GlobalXperts helps you create a customer-centric
                contact center that enhances customer satisfaction and drives
                business success. By integrating multiple communication channels
                into a seamless omnichannel experience, we ensure that your
                customers receive the best possible service, no matter how they
                choose to interact with your organization.
              </p>
            </div>

            {/* Final Section */}
            <div className="mt-12 bg-white p-10 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Transforming Collaboration into Success
              </h2>
              <p className="text-gray-700">
                At GlobalXperts, we understand that effective collaboration is
                more than just technology—it is about creating an environment
                where communication flows freely, ideas are shared, and
                productivity is maximized. Let us help you build a collaborative
                ecosystem that supports your business goals and drives success.
              </p>
            </div>
          </div>
        </section>

        <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Frequently Asked Questions
          </h1>
          <div className="border border-blue-700 rounded-lg  mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </h2>
                {activeQuestion === index && (
                  <p className="text-lg mb-4 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-0">
          <ContactCard />
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default CollaborationTechnologies;
