import React from "react";
import hpe from "../../../Assets/hpE.jpg";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

const HewlettPackPartner = () => {
  const services = [
    {
      title: "Compute",
      description:
        "General-purpose and optimized servers for multi-workload and demanding applications.",
    },
    {
      title: "HPC & AI",
      description:
        "Custom solutions for supercomputers and data-intensive workloads, including AI applications.",
    },
    {
      title: "Storage",
      description:
        "Storage-as-a-service with primary storage, hyper-converged infrastructure, and data recovery solutions.",
    },
    {
      title: "Intelligent Edge",
      description:
        "Connects devices at the network edge with Aruba solutions for secure, reliable connectivity.",
    },
    {
      title: "HPE Services",
      description:
        "Digital transformation consulting and IT solutions delivered as a service.",
    },
    {
      title: "HPE GreenLake",
      description:
        "Consistent cloud experience across edge, data center, and public clouds.",
    },
  ];

  return (
    <>
    <Navbar/>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Hewlett Packard
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              HPE provides technology solutions as a service to enhance business
              models and operational performance.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={hpe}
              alt="Hewlett Packard Solutions"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 space-y-12 py-10">
        <h2 className="text-4xl font-bold mb-8 text-black text-center">
          GX Capabilities
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-center">
          As a Hewlett Packard partner, GlobalXperts offers a comprehensive
          suite of services including with the HPE products and services listed
          above.
        </p>
        <p className="text-center">Additionally, we provide these services:</p>
        <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-2">
          <li>Desktop Support</li>
          <li>Hyper-converged storage and compute</li>
          <li>Network-attached infrastructure</li>
          <li>Technology refresh</li>
          <li>Cloud-based virtual desktops</li>
        </ul>
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

export default HewlettPackPartner;
