import React from 'react';
import arista7 from '../../../Assets/Arista-Switches.webp';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const AristaWifi = () => {
  return (
    <>
      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Left Side - Description */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              Arista CCS-710: Compact and Powerful Switching Solutions
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              The Arista CCS-710 fanless, compact Power over Ethernet (PoE) switch series is designed to extend the Cognitive Campus network into space-constrained and quiet environments. Ideal for locations such as conference rooms, retail showrooms, broadcast control rooms, and compact enclosures like ATMs, the CCS-710 delivers both power and performance in tight spaces.
            </p>
            <p className="text-lg leading-relaxed">
              With flexible mounting options, the CCS-710 series is perfectly suited for deployments where sound and space management are critical, without compromising on reliable network operations. This versatile series ensures efficient, silent, and powerful network connectivity wherever it's needed most.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={arista7}
              alt="Arista Switches"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </>
  );
};

export default AristaWifi;
