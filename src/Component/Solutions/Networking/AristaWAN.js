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
              As enterprises embrace the hybrid work environment, workforces continue to demonstrate consistent or even improved productivity. To support this shift, campus administrators are evolving to address new challenges around security, collaboration, and remote support.
            </p>
            <p className="text-lg leading-relaxed">
              Simultaneously, the deployment of campus IoT devices is increasing at an exponential rate. These devices are crucial in supporting the distributed workforce, driving productivity, and ensuring seamless operations across locations. Arista WAN solutions help businesses adapt to this modern, connected infrastructure by providing scalable, secure, and reliable network connectivity.
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
  