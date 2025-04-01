import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-blueCustomColor text-gray-100 py-40 md:mt-0 2xl:mt-0">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/NetwrokingVideo1.mp4"
            className="h-full w-full object-cover opacity-30"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 container mx-auto">
          {/* Top Section with Videos and Title */}
          <div className="flex flex-col md:flex-row mx-auto justify-left md:justify-start items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 mb-12">
            <Link to="/" className="flex items-center md:ml-20 2xl:ml-0 ">
              <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/gxNewLogo.png" alt="Logo" className="h-14 2xl:h-16  md:h-16 " />
            </Link>
          </div>

          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-16">
            {/* Address Section */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-2xl font-semibold">Address</h3>
              <p className="text-lg mt-5 mb-0">
                5540 Centerview Drive, Suite 200,
                <br />
                <span>Raleigh, NC 27606</span>
              </p>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 01-1.21.502l-4.493-1.498a1 1 0 01-.684-.949V5z"
                  />
                </svg>
                <a
                  href="tel:+19193425482"
                  className="ml-2 text-lg hover:text-gray-400"
                >
                  +1 919-342-5482
                </a>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@globalxperts.net"
                  className="ml-2 text-lg hover:text-gray-400"
                >
                  info@globalxperts.net
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-2xl font-semibold mb-1">
                Services and Support
              </h3>
              <p className="text-lg mt-5 hover:text-gray-500">
                <Link to="/service/Field-Services">Field Services</Link>
              </p>
              <div className="flex items-center mt-2">
                <Link
                  to="/service/Managed-Services"
                  className="ml-0 text-lg hover:text-gray-400"
                >
                  Managed Services
                </Link>
              </div>
              <div className="flex items-center mt-2">
                <Link
                  to="/service/Professional-Services"
                  className="ml-1=0 text-lg hover:text-gray-400"
                >
                  Professional Services
                </Link>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-2xl font-semibold">Quick Links</h3>
              <ul className="text-lg mb-1 mt-3">
                <li className="mb-1">
                  <Link to="/solutions/cloud" className="hover:text-gray-400">
                    Solutions
                  </Link>
                </li>
                <li className="mb-0">
                  <Link
                    to="/service/Field-Services"
                    className="hover:text-gray-400"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/Industries/Education"
                    className="hover:text-gray-400"
                  >
                    Industries
                  </Link>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* Info Section */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-2xl font-semibold mb-5 ">Info</h3>
              <ul className="text-lg">
                <li className="mb-2">
                  <Link to="/Careers" className="hover:text-gray-400">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/Company/About" className="hover:text-gray-400">
                    Company
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact-us" className="hover:text-gray-400">
                    ContactUs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-white py-4 bg-greenCustomColor2">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 px-4">
          <p>&copy; 2025 GlobalXperts. All rights reserved.</p>
          <Link
            to={"/Private-policy"}
            className="underline hover:text-gray-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
