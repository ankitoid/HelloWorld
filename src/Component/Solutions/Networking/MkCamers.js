import React from "react";
import arista3 from "../../../Assets/mkcamera.avif";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ContactCard from "../../Contact/ContactCard";

const MkCameras = () => {
  return (
    <>
      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={arista3}
              alt="Cloud-Managed Smart Cameras"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Description Section */}
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-bold mb-4">Cloud-Managed Smart Cameras</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The MV Smart Camera family combines simplicity with powerful data-driven intelligence. Each model is equipped with a high-performance processor similar to those in modern smartphones, reducing the need for extensive physical infrastructure and complex software.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These cameras not only enhance physical security but also deliver valuable business insights. MV smart cameras feature fast processing capabilities, robust security, and sophisticated analytics—all within a user-friendly design.
            </p>
          </div>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </>
  );
};

export default MkCameras;
