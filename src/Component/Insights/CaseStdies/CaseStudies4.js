// src/CaseStudies3.js
import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import BroadcastingIMg from "../../../Assets/broadcastingImg.png";

const CaseStudies4 = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-20">
       
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-black mb-8 space-y-2 md:space-y-0 px-4 mt-8">
          <div>
            <span className="font-bold">Service Type:</span> Professional Services
          </div>
          <div>
            <span className="font-bold">Vertical:</span> Non-Profit
          </div>
          <div>
            <span className="font-bold">Contract:</span>{" "}
            <span className="text-green-600">Complete</span>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left mb-6">
          <h2 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
            Customer Information:
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <p className="text-md">
            Founded in 1971, Close Up Foundation is a nonprofit, nonpartisan, civic education organization that believes a strong democracy requires active, informed participation by all citizens. Therefore, they seek to serve young people from all communities and all backgrounds, regardless of race, religion, gender, socioeconomic level, or academic standing.
          </p>
          <p className="text-md mt-2">
            <span className="font-bold">Website: </span>
            <a href="https://www.closeup.org/" className="text-blue-500 underline">
              https://www.closeup.org/
            </a>
          </p>
        </div>

        {/* Challenge Section */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left mb-6 mt-5">
          <h2 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
            Challenge:
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <p className="text-md">
            Close Up Foundation had a variety of performance issues in regards to their WordPress-based web server deployment.
          </p>
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left mb-6 mt-5">
          <h1 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
            Solution:
          </h1>
        </div>
        <div className="max-w-6xl mx-auto text-left">
          <p className="text-md">
            GlobalXperts, acting as a subcontractor for Red River, was engaged to diagnose web server issues, and produce a functional AWS server.
          </p>
          <ul className="list-disc ml-5 mt-4 space-y-2">
            <li>
              <span className="font-bold">Data-driven insights:</span> We provided detailed reports and analytics, empowering the team to understand server performance and behavior and optimize compute power needed and storage needs.
            </li>
            <li>
              <span className="font-bold">Configuration and Testing:</span> Dedicated engineers deployed a Sandbox test environment to stage the new recommended compute and storage server based on the data-driven insights.
            </li>
            <li>
              <span className="font-bold">Provided Day One support:</span> Our Engineers provided “Next Day Support” for any issues that might have occurred after cutover.
            </li>
          </ul>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left mb-6 mt-5">
          <h1 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
            Results:
          </h1>
        </div>
        <div className="max-w-6xl mx-auto text-left">
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <span className="font-bold">Improved Reliability:</span> The overall system has become more reliable and efficient.
            </li>
            <li>
              <span className="font-bold">Reduced Staff Workload:</span> Leveraging AWS freed up staff by 40%, enabling them to focus on new initiatives.
            </li>
            <li>
              <span className="font-bold">Time Saving Solution:</span> Provided solution is time saving in terms of configuring resources, reporting issues, fault recovery and general operations.
            </li>
          </ul>
        </div>

        {/* Key Takeaways Section */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left mb-6 mt-5">
          <h1 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
            Key Takeaways:
          </h1>
        </div>
        <div className="max-w-6xl mx-auto text-left mb-10">
          <p className="text-md font-bold ">
            Data-driven insights can help optimize performance and storage requirements. This leads to cost-optimized service that meets performance requirements. GlobalXperts is committed to helping Non-Profit companies deliver well-performing, cost-effective services to their customers.
          </p>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </>
  );
};

export default CaseStudies4;
