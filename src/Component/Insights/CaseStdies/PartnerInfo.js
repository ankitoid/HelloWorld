import React from "react";
import AristaFocus from "../../../Assets/AristsFocusArea.png";
import Navbar from "../../Navbar";
import l13 from "../../../Assets/l13.png";
import l4 from "../../../Assets/l4.png";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const PartnerInfo = () => {
  const products = [
    {
      title: "Arista CloudVision CUE Management",
      overview: `Arista has pioneered the cloud networking movement with its software driven approach, built on cloud principles with consistent, reliable software offerings, open standards-based designs, and native programmability. CloudVision® extends the same architectural approach of simplification through software consistency as a multi-domain management plane for automating the entire network across private, public, and hybrid clouds as well as wired and wireless campus.`,
      date: "December 19, 2022",
      link: "/solutions/Networking   ",
    },
    {
      title: "Arista Secure Edge",
      overview: `Edge Threat Management is a key component of The Cognitive Unified Edge (CUE) from Arista Networks. CUE enables commercial customers to accelerate new services and technology innovations by consolidating multiple security and networking functions into an “edge as a service” cloud-managed solution.`,
      date: "December 19, 2022",
      link: "/solutions/Networking",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 md:p-8 mt-14">
        {/* Heading Section */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold">
            <span className="border-l-4 border-blue-500 pl-2">
              Customer Support and Focus Areas
            </span>
          </h2>
        </div>

        {/* Content and Image Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div>
            <p className="text-lg md:text-xl mb-2">
              <span className="text-xl md:text-2xl font-bold">History</span> –
              GlobalXperts has been a Field Services and Consulting Services
              Provider to Arista since 2018 to the present day.
            </p>

            <p className=" text-lg md:text-xl mb-2">
              <span className="text-xl md:text-2xl font-bold">Field Services</span> –
              On-Site Services (Master Services Agreement)
            </p>
            <p className="mb-4">
              We provide Global on-site smart hands services to 165 counties.
              Our service level agreement supports 24 x 7 x 365 days a year with
              a 4-hour response to any location.
            </p>

            <p className="text-lg md:text-xl mb-2">
              <span className="text-xl md:text-2xl font-bold ">Consulting Services</span> –
              Data Center Staff that support Enterprise Data Center for
              Companies that provide Stock/ETF Trading and other fortune 500
              businesses.
            </p>

            <p className=" text-lg md:text-xl mb-4">
              <span className="text-xl md:text-2xl font-bold ">Delivering Success</span> –
              Through our partnership, we enable support teams and design/build
              to deliver some of the most "state of the art" data centers
              on the planet.
            </p>
          </div>

          {/* Image Content */}
          <div className="flex justify-center items-center">
            <img
              src={AristaFocus}
              alt="Data center equipment"
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Arista Certifications Heading */}
        <div className="text-left mb-8 mt-12">
          <h2 className="text-3xl font-bold">
            <span className="border-l-4 border-blue-500 pl-2">
              Arista Certifications
            </span>
          </h2>
          <p className="mt-2 ">
            The purpose of getting an Arista certification is to demonstrate
            your skills and knowledge in designing, deploying, and managing data
            center and cloud environments.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certification 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={l4}
              alt="Arista ACE Cloud Professional L4"
              className="w-48 h-auto object-cover mb-4"
            />
            <p className="">
              ACE: L4 is a 5-day course focused on the Enterprise edge, Service
              Provider WAN, Large Enterprise Transport networks, and Data Center
              Interconnect (DCI) architectures. Candidates will explore the
              advanced routing capabilities available within Arista hardware and
              EOS. Topics such as EVPN, MPLS and Segment Routing will be
              discussed in depth. All topics are taught from both command line
              and CloudVision perspectives, including provisioning, managing,
              troubleshooting, and optimizing.
            </p>
          </div>

          {/* Certification 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={l13}
              alt="Arista ACE Cloud Journeyman L3"
              className="w-48 h-auto object-cover mb-4"
            />
            <p className="">
              ACE: L3 is a 5-day course that is designed around Arista’s
              data-driven Cloud network architectures. Candidates will master
              core technologies found in most modern corporate networks today
              such as MultiProtocol Border Gateway Protocol (MP-BGP), Exterior
              BGP (eBGP) underlays, Ethernet Virtual Private Networks (EVPN),
              and Virtual Extensible LAN protocol (VXLAN). Additional topics
              include security, QoS, multicast, and Cognitive Campus.
            </p>
          </div>
        </div>
      </div>
      <div className=" py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-10">
            Arista Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{product.title}</h2>
                <p className="text-gray-700 mb-4">{product.overview}</p>
                <a
                  href={product.link}
                  className="text-green-600 hover:underline"
                >
                  READ MORE »
                </a>
                <div className="mt-4 text-sm text-gray-500">{product.date}</div>
              </div>
            ))}
          </div>
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

export default PartnerInfo;
