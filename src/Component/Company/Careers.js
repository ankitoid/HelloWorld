import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import v1 from "../../Assets/careers.mp4";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blueCustomColor p-10 mt-16">
        <div className="bg-gray-900 text-white py-16 px-6 lg:px-12 rounded-md">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl">Join Our Team</h2>
              <p className="text-xl text-gray-300">
                At GlobalXperts, we are dedicated to fostering a culture of
                innovation, collaboration, and excellence. As a leading provider
                of IT solutions, our team is made up of industry experts who are
                passionate about technology and committed to delivering value to
                our clients.
              </p>
              <p className="text-xl text-gray-300">
                We believe in empowering our employees to reach their full
                potential through continuous learning, professional development,
                and opportunities for career advancement. Whether you are an
                experienced professional or a recent graduate, GlobalXperts
                offers a dynamic work environment where your skills and
                contributions are valued.
              </p>
              <p className="text-xl text-gray-300">
                Explore exciting career opportunities with us and be part of a
                team that is shaping the future of IT services. From technical
                roles in cloud computing, network security, and DevOps to
                positions in project management and customer support, we offer a
                range of opportunities that cater to diverse skills and
                aspirations.
              </p>
            </div>

            {/* Video Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
              <video
                className="w-full rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
                src={v1}
                alt="Career at GlobalXperts"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10 px-6 ">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center py-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600">
            At GlobalXperts, we're always looking for passionate, innovative,
            and driven professionals to be part of our growing team. Explore our
            career opportunities and take the next step in your professional
            journey.
          </p>
        </div>

        {/* Company Values Section */}
        <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Innovation
            </h2>
            <p className="text-gray-600">
              We embrace creativity and innovation, encouraging our team to
              think outside the box to deliver exceptional solutions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Growth
            </h2>
            <p className="text-gray-600">
              We invest in our people, providing opportunities for continuous
              learning, career advancement, and personal development.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Teamwork
            </h2>
            <p className="text-gray-600">
              Collaboration is at the heart of what we do. We believe in working
              together to achieve great results.
            </p>
          </div>
        </div>

        {/* Job Opportunities Section */}
        <div className="max-w-7xl mx-auto py-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Card Example */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 mb-4">Location: Remote | Full-Time</p>
              <p className="text-gray-600">
                We're looking for a skilled Full Stack Developer to join our
                team. Must have experience in React, Node.js, and MongoDB.
              </p>
              <button className="mt-4 bg-blueCustomColor text-white py-2 px-4 rounded hover:bg-blue-950 transition">
                Apply Now
              </button>
            </div>

            {/* Additional Job Cards - Repeat structure as needed */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Network Engineer
              </h3>
              <p className="text-gray-600 mb-4">
                Location: Raleigh, NC | Full-Time
              </p>
              <p className="text-gray-600">
                Seeking a Network Engineer with expertise in Cisco, AWS, and
                VMware. Join our team to work on exciting projects worldwide.
              </p>
              <button className="mt-4 bg-blueCustomColor text-white py-2 px-4 rounded hover:bg-blue-950 transition">
                Apply Now
              </button>
            </div>

            {/* Add more job cards here */}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-blueCustomColor text-white py-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg mb-6">
              Join us at GlobalXperts and be a part of a dynamic,
              forward-thinking team that is shaping the future of IT and cloud
              solutions.
            </p>
            <button className="bg-white text-blue-600 py-3 px-6 rounded font-semibold hover:bg-blueCustomColor hover:text-white transition">
              View All Job Openings
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
