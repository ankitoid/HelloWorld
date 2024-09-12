import React, { useState } from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

const ContactSlider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* Contact Us Button */}
      <div
        onClick={handleOpen} 
        className="fixed bottom-1 right-8  py-2 px-2 transform -translate-y-1/2 bg-greenCustomColor2 text-white p-3 rounded-lg cursor-pointer z-50 flex items-center justify-center transition-all duration-300 ease-in-out"
      >
        <MdOutlineSupportAgent size={35} />
      </div>

      {/* Contact Form Slider */}
      <div
        className={`fixed top-1/4 right-2 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "350px" }}
        onMouseLeave={handleClose} 
      >
        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col mr-20">
          {/* Form Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-purple-600">
              Contact Form
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
          </div>

          {/* Form Content */}
          <form className="flex-grow">
            <div className="mb-4 ">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div className="mb-4 flex-grow">
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg w-full transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSlider;
