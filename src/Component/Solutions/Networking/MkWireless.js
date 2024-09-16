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
            The Meraki cloud-managed architecture allows users to seamlessly
            manage campus-wide Wi-Fi deployments and distributed multi-site
            networks with zero-touch access point provisioning, network-wide
            visibility and control, self-learning RF optimization, seamless
            firmware updates, and more. With an intuitive browser-based user
            interface, Meraki WLAN configures in minutes without training or
            dedicated staff, offering scalability with templates.
          </p>
          <p className="text-gray-700">
            Adding new sites to a network takes minutes, not hours or days, and
            there’s no need to train additional staff to monitor or manage the
            remote networks. Meraki devices are self-provisioning, enabling large
            campus and multi-site deployments without on-site IT. Learning from
            billions of touchpoints, AI and data-powered Meraki Health empowers
            customers with the data they need to stay informed and the context
            they need to make decisions.
          </p>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </>
  );
};

export default MkWireless;
