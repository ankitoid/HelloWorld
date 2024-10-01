import React, { useRef } from "react";
import ContactCard from "../Contact/ContactCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import serviceImage from "../../Assets/blogimg.png";

const Blog = () => {
  const contactRef = useRef(null); // Ref to contact card

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const blogPosts = [
    {
      title:
        "GlobalXperts Soars to New Heights: Achieves AWS Select Partner Status!",
      description:
        "Raleigh, North Carolina – February 12, 2024 – We are thrilled to announce that GlobalXperts Inc. has officially achieved the AWS Select Partner status, marking a significant milestone in our journey to becoming a leading cloud solutions provider.",
      date: "February 13, 2024",
      link: "/Blog-post1",
    },
    {
      title: "GlobalXperts Takes Pole Position in AWS Storage Expertise",
      description:
      "Completing the Amazon Storage Field Technical Review, GlobalXperts now leads the way in providing advanced cloud storage solutions to significantly enhance operational efficiency and reduce overall operational costs for our clients, ensuring exceptional service delivery and continuous improvement.",
      date: "January 30, 2024",
      link: "/Blog-post2",
    },
    {
      title:
        "GlobalXperts has cleared Amazon Connect Field Technical Review (FTR)",
      description:
        "Raleigh, NC – November 7, 2023 – GlobalXperts Inc. is proud to announce that it has passed the Amazon Connect FTR, solidifying our expertise in delivering seamless customer experiences through innovative contact center solutions.",
      date: "October 27, 2023",
      link: "/Blog-post3",
    },
    {
      title: "GlobalXperts Awarded 8(a) STARS III GWAC",
      description:
        "New STARS GWAC has a $50 billion ceiling and a focus on emerging technologies. This award enables us to offer innovative IT services to federal agencies, driving growth and technological advancement.",
      date: "December 7, 2021",
      link: "/Blog-post4",
    },
  ];

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-gray-100">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Blog
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    Discover the latest news and updates from GlobalXperts.
                    Learn how we are revolutionizing the service provider
                    industry with cutting-edge technologies and expert
                    solutions.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src={serviceImage}
                    alt="Service providers working on IT solutions"
                  />
                </div>
              </div>
              <button
                onClick={handleContactUsClick}
                className="mt-8 px-12 py-2 border-2 border-transparent bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Blog Post Section */}
          <div className="p-8 max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Latest News
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-gray-600">{post.description}</p>
                  <p className="mt-4 text-gray-500 text-sm">{post.date}</p>
                  <div className="mt-4 flex justify-center">
                    <a
                      href={post.link}
                      className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Case Studies Section */}
          <div className="p-8 max-w-7xl mx-auto bg-white mt-12 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              Latest Case Studies
            </h4>
            <div className="border-t-4 border-blue-500 py-6">
              <p className="text-lg text-gray-600">
                Explore our recent case studies, where we helped companies
                optimize their infrastructure and operations through innovative
                IT solutions and cloud services.
              </p>
              <div className="mt-6 ">
              <button
                onClick={handleContactUsClick}
                className="mt-6 px-6 py-2 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
              >
                View Case Studies
              </button>
              </div>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="p-8 max-w-7xl mx-auto bg-gray-50 mt-12 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Choose GlobalXperts?
            </h4>
            <p className="text-lg text-gray-600 mb-6">
              At GlobalXperts, we specialize in providing tailored IT solutions
              to help businesses thrive in a competitive market. Our expertise
              spans cloud infrastructure, storage optimization, and
              customer-centric solutions like Amazon Connect.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Custom cloud infrastructure design and implementation
              </li>
              <li className="mb-2">
                Advanced storage solutions with AWS expertise
              </li>
              <li className="mb-2">
                Seamless integration of CRM and contact center technologies
              </li>
              <li className="mb-2">
                Proven track record of success with major government contracts
              </li>
            </ul>
            <div className="mt-6">
              <button
                onClick={handleContactUsClick}
                className="px-6 py-2 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
              >
                Learn More About Our Services
              </button>
            </div>
          </div>

          {/* Contact Card Section */}
          <div
            id="contact-card"
            ref={contactRef}
            className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center"
          >
            <ContactCard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
