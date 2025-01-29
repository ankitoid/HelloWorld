import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center p-4 md:p-0 space-y-6 md:space-y-0 md:space-x-6 max-w-3xl mx-auto">
      {/* Contact Form Section */}
      <div className="w-full md:w-6/12 xl:w-5/12 p-4 md:p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative">
        <div
          className="absolute inset-0 bg-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
          }}
        ></div>
        <h2 className="text-xl md:text-xl xl:text-xl font-extrabold mb-4 text-gray-800 relative z-10">
          Get In Touch
        </h2>
        <p className="mb-4 text-gray-600 text-base relative z-10">
          Fill out the form below and one of our experts will be in touch shortly.
        </p>
        <form className="space-y-3 relative z-10">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 h-24"
          />
          <button
            type="submit"
            className="w-full py-2 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="w-full md:w-6/12 xl:w-5/12 p-4 md:p-4 bg-gradient-to-r from-blueCustomColor to-greenCustomColor text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blueCustomColor to-greenCustomColor"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)",
          }}
        ></div>
        <div className="relative z-10 mb-6">
          <h3 className="text-sm  md:text-xl xl:text-xl font-bold mb-2 flex items-center">
            <FiPhone className="text-greenCustomColor2 mr-3" /> Call +1 919-342-5482
          </h3>
          <p className="text-sm">
            Have questions? We'd love to hear from you, give us a call anytime.
          </p>
        </div>
        <div className="relative z-10 mb-6">
          <h3 className="text-sm  md:text-xl xl:text-xl font-bold mb-2 flex items-center">
            <FiMail className="text-greenCustomColor2 mr-3" /> Email info@globalxperts.net
          </h3>
          <p className="text-sm">
            Drop us an email, and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="relative z-10 mb-6">
          <h3 className="text-sm md:text-xl xl:text-xl font-bold mb-2 flex items-center">
            <FiMapPin className="text-greenCustomColor2 mr-3" /> Address
          </h3>
          <p className="text-sm">5540 Centerview Drive, Suite 200, Raleigh, NC 27606</p>
        </div>
        <div className="flex justify-center mt-8 relative z-10">
          <h1 className="text-2xl md:text-2xl xl:text-2xl font-extrabold text-white text-center">
            GlobalXperts Inc.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
