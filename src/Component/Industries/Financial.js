import React, { useRef } from "react";
import financialImage from "../../Assets/financial.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Financial = () => {
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
        <div className="bg-gray-100">
          <div className="p-4 sm:p-8 max-w-7xl mx-auto">
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Financial Services Solutions
                  </h2>
                  <p className="mt-3 text-lg sm:text-xl text-gray-500">
                    Elevate your financial success with advanced IT solutions
                    from GlobalXperts. Our expertise in the financial sector
                    helps institutions enhance operational efficiency, manage
                    risks, and deliver exceptional customer experiences.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-8 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg object-cover"
                    src={financialImage}
                    alt="Financial services and IT solutions"
                  />
                </div>
              </div>
              <div className="">
                <button
                  onClick={handleContactUsClick}
                  className="px-6 py-2 border-2 border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor hover:text-white transition-colors duration-300 shadow-md"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="py-12 px-4 sm:px-6 lg:px-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                GlobalXperts provides specialized IT solutions designed to meet
                the needs of the financial services industry. From advanced
                analytics <br></br> to cloud-based platforms, our services enable
                financial institutions to optimize operations, reduce costs, and
                enhance risk management.<br></br>  By leveraging cutting-edge technologies
                and industry insights, we help companies stay ahead in a rapidly
                evolving market, ensuring secure, <br></br>efficient, and scalable
                solutions that drive business success.
              </p>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
                Our Expertise in Financial IT Solutions
              </h3>
              <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">
                    Risk Management Solutions
                  </h4>
                  <p className="text-gray-700">
                    Mitigate risks with robust security measures and data
                    analytics, ensuring compliance with industry regulations and
                    protecting sensitive financial data.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">
                    Cloud Integration
                  </h4>
                  <p className="text-gray-700">
                    Streamline operations and enhance data management with
                    cloud-based solutions tailored to the financial sector’s
                    unique demands.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">
                    Advanced Data Analytics
                  </h4>
                  <p className="text-gray-700">
                    Utilize data-driven insights to optimize decision-making,
                    enhance customer experiences, and drive financial
                    performance.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">
                    Cybersecurity Solutions
                  </h4>
                  <p className="text-gray-700">
                    Protect your financial institution from cyber threats with
                    customized security measures designed to safeguard critical
                    assets and maintain trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-100 py-12">
            <div ref={contactRef} className="mt-12">
              <ContactCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Financial;
