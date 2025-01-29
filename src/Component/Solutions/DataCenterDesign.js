import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import c1 from "../../Assets/audit.png";
import c2 from "../../Assets/awsfunction.png";
import c3 from "../../Assets/experties.png";
import data1 from "../../Assets/cybertop.png";
import v1 from "../../Assets/CYBERVID.mp4";
import { Link } from "react-router-dom";
function DataCenterDesign() {
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
  const nbsp = (count) => Array(count).fill("\u00A0").join("");

  const faqs = [
    {
      question:
        "How can we ensure a data center is scalable for future growth?",
      answer:
        "We design modular data centers that allow for incremental expansion. This approach lets you add capacity as your business grows without overhauling the entire facility. By planning for scalable power and cooling infrastructure, we ensure your data center can easily handle future demands while minimizing costs and disruptions.",
    },
    {
      question:
        "What is the most effective way to maintain uptime and reliability in a data center?",
      answer:
        "Our team designs data centers with redundancy in critical systems, including power, cooling, and networking. We implement N+1, 2N, or 2N+1 configurations based on your uptime requirements, ensuring that if one component fails, another is available to take over seamlessly, minimizing downtime and maintaining operational continuity.",
    },
    {
      question: "How can energy efficiency be optimized in data center design?",
      answer:
        "We integrate energy-efficient technologies like hot/cold aisle containment, liquid cooling, and free cooling methods to reduce energy consumption. Additionally, our designs use advanced monitoring systems to optimize energy use, improve Power Usage Effectiveness (PUE), and lower operational costs while meeting sustainability goals.",
    },
    {
      question:
        "What are the key considerations for ensuring physical and cyber security in a data center?",
      answer:
        "We implement comprehensive security solutions including multi-layered physical security with biometric access control, surveillance, and secured access zones. On the cyber front, we deploy advanced firewalls, encryption, and DDoS protection to safeguard against external threats. Our monitoring and response systems ensure swift identification and mitigation of any breaches.",
    },
    {
      question:
        "How can data center cooling solutions be optimized for different climates?",
      answer:
        "We offer tailored cooling solutions based on the climate and location of your data center. For cooler regions, we implement free air cooling, reducing energy costs. In warmer areas, we use advanced liquid cooling systems or efficient CRAC units. Our approach ensures optimal temperature management while minimizing environmental impact and operational costs.",
    },
    {
      question: "What are the benefits of a modular data center design?",
      answer:
        "A modular data center design allows for quick deployment and scalability. We provide pre-fabricated, plug-and-play modules that can be easily expanded as your needs grow. This reduces upfront costs, shortens build times, and offers the flexibility to meet your business’s evolving requirements without compromising performance or security.",
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
                  Data Center Design/Build
                </h1>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
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

              <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                  “At GlobalXperts, we design and build advanced data centers
                  tailored to your needs, ensuring timely and budget-friendly
                  projects. Our custom network architectures and robust security
                  support seamless operations for your business.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-4xl font-bold text-center mt-28">Overview</h2>
          <p className="text-center mt-5 text-gray-700 text-lg md:text-xl">
            GlobalXperts Enterprise Solutions offers comprehensive data center
            design and build services through a skilled team, including Program
            Managers, Project Managers, Network Architects, Security Architects,
            Network Deployment Engineers, and Training Resources.
          </p>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
              <ul className="list-disc list-inside space-y-5">
                <li>
                  <strong>Program Managers:</strong> Manage large-scale projects
                  to ensure timely delivery while mitigating risks.
                </li>
                <li>
                  <strong>Network Architects:</strong> Design scalable and
                  efficient network infrastructure tailored to business needs.
                </li>
                <li>
                  <strong>Network Deployment Engineers:</strong> Deploy and
                  maintain network equipment, ensuring optimal operation and
                  security.
                </li>
                <li>
                  <strong>Training Resources:</strong> Provide training to IT
                  staff, keeping them updated on current technologies and best
                  practices.
                </li>
                <li>
                  <strong>Security Architects:</strong> Implement security
                  measures and ensure compliance with standards to protect
                  against cyber threats.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-10 text-gray-700 text-lg md:text-xl">
            GlobalXperts is dedicated to delivering high-quality service, timely
            project completion, and meeting client specifications. Contact us to
            learn more about our data center solutions.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-14  mt-10 px-4">
            {/* Box 1 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective ">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c1}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className=" flex items-center justify-center text-white text-2xl font-bold bg-blueCustomColor bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor ">
                      Audit and Compliance
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2  text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-5">
                      Comprehensive "Audit and Compliance" Services ensures
                      adherence to regulations through financial audits and
                      internal control assessments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective ">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c2}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className=" flex items-center justify-center text-white text-2xl font-semibold bg-blueCustomColor bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor ">
                      Security Measures
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      "Proactive Security Measures" aim to prevent threats
                      through anticipatory actions and ongoing monitoring.
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
                    src={c3}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className=" flex items-center justify-center text-white text-2xl font-bold bg-blueCustomColor bg-opacity-40">
                    <p className="w-full text-center font-semibold bg-blueCustomColor">
                      Expertise and Experience
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Business Management using ConnectWise to streamline
                      operations and improve efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-blueCustomColor p-8 mt-28">
          <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-5">
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                Data Center Design and Build
              </h2>
              <p className="mt-3 text-lg text-gray-300 sm:mt-4">
                We create specialized facilities for managing IT infrastructure,
                covering:
              </p>
              <ul className="mt-3 text-lg text-gray-300 sm:mt-4 list-disc list-inside pl-6">
                <li>
                  <strong>Planning:</strong> Assessing needs and capacity.
                </li>
                <li>
                  <strong>Design:</strong> Blueprint for layout and systems.
                </li>
                <li>
                  <strong>Site Prep:</strong> Selecting and preparing locations.
                </li>
                <li>
                  <strong>Construction:</strong> Building and installing
                  systems.
                </li>
                <li>
                  <strong>Integration:</strong> Configuring and testing
                  equipment.
                </li>
                <li>
                  <strong>Commissioning:</strong> Finalizing and handing over.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
              <video
                src={v1}
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

export default DataCenterDesign;
