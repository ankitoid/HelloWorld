import React, { useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard"; // Assuming you have this component
import serviceImage from "../../Assets/service.jpg"; // Use an image relevant to service providers

const ServiceProvider = () => {
  const contactRef = useRef(null); // Ref to contact card

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
          <div className="p-8 max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Service Providers
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    In the service provider industry, IT services and solutions
                    are essential for enhancing service delivery and customer
                    satisfaction. Technologies such as CRM tools and field
                    service management software help optimize operations and
                    improve efficiency. By leveraging advanced analytics, service
                    providers can gain insights into customer preferences,
                    enabling more personalized services and a competitive edge.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src={serviceImage}
                    alt="Service providers working on IT solutions"
                  />
                </div>
              </div>
              <button
                onClick={handleContactUsClick}
                className="mt-8 px-6 py-2 border-2 border-transparent bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="max-w-7xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                We offer IT solutions tailored to meet diverse business needs. From IT
                infrastructure management and cloud solutions to cybersecurity and
                data analytics, our services enhance operational efficiency, drive
                innovation, and support growth. Our scalable, cost-effective
                solutions align with your business goals.
              </p>
            </div>
          </div>

          {/* Additional Insights Section */}
          <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Enhancing Service Delivery
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                IT services and solutions play a critical role in delivering high-quality
                services. Tools such as CRM and field service management software optimize
                operations, improve customer satisfaction, and provide personalized
                services. Leverage IT solutions to streamline processes, reduce costs, and
                enhance service quality.
              </p>

              {/* Contact Us Button */}
            
            </div>
          </div>

          {/* Contact Card Section */}
          <div
            id="contact-card"
            ref={contactRef}
            className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center"
          >
            <ContactCard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServiceProvider;
