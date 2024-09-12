import React, { useRef } from "react";
import energyImage from "../../Assets/energy.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import securitySol from '../../Assets/securitySol.png'
const Energy = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-white">
          <div className="p-8 max-w-7xl mx-auto">
            <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Energy Solutions
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    Empowering the energy sector with innovative IT solutions.
                    At GlobalXperts, we specialize in providing cutting-edge
                    technology tailored to the unique needs of the energy
                    industry. Our expertise helps energy companies improve
                    efficiency, optimize operations, and ensure regulatory
                    compliance in an ever-evolving market.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-8 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src={energyImage}
                    alt="Energy sector solutions"
                  />
                </div>
              </div>
              <button
                onClick={handleContactUsClick}
                className="px-6 py-2 border-2 mt-0 border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Overview Section */}
          <div className="w-full px-4 mt-10">
            <h2 className="text-4xl font-bold text-center">Overview</h2>
            <p className="text-center mt-4 text-gray-700 text-xl">
              GlobalXperts offers comprehensive IT solutions for the energy
              sector, backed by our team of highly skilled professionals.<br></br> We
              provide expertise in network design, cybersecurity, and data
              management, ensuring that your business stays ahead in a
              competitive landscape.
            </p>
            <div className="mt-6 max-w-4xl mx-auto">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">Our Expertise</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Energy IT Consulting:</strong> Expert guidance on
                    integrating technology to enhance operational efficiency and
                    reduce costs.
                  </li>
                  <li>
                    <strong>Cybersecurity Solutions:</strong> Robust security
                    measures to protect critical energy infrastructure from
                    evolving cyber threats.
                  </li>
                  <li>
                    <strong>Data Analytics:</strong> Advanced analytics to
                    improve decision-making and optimize energy production and
                    distribution.
                  </li>
                  <li>
                    <strong>Network Design & Implementation:</strong> Scalable
                    network solutions that support reliable communication and
                    data flow within energy systems.
                  </li>
                  <li>
                    <strong>Cloud Integration:</strong> Leverage cloud
                    technologies for enhanced data management, scalability, and
                    flexibility in operations.
                  </li>
                  <li>
                    <strong>Customized Training:</strong> Training programs
                    designed to equip your team with the skills needed to manage
                    modern energy technologies effectively.
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-700 text-xl">
              Partner with GlobalXperts for tailored energy solutions that drive
              efficiency, security, and growth. Contact us to learn how we can
              help transform your energy operations with our professional IT
              services.
            </p>
          </div>

          {/* Customized Security Solutions Section */}
          <div className="bg-blueCustomColor p-10 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Customized Security Solutions
                </h2>
                <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                  GlobalXperts provides tailored security solutions that address
                  the specific challenges of the energy sector. Our approach
                  ensures that your assets are protected, risks are managed, and
                  compliance standards are met.
                </p>
              </div>
              {/* Image Section */}
              <div className="relative mt-8 lg:mt-0 lg:w-1/2">
                <img
                  className="w-full rounded-lg"
                  src={securitySol}
                  alt="Customized Security Solutions"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div ref={contactRef} className="mt-12">
            <ContactCard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Energy;
