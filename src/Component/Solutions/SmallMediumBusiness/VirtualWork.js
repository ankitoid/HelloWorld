import React, { useState, useRef } from "react";
import Navbar from "../../Navbar";
import sm from "../../../Assets/virtualbox.jpg";
import ContactCard from "../../Contact/ContactCard";

const VirtualWork = () => {
  const [showMore, setShowMore] = useState(false); 
  const contactRef = useRef(null); 

  

  const handleContactUsClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" }); 
  };

  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />
      {/* Main Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-20">
            <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-8">
              Virtual Workx
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Looking for a reliable and flexible solution for remote work and
              virtual desktop infrastructure? Amazon WorkSpaces is your answer!
              Amazon WorkSpaces is a fully managed desktop computing service
              that runs on the cloud, enabling you to access your workspace from
              anywhere and on any device. With WorkSpaces, you benefit from the
              power and security of a virtual desktop infrastructure (VDI)
              without the complexity of managing your own infrastructure.
            </p>
            {/* Toggle 'Read More' Content */}
            {showMore && (
              <div className="mt-4 text-xl text-gray-500">
                <p>
                  With Amazon WorkSpaces, you can easily provision cloud-based
                  virtual desktops for your users, allowing them to access the
                  applications and data they need from anywhere, on any device.
                  Whether you need to support a remote workforce, enable
                  bring-your-own-device (BYOD) policies, or simply want to
                  simplify your desktop management, Amazon WorkSpaces has you
                  covered.
                </p>
                <p className="mt-4">
                  And now, for a limited time, we’re offering a special demo
                  offer that lets you try out Amazon WorkSpaces for yourself,
                  completely free of charge with two standard bundle virtual
                  desktops for a period of 3 billing cycles. With this offer,
                  you’ll get access to a fully-functional WorkSpaces
                  environment, including all the features and capabilities you
                  need to evaluate the solution and see how it can benefit your
                  organization.
                </p>
              </div>
            )}
            <button
              onClick={handleContactUsClick}
              className="text-blue-500 hover:underline flex mt-4"
            >
              Contact Us
            </button>
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

        {/* Demo Section */}
        <div className="mt-16 p-8 bg-white border-t border-gray-200">
          {/* Title Section */}
          <h2 className="text-3xl font-bold flex items-center mb-4">
            <span className="border-l-4 border-blue-500 pl-2">
              Plan for your demo today
            </span>
          </h2>

          {/* Content Section */}
          <p className="text-gray-700 mb-4">
            With Amazon WorkSpaces, you can easily provision cloud-based virtual
            desktops for your users, allowing them to access the applications
            and data they need from anywhere, on any device. Whether you need to
            support a remote workforce, enable bring-your-own-device (BYOD)
            policies, or simply want to simplify your desktop management, Amazon
            WorkSpaces has you covered.
          </p>

          <p className="text-gray-700 mb-4">
            And now, for a limited time, we’re offering a special demo offer
            that lets you try out Amazon WorkSpaces for yourself, completely
            free of charge with two standard bundle virtual desktops for a
            period of 3 billing cycles. With this offer, you’ll get access to a
            fully-functional WorkSpaces environment, including all the features
            and capabilities you need to evaluate the solution and see how it
            can benefit your organization.
          </p>

          <p className="text-gray-700">
            So why wait? Contact our Sales team for our demo offer today and
            experience the power of Amazon WorkSpaces VDI for yourself!
          </p>
        </div>
      </div>

      {/* Contact Card Section */}
      <div ref={contactRef}>
        <ContactCard />
      </div>
    </div>
  );
};

export default VirtualWork;
