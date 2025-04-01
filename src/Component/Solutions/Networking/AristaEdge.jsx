import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const AristaEdge = () => {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen flex-col md:flex-row items-center justify-between p-6 bg-gray-100 mt-10">
        {/* Left Side - Description */}
        <div className="md:w-1/2 w-full text-left mb-6 md:mb-0 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">
            Edge Threat Management with Arista Networks
          </h2>
          <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
            Edge Threat Management is a crucial part of Arista Networks'
            Cognitive Unified Edge (CUE), enabling businesses to innovate by
            integrating security and networking functions into a comprehensive
            “edge as a service” solution.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            CUE offers a plug-and-play experience for small enterprise LAN,
            Wi-Fi, security, and micro WAN connectivity, providing the
            flexibility and performance needed to thrive in a rapidly changing
            digital environment.
          </p>
          <div className=" mt-4">
            <Link
              to="/solutions/Networking"
              className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700 transition"
            >
              Back
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/aristaEdge.png"
            alt="Arista Edge"
            className="w-full h-auto rounded-lg shadow-md max-w-md md:max-w-full"
          />
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

export default AristaEdge;
