import React, { useRef } from "react";
import {
  FaCloud,
  FaDatabase,
  FaHandshake,
  FaHeadset,
  FaProjectDiagram,
} from "react-icons/fa";
import edu from "../../Assets/edu.png";
import Navbar from "../Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import gslogo from "../../Assets/gvlogo.png";
import ContactCard from "../Contact/ContactCard";
const Government = () => {
  const contactRef = useRef(null); // Ref to contact card

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-gray-100 ">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Government Section */}
            <div className="bg-gray-100  py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Government
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    GlobalXperts, a woman-owned 8(a) small business, provides
                    agile and expert IT solutions, combining the personalized
                    approach of a small company with the capabilities of an
                    industry leader. Since 2005, we have delivered scalable
                    infrastructure and managed services using top technologies
                    from Cisco, Microsoft, AWS, and more. We empower federal
                    agencies with advanced IT solutions to optimize operations,
                    enhance service delivery, and achieve digital transformation
                    goals. Our expertise in AI, machine learning, and automation
                    helps agencies harness data for more efficient, personalized
                    services.{" "}
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src={edu}
                    alt="A man working on a laptop in a server room."
                  />
                </div>
              </div>
              <button
          onClick={handleContactUsClick}
          className="px-6 py-2 border-2 mt-8 2xl:ml-0  border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
        >
          Contact Us
        </button>
            </div>

            {/* Overview Section */}
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
              <div className="max-w-7xl text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Overview
                </h2>
                <p className="mt-3 text-lg text-gray-600">
                  GlobalXperts, a woman-owned 8(a) small business since 2005,
                  combines the agility of a small company with the expertise of
                  a large enterprise. We specialize in designing, implementing,
                  and managing IT infrastructure solutions for federal agencies,
                  leveraging industry-leading technologies from Cisco,
                  Microsoft, AWS, and more. Our scalable IT services enable
                  federal agencies to optimize operations, enhance citizen
                  engagement, and achieve digital transformation goals through
                  advanced tools like AI, machine learning, and automation.
                </p>
              </div>
            </div>

            {/* Capabilities Section */}
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-12 text-center">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Capabilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a trusted partner in providing industry-leading information
                  technology solutions to many organizations, GlobalXperts is
                  exceptionally qualified to support federal agencies with their
                  IT infrastructure and cloud needs. We specialize in delivering
                  innovative and secure solutions for data centers, cloud
                  platforms, edge-computing systems, collaboration, unified
                  communication, professional services, and managed services.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: FaDatabase,
                      title: "Data Centers",
                      description:
                        "Our team of experts understands the critical importance of data centers in today's digital landscape. We offer end-to-end solutions for designing, building, and managing secure data centers that meet the unique needs of federal government agencies for local/on-premises and hybrid solutions. Whether it's optimizing existing infrastructure or implementing new data center solutions, we ensure maximum uptime, scalability, and reliability.",
                    },
                    {
                      icon: FaCloud,
                      title: "Cloud Solutions",
                      description:
                        "Embracing the power of the cloud is essential for government agencies looking to enhance agility, scalability, and cost-efficiency. We offer comprehensive cloud solutions tailored to the specific requirements of federal government agencies, including public, private, and hybrid cloud deployments. We even offer Unified Communications (UCaaS) as a Service for our customers focusing on voice solutions. Our team will help you migrate, manage, and optimize your applications and data in the cloud, ensuring seamless integration and robust security.",
                    },
                    {
                      icon: FaProjectDiagram,
                      title: "Collaboration and Unified Communication",
                      description:
                        "Efficient communication and collaboration are vital for government agencies to streamline operations and enhance productivity. Our collaboration and unified communication solutions enable real-time communication, document sharing, video conferencing, and project management, ensuring seamless collaboration across teams and locations. We leverage industry-leading tools and technologies to create secure and user-friendly platforms for effective communication.",
                    },
                    {
                      icon: FaHandshake,
                      title: "Professional Services",
                      description:
                        "Our team of skilled professionals offers exceptional IT consulting and professional services to federal government agencies through our GSA STARS III contract. We provide strategic planning, technology assessment, system integration, and project management services to help you achieve your IT goals. We also offer field engineering services with on-site, four-hour response to over 100 countries. With a deep understanding of government regulations and compliance requirements, we ensure that your technology initiatives align with industry standards and best practices.",
                    },
                    {
                      icon: FaHeadset,
                      title: "Managed Services",
                      description:
                        "Government agencies need reliable and proactive IT support to keep their systems running smoothly. Our managed services offer helpdesk services, comprehensive real-time monitoring, maintenance, and support for your IT infrastructure. We proactively identify and resolve issues, perform regular system updates, deliver detailed reporting, and provide 24/7 technical support, ensuring minimal downtime and maximum efficiency.",
                    },
                  ].map(({ icon: Icon, title, description }, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-3">
                        <Icon className="text-blue-500 text-2xl mr-3" />
                        <h3 className="text-2xl font-semibold text-gray-800">
                          {title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mt-8">
                  At GlobalXperts, we pride ourselves on our customer-centric
                  approach and have earned the trust of numerous organizations
                  that call us trusted partners.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Contact us today to learn more about how our information
                  technology solutions can empower your federal government
                  agency and drive success in the digital era. Let us be your
                  partner in achieving your IT goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center border-blue-500 mt-5">
  Contract Vehicle
</h1>

<div className="flex justify-center my-8">
  <img src={gslogo} alt="8(a) STARS III" className="w-36 md:w-48" />
</div>

<h2 className="text-2xl md:text-3xl font-semibold text-center my-4">
  General Services Administration (GSA) 8(a) STARS
</h2>
<h3 className="text-xl font-medium text-center ">
  Government Wide Acquisition Contract (GWAC)
</h3>

<p className="p-6 md:p-12 text-lg md:text-xl mb-4 ">
  <strong>GlobalXperts Inc.</strong> was awarded prime contract #
  47QTCB21D0103 on General Services Administration’s 8(a) Streamlined
  Technology Acquisition Resources for Services (STARS III), a small
  business Government Wide Acquisition Contract (GWAC) that provides
  flexible access to customized IT solutions from a large, diverse pool
  of best in class 8(a) industry partners.
</p>

<p className="p-6 md:p-12 text-lg md:text-xl mb-4 ">
  As GSA’s fourth generation 8(a) GWAC, STARS III is a multiple-award,
  indefinite-delivery/ indefinite-quantity (MA-ID/IQ) contract designed
  to provide federal agencies with innovative IT services-based
  solutions from vetted 8(a) small, disadvantaged businesses, in support
  of meeting their socioeconomic contracting goals.
</p>

<div className="bg-white p-6 md:p-12 text-gray-800">
  {/* Header Section */}
  <p className="text-lg md:text-xl mb-4 md:mb-8">
    This GWAC, with a ceiling of $50 Billion and a five-year base
    period, will build upon the framework of 8(a) STARS II and expand
    capabilities for emerging technologies, helping federal agencies
    accomplish information technology (IT) missions and accommodate
    OCONUS requirements. Through STARS III, agencies can access
    award-winning 8(a) firms through an established contract vehicle,
    saving time and taxpayer money over open-market methods.
  </p>


          {/* Contract Details Table */}
          <div className="overflow-x-auto my-8 md:p-12">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left font-semibold">
                    Contract Number
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Contract Period
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Unique Entity ID
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Cage Code
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">47QTCB21D0103</td>
                  <td className="px-4 py-2">
                    One 5-year base starting 7/2/21 and one 3-year option period
                    starting 7/2/26
                  </td>
                  <td className="px-4 py-2">TMK3KJDUBK14</td>
                  <td className="px-4 py-2">6YGM8</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contract Description */}
          <p className="text-lg md:text-xl font-bold mt-4 ">
            GSA’s 8(a) STARS III GWAC
          </p>
          <p className="text-lg md:text-xl mt-2">
            A multiple-award indefinite-delivery (MA-ID/IQ) contract and
            designated as a Best-in-Class contract, is an 8(a) small business
            set-aside GWAC that provides flexible access to customized and
            innovative IT solutions.
          </p>

          <p className="text-lg md:text-xl mt-4">
            The GSA 8(a) STARS III GWAC offers IT services ranging from simple
            to complex and services-based solutions such as software
            development, IT Operations and Maintenance, Systems Design, IT
            help-desk support, information assurance, cybersecurity, and more.
          </p>
</div>
          {/* Features and Benefits Table */}
          <div className="overflow-x-auto my-8 md:p-12">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left font-semibold">
                    Features
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Benefits
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    $50 billion program ceiling and five-year base period with
                    one three-year option
                  </td>
                  <td className="px-4 py-2">
                    Allows for long-term planning of large-scale program
                    requirements
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    Sole-source task orders up to the 8(a) competitive threshold
                  </td>
                  <td className="px-4 py-2">
                    Enhances opportunities for 8(a) firms
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    Contract types include fixed-price, labor-hour, and time-and
                    material terms
                  </td>
                  <td className="px-4 py-2">
                    Offers flexibility of contract types to mitigate risk
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    Access to exceptionally qualified 8(a) small-business
                    industry partners
                  </td>
                  <td className="px-4 py-2">
                    Enables federal clients to earn small-disadvantaged business
                    (SDB) credit
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    Pre-competed, easy-to-use contract with streamlined ordering
                    procedures based on FAR 16.505
                  </td>
                  <td className="px-4 py-2">
                    Saves time and money by reducing procurement lead time
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    No protests on orders under $10 million, except on the
                    grounds that the order increases the scope, period, or
                    maximum value of the GWAC
                  </td>
                  <td className="px-4 py-2">
                    Minimizes protest risk and supports timely order award for
                    optimal mission support
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          id="contact-card"
          ref={contactRef}
          className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center"
        >
          <ContactCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Government;
