import React from "react";
import serviceImage from "../../../Assets/bVM.jpeg";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const VMWarePartner = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Broadcom and VMware Partnership</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              A collaborative powerhouse driving cutting-edge infrastructure and cloud solutions that empower companies worldwide.
            </p>
            <p className="mt-3 text-md text-gray-500">
              Broadcom and VMware deliver a unique combination of high-performance network infrastructure and robust cloud virtualization technologies.
              Together, they help enterprises achieve high reliability, secure operations, and seamless integration across diverse IT environments.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img className="w-full rounded-lg" src={serviceImage} alt="IT solutions" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {[
            { title: "App Platform", description: "Build and modernize cloud-native applications seamlessly across hybrid and multi-cloud environments." },
            { title: "Anywhere Workspace", description: "Empower a flexible workforce with secure access from any device, supporting hybrid work models." },
            { title: "Cloud Infrastructure", description: "Simplify cloud operations and enable consistent application performance across multiple cloud providers." },
            { title: "Security", description: "Comprehensive security solutions for safeguarding apps, networks, and endpoints in a zero-trust model." },
            { title: "Networking", description: "Optimize and secure app performance with advanced network virtualization solutions from Broadcom and VMware NSX." },
            { title: "Telco Cloud", description: "Facilitate efficient, scalable service delivery from core to edge, transforming telecom infrastructure." },
          ].map((service, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 space-y-12 py-10">
        <h2 className="text-4xl font-bold mb-8 text-black text-center">GX Capabilities</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-center">
          As a VMware partner, GlobalXperts provides a wide range of capabilities to drive the digital transformation of enterprises.
          Our services include managed support for NSX data center environments, end-to-end virtualization services, and seamless integration with Broadcom’s high-speed network solutions.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700 text-center mt-4">
          This partnership enables businesses to experience superior network performance, streamlined operations, and enhanced scalability, backed by 24/7 technical support and proactive monitoring.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-black text-center">Why Choose Broadcom and VMware?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Innovative Infrastructure</h3>
            <p className="text-gray-700">
              Broadcom and VMware deliver an unmatched infrastructure stack designed for optimal performance, stability, and agility.
              Their solutions offer a foundation for secure, scalable, and resilient IT environments, essential for modern enterprises.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Future-Ready Solutions</h3>
            <p className="text-gray-700">
              With support for multi-cloud deployments and advanced networking, businesses gain a future-proof IT framework capable of adapting to evolving demands.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Comprehensive Security</h3>
            <p className="text-gray-700">
              VMware and Broadcom prioritize security, delivering intrinsic security solutions across networks, applications, and data, with zero-trust models and advanced threat protection.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Enhanced Productivity</h3>
            <p className="text-gray-700">
              By providing Anywhere Workspace solutions, organizations empower employees with flexible, reliable access, enhancing productivity and collaboration.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Cost-Effective Scaling</h3>
            <p className="text-gray-700">
              Solutions from Broadcom and VMware are designed to minimize operational costs while offering scalable, efficient resource management that supports growth without compromising performance.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">24/7 Global Support</h3>
            <p className="text-gray-700">
              GlobalXperts provides around-the-clock support for VMware and Broadcom solutions, ensuring minimized downtime and swift issue resolution, enabling a seamless experience for end-users.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default VMWarePartner;
