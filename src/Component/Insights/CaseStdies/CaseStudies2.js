import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import AristaCS from "../../../Assets/aristaCS1.webp"; // Make sure the image path is correct
import Aristalogo from "../../../Assets/aristalogo1.png";
import ContactCard from "../../Contact/ContactCard";

const CaseStudies2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-6">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6">
          Arista Install Services for Entel-Chile – Case Study
        </h1>
        {/* Image Section */}
        <div className="mb-8 flex justify-center">
          <img
            src={AristaCS}
            alt="Arista Implementation"
            className="rounded-md shadow-lg w-full max-w-2xl h-auto"
          />
        </div>
        {/* Case Study Details */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Case Study Detail
          </h2>
          <div className="space-y-2">
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Company name:</span> Arista/Entel
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Case Study Title:</span> Arista
              Implementation Services for Entel
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">
                Case Study Short Description:
              </span>{" "}
              Arista was seeking onsite professional services, implementation,
              and travel, as well as remote scoping and reviewing of the
              project.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Date Start:</span> June 2018
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Date End:</span> September 2018
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Country of Work:</span> Chile
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Industry Vertical:</span> Telecom
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Market:</span> Service Provider
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">Solution:</span> Professional
              Services
            </p>
          </div>
        </div>

        {/* About Arista Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            About Arista
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Arista Networks is an industry leader in data-driven, client to
            cloud networking for large data center, campus, and routing
            environments. The company delivers products across the data center
            and campus with routing and software solutions for monitoring and
            network detection and response worldwide. Headquartered in Santa
            Clara, California, Arista has offices around the world. Arista has a
            prestigious set of customers, including Fortune 500 global companies
            in markets such as cloud titans, enterprise, financials, and
            specialty cloud service providers.
          </p>
          <div className="text-center mt-4">
            <a href="/CaseStudies2/partner-info" className="inline-block">
              <button className="bg-greenCustomColor2 rounded-lg py-2 px-4 text-white">
                Partner Information | Staff Certifications
              </button>
            </a>
          </div>
        </div>

        {/* Partner Information and Staff Certifications */}
        <div className="mb-8">
          
          <img
            src={Aristalogo}
            alt="Arista Information Graphic"
            className="mx-auto w-full max-w-xl h-auto"
          />
        </div>

        {/* Deliverables Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Deliverables
          </h2>
          <ul className="list-disc ml-5 text-base sm:text-lg text-gray-700">
            <li>
              Provide professional services (PS) to deploy the UCN Layer-2
              Leaf-Spine (L2LS) architecture to support Entel’s CDN solution at
              specified sites.
            </li>
            <li>
              Deployment of Arista devices at the main site in an L2LS UCN
              design.
            </li>
            <li>
              Ensure one or two MLAG pairs to support the content delivery
              infrastructure at each of the three remote sites.
            </li>
            <li>Ensure customer satisfaction.</li>
          </ul>
        </div>

        {/* Needs Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Needs
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Arista was seeking onsite professional services, implementation, and
            travel, as well as remote scoping and reviewing of the project.
            Arista designed a Layer 2 Leaf-Spine solution for Entel (a large
            Chilean Telecom company) and needed to deploy the architecture to
            support Entel’s CDN solution at both their main site and their
            remote facilities based in Chile.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Benefits
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            GlobalXperts’ assistance with this project allowed Arista to comply
            with their customer’s demands and requirements in the quickest and
            most appropriate fashion. All tasks were accomplished in a timely
            manner and with a solution that met the customer’s needs. Solutions
            were recorded for future reference.
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Solution
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Arista was seeking onsite professional services, implementation, and
            travel, as well as remote scoping and reviewing of the project.
            Arista designed a Layer 2 Leaf-Spine solution for Entel (a large
            Chilean Telecom company) and needed to deploy the architecture to
            support Entel’s CDN solution at both their main site and their
            remote facilities based in Chile.
          </p>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </div>
  );
};

export default CaseStudies2;
