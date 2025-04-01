import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const VeeamPartner = () => {
  return (
    <>
      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Veeam Partner Information
              </h1>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-right  lg:mt-10 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                Value Added Reseller
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Veeam Partner Overview */}
        <div className=" mt-6 text-sm md:text-base ">
          <h4 className="font-bold text-2xl  p-4">Overview</h4>
          <p className="p-4">
            Veeam offers comprehensive solutions for data protection, disaster
            recovery, and threat mitigation, ensuring secure and reliable data
            management.
          </p>
        </div>
        <div className="logo mt-4 md:w-1/2 w-full">
          <h1 className="font-bold text-2xl mt-6 ">AWS Storage Partners</h1>

          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p16.png"
            alt="Veeam Logo"
            className="h-32 w-44"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 text-center text-sm md:text-base">
        <p>Veeam is the market leader trusted by:</p>
        <ul className="list-disc ml-6 mt-2 text-left inline-block">
          <li>81% of Fortune 500 companies</li>
          <li>72% of Global 2000 companies</li>
        </ul>
      </div>
      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default VeeamPartner;
