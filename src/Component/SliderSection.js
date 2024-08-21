import React from "react";
import b3 from "../Assets/Untitled design (2).mp4";
import b1 from "../Assets/Untitled design.mp4";

function SliderSection() {
  return (
    <>
      {/* First Section */}
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
          {/* Left Section */}
          <div className="w-full md:w-3/5 bg-blue-500 flex items-center justify-center p-10 md:p-44 md:rounded-r-full relative overflow-hidden">
            <div className="absolute inset-0">
              <video
                src={b3}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service 1</h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                At the heart of Slack are channels: organised spaces for
                everyone and everything that you need for work. In channels,
                it's easier to connect across departments, offices, time zones
                and even other companies.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more about channels →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full h-full">
          {/* Right Section */}
          <div className="w-full md:w-3/5 bg-yellow-400 flex items-center justify-center p-10 md:p-44 md:rounded-l-full relative overflow-hidden">
            <video
              src={b1}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>

          {/* Left Section */}
          <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service 2</h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                At the heart of Slack are channels: organised spaces for
                everyone and everything that you need for work. In channels,
                it's easier to connect across departments, offices, time zones
                and even other companies.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more about channels →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
          {/* Left Section */}
          <div className="w-full md:w-3/5 bg-blue-500 flex items-center justify-center p-10 md:p-44 md:rounded-r-full relative overflow-hidden">
            <div className="absolute inset-0">
              <video
                src={b3}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service 3</h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                At the heart of Slack are channels: organised spaces for
                everyone and everything that you need for work. In channels,
                it's easier to connect across departments, offices, time zones
                and even other companies.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more about channels →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full h-full">
          {/* Right Section */}
          <div className="w-full md:w-3/5 bg-yellow-400 flex items-center justify-center p-10 md:p-44 md:rounded-l-full relative overflow-hidden">
            <video
              src={b1}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>

          {/* Left Section */}
          <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service 4</h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                At the heart of Slack are channels: organised spaces for
                everyone and everything that you need for work. In channels,
                it's easier to connect across departments, offices, time zones
                and even other companies.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more about channels →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderSection;
