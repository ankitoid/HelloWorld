import React from "react";
import Navbar from "../../Navbar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const HybridCloud = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Hybrid Cloud</title>
        <meta name="description" content="Hybrid Cloud" />
      </Helmet>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Hybrid Cloud Solutions with AWS Outposts{" "}
              </h1>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base text-left lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                What is holding your business back from migrating to the cloud?
                Is it a need for extremely low latency responses? Or is it a
                compliance issue?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-white   rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/HybridCloud.webp" // Replace with the actual image path
            alt="Boost outcomes"
            className="rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Hybrid Cloud Solutions
          </h2>
          <p className="mt-4 text-gray-600">
            Whatever the reason, if you have data that must reside on-premises,
            you can still make use of the cloud, and GlobalXperts can build a
            hybrid cloud solution that is right for your systems using AWS
            Outposts.
          </p>
          <button className=" px-6 py-3 bg-white text-blue-700 border border-blue-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white mt-12">
            Download Brochure
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        {/* Reasons Section */}
        <section className="py-6 px-4 sm:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Companies Require On-premises Hardware
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Extremely Low Latency",
                image:
                  "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/lowLatency.png",
              },
              {
                title: "Strict Security Measures",
                image:
                  "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/securityMeasures.png",
              },
              {
                title: "Data Residency",
                image:
                  "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/dataRed.png",
              },
              {
                title: "Compliance Requirements",
                image:
                  "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/complience.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden items-center justify-center text-center p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-64 justify-center  rounded-2xl mb-1 "
                />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* We Can Deploy Section */}
        <section className=" py-12 px-4 sm:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            We Can Deploy and Support Your Hybrid Cloud
          </h2>
          <ul className="list-disc list-inside text-lg max-w-prose mx-auto space-y-2">
            <li>Solution design and implementation</li>
            <li>Migration services</li>
            <li>
              On-call support and troubleshooting AWS Outposts deployments
            </li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="py-12 px-4 sm:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Benefits</h2>
          <ul className="list-disc list-inside text-lg max-w-prose mx-auto space-y-2">
            <li>Integration with services in the public cloud.</li>
            <li>Lowest possible latency to local clients or components.</li>
            <li>Satisfaction of compliance and data residency requirements.</li>
          </ul>
        </section>

        {/* Apps Section */}
        <section className="  px-4 sm:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Apps that Commonly Require On-Premises Components
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Workloads sensitive to compute latency",
              "AR/VR workloads",
              "IoT solutions",
              "Bank in a box apps",
              "Manufacturing apps",
              "Design and visualization apps",
              "Apps with large, immovable datasets",
              "Apps with regional compliance restrictions",
              "Workloads being migrated away from VMware",
              "Workloads that span a variety of host and storage systems",
              "Transcoding, filtering, caching, and alerting applied at the edge",
            ].map((app, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg p-4 text-center"
              >
                <p className="text-md font-medium">{app}</p>
              </div>
            ))}
          </div>
        </section>

        <h3 className="text-2xl font-bold mt-8 mb-4 text-center">
          How Does AWS Outposts Work?
        </h3>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Outposts essentially migrates AWS to your premises instead of the
          other way around. The services you use are still fully managed by AWS.
        </p>
        <div className="flex flex-wrap justify-center mb-8">
          <ul className="list-disc  text-lg text-gray-700">
            <li className=" items-center list-item mb-2">
              Amazon hardware is installed on your premises.
            </li>
            <li className=" items-center list-item mb-2">
              A private edge location is created in AWS for your “outpost.”
            </li>
            <li className=" items-center list-item mb-2">
              You run your sensitive system components in this edge location
              using Amazon EKS containers.
            </li>
            <li className=" items-center list-item mb-2">
              These components are managed like any other workload in AWS.
            </li>
          </ul>
          <div className=" mt-20">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/HbridCloudArch.png"
              alt="hybrid cloud"
              className="w-5/4"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-center">
          Let Us Build a Solution For You
        </h3>
        <p className="text-lg text-gray-700 text-center">
          GlobalXperts can design a solution that works best for your systems
          and can then migrate your workloads to it, giving you access to the
          benefits of the cloud on your premises. Contact us today.
        </p>
      </div>
      <div className="mt-8 mb-8">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default HybridCloud;
