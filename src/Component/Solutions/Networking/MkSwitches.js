import React from 'react';
import arista1 from '../../../Assets/mkswitches.avif';
import ContactCard from '../../Contact/ContactCard';
import Navbar from '../../Navbar';

const MkSwitches = () => {

  return (
    <>
      <Navbar/>
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Left Side Image */}
          <div className="w-full sm:w-1/2">
            <img
              src={arista1}
              alt="Meraki Switches"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Side Description */}
          <div className="w-full sm:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Cisco Meraki Switches</h3>
            <p className="text-gray-700">
              Cisco Meraki switches offer a broad range of networking solutions built from the ground up to be easy to manage without sacrificing power or flexibility. These enterprise-class switches are ideal for businesses of all sizes, providing seamless connectivity with centralized management.
            </p>
            <p className="text-gray-700">
              Managed through an intuitive cloud-based interface, Meraki switches allow administrators to spend less time configuring devices and more time focusing on business needs. With Meraki's plug-and-play setup, there’s no need for repetitive, command-based configurations. Switches can be operational within minutes of being connected to the network.
            </p>
            <p className="text-gray-700">
              A powerful centralized management interface provides deep visibility into network usage and performance. Administrators can monitor switches, configure ports with security policies, manage QoS settings, and analyze event logs—all from the Meraki dashboard, making switch management efficient and scalable across multiple locations.
            </p>
          </div>
        </div>
      </div>
      <ContactCard/>
    </>
  );
};

export default MkSwitches;
