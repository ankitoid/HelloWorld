import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const TruenasPartner = () => {
  return (
    <>
      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                XIsystems TrueNAS Partner Information
              </h1>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-right  lg:mt-10 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                Software/hardware and services are a good fit for small and
                medium businesses that helps fill the gap between commodity
                hardware and enterprise solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        {/* Two-column Layout for Image and Content */}
        <div className="lg:flex lg:items-center lg:space-x-12 mt-8">
          {/* Left Column: Text */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              IX systems – TrueNAS Enterprise
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Software/hardware and services are a good fit for small and medium
              businesses that helps fill the gap between commodity hardware and
              enterprise solutions. Their support offerings, high availability
              deployments, and attractive price point make it a viable option
              for small and medium businesses when on-site storage is an
              operational requirement.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/trnas.png"
              alt="TrueNAS Partner"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-8 px-4 lg:px-0 justify-center text-center">
        <h2 className="text-3xl font-bold pl-4 mb-2">Product Offerings</h2>
        <p className="ml-4 text-gray-700">
          Our product offerings are focused on small and medium businesses to
          offer as much assistance as you need to deliver a solid platform to
          protect your priceless data.
        </p>

        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <h4 className="text-2xl font-bold mt-10">TrueNAS Scale:</h4>
          <ul className="list-disc ml-8 text-left">
            <li>Hyperconverged Storage that Scales Up or Out</li>
            <li>Integrated Linux containers & VMs</li>
            <li>Deploy as a Single Node or Cluster</li>
            <li>Designed for Hybrid Clouds</li>
            <li>Uses Open ZFS | highest level performing file system in the marketplace today.</li>
          </ul>
        </div>
      </div>

      {/* Service Levels Section */}
      <div className="max-w-7xl mx-auto mb-8 px-4 lg:px-0">
        <h2 className="text-3xl font-bold pl-4 mb-2 border-blue-400 border-b-4 rounded-b-lg">Service Levels</h2>

        {/* Bronze Support */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 ">
          <h3 className="text-xl font-semibold">Bronze Support</h3>
          <p className="text-gray-600">
            Available from 6:00 AM to 6:00 PM PST, Monday to Friday. After
            hours, calls are answered by a service. Refer to your service
            contract for coverage.
          </p>
        </div>
        <div className="p-4 ">
          <h3 className="text-xl font-semibold">Silver Support</h3>
          <p className="text-gray-600">
            24x5 support for critical issues. Maintenance can be scheduled 48
            hours in advance.
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">Gold Support</h3>
          <p className="text-gray-600">
            24x7 support for severe disruptions. Maintenance can be scheduled 48
            hours in advance.
          </p>
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

export default TruenasPartner;
