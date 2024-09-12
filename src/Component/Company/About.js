import React from "react";
import companyImage from "../../Assets/imageAbout.jpg"; // Ensure the path to the image is correct
import Navbar from "../Navbar";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">
              Cloud Solutions
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our comprehensive cloud solutions encompass a range of services to
              support your business’s growth and efficiency. From cloud cost
              management to AWS migration, our experts are here to provide you
              with tailored solutions that drive success. Our focus on cloud
              cost optimization and reduction ensures that you receive maximum
              value from your cloud investments.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
            <img
              className="w-full rounded-lg"
              src={companyImage}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mt-12 mb-6 text-gray-800 text-center">
          About GlobalXperts Inc.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded in 2005 and headquartered in Raleigh, North Carolina,
          GlobalXperts operates in three key areas: Professional Services,
          Technical Staffing, and Managed Services support for Data Center for
          On-Premises & Cloud, Security, Collaboration, and SDN in IT networks.
          With a vendor-agnostic approach, our technical staff holds expertise
          in Cisco UC solutions and certifications with AWS Cloud, Microsoft,
          Arista, VMware, EMC, Oracle, NetApp, and more.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our diverse technical resources, from “Smart Hands” to Subject Matter
          Experts (SMEs), are available globally 24/7. We provide comprehensive
          professional services, covering the entire life cycle (planning,
          architecture, design, automation/orchestration, implementation, and
          operations) worldwide, specializing in enterprise networking, Data
          Center, and Cloud technologies.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          GlobalXperts offers managed services ensuring the optimal performance
          of customer IT solutions, particularly catering to dispersed
          workforces and recognizing that each customer we work with has
          different needs. Our 24×7 NOC staff utilizes leading network tools
          like ServiceNow, SolarWinds, N-Able, and ManageEngine ServiceDesk
          Plus.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dedicated to helping customers leverage information technology, we
          provide strategy consultation, cybersecurity, cloud solutions, DevOps,
          automation, and installation services. Partnering with us ensures
          access to the expertise needed for realizing success in today’s
          digital landscape. We stand by our work and maintain the highest
          integrity and quality.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default About;
