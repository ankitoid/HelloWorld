import React from "react";
import trunasImg from "../../../Assets/trnas.png";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const TruenasPartner = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        {/* Two-column Layout for Image and Content */}
        <div className="lg:flex lg:items-center lg:space-x-12 mt-8">
          {/* Left Column: Text */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              XIsystems TrueNAS Partner Information
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              We provide small and medium businesses a cost-effective bridge
              between commodity and enterprise solutions with high availability.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={trunasImg}
              alt="TrueNAS Partner"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-8 px-4 lg:px-0">
        <h2 className="text-3xl font-bold pl-4 mb-2">
          Product Offerings
        </h2>
        <p className="ml-4 text-gray-700">
          Our offerings focus on providing comprehensive assistance to deliver
          a robust platform for protecting your valuable data.
        </p>
      </div>

      {/* Service Levels Section */}
      <div className="max-w-7xl mx-auto mb-8 px-4 lg:px-0">
        <h2 className="text-3xl font-bold pl-4 mb-2">
          Service Levels
        </h2>

        {/* Bronze Support */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold">Bronze Support</h3>
          <p className="text-gray-600">
            Available from 6:00 AM to 6:00 PM PST, Monday to Friday. After hours,
            calls are answered by a service. Refer to your service contract for coverage.
          </p>
        </div>

        {/* Silver Support */}
        <div className="p-4 ">
          <h3 className="text-xl font-semibold">Silver Support</h3>
          <p className="text-gray-600">
            24x5 support for critical issues. Maintenance can be scheduled 48 hours in advance.
          </p>
        </div>

        {/* Gold Support */}
        <div className="p-4">
          <h3 className="text-xl font-semibold">Gold Support</h3>
          <p className="text-gray-600">
            24x7 support for severe disruptions. Maintenance can be scheduled 48 hours in advance.
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
