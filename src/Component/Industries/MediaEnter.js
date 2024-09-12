import React, { useRef } from "react";
import {
  FaCode,
  FaNetworkWired,
  FaCloud,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import edu from "../../Assets/media.jpg";
import ContactCard from "../Contact/ContactCard";

const MediaEnter = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-gray-100 ">
          <div className="p-8 max-w-7xl mx-auto">
            {/* IT Industry Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-24 rounded-lg">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Media & Entertainment{" "}
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    In the rapidly evolving media and entertainment industry,
                    innovative IT solutions are transforming how content is
                    created, distributed, and consumed. From cloud-based
                    workflows and digital asset management to cybersecurity and
                    high-performance network setups, these technologies are
                    crucial for enhancing operational efficiency, protecting
                    valuable content, and delivering seamless experiences to
                    audiences worldwide. By integrating advanced IT services,
                    media and entertainment companies can streamline production,
                    improve collaboration, and scale their reach, ensuring they
                    stay competitive in a dynamic digital landscape. Our IT
                    solutions empower businesses to push creative boundaries,
                    optimize performance, and achieve their strategic vision.{" "}
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src={edu}
                    alt="IT professionals working on a network setup."
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
                </div>
              </div>

              <button
                onClick={handleContactUsClick}
                className="px-6 py-2 border-2 mt-16 2xl:ml-0  border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
              >
                Contact Us
              </button>
            </div>

            {/* Overview Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                In today’s fast-paced digital landscape, IT solutions are the
                backbone of successful businesses. From cloud computing and
                cybersecurity to software development and network management,
                innovative IT services are essential for staying ahead of the
                competition. By leveraging advanced technologies, companies can
                optimize processes, enhance security, and drive growth. Our IT
                solutions are designed to empower businesses, enabling them to
                operate more efficiently and achieve their strategic goals.
              </p>
            </div>

            {/* Capabilities Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12 rounded-lg">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Capabilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  GlobalXperts provides comprehensive IT services designed to
                  enhance business operations, improve security, and support
                  digital transformation.
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-3">
                      <FaCode className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Software Development
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our software development services include custom
                      application design, development, and maintenance,
                      providing businesses with tailored solutions that meet
                      their unique needs and enhance operational efficiency.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaNetworkWired className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Network Management
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We provide end-to-end network management services,
                      ensuring secure, reliable, and efficient connectivity that
                      supports business operations and communication needs.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaCloud className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Cloud Solutions
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our cloud services enable businesses to migrate, manage,
                      and optimize their cloud infrastructure, providing
                      scalability, flexibility, and cost-effectiveness for
                      growing needs.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaShieldAlt className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Cybersecurity
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Protect your business from evolving threats with our
                      comprehensive cybersecurity solutions, including threat
                      detection, response, and compliance services to safeguard
                      data and assets.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaCogs className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        IT Consulting
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our consulting services provide expert guidance to help
                      businesses navigate their IT strategy, optimize processes,
                      and implement technologies that drive success and
                      innovation.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-8 text-center">
                  At GlobalXperts, we are dedicated to empowering businesses
                  with cutting-edge IT solutions that drive efficiency,
                  security, and growth.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-center">
                  Contact us today to learn how our IT services can help your
                  business thrive in the digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={contactRef}>
          <ContactCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MediaEnter;
