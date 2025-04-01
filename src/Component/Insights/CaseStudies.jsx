// src/CaseStudies.js
import React from "react";
import ContactCard from "../Contact/ContactCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Case Studies{" "}
              </h1>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Unleashing the power of technology: Real-world success stories
                from our IT solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-0 px-4 sm:px-6 lg:px-0 mt-12">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          See Our Past Experience
        </h3>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {/* Card 1  cs3*/}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col ">
            <h2 className="text-lg font-semibold mb-3">Live Video Streaming</h2>
            <p className="text-sm text-gray-700 mb-4">
              Our solution, built on Amazon Web Services (AWS), ensured seamless
              video delivery, real-time monitoring, proactive maintenance, and
              rapid issue resolution, resulting in enhanced fan engagement,
              increased revenue potential, and a significant reduction in
              operational costs.
            </p>
            <a
              href="/CaseStudies1"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-6 hover:underline self-center"
            >
              READ MORE »
            </a>
            {/* <p className="text-xs text-gray-500 mt-2">April 16, 2024</p> */}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col ">
            <h2 className="text-lg font-semibold mb-3">
              Arista Data Center Implementation
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Arista Networks was funded to pioneer and deliver software-driven
              cloud networking solutions for large data center storage and
              computing environments. Arista’s award-winning platforms, ranging
              in Ethernet speeds from 10 to 400 gigabits per second, redefine
              scalability, agility and resilience.
            </p>
            <a
              href="/CaseStudies10"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-6 hover:underline self-center"
            >
              READ MORE »
            </a>
            {/* <p className="text-xs text-gray-500 mt-2">April 16, 2024</p> */}
          </div>

          {/* Card 2 cs4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">
              Arista Install Services - Entel-Chile
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Arista Networks is an industry leader in data-driven, client to
              cloud networking for large data center, campus, and routing
              environments. The company delivers products across the data center
              and campus with routing and software solutions for monitoring and
              network detection and response worldwide.
            </p>
            <a
              href="/CaseStudies2"
              className="bg-greenCustomColor2 rounded py-2 px-4 mt-6 text-center font-bold text-white  hover:underline self-center"
            >
              READ MORE »
            </a>
            {/* <p className="text-xs text-gray-500 mt-2">April 25, 2021</p> */}
          </div>
          {/* card 3 cs1*/}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">
              Design and Installation - Cisco Webex Meetings Server (CWMS)
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              GlobalXperts, with a business focus on Advanced Cisco Solutions,
              developed a High-Level Design for an upgrade/installation that
              required changes to the entire product line as a premise-based
              solution.
            </p>
            <a
              href="/CaseStudies3"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-10 hover:underline self-center"
            >
              READ MORE »
            </a>
            {/* <p className="text-xs text-gray-500 mt-2">April 25, 2021</p> */}
          </div>
          {/* .cars 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">
              NEC Wireless Site Survey
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              GlobalXperts partner in this case study is NEC, a large
              manufacturer, a Cisco Gold Partner and a systems integrator with
              hundreds of offices in more than fifty countries worldwide. Their
              primary market is the manufacturing of communications equipment.
            </p>
            <a
              href="/CaseStudies4"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-4 hover:underline self-center"
            >
              READ MORE »
            </a>
            {/* <p className="text-xs text-gray-500 mt-2">April 25, 2021</p> */}
          </div>
          {/* card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">
              Global IT Managed Services
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              The company (“Customer”) GlobalXperts partnered with to deliver
              managed services to is one of the largest and most successful IT
              solutions providers in the world.
            </p>
            <a
              href="/CaseStudies5"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-8 hover:underline self-center"
            >
              READ MORE »
            </a>
            {/* <p className="text-xs text-gray-500 mt-2">April 25, 2021</p> */}
          </div>
          {/* card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">NEC Disney</h2>
            <p className="text-sm text-gray-700 mb-4">
              As the world's foremost producer and provider of entertainment and
              information, Disney leverages its diverse array of brands to
              deliver differentiated content, innovative services, and engaging
              consumer products.
            </p>
            <a
              href="/CaseStudies6"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-4 hover:underline self-center"
            >
              READ MORE »
            </a>
            {/* <p className="text-xs text-gray-500 mt-2">April 25, 2021</p> */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-3">
                United Rentals - CISCO Unified Communication
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                United Rental’s diverse customer base includes construction and
                industrial companies, utilities, municipalities, government
                agencies, and independent contractors. It provides every
                customer with access to the best people, equipment, and
                solutions in the industry.
              </p>
            </div>
            <a
              href="/CaseStudies7"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-4 hover:underline self-center"
            >
              READ MORE »
            </a>
          </div>

          {/* Card 8 */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-3">
                TowneBank - CISCO Telepresence
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                TowneBank offers a variety of business and financial services,
                focusing on high ethical standards, customer service, and
                community involvement.
              </p>
            </div>
            <a
              href="/CaseStudies8"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-4 hover:underline self-center"
            >
              READ MORE »
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-3">
                Close Up Foundation
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Close Up Foundation is a nonprofit, nonpartisan, civic education
                organization that believes a strong democracy requires active,
                informed participation by all citizens
              </p>
            </div>
            <a
              href="/CaseStudies9"
              className="bg-greenCustomColor2 rounded py-2 px-4 text-center font-bold text-white mt-4 hover:underline self-center"
            >
              READ MORE »
            </a>
          </div>
        </div>
      </div>


      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudies;
