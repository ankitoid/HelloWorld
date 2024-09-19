import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import v1 from "../../Assets/Black and White Futuristic Cyber Security Video.mp4";
import colobraction from "../../Assets/cyber.png";
import c1 from "../../Assets/dcdrisk.png";
import c2 from "../../Assets/productive.png";
import c3 from "../../Assets/adaptive.png";
import c4 from "../../Assets/cuttingedge.png";
import { Link } from "react-router-dom";
import ContactCard from '../Contact/ContactCard'

function CyberSecurity() {
  const [activeQuestion, setActiveQuestion] = useState(null);
 
  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  return (
    <div>
      <div className=" w-full  h-screen">
        <div className=" w-full">
          <Navbar />
        </div>
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-14">
          <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-5">
                Cyber Security
              </h2>
              <p className=" mt-8 text-xl text-gray-500 ">
                GlobalXperts offers a comprehensive cybersecurity practice
                focused on safeguarding your data center and cloud environments.
                Our expert-led approach integrates advanced threat detection,
                customized security architectures, and proactive risk management
                to protect your critical assets. By aligning our solutions with
                your unique business needs, we ensure robust, scalable defenses
                that keep your data secure and compliant, allowing your business
                to thrive in a secure environment.
              </p>
              <ul className="mt-4 text-xl text-gray-500 list-disc list-inside">
                <li>
                  <strong>Audit and Compliance:</strong> Ensuring your
                  infrastructure meets industry standards like PCI DSS, HIPAA,
                  and GDPR, and providing recommendations for improvements.
                </li>
              </ul>
              <p className="mt-4 text-xl text-gray-500">
                Our services help secure your infrastructure and maintain
                compliance, safeguarding your business against threats.
              </p>
            </div>
 
            {/* Image Section */}
            <div className="relative mt-10 mb-16 lg:mt-0 lg:w-1/2 ">
              <img
                className="w-full rounded-lg"
                src={colobraction}
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
          </div>
 
          <div className="w-full px-4">
            <h2 className="text-4xl font-bold text-center mt-28">Overview</h2>
            <p className="text-center mt-5 text-gray-700 text-xl">
              Our cyber security practice offers a unique value proposition that
              focuses on data center and cloud security. Here are the key
              benefits that we bring to the table
            </p>
          </div>
 
          <div className=" mt-20">
            <section className="h-screen flex flex-col justify-center items-center gap-y-16 text-white">
              <div className="grid grid-cols-2 gap-8">
                {/* Existing Card 1 */}
                <div className="w-[500px] h-[325px] bg-transparent cursor-pointer group perspective border border-greenCustomColor2">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c1}
                        alt="Movie Poster"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full justify-center text-center mt-24">
                          Risk Management
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <h1 className="text-4xl font-semibold underline decoration-gray-500 mt-5">
                          Risk Management
                        </h1>
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          Our expert team conducts thorough audits of your data
                          center and cloud environments to ensure compliance
                          with evolving standards like PCI DSS, HIPAA, and GDPR.
                          We help manage risks, avoid fines, and maintain robust
                          security.
                        </p>
                        {/* <button className="bg-greenCustomColor2 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-15 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
          Read More
        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
 
                {/* Existing Card 2 */}
                <div className="w-[500px] h-[325px] bg-transparent cursor-pointer group perspective border border-greenCustomColor2">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c2}
                        alt="Movie Poster"
                        className="w-full h-full object-cover "
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full justify-center text-center mt-24 ">
                          {" "}
                          Proactive Threat Hunting
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <h1 className="text-4xl font-semibold underline decoration-gray-500 mt-5">
                          Proactive Threat Hunting
                        </h1>
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          Stay ahead of cyber threats with our proactive threat
                          hunting and advanced penetration testing services. We
                          simulate real-world attacks to identify and address
                          vulnerabilities in your infrastructure before they can
                          be exploited, reducing the risk of breaches and
                          minimizing potential financial impacts.
                        </p>
                        {/* <button className="bg-greenCustomColor2 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-15 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
      Read More
    </button> */}
                      </div>
                    </div>
                  </div>
                </div>
 
                {/* New Card 1 */}
                <div className="w-[500px] h-[325px] bg-transparent cursor-pointer group perspective border border-greenCustomColor2">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c3}
                        alt="Movie Poster"
                        className="w-full h-full object-cover "
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full justify-center text-center mt-10 ">
                          {" "}
                          Adaptive Security Architectures
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <h1 className="text-4xl font-semibold underline decoration-gray-500 mt-5">
                          Adaptive Security Architectures
                        </h1>
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          We create adaptive security solutions tailored to your
                          unique needs, using the latest technologies and
                          strategies. Our services include comprehensive audits
                          and ongoing monitoring to ensure your defenses stay
                          ahead of emerging threats.
                        </p>
                        {/* <button className="bg-greenCustomColor2 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-15 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
      Read More
    </button> */}
                      </div>
                    </div>
                  </div>
                </div>
 
                {/* New Card 2 */}
                <div className="w-[500px] h-[325px] bg-transparent cursor-pointer group perspective border border-greenCustomColor2">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c4}
                        alt="New Image 2"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full justify-center text-center mt-10">
                          Cutting-Edge Cybersecurity
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <h1 className="text-4xl font-semibold underline decoration-gray-500 mt-5">
                          Cutting-Edge Cybersecurity
                        </h1>
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          Benefit from our team’s expertise and the latest
                          cybersecurity trends. We deliver cutting-edge security
                          solutions and insights to protect your business from
                          advanced cyber threats.
                        </p>
                        {/* <button className="bg-greenCustomColor2 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-15 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
      Read More
    </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
 
          <div className="bg-blueCustomColor p-10 mt-40">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Services
                </h2>
                <div className="security-services mt-2">
                  <p className="text-gray-300">
                    GlobalXperts engineers monitor and act on security
                    violations based on your policies. We offer 24×7 monitoring,
                    incident response, and expert troubleshooting for security
                    and SIP issues. Our services include:
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Security Information Management
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                  loop
                  muted
                  playsInline
                  src={v1}
                  alt="A man working on a laptop in a server room."
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
              </div>
            </div>
          </div>
 
          <div className="container mx-auto px-4 py-16">
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
                    Do you want to secure your data from cyber threats?
                  </h2>
                  {activeQuestion === 0 && (
                    <p className="text-lg mb-4">
                      We provide comprehensive cybersecurity solutions to
                      protect your data from all types of cyber threats,
                      including malware, ransomware, and unauthorized access.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(1)}
                  >
                    Can you detect and respond to a ransomware attack
                    confidently?
                  </h2>
                  {activeQuestion === 1 && (
                    <p className="text-lg mb-4">
                      our proactive threat detection and response strategies
                      ensure that we can quickly identify and mitigate
                      ransomware attacks, minimizing impact and facilitating a
                      swift recovery.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(2)}
                  >
                    Are you protected against phishing and social engineering
                    attacks?
                  </h2>
                  {activeQuestion === 2 && (
                    <p className="text-lg mb-4">
                      We implement advanced security measures and conduct
                      regular training to defend against phishing and social
                      engineering attacks, safeguarding your organization from
                      these common threats.
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
                    Is your organization ready to prevent and handle a data
                    breach?
                  </h2>
                  {activeQuestion === 3 && (
                    <p className="text-lg mb-4">
                      we help you establish robust data breach prevention
                      strategies and response plans, ensuring that your
                      organization is well-prepared to handle any potential data
                      breaches effectively.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(4)}
                  >
                    Is your cloud infrastructure secure and properly monitored?
                  </h2>
                  {activeQuestion === 4 && (
                    <p className="text-lg mb-4">
                      We provide comprehensive security and monitoring solutions
                      for your cloud infrastructure, ensuring that it remains
                      secure from vulnerabilities and threats.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(5)}
                  >
                    Are your employees trained on the latest cybersecurity
                    threats?
                  </h2>
                  {activeQuestion === 5 && (
                    <p className="text-lg mb-4">
                      we offer ongoing training programs to keep your employees
                      informed about the latest cybersecurity threats and best
                      practices, enhancing your overall security posture.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactCard/>
          <Footer />
        </div>
      </div>
    </div>
  );
}
 
export default CyberSecurity;
 
 