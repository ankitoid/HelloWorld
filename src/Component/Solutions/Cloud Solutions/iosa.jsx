import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const iosa = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title> Prolific I/O Storage Accelerator</title>
        <meta name="description" content="IOSA" />
      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[65vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
              Prolific IO Storage Accelerator
              </h1>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-4 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base text-left lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Prolific IO Storage Accelerator (PIOSA) is a game-changing
                solution co-developed by the AWS Global Storage Solution team
                and GlobalXperts Solution Architects. Built to tackle the most
                demanding workloads, PIOSA empowers businesses to achieve
                unparalleled performance and cost efficiency for their storage
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Prolific IO Storage Accelerator?
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-left">
              Your data demands agility, scalability, and peak
              performance—without breaking the bank. PIOSA is purpose-built to
              address workloads requiring high IOPS and bandwidth, dynamically
              scaling to meet demand spikes with ease. This means faster, more
              reliable performance at a fraction of the cost of traditional
              cloud deployments.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/iosaImage.png"
              alt="A man working on a laptop in a server room."
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            The Challenges You Face
          </h1>
          <ul className="mt-6 space-y-4 text-lg text-gray-700">
            <li>
              <strong className="text-gray-900">
                Extreme Performance Demands:
              </strong>
              <span className="ml-2">
                On-premises workloads demanding 2M+ IOPS and 10Gbps+ throughput
                create significant cost and scalability challenges.
              </span>
            </li>
            <li>
              <strong className="text-gray-900">Demand Spikes:</strong>
              <span className="ml-2">
                Workload demands often spike during limited periods, making
                constant overprovisioning wasteful and inefficient.
              </span>
            </li>
          </ul>
        </div>

        <div className="max-w-7xl mx-auto p-0 mt-10">
          {/* The Problem and The Solution Section */}
          <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            {/* The Problem and The Solution Section */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Left Column: Solution Overview */}
              <div className="flex-1">
                <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
                  The Solution
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  PIOSA revolutionizes how you handle fluctuating workloads by
                  dynamically scaling throughput and IOPS to meet peak demands.
                  Here's how it works:
                </p>
              </div>

              {/* Right Column: Solution Details */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full mr-4">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        Boosted Performance
                      </h3>
                      <p className="text-gray-600">
                        Uses additional Amazon EC2 instances as accelerators to
                        offload EBS read/write operations, delivering 10x native
                        EBS performance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full mr-4">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        Efficient Scaling
                      </h3>
                      <p className="text-gray-600">
                        Automatically scales IOPS up during peak periods and
                        scales them down during off-peak periods.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full mr-4">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        Cost-Effective
                      </h3>
                      <p className="text-gray-600">
                        The IOPS auto-scaling of this solution provides a
                        significant cost reduction over an equivalent EC2
                        deployment that is overprovisioned.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features & Benefits Section */}
          <div className="mt-8 bg-gray-50 rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
              Features & Benefits at a Glance
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-inner">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full mr-4">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Dynamic IOPS Scaling
                    </h3>
                    <p className="text-gray-600">
                      Peak performance when you need it, cost savings when you
                      don’t.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full mr-4">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Cache-Less & Stateless Design
                    </h3>
                    <p className="text-gray-600">
                      Cache-less, stateless, pass-through architecture.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full mr-4">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Enterprise-Grade Compatibility
                    </h3>
                    <p className="text-gray-600">
                      Compatible with AWS Backup, EBS Snapshots, etc.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full mr-4">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Resilient Baseline IO
                    </h3>
                    <p className="text-gray-600">
                      Baseline IO continues even if all controllers are
                      stopped/terminated/fail.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full mr-4">
                    5
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Massive Scalability
                    </h3>
                    <p className="text-gray-600">
                      Supports up to 15 accelerators for unmatched storage
                      acceleration.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Target Audience Section */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
              Designed for Enterprise-Class Workloads
            </h2>
            <p className="text-gray-700 text-lg">
              PIOSA is tailor-made for high-demand enterprise applications, such
              as:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-3">
              <li>
                <strong className="text-blue-500">CRM and ERP Systems:</strong>{" "}
                Oracle RAC/Exadata, SAP, Salesforce.
              </li>
              <li>
                <strong className="text-blue-500">
                  Data-Intensive Analytics:
                </strong>{" "}
                Real-time insights with seamless scaling.
              </li>
              <li>
                <strong className="text-blue-500">
                  Containerized Workloads:
                </strong>{" "}
                Red Hat OpenShift/Enterprise.
              </li>
            </ul>
            <p className="text-gray-700 mt-6">
              These workloads often experience performance spikes. With PIOSA,
              you’re always prepared to deliver peak performance, no matter the
              demand.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-blue-600">
          Ready to Transform Your Storage Strategy?
        </h1>
        <p className="text-gray-700 text-lg mt-4">
          With Prolific IO Storage Accelerator, you no longer have to choose
          between cost optimization and performance needs. Experience the best
          of both worlds: dynamic scaling that ensures your data workloads are
          always optimized, all while saving on operational expenses.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          Contact GlobalXperts today to learn how PIOSA can redefine your
          storage performance and scalability.
        </p>
      </div>

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
        {/* Left Side Content */}
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Field Services?</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over 120 countries supported
              with local technical resources.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Round-the-clock support for
              emergencies and planned maintenance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong>Avoid staffing overhead while
              accessing skilled IT professionals when and where you need them.
            </li>
          </ul>
          {/* Download Brochure Button */}
          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/IOSA+Brochure+w+logo.pdf"
            download ="IOSA.pdf"
            target="_blank"
            className="ml-8 mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        {/* Right Side Image */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5  ">
          {/* Embedded image */}
          <div className="relative">
            <img
              className="w-full aspect-video rounded-md shadow-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/iosaImage.png"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <ContactCard />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default iosa;
