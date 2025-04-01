import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const CaseStudies10 = () => {
  return (
    <>
    <Navbar/>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto  py-10 md:py-0 2xl:py-8 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 md:px-20">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-48 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20 ">
                Arista Data Center Implementation
              </h2>
              <div className="md:px-0 px-20 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-full text-left lg:text-right mt-10 lg:mt-28 order-3 lg:order-2">
              <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p8.png" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white mb-4 space-y-2 md:space-y-0 px-4 ">
            <div>
              <span className="font-bold">SOLUTION:</span>Professional Services
            </div>
            <div>
              <span className="font-bold">APPLICATION:</span>Data Center
            </div>
            <div>
              <span className="font-bold">MARKET:</span>{" "}
              <span className="">Service Provider</span>
            </div>
            <div>
              <span className="font-bold">Country of Work:</span>{" "}
              <span className="">USA</span>
            </div>
            <div>
              <span className="font-bold">Year:</span>{" "}
              <span className="">2018</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 mr-6">
          About Arista
        </h2>
        <section className="mb-4 flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="text-gray-600 md:w-1/2">
              <p>
                Arista Networks was funded to pioneer and deliver
                software-driven cloud networking solutions for large data center
                storage and computing environments. Arista’s award-winning
                platforms, ranging in Ethernet speeds from 10 to 400 gigabits
                per second, redefine scalability, agility and resilience. Arista
                has shipped more than 20 million cloud networking ports
                worldwide with Cloud Vision and EOS, an advanced network
                operating system. Committed to open standards, Arista is a
                founding member of the 25/50GbE consortium. Arista Networks
                products are available worldwide directly and through partners.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/aritaCS10.png"
                alt="Arista System"
                className="w-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <div className="mb-8">
          <h5 className="text-2xl font-bold mb-4">Deliverables</h5>
          <div className="flex flex-wrap md:flex-nowrap items-start gap-8">
            {/* Left Column - Image */}
            <div className="md:w-1/2">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/aristaDevixe.webp"
                alt="Arista Devix"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* Right Column - List */}
            <div className="md:w-1/2">
              <ul className="list-disc ml-5 space-y-2 text-gray-800">
                <li>Attend CMS and Arista project / progress meetings</li>
                <li>
                  Gather relevant CMS technical information for use in Arista
                  design and migration development
                </li>
                <li>
                  Validation and confirmation of CMS technical information
                </li>
                <li>
                  Participate in ARISTA design and migration planning
                  development
                </li>
                <li>
                  Communicate and promote ARISTA design and migration approaches
                  to CMS
                </li>
                <li>
                  Coordinate required resources to carry out project tasks,
                  migration, and cutover work activities successfully
                </li>
                <li>
                  Solution deployment according to high & low-level design
                  provided by ARISTA
                </li>
                <li>Discover and perform onsite network troubleshooting</li>
                <li>
                  Maintain an active issues list, ensuring all technical or
                  procedural issues raised by CMS are closed satisfactorily.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Needs</h2>
          <p className="text-gray-600">
            CMS Energy required Arista’s assistance with architectural design
            and implementation assistance for the successful deployment of
            Arista data center products and technologies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Benefits
          </h2>
          <p className="text-gray-600">
            Thanks to GlobalXperts’ execution of best practices and
            architectural thoroughness, PHC/LCS was able to have their entire
            UCS system enhanced for optimal communication delivery.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Solution
          </h2>
          <p className="text-gray-600">
            GXE will provide CMS with architectural design and implementation
            assistance for the successful deployment of Arista data center
            products and technologies. The GXE will analyze and document the
            existing CMS network environment, and provide migration,
            integration, application deployment, testing and troubleshooting
            services for CMS’s data center network.
          </p>
        </section>
      </div>

      <ContactCard/>
      <div className="mt-4">
      <Footer/>
      </div>
    </>
  );
};

export default CaseStudies10;
