import React from "react";
import arista2 from "../../../Assets/mkwireless.jpg";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ContactCard from "../../Contact/ContactCard";

const MkWireless = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center p-6 mt-14 gap-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={arista2}
            alt="Meraki Wireless Access Points"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Description Section */}
        <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">
            Meraki Wireless Cloud-Managed Access Points
          </h2>
          <p className="text-gray-700 mb-4">
            The Meraki cloud-managed architecture enables seamless management of campus-wide Wi-Fi and distributed networks. It features zero-touch provisioning, network-wide visibility, self-learning RF optimization, and easy firmware updates.
          </p>
          <p className="text-gray-700">
            Adding new sites to a network is quick and doesn't require extensive training for staff. Meraki's self-provisioning devices support large deployments efficiently, leveraging AI and data to provide essential insights for decision-making.
          </p>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </>
  );
};

export default MkWireless;
