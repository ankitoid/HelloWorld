import React, { useRef } from "react";
import {
  FaCloud,
  FaDatabase,
  FaHandshake,
  FaHeadset,
  FaProjectDiagram,
} from "react-icons/fa";
import edu from "../../Assets/edu.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import gslogo from "../../Assets/gvlogo.png";
import ContactCard from "../Contact/ContactCard";

const Government = () => {
  const contactRef = useRef(null); // Ref to contact card

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const capabilities = [
    {
      icon: FaDatabase,
      title: "Data Centers",
      description:
        "Our team of experts understands the critical importance of data centers in today's digital landscape. We offer end-to-end solutions for designing, building, and managing secure data centers that meet the unique needs of federal government agencies for local/on-premises and hybrid solutions.",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description:
        "Embracing the power of the cloud is essential for government agencies looking to enhance agility, scalability, and cost-efficiency. We offer comprehensive cloud solutions tailored to the specific requirements of federal government agencies, including public, private, and hybrid cloud deployments.",
    },
    {
      icon: FaProjectDiagram,
      title: "Collaboration and Unified Communication",
      description:
        "Efficient communication and collaboration are vital for government agencies to streamline operations and enhance productivity. Our collaboration and unified communication solutions enable real-time communication, document sharing, and video conferencing.",
    },
    {
      icon: FaHandshake,
      title: "Professional Services",
      description:
        "Our team of skilled professionals offers exceptional IT consulting and professional services to federal government agencies. We provide strategic planning, technology assessment, and system integration to help you achieve your IT goals.",
    },
    {
      icon: FaHeadset,
      title: "Managed Services",
      description:
        "Government agencies need reliable and proactive IT support to keep their systems running smoothly. Our managed services offer helpdesk services, comprehensive monitoring, maintenance, and support for your IT infrastructure.",
    },
  ];

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-gray-100">
          <div className="p-8 max-w-7xl mx-auto">
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Government</h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    GlobalXperts, a woman-owned 8(a) small business, provides agile and expert IT solutions, combining the personalized approach of a small company with the capabilities of an industry leader. Since 2005, we have delivered scalable infrastructure and managed services using top technologies from Cisco, Microsoft, AWS, and more.
                  </p>
                </div>
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img className="w-full rounded-lg" src={edu} alt="A man working on a laptop in a server room." />
                </div>
              </div>
              <button
                onClick={handleContactUsClick}
                className="px-6 py-2 border-2 mt-8 border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor hover:text-white transition-colors duration-300 shadow-md"
              >
                Contact Us
              </button>
            </div>

            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
              <div className="max-w-7xl text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Overview</h2>
                <p className="mt-3 text-lg text-gray-600">
                  GlobalXperts, a woman-owned 8(a) small business since 2005, combines the agility of a small company with the expertise of a large enterprise.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-12 text-center">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Capabilities</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a trusted partner in providing industry-leading information technology solutions to many organizations, GlobalXperts is exceptionally qualified to support federal agencies with their IT infrastructure and cloud needs.
                </p>

                <div className="space-y-8">
                  {capabilities.map(({ icon: Icon, title, description }, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-3">
                        <Icon className="text-blue-500 text-2xl mr-3" />
                        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mt-8">
                  At GlobalXperts, we pride ourselves on our customer-centric approach and have earned the trust of numerous organizations that call us trusted partners.
                </p>
              </div>
            </div>

            <div className="my-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-center border-blue-500 mt-5">Contract Vehicle</h1>
              <div className="flex justify-center my-8">
                <img src={gslogo} alt="8(a) STARS III" className="w-36 md:w-48" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold my-4">General Services Administration (GSA) 8(a) STARS</h2>
              <h3 className="text-xl font-medium">Government Wide Acquisition Contract (GWAC)</h3>
              <p className="p-6 md:p-12 text-lg md:text-xl mb-4 ">
                <strong>GlobalXperts Inc.</strong> was awarded prime contract #
                47QTCB21D0103 on General Services Administration’s 8(a) Streamlined
                Technology Acquisition Resources for Services (STARS III).
              </p>
              {/* Add remaining contract description and details here... */}
            </div>

            {/* Place the ContactCard here if necessary */}
            <div ref={contactRef}>
              <ContactCard />
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Government;
