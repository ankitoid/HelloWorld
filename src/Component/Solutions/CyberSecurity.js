import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import c1 from "../../Assets/dcdrisk.png";
import c2 from "../../Assets/productive.png";
import c3 from "../../Assets/adaptive.png";
import c4 from "../../Assets/cuttingedge.png";
import { Link } from "react-router-dom";
import ContactCard from "../Contact/ContactCard";

function CyberSecurity() {
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

  const faqs = [
    {
      question: "Do you want to secure your data from cyber threats?",
      answer:
        "We provide comprehensive cybersecurity solutions to protect your data from all types of cyber threats, including malware, ransomware, and unauthorized access.",
    },
    {
      question:
        "Can you detect and respond to a ransomware attack confidently?",
      answer:
        "Our proactive threat detection and response strategies ensure that we can quickly identify and mitigate ransomware attacks, minimizing impact and facilitating a swift recovery.",
    },
    {
      question:
        "Are you protected against phishing and social engineering attacks?",
      answer:
        "We implement advanced security measures and conduct regular training to defend against phishing and social engineering attacks, safeguarding your organization from these common threats.",
    },
    {
      question:
        "Is your organization ready to prevent and handle a data breach?",
      answer:
        "We help you establish robust data breach prevention strategies and response plans, ensuring that your organization is well-prepared to handle any potential data breaches effectively.",
    },
    {
      question: "Is your cloud infrastructure secure and properly monitored?",
      answer:
        "We provide comprehensive security and monitoring solutions for your cloud infrastructure, ensuring that it remains secure from vulnerabilities and threats.",
    },
    {
      question:
        "Are your employees trained on the latest cybersecurity threats?",
      answer:
        "We offer ongoing training programs to keep your employees informed about the latest cybersecurity threats and best practices, enhancing your overall security posture.",
    },
  ];

  return (
    <>
      <div className="">
        <Navbar />
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Cyber Security
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
                  “GlobalXperts offers tailored cybersecurity solutions to
                  safeguard your data center and cloud environments. Our expert
                  team utilizes advanced threat detection and proactive risk
                  management to deliver robust defenses that fit your business
                  needs.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mt-28">Overview</h2>
          <p className="text-center mt-5 text-gray-700 text-xl">
            Our cyber security practice offers a unique value proposition that
            focuses on data center and cloud security. Here are the key benefits
            that we bring to the table
          </p>
          <ul className="mt-4 text-xl text-gray-500 list-disc list-inside">
            <li>
              <strong>Audit and Compliance:</strong> We ensure your
              infrastructure meets industry standards like PCI DSS, HIPAA, and
              GDPR, offering actionable recommendations for improvement.
            </li>
          </ul>
          <p className="mt-4 text-xl text-gray-500">
            Our services empower you to secure your infrastructure and maintain
            compliance, safeguarding your business against evolving threats.
          </p>
        </div>

        <div className="mt-6">
          <section className="h-screen flex flex-col justify-center items-center gap-y-16 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {" "}
              {/* need some changes */}
              <div className="w-full h-[150px] lg:w-[400px] lg:h-[300px] bg-transparent cursor-pointer group perspective lg:border lg:border-greenCustomColor2">
                <div className="relative lg:preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="lg:absolute  md:backface-hidden w-full h-full">
                    <img
                      src={c1}
                      alt="Movie Poster"
                      className="w-full h-full object-cover "
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="text-center mt-10">Risk Management</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor md:overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-16 text-gray-300">
                      <h1 className="text-3xl font-semibold underline decoration-gray-500 mt-5">
                        Risk Management
                      </h1>
                      <p className="text-lg py-2 text-gray-200 mt-4">
                        Comprehensive audits to ensure compliance with standards
                        like PCI DSS, HIPAA, and GDPR.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Existing Card 2 */}
              <div className="w-full h-[150px] lg:w-[400px] lg:h-[300px] bg-transparent cursor-pointer group perspective lg:border lg:border-greenCustomColor2">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c2}
                      alt="Movie Poster"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="text-center mt-10">
                        Proactive Threat Hunting
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-16 text-gray-300">
                      <h1 className=" text-xl md:text-3xl font-semibold underline decoration-gray-500 mt-5">
                        Proactive Threat Hunting
                      </h1>
                      <p className="text-xs md:text-lg py-2 text-gray-200 mt-4">
                        Stay ahead of threats with our advanced penetration
                        testing services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* New Card 1 */}
              <div className="w-full h-[150px] lg:w-[400px] lg:h-[300px] bg-transparent cursor-pointer group lg:perspective lg:border lg:border-greenCustomColor2">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Movie Poster"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white  text-2xl font-semibold bg-black bg-opacity-40">
                      <p className=" text-center mt-10">
                        Adaptive Security Architectures
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-16 text-gray-300">
                      <h1 className=" text-xl md:text-3xl  font-semibold underline decoration-gray-500 mt-16 md:mt-5">
                        Adaptive Security Architectures
                      </h1>
                      <p className="text-xs md:text-lg py-2 text-gray-200 mt-4">
                        Tailored security solutions using the latest
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* New Card 2 */}
              <div className="w-full h-[150px] lg:w-[400px] lg:h-[300px] bg-transparent cursor-pointer group perspective  lg:border-greenCustomColor2">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c4}
                      alt="New Image 2"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="text-center mt-10">
                        Cutting-Edge Cybersecurity
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-16 text-gray-300">
                      <h1 className=" text-xl md:text-3xl  font-semibold underline decoration-gray-500 mt-16 md:mt-5">
                        Cutting-Edge Cybersecurity
                      </h1>
                      <p className="text-xs md:text-lg py-2 text-gray-200 mt-4">
                        Stay protected from advanced cyber threats with our
                        insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-blueCustomColor p-10 mt-12 lg:mt-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Services
              </h2>
              <div className="security-services mt-2">
                <p className="text-gray-300">
                  Our 24/7 monitoring and incident response services ensure your
                  security policies are enforced effectively. We specialize in:
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Firewall Management
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Session Border Control
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    DDoS Protection
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Security Logs Analysis
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Network Intrusion Prevention
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Vulnerability Scanning
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 16l3 3L22 7"
                      ></path>
                    </svg>
                    Threat Intelligence
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
              <video
                className="w-full rounded-lg"
                autoPlay
                muted
                playsInline
               // src={v1}
                alt="A man working on a laptop in a server room."
              />
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

        <div>
          <div className="mt-0">
            <ContactCard />
          </div>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default CyberSecurity;
