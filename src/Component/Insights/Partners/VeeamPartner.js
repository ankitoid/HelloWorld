import React from "react";
import p16 from "../../../Assets/logos/p16.png";
import Navbar from "../../Navbar";
import truenas from "../../../Assets/trnas.png";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import dba from "../../../Assets/dba.png";
import dba1 from "../../../Assets/dba1.png";
import dba2 from "../../../Assets/dba2.png";
import dba3 from "../../../Assets/dba3.png";
import dba4 from "../../../Assets/dba4.png";
import dba5 from "../../../Assets/dba5.png";
import dba6 from "../../../Assets/dba6.png";
import dba7 from "../../../Assets/dba7.png";

const VeeamPartner = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Veeam Partner Overview */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mt-8">Veeam Partner Information</h1>
          <div className="reseller-type mt-4">
            <span className="text-gray-600">Value Added Reseller</span>
          </div>
          <div className="logo mt-4 flex justify-center">
            <img src={p16} alt="Veeam Logo" className="h-32 w-44" />
          </div>
          <div className="partners mt-8">
            <h3 className="font-bold text-2xl">Overview</h3>
          </div>
          <div className="market-leader mt-6 text-sm md:text-base">
            <p>
              Veeam offers comprehensive solutions for data protection, disaster recovery, and threat mitigation, ensuring secure and reliable data management.
            </p>
            <h1 className="font-bold text-2xl mt-6">AWS Storage Partners</h1>
          </div>
          <div className="logo mt-4 flex justify-center">
            <img src={p16} alt="Veeam Logo" className="h-32 w-44" />
          </div>
          <div className="market-leader mt-6 text-left">
            <p>
              Veeam is the market leader trusted by:
              <ul className="list-disc ml-6 mt-2">
                <li>81% of Fortune 500 companies</li>
                <li>72% of Global 2000 companies</li>
              </ul>
            </p>
          </div>
          <div className="logo mt-8 flex justify-center">
            <img src={truenas} alt="TrueNAS Logo" className="h-20 w-48" />
          </div>
        </div>

        {/* Product Offerings */}
        <div className="max-w-7xl mx-auto mb-8 px-4 lg:px-0">
          <h2 className="text-3xl font-bold pl-4 mb-4 mt-8">Product Offerings</h2>
          <p className="ml-4 text-gray-700 mb-6">
            We offer a robust platform to protect your valuable data, ensuring reliability and security.
          </p>

          {/* Service Levels */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold pl-4 mb-4">Service Levels</h2>

            {/* Bronze Support */}
            <div className="p-4 border-b">
              <h3 className="text-xl font-semibold">Bronze Support</h3>
              <p className="text-gray-600">
                Available from 6:00 AM to 6:00 PM PST, Monday to Friday. After hours, calls are routed through a service.
              </p>
            </div>

            {/* Silver Support */}
            <div className="p-4 border-b">
              <h3 className="text-xl font-semibold">Silver Support</h3>
              <p className="text-gray-600">
                24x5 support for critical issues, with maintenance scheduled 48 hours in advance.
              </p>
            </div>

            {/* Gold Support */}
            <div className="p-4">
              <h3 className="text-xl font-semibold">Gold Support</h3>
              <p className="text-gray-600">
                24x7 support for severe disruptions, with maintenance scheduled 48 hours in advance.
              </p>
            </div>
          </div>
        </div>

        {/* AWS Technology Competencies */}
        <div className="max-w-7xl mx-auto mb-8 px-4 lg:px-0">
          <h2 className="text-3xl font-bold pl-4 mb-4 mt-8">AWS Technology Competencies</h2>
          <p className="ml-4 text-gray-700 mb-6">
            These competencies showcase our expertise in AWS services and customer success across specialized areas.
          </p>

          {/* Competency Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img src={dba} alt="AWS Technology Badge" />
              <p className="text-center mt-4">
                Expertise in data protection and disaster recovery with AWS storage services.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={dba1} alt="AWS Block Storage Badge" />
              <p className="text-center mt-4">
                Skilled in AWS Elastic Block Store (EBS) services for cloud storage.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={dba2} alt="AWS Cloud Computing Badge" />
              <p className="text-center mt-4">
                Knowledgeable in AWS cloud computing, services, and security.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={dba3} alt="AWS Co-Selling Badge" />
              <p className="text-center mt-4">
                Proficient in co-selling with AWS and delivering cloud solutions.
              </p>
            </div>
          </div>

          {/* AWS Certifications */}
          <h1 className="font-bold text-3xl mt-10 mb-6 text-center">AWS Certifications</h1>
          <p className="text-center mb-6">
            Demonstrating expertise in designing, deploying, and managing AWS cloud solutions.
          </p>

          {/* Certification Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img src={dba4} alt="AWS Architect Badge" />
              <p className="text-center mt-4">
                AWS Architect certification for designing technical strategies.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={dba5} alt="AWS Advanced Architect Badge" />
              <p className="text-center mt-4">
                AWS certification for secure and robust cloud solutions.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={dba6} alt="AWS Security Badge" />
              <p className="text-center mt-4">
                Certified in AWS security services and shared responsibility models.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={dba7} alt="AWS Cloud Practitioner Badge" />
              <p className="text-center mt-4">
                Cloud Practitioner certification for foundational AWS services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactCard />
      <Footer />
    </>
  );
};

export default VeeamPartner;
