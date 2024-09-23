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
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Broadcom and VMWare</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Leading infrastructure software solutions for successful companies.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img className="w-full rounded-lg" src={serviceImage} alt="IT solutions" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {[
            { title: "App Platform", description: "Build and modernize cloud-native apps across any cloud." },
            { title: "Anywhere Workspace", description: "Empower employees to work from anywhere, anytime." },
            { title: "Cloud Infrastructure", description: "Simplify app modernization and multi-cloud operations." },
            { title: "Security", description: "Ensure intrinsic security across apps, clouds, and devices." },
            { title: "Networking", description: "Enhance app operations with network and security virtualization." },
            { title: "Telco Cloud", description: "Deliver applications on any cloud, from core to edge." },
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
          GlobalXperts, a VMware partner, offers managed services, NSX data center support, and virtualization for seamless integration of VMware products.
        </p>
      </div>

      <ContactCard />
      <Footer />
    </>
  );
};

export default VMWarePartner;
