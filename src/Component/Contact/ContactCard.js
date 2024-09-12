import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center bg-gray-200 p-4 md:p-10">
      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 max-w-lg p-4 md:p-6 bg-white shadow-md rounded-lg mb-6 md:mb-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-4 md:mb-6 text-gray-600">
          Fill out the form below and one of our experts will be in touch shortly.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 md:h-32"
          />
          <button
            type="submit"
            className="w-full py-2 md:py-3 bg-greenCustomColor2 text-white rounded-md hover:bg-blueCustomColor transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="w-full md:w-1/2 max-w-lg p-4 md:p-6 bg-blueCustomColor text-white rounded-lg">
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center">
            <FiPhone className="text-greenCustomColor2 mr-2" /> Call +1 919-342-5482
          </h3>
          <p>
            If you have any questions or require additional information, give us a call; we’d love to hear from you.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center">
            <FiMail className="text-greenCustomColor2 mr-2" /> Email info@globalxperts.net
          </h3>
          <p>
            If you have any questions or require additional information, send us an email.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center">
            <FiMapPin className="text-greenCustomColor2 mr-2" /> Address
          </h3>
          <p>5540 Centerview Drive, Suite 200, Raleigh, NC 27606</p>
        </div>
        <div className="flex justify-center mt-12">
          <h1 className="text-4xl md:text-6xl text-greenCustomColor2 text-center">
            GlobalXperts Inc.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
