import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import comp from "../../Assets/spider.jpg";
import Footer from "../Footer";
import v1 from "../../Assets/TCDvid.mp4";
import colobraction from "../../Assets/colob1.webp";
import ContactCard from "../Contact/ContactCard";
import c1 from "../../Assets/cloud2.jpg";
import c2 from "../../Assets/migration.avif";
import c3 from "../../Assets/image (10).png";
import { Link } from "react-router-dom";

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

  const faqs = [
    {
      question: 'What is Slack, and how does it improve team collaboration?',
      answer:
        'Slack is a communication platform that brings team conversations, files, and tools into one place. It improves collaboration by allowing teams to organize communication in channels, share files instantly, and integrate with various productivity apps, making workflows more efficient and reducing email clutter.',
    },
    {
      question: 'How does Microsoft Teams enhance remote work?',
      answer:
        'Microsoft Teams is a collaboration tool that combines chat, video conferencing, file sharing, and app integration. It enhances remote work by providing a centralized hub where teams can communicate, conduct virtual meetings, collaborate on documents in real-time, and integrate with Microsoft 365 apps for seamless workflows.',
    },
    {
      question: 'What is Google Workspace, and why is it popular for team collaboration?',
      answer:
        'Google Workspace is a suite of cloud-based productivity and collaboration tools, including Gmail, Google Drive, Docs, Sheets, and Meet. It is popular for team collaboration due to its real-time editing capabilities, easy file sharing, and integration with other Google services, making team communication and project management more effective.',
    },
    {
      question: 'How does Asana help in managing team projects?',
      answer:
        'Asana is a project management tool designed to help teams organize, track, and manage their work. It allows teams to create projects, assign tasks, set deadlines, and track progress in a visually appealing way, improving productivity and ensuring that everyone stays on the same page.',
    },
    {
      question: 'What is Trello, and how does it support team workflows?',
      answer:
        'Trello is a visual project management tool that uses boards, lists, and cards to organize tasks and projects. It supports team workflows by providing a clear, visual overview of work progress, enabling teams to manage tasks, assign responsibilities, and streamline communication in a flexible and user-friendly format.',
    },
    {
      question: 'How does Zoom facilitate virtual meetings?',
      answer:
        'Zoom is a video conferencing platform that facilitates virtual meetings, webinars, and online collaboration. It allows teams to connect face-to-face from anywhere, share screens, record sessions, and collaborate in real-time, making it an essential tool for remote and hybrid work environments.',
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
                  “Our Collaboration Technologies Design/Build" service
                  creates tailored systems that enhance team communication and
                  productivity through optimized hardware and software
                  solutions.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-4xl font-bold text-center mt-28">Overview</h2>
          <p className="text-center mt-5 text-gray-700 text-xl">
            Our Collaboration Technologies Design and Build services enhance
            communication through tailored solutions such as Cisco Unified
            Communications, AWS Connect, and ConnectWise. We develop scalable
            contact centers and streamline operations to boost efficiency and
            customer service.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-14  mt-10 px-4">
            {/* Box 1 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c1}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">Unified Communications</p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Unified Communications with Cisco, integrating voice,
                      video, and messaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c2}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">Cloud Contact Center</p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Cloud Contact Center solutions with AWS Connect for
                      exceptional customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c3}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">Business Management </p>
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

        {/* <div className="bg-blueCustomColor p-10 mt-28">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Value Proposition
              </h2>
              <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                Our Collaboration Technologies Design and Build services enhance
                communication through expert solutions like Cisco Unified
                Communications, AWS Connect, and ConnectWise. We deliver
                scalable, flexible solutions that boost productivity, improve
                customer experiences, and reduce costs. Partner with us to
                leverage cutting-edge technologies for your business growth.
              </p>
            </div>

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
        </div> */}

        <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Frequently Asked Questions</h1>
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
