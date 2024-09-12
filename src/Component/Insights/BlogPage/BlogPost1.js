import React from "react";
import awsPartnerBadge from "../../../Assets/blogPost1.png"; 
import awslogo from "../../../Assets/awsblogimg.png";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ContactCard from "../../Contact/ContactCard"; 

const BlogPost1 = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-3">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-0">
              GlobalXperts Soars to New Heights: Achieves AWS Select Partner Status!
            </h1>
            <img
              src={awslogo}
              alt="AWS Select Partner Badge"
              className="w-24 h-24 lg:w-32 lg:h-32"
            />
          </div>

          <p className="text-lg font-semibold text-gray-700 mt-4">
            Raleigh, North Carolina – February 12, 2024 –
          </p>
          <p className="mt-4 text-gray-600">
            We are thrilled to announce that GlobalXperts Inc. has officially
            achieved the prestigious AWS Select Partner level! This significant
            milestone recognizes our deep expertise and commitment to delivering
            exceptional cloud solutions on the AWS platform.
          </p>
          <p className="mt-4 text-gray-600">
            We are incredibly proud of this accomplishment and grateful to our
            amazing team, dedicated clients, and the AWS community for their
            unwavering support. This achievement strengthens our commitment to
            providing best-in-class cloud solutions and propels us forward on
            our journey.
          </p>

          <a
            href="#"
            className="block mt-6 text-blue-600 font-medium hover:underline"
          >
            About GlobalXperts Inc.
          </a>

          <p className="mt-4 text-gray-600">
            GlobalXperts Inc. is a provider of cloud computing and EBS high
            performance storage solutions. The company helps businesses of all
            sizes migrate to, optimize, and manage their workloads on AWS.
            GlobalXperts is an AWS Select Consulting Partner and has a proven
            track record of success in helping businesses achieve their cloud
            goals.
          </p>

          <p className="mt-4 text-gray-600">
            Contact: Jake Heins – Director of Business Development –
            <a
              href="mailto:jake.heins@globalxperts.net"
              className="text-blue-600 hover:underline"
            >
              {" "}
              Jake.Heins@globalxperts.net
            </a>
          </p>

          <div className="flex justify-center mt-8">
            <img
              src={awsPartnerBadge}
              alt="AWS Partner Badge"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <ContactCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost1;
