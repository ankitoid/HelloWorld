import React from 'react';
import arista6 from '../../../Assets/aristaWAN.png';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const AristaWAN = () => {
  return (
    <>
      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Left Side - Description */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              Transforming Enterprise Connectivity with Arista WAN
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              In the hybrid work environment, productivity remains strong. To support this shift, campus administrators must tackle new challenges related to security, collaboration, and remote support.
            </p>
            <p className="text-lg leading-relaxed">
              The rapid deployment of IoT devices is essential for a distributed workforce, driving productivity and ensuring seamless operations. Arista WAN solutions provide the scalable, secure, and reliable network connectivity needed for this modern infrastructure.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={arista6}
              alt="Arista WAN"
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

export default AristaWAN;
