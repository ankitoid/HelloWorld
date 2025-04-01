import React, { useRef } from "react";
import Navbar from "../../Navbar";
import sm from "../../../Assets/virtualworkx.jpg";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import vwxWorking from  '../../../Assets/virtualWorking.jpg'
import { Link } from "react-router-dom";
const VirtualWork = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />
      
 <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[65vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
              Virtual Workx

              </h1>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-4 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                “Amazon WorkSpaces offers secure, managed cloud desktops, providing seamless access to your workspace from any device, anywhere. ”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-20">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-8">
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Transform your remote work experience with Virtual Workx, empowering teams with flexibility and productivity. Eliminate the hassles of managing physical desktops and embrace a modern workspace solution tailored to your needs.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-12">
            <img
              className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={sm}
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6 max-w-7xl mx-auto">
      
        
     
        <h1 className="mt-8 text-2xl font-semibold ">How  It Works
        </h1>
        <div className="max-w-7xl mx-auto  flex justify-center lg:justify-end items-center mt-12">
       
            <img
              className=" rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={vwxWorking}
              alt="A man working on a laptop in a server room."
            />
          </div>

        {/* Demo Section */}
        <div className="mt-16 p-8 bg-white border-t border-gray-200 shadow-md">
          {/* Title Section */}
          <h2 className="text-3xl font-bold flex items-center mb-4">
            <span className="border-l-4 border-blue-500 pl-2">
              Plan Your Demo Today
            </span>
          </h2>

          {/* Content Section */}
          <p className="text-gray-700 mb-4">
            Easily provision cloud-based virtual desktops for your users with Amazon WorkSpaces. Whether supporting a remote workforce or simplifying desktop management, we have you covered with a solution that fits your needs.
          </p>

          <p className="text-gray-700 mb-4">
            For a limited time, try Amazon WorkSpaces for free with two standard bundle virtual desktops for 3 billing cycles. Experience the full capabilities of WorkSpaces, including data security, centralized management, and the ability to access your desktop from any device.
          </p>

          <p className="text-gray-700 mb-4">
            Imagine a workplace where employees can log in from anywhere, access all the tools they need, and collaborate seamlessly. With Amazon WorkSpaces, this is now a reality.
          </p>

          <p className="text-gray-700 mb-4">
            Don’t miss out! Contact our Sales team today to take advantage of this exclusive demo offer and discover how Virtual Workx can elevate your organization’s productivity and efficiency.
          </p>

          <div className="mt-6 text-center">
            <button
              onClick={handleContactUsClick}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Contact Card Section */}
      <div ref={contactRef}>
        <ContactCard />
      </div>
      
      {/* Footer Section */}
      <div className="mt-8">
        <Footer/>
      </div>
    </div>
  );
};

export default VirtualWork;
