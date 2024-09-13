import React from "react";
import NetworkingVideo from "../../Assets/NetwrokingVideo1.mp4";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";

const Networking = () => {
  return (
    <>
      {/* Navbar Section */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Networking Consulting
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Our networking consulting services provide structured solutions to
              enhance connectivity across teams, departments, and locations.
              With expert guidance, we help you build efficient communication
              channels, streamline workflows, and connect seamlessly across
              offices, time zones, and even external partners, ensuring a
              cohesive and collaborative work environment.
            </p>
          </div>

          {/* Video Section */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-8">
            <video
              src={NetworkingVideo}
              className="w-full h-auto rounded-lg shadow-lg"
              muted
              autoPlay
              loop
              playsInline
              controls={false}
            ></video>
          </div>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </>
  );
};

export default Networking;
