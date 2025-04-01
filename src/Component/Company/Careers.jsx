import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ContactCard from "../Contact/ContactCard";

const Careers = () => {
  // State to store the jobs
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle job search
  const handleSearchJobs = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while fetching data

    try {
      const response = await fetch("/api/jobs"); // Assuming your backend API endpoint is /api/jobs
      const data = await response.json();
      setJobs(data); // Update the jobs state with fetched data
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }

    setLoading(false); // Stop loading after fetching
  };

  return (
    <>
      <Navbar />
      {/* Main Section */}
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
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers.mp4"
                alt="Career at GlobalXperts"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Job Search Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-blueCustomColor text-white p-10">
        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white rounded-full overflow-hidden">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers1.jpg"
              className="w-full h-full object-cover"
              alt="Career"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Let's transform with us
          </h1>
          <form className="space-y-4" onSubmit={handleSearchJobs}>
            <div>
              <label className="block text-sm">Keyword</label>
              <input
                type="text"
                placeholder="Search by keyword/title"
                className="w-full p-3 border rounded-md text-black"
              />
            </div>
            <div>
              <label className="block text-sm">Job Position</label>
              <select className="w-full p-3 border rounded-md text-black">
                <option value="All">All</option>
                <option value="Network Engineer">Network Engineer</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Associate Network Engineer">
                  Associate Network Engineer
                </option>
                <option value="Collaboration Technician">
                  Collaboration Technician
                </option>
                {/* Add other options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm">Country</label>
              <select className="w-full p-3 border rounded-md text-black">
                <option value="All">All</option>
                {/* Add more options */}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-800 rounded-full px-6 py-3 text-white flex items-center justify-center hover:bg-blue-900 transition"
            >
              Search Jobs <span className="ml-2">🔍</span>
            </button>
          </form>
        </div>
      </div>

      {/* Job Results Section */}
      <div className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Job Openings</h2>

        {loading ? (
          <p>Loading jobs...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p>{job.location}</p>
                <p className="text-gray-700 mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
      <ContactCard />
      </div>
      <div className="mt-8">
      <Footer />
      </div>    </>
  );
};

export default Careers;
