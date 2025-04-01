import React from "react";

import Navbar from "../Navbar";
import ContactCard from "../Contact/ContactCard";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const partners = [
  {
    name: "AWS Partner Network",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p1.png",
    link: "/Partners/AWSPartner",
  },
  {
    name: "Arista",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p2.png",
    link: "/Partners/AristaPartner",
  },
  {
    name: "VMware",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p3.png",
    link: "/Partners/VMWarePartner",
  },
  {
    name: "Hewlett Packard Enterprise",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p4.png",
    link: "/Partners/HewlettPackPartner",
  },
  {
    name: "Microsoft",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p5.png",
    link: "/Partners/MicrosoftPartner",
  },
  {
    name: "Microsoft Azure",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p6.png",
    link: "/Partners/MSAzurePartner",
  },
  {
    name: "Cisco",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p7.png",
    link: "/Partners/CiscoPartner",
  },
  {
    name: "TrueNAS",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p8.png",
    link: "/Partners/TruenasPartner",
  },
  {
    name: "Google Cloud",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p9.png",
  },
  {
    name: "Calabrio",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p10.png",
  },
  {
    name: "Cisco Meraki",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p11.png",
    link: "/Partners/CisMKPartner",
  },
  {
    name: "ServiceNow",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p12.png",
  },
  {
    name: "Arush",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p13.png",
  },
  {
    name: "Nokia",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p14.png",
  },
  {
    name: "Citrix",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p15.png",
  },
  {
    name: "Veeam",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p16.png",
    link: "/Partners/VeeamPartner",
  },
  {
    name: "Seceon",
    img: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p17.png",
    link: "/Partners/SeceonPartner",
  },
];

const Partners = () => {
  return (
    <>
      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Our Partners{" "}
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
            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                GlobalXperts partners with industry leaders in cloud,
                networking, datacenter, software development, cybersecurity, and
                others, so that we can provide you with all the cutting-edge
                technology in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mt-16 mb-8">
          Our Partners
        </h1>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" items-center justify-center border rounded-lg p-4 text-center block hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-full h-auto max-h-24 object-contain"
              />
            </a>
          ))}
        </div>
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

export default Partners;
