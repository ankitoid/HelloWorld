import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
const FieldServiceOnsite = () => {
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
      question:
        "What types of on-site services does your Field Engineering team provide?",
      answer:
        "We offer comprehensive on-site services, including equipment installation, network setup, structured cabling, site assessments, and troubleshooting for IT infrastructure. Our team ensures efficient, hands-on support to optimize your operations.",
    },
    {
      question: "How does your team handle technology upgrades or refreshes?",
      answer:
        "Our engineers conduct technology refreshes by assessing your current infrastructure, replacing outdated equipment, and upgrading systems to ensure your network stays up-to-date with minimal disruption to business continuity.",
    },
    {
      question:
        "Can you assist with network equipment rack-and-stack services?",
      answer:
        "We provide expert network rack-and-stack services, ensuring proper installation, configuration, and testing of equipment to optimize performance and reduce downtime.",
    },
    {
      question: "Do you offer site assessments before starting a project?",
      answer:
        "We perform detailed site assessments to understand your current IT setup and identify any improvements needed for better efficiency, scalability, and performance.",
    },
    {
      question: "How do you ensure smooth equipment moves and migrations?",
      answer:
        "Our team plans and executes equipment moves and migrations with precision, minimizing downtime and ensuring a seamless transition of your systems from one location to another.",
    },
    {
      question:
        "What kind of support can we expect during 'Device deployment'?",
      answer:
        "We provide end-to-end device deployment services, from configuring and installing hardware to testing and ensuring everything works as intended. Our goal is to make the deployment process as efficient and smooth as possible.",
    },
  ];

  return (
    <>
      <Navbar />

      <Helmet>
        <title> dispatch Services </title>
        <meta name="description" content="   dispatch Services  " />
      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Dispatch Services{" "}
              </h2>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full sm:w-auto"
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

            <div className="w-full text-center lg:text-right mt-10 lg:mt-0 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left mt-8">
                Looking for reliable and efficient on-site repair services for
                your business? With options for 4-hour, 8 hour, or next business
                day arrival times, you can rest assured that your equipment will
                be up and running in no time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-white   rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Field-Services/DispatchService.png"
            alt="A man working on a laptop in a server room."
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Dispatch Service
            </h2>
          </div>

          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            With three large enterprise customer serving sites globally and
            coverage in 120+ countries, we have the experience to handle even
            the most complex repairs. Whether you’re looking for ongoing
            maintenance or a one-time fix, our team is here to help. Contact us
            today to learn more.
          </p>
          <button className=" px-6 py-3 bg-white text-blue-700 border border-blue-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white mt-12">
            GlobalXperts Inc.
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mt-10 mb-8">
        Why Choose GlobalXperts?
      </h2>
      <p className="text-lg text-center mb-10  max-w-6xl mx-auto">
        Our On-Site Repair Service provides a unique value proposition for
        businesses in need of reliable and efficient equipment repairs. Here are
        some of the key benefits of choosing our service:
      </p>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 bg-gray-100 max-w-7xl mx-auto px-4 py-8">
          {[
            {
              title: "Skilled Technicians",
              description:
                "Our team of skilled technicians are experts in diagnosing and repairing a wide range of equipment issues. With years of experience under their belts, they have the knowledge and expertise to get your equipment up and running in no time.",
            },
            {
              title: "Focus on On-Site Repairs",
              description:
                "We specialize in on-site repairs, which means that we come to your location to fix the problem. This saves you time and money, as you don’t have to ship your equipment to a repair center and wait for it to be fixed.",
            },
            {
              title: "Quick Response Times",
              description:
                "We offer 4-hour, 8-hour, or next business day arrival times options, depending on your needs. This means that you can get the repairs you need quickly, minimizing downtime and keeping your business running smoothly.",
            },
            {
              title: "Repair Parts in Hand",
              description:
                "Our technicians always come prepared with repair parts in hand, which means that we can quickly diagnose and fix the issue on the spot.",
            },
            {
              title: "Global Coverage",
              description:
                "With three large enterprise customer serving sites globally and coverage in 165+ countries, we have the experience and expertise to handle even the most complex repairs, no matter where you’re located.",
            },
          ].map((box, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2 border-b-2 border-blue-700">
                  {box.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <p className="text-gray-700 leading-relaxed font-semibold text-lg">
            Overall, our On-Site Repair Service provides businesses with a
            reliable and efficient solution for their equipment repair needs. We
            pride ourselves on delivering high-quality service that helps our
            customers to minimize downtime and maximize productivity.
          </p>
        </div>
      </div>
      <div className="bg-blueCustomColor p-10 mt-8">
        <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Benefits of Dispatch Service
            </h2>
            <p className="mt-2 text-gray-300">
              Our On-Site Repair Service provides a unique value proposition for
              businesses in need of reliable and efficient equipment repairs.
              Here are some of the key benefits of choosing our service:
            </p>
            <ul className="service-list text-gray-300 space-y-2 mt-4">
              {[
                "Skilled Technicians",
                "Focus on On-Site Repairs",
                "Quick Response Times",
                "Repair Parts in Hand",
                "Global Coverage",
              ].map((item) => (
                <li className="flex items-center" key={item}>
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
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <video
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/TraningVideo.mp4"
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

      <Footer />
    </>
  );
};

export default FieldServiceOnsite;
