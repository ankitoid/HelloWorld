import React from 'react';
import seceon from '../../../Assets/seceon.png';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const SeceonPartner = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* About Seceon Section */}
        <section className="flex flex-col md:flex-row items-center mb-16 space-y-8 md:space-y-0 md:space-x-8">
          {/* Text Section (Left) */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">About Seceon</h1>
            <p className="text-lg text-gray-700 mb-6">
              Seceon enables organizations to reduce cyber threat risks and simplify their security stack while improving detection and response. With AI/ML-powered platforms like aiSIEM, aiXDR, and aiMSSP, Seceon automates and enhances security operations.
            </p>
            <p className="text-lg text-gray-700">
              Threat intelligence, behavioral analysis, and real-time correlation ensure reliable detection and alerts, empowering enterprises to address threats efficiently.
            </p>
          </div>

          {/* Image Section (Right) */}
          <div className="md:w-1/2">
            <img
              src={seceon}
              alt="Seceon Illustration"
              className="w-full h-auto object-cover rounded-lg "
            />
          </div>
        </section>

        <hr className="border-t-2 border-blue-600 mb-16" />

        {/* aiSIEM Section */}
        <section>
          <h1 className="text-3xl font-bold mb-4">aiSIEM</h1>
          <p className="text-lg text-gray-700 mb-6">
            Seceon® aiSIEM empowers enterprises to detect and eliminate cyber threats in real-time, offering robust, large-scale data collection from multiple sources, enhanced data analytics, and automated responses.
          </p>
          <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Comprehensive data collection from cloud, network, and endpoints.</li>
            <li>Real-time threat intelligence and correlation engines for enriched insights.</li>
            <li>Automated detection and response for high-priority threats.</li>
            <li>Scalable architecture with multi-tenancy support.</li>
          </ul>
        </section>

        {/* ML Threat Detection Section */}
        <section>
          <h1 className="text-3xl font-bold mb-4 mt-10">ML Threat Detection</h1>
          <p className="text-lg text-gray-700 mb-6">
            Seceon’s machine learning models inspect vast amounts of data to detect threats more effectively, offering continuous updates and adaptive learning algorithms that evolve to counter emerging cyber threats.
          </p>
        </section>

        {/* GX Capabilities Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">GX Capabilities</h1>
          <p className="text-lg text-gray-700 mb-6">
            As a Seceon partner, GlobalXperts offers comprehensive managed security services. We ensure seamless integration and optimization of Seceon products into your IT infrastructure for maximum efficiency and protection.
          </p>
        </div>
      </div>
      
      {/* Contact and Footer Section */}
      <div className="mt-8">
      <ContactCard />
      </div>
      <div className="mt-8">
      <Footer />
      </div>
    </>
  );
};

export default SeceonPartner;
