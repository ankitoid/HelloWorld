import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import { FcCustomerSupport } from "react-icons/fc";

const Cloud = () => {
  const images = ["https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/aws2.jpg", "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/cloud.avif"]; // Array of image imports
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageSubIndex, setCurrentImageSubIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section
  const contactRef = useRef(null); // Reference to the contact section
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

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Combine both setState functions into one `afterChange` function
  const handleAfterChange = (index) => {
    setCurrentImageIndex(index);
    setCurrentImageSubIndex(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    afterChange: handleAfterChange,
  };

  const texts = ["Amazon Partner Information", "Microsoft Azure"];

  const subTexts = [
    "Software and Services Staff Members – AWS Technology Competencies are a way for AWS",
    "Overview Microsoft Azure – Optimize across workloads and environments and accomplish more with a comprehensive cloud platform.",
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
                  Cloud & DevOps
                </h1>
                <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
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
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                  GlobalXperts delivers expert cloud solutions, from consulting
                  and migration to DevOps and 24/7 support, ensuring optimal
                  performance and cost efficiency throughout your cloud
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-7xl mx-auto  ">
          <h2 className="text-4xl font-bold text-center mt-28">Overview</h2>
          <p className="text-center mt-5 text-gray-700 text-xl">
            GlobalXperts is your one-stop shop for cloud computing, offering
            independent expertise and services from strategy development to
            workload migration and continuous optimization.
          </p>
          <p className="text-center mt-5 text-gray-700 text-xl">
            We align your people, processes, and technology, ensuring visibility
            and resilience as your cloud infrastructure scales with business
            growth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-20 flex flex-wrap justify-center gap-14 px-4">
          {/* Box 1 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <Link to="/solutions/cloud/vmwarecloud">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/cloud2.jpg"
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">
                      VMware Cloud on AWS Resources
                    </p>
                  </div>
                </div>
              </Link>
              {/* Back side with content */}
              <Link
                to={"/solutions/cloud/vmwarecloud"}
                className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden"
              >
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                  <p className="text-lg py-2  mt-10">
                    Add value to your business with the right Cloud strategy to
                    cut down costs and deliver a differentiated customer
                    experience.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <Link to="/solutions/cloud/Migration">
                <div className="absolute  backface-hidden w-full h-full">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/migration.avif"
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">Cloud Migration</p>
                  </div>
                </div>
              </Link>
              {/* Back side with content */}
              <Link
                to={"/solutions/cloud/Migration"}
                className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden"
              >
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                  <p className="text-lg py-2  mt-10">
                    Seamless migration of your data, applications & workloads
                    from data centers & on-premise to Cloud.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <Link to="/solutions/Cloud/Devops">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/image+(10).png"
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">DevOps as a Service</p>
                  </div>
                </div>
              </Link>
              {/* Back side with content */}
              <Link
                to={"/solutions/cloud/Devops"}
                className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden"
              >
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                  <p className="text-lg py-2 text-gray-200 mt-10">
                    Automation of end-to-end delivery pipeline across Cloud
                    platforms for faster go-to-market, increased efficiency &
                    reduced cost.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Box 4 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <Link to="/service/Managed-Services">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/image+(11).png"
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">Managed Services</p>
                  </div>
                </div>
              </Link>
              {/* Back side with content */}
              <Link
                to={"/service/Managed-Services"}
                className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden"
              >
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                  <p className="text-lg py-2 text-gray-200 mt-10">
                    Support and monitoring by certified SysOps and Cloud
                    administrators for incident handling & resolution.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Box 5 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <Link to="/solutions/cloud/Blockchain">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/blockChain.jpeg"
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="mb-0">Blockchain Technology</p>
                  </div>
                </div>
              </Link>
              {/* Back side with content */}
              <Link
                to={"/solutions/cloud/Blockchain"}
                className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden"
              >
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                  <p className="text-base py-2 text-gray-200 mt-10">
                    Blockchains are an emerging technology pattern that can
                    radically improve banking, supply-chain and other
                    transaction networks, giving them new opportunities for
                    innovation and growth while reducing cost and risk.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Box 6 */}
          <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <Link to="/solutions/cloud/iosa">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/image+(13).png"
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">
                      Prolific I/O – Storage Accelerator (IOSA)
                    </p>
                  </div>
                </div>
              </Link>

              {/* Back side with content */}
              <Link
                to={"/solutions/cloud/iosa"}
                className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden"
              >
                <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                  <p className="text-sm py-1 text-gray-200 mt-5">
                    <div class="  rounded-md">
                      <ul class="list-disc list-inside text-white">
                        <li>
                          Prolific I/O Storage Accelerator dynamically scales
                          throughput and IOPS to meet peak demand.
                        </li>
                        <li>
                          Ensures peak throughput runs only when needed to avoid
                          unnecessary expenses during off-peak periods.
                        </li>
                        <li>
                          Leverages additional EC2 instances as accelerators to
                          offload EBS read and write operations.
                        </li>
                      </ul>
                    </div>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative bg-white p-8 mt-10">
          <h1 className="text-3xl font-bold  py-5">Cloud Partners</h1>
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {texts[currentImageIndex]}
                </h2>
                <p className="text-gray-600 mb-6">
                  {subTexts[currentImageSubIndex]}
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/solutions/cloud/aws"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Discover Solution
                  </Link>
                  <button
                    onClick={handleContactUsClick}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-lg"
                  >
                    <FcCustomerSupport size={24} />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
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

      <div ref={contactRef}>
        <ContactCard />
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Cloud;
