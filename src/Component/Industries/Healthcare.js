import React, { useRef } from "react";
import {
  FaLaptopMedical,
  FaNotesMedical,
  FaHospital,
  FaHeartbeat,
  FaUserNurse,
} from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import edu from "../../Assets/healthcare.png";
import ContactCard from "../Contact/ContactCard";

const Healthcare = () => {
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
        <div className="bg-gray-100 min-h-screen">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Healthcare Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-24 rounded-lg">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Healthcare
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    In today’s healthcare landscape, technology is transforming
                    patient care and enhancing outcomes through innovative IT
                    solutions. From electronic health records (EHRs) to
                    telemedicine, these technologies streamline healthcare
                    operations, improve efficiency, and reduce costs, ultimately
                    elevating the patient experience. By leveraging advanced
                    analytics, machine learning, and data-driven insights,
                    healthcare providers can make more informed decisions,
                    personalize treatments, and improve care quality.
                    Integrating these IT solutions empowers healthcare
                    organizations to optimize their processes, enhance patient
                    safety, and deliver superior, patient-centered care in an
                    increasingly digital world.{" "}
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src={edu}
                    alt="A man working on a laptop in a healthcare setting."
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
                In the healthcare sector, IT services and solutions are crucial
                for advancing patient care and enhancing outcomes. From
                electronic health records (EHRs) to telemedicine, innovative
                technologies play a significant role in optimizing healthcare
                operations. By integrating these IT solutions, healthcare
                providers can streamline their processes, cut costs, and deliver
                a superior patient experience. Advanced analytics and machine
                learning further amplify this impact by enabling the extraction
                of valuable insights from vast health data, leading to more
                informed decision-making and improved patient outcomes.
              </p>
            </div>

            {/* Capabilities Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12 rounded-lg">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Capabilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  GlobalXperts provides a wide range of healthcare-focused IT
                  services designed to improve patient care, enhance data
                  security, and streamline operations.
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-3">
                      <FaLaptopMedical className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Healthcare IT Infrastructure
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We offer comprehensive IT infrastructure solutions
                      tailored to the healthcare sector, focusing on enhancing
                      operational efficiency and data security. Our expertise
                      includes designing, implementing, and managing robust IT
                      systems that support healthcare providers' unique needs.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaNotesMedical className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Electronic Health Records (EHRs)
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      EHRs are vital for modern healthcare, and we provide
                      solutions that ensure secure, reliable, and easy-to-access
                      patient data management systems, improving clinical
                      workflows and patient outcomes.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-3">
                      <FaHospital className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Telemedicine Solutions
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our telemedicine solutions enable healthcare providers to
                      offer remote consultations, reducing the need for
                      in-person visits and expanding access to care, especially
                      in underserved areas.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaHeartbeat className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Patient Monitoring and Analytics
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We deliver advanced patient monitoring systems integrated
                      with analytics to provide real-time insights, allowing
                      healthcare providers to make data-driven decisions for
                      better patient care.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaUserNurse className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Healthcare Consulting Services
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our consulting services help healthcare organizations
                      optimize their IT strategies, ensuring they are
                      well-equipped to meet the demands of a rapidly evolving
                      industry. We provide expert guidance on technology
                      adoption, compliance, and operational improvements.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-8 text-center">
                  At GlobalXperts, we are committed to partnering with
                  healthcare providers to enhance their services and improve
                  patient outcomes through innovative IT solutions.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-center">
                  Contact us today to discover how our healthcare IT services
                  can help your organization achieve its goals in delivering
                  high-quality patient care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 py-12">
        <div ref={contactRef}>
        <ContactCard />
      </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Healthcare;
