import React, { useState } from "react";
import Navbar from "../Navbar";
import comp from "../../Assets/spider.jpg";
import Footer from "../Footer";
import v1 from "../../Assets/gradient.mp4";
import colobraction from "../../Assets/colob1.webp";
import ContactCard from '../Contact/ContactCard'
import c1 from "../../Assets/cloud2.jpg";
import c2 from "../../Assets/migration.avif";
import c3 from "../../Assets/image (10).png";
import { Link } from "react-router-dom";

function CollaborationTechnologies() {
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
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-14">
          <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Collaboration Technologies Design/Build
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                "Collaboration Technologies Design/Build" involves creating and
                implementing systems and infrastructure for effective team
                communication and collaboration, including hardware and software
                solutions tailored to enhance productivity and connectivity.
              </p>
            </div>
            {/* Image Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
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
              Our Collaboration Technologies Design and Build services enhance
              communication and collaboration through custom solutions like
              Cisco Unified Communications, AWS Connect, and ConnectWise. We
              tailor these technologies to improve team communication, create
              scalable contact centers, and streamline business operations.
              Contact us to boost your organization's efficiency and customer
              service.
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
                      <p className="w-full text-center">
                        Unified Communications
                      </p>
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

          <div className="bg-blueCustomColor p-10 mt-28">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Value Proposition
                </h2>
                <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                  Our Collaboration Technologies Design and Build services
                  enhance communication and collaboration through expert
                  solutions in Cisco Unified Communications, AWS Connect, and
                  ConnectWise. We deliver custom, scalable, and flexible
                  solutions to boost productivity, improve customer experience,
                  and reduce costs. Partner with us to leverage the latest
                  technologies and drive your business growth.
                </p>
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
                    What is Slack, and how does it improve team collaboration?
                  </h2>
                  {activeQuestion === 0 && (
                    <p className="text-lg mb-4">
                      Slack is a communication platform that brings team
                      conversations, files, and tools into one place. It
                      improves collaboration by allowing teams to organize
                      communication in channels, share files instantly, and
                      integrate with various productivity apps, making workflows
                      more efficient and reducing email clutter.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(1)}
                  >
                    How does Microsoft Teams enhance remote work?
                  </h2>
                  {activeQuestion === 1 && (
                    <p className="text-lg mb-4">
                      Microsoft Teams is a collaboration tool that combines
                      chat, video conferencing, file sharing, and app
                      integration. It enhances remote work by providing a
                      centralized hub where teams can communicate, conduct
                      virtual meetings, collaborate on documents in real-time,
                      and integrate with Microsoft 365 apps for seamless
                      workflows.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(2)}
                  >
                    What is Google Workspace, and why is it popular for team
                    collaboration?
                  </h2>
                  {activeQuestion === 2 && (
                    <p className="text-lg mb-4">
                      Google Workspace is a suite of cloud-based productivity
                      and collaboration tools, including Gmail, Google Drive,
                      Docs, Sheets, and Meet. It is popular for team
                      collaboration due to its real-time editing capabilities,
                      easy file sharing, and integration with other Google
                      services, making team communication and project management
                      more effective.
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
                    How does Asana help in managing team projects?
                  </h2>
                  {activeQuestion === 3 && (
                    <p className="text-lg mb-4">
                      Asana is a project management tool designed to help teams
                      organize, track, and manage their work. It allows teams to
                      create projects, assign tasks, set deadlines, and track
                      progress in a visually appealing way, improving
                      productivity and ensuring that everyone stays on the same
                      page.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(4)}
                  >
                    What is Trello, and how does it support team workflows?
                  </h2>
                  {activeQuestion === 4 && (
                    <p className="text-lg mb-4">
                      Trello is a visual project management tool that uses
                      boards, lists, and cards to organize tasks and projects.
                      It supports team workflows by providing a clear, visual
                      overview of work progress, enabling teams to manage tasks,
                      assign responsibilities, and streamline communication in a
                      flexible and user-friendly format.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(5)}
                  >
                    How does Zoom facilitate virtual meetings?
                  </h2>
                  {activeQuestion === 5 && (
                    <p className="text-lg mb-4">
                      Zoom is a video conferencing platform that facilitates
                      virtual meetings, webinars, and online collaboration. It
                      allows teams to connect face-to-face from anywhere, share
                      screens, record sessions, and collaborate in real-time,
                      making it an essential tool for remote and hybrid work
                      environments.
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

export default CollaborationTechnologies;
