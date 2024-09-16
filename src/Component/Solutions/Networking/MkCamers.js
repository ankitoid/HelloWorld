import React from "react";
import arista3 from "../../../Assets/mkcamera.avif";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ContactCard from "../../Contact/ContactCard";

const MkCamers = () => {
  return (
    <>
      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={arista3}
              alt="Meraki Wireless Access Points"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Description Section */}
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-bold mb-4">
              Cloud-Managed Smart Cameras
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The MV Smart Camera family brings simplicity and data-powered
              intelligence to the security camera world. Every MV model comes
              with a powerful processor — the same kind found in many of today’s
              smartphones — and an innovative architecture that minimizes physical
              infrastructure as well as software requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These smart cameras not only help ensure physical safety and
              security, but also provide advanced business intelligence. MV smart
              cameras pack fast processing power, robust security features, and
              sophisticated analytics into a refreshingly simple package.
            </p>
          </div>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </>
  );
};

export default MkCamers;
