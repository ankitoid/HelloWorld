import React, { useState } from "react";
import Navbar from "../Navbar";
import ContactCard from "../Contact/ContactCard";
import Footer from "../Footer";
import { FaFilePdf } from "react-icons/fa"; // Example icon import

const MediaLib = () => {
  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.youtube.com/embed/Is5AQ5txzyY"
  );

  const videos = [
    {
      title: "Enterprise Data Center Design Build",
      duration: "2:54",
      url: "https://www.youtube.com/embed/Is5AQ5txzyY",
    },
    {
      title: "Titan X Storage Solutions",
      duration: "1:42",
      url: "https://www.youtube.com/embed/Xt7mWZTOxnc",
    },
    {
      title: "GX Field Services - Onsite Service",
      duration: "1:25",
      url: "https://www.youtube.com/embed/APZoNUXXjXg",
    },
    {
      title: "GX Managed Collaboration Technology",
      duration: "1:46",
      url: "https://www.youtube.com/embed/sRMIEQTbYlk",
    },
    {
      title: "GX Customer Connect Service",
      duration: "3:24",
      url: "https://www.youtube.com/embed/ttnaxK8fdDE",
    },
    {
      title: "Opsis Streaming Service",
      duration: "1:20",
      url: "https://www.youtube.com/embed/osqNQeEhRsg",
    },
    {
      title: "Technical Staff Augmentation",
      duration: "1:58",
      url: "https://www.youtube.com/embed/cUR7KIG6duU",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8 mt-20">
        Services Brochures
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-4">
        <a
          href="https://globalxperts-my.sharepoint.com/:b:/g/personal/neil_globalxperts_net/Eec5FseJsoFBpRSa_A2CUu4BWM948zXpqQPd6F-KfBh26A?e=fhbhiv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <FaFilePdf className="w-12 h-12 mx-auto text-red-600" />
          <h2 className="text-lg font-medium mt-4">Field Services (PDF)</h2>
        </a>

        <a
          href="https://globalxperts-my.sharepoint.com/:b:/g/personal/neil_globalxperts_net/EViaommmZb1LqtRM5jMoOo8Be4FWwOBAz611leveM7xApg?e=s6QpuJ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <FaFilePdf className="w-12 h-12 mx-auto text-red-600" />
          <h2 className="text-lg font-medium mt-4">
            GX Customer Connect (PDF)
          </h2>
        </a>

        <a
          href="https://globalxperts-my.sharepoint.com/:b:/g/personal/neil_globalxperts_net/EXNi4kOxkPpNuu3RdpVsVfcBKxHp8bv5eN1lXUtBYJbSxw?e=tXc7IL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <FaFilePdf className="w-12 h-12 mx-auto text-red-600" />
          <h2 className="text-lg font-medium mt-4">Titan GX Storage (PDF)</h2>
        </a>

        <a
          href="https://globalxperts-my.sharepoint.com/:b:/g/personal/neil_globalxperts_net/Ec8O8h3pRStGngYnCUjKOWYBlirPwrCzkHzcAV48AIVDOg?e=eQ1YTZ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <FaFilePdf className="w-12 h-12 mx-auto text-red-600" />
          <h2 className="text-lg font-medium mt-4">Cyber Security XDR (PDF)</h2>
        </a>

        <a
          href="https://globalxperts-my.sharepoint.com/:b:/g/personal/neil_globalxperts_net/EViaommmZb1LqtRM5jMoOo8Be4FWwOBAz611leveM7xApg?e=s6QpuJ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <FaFilePdf className="w-12 h-12 mx-auto text-red-600" />
          <h2 className="text-lg font-medium mt-4">
            Contact Center Solutions (PDF)
          </h2>
        </a>
      </div>

      <div className="max-w-6xl mx-auto p-4 mt-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Media Library</h1>

          <div className="flex flex-col lg:flex-row">
            {/* Playlist Section */}
            <div
              className="w-full lg:w-1/3 p-4 bg-white shadow-md rounded-md overflow-auto"
              style={{ maxHeight: "75vh" }}
            >
              <h2 className="text-lg font-semibold mb-4">Playlist</h2>
              <ul>
                {videos.map((video, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedVideo(video.url)}
                    className="cursor-pointer p-2 hover:bg-gray-200 rounded-sm flex justify-between items-center"
                  >
                    <span>{video.title}</span>
                    <span className="text-sm text-gray-500">
                      {video.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Section */}
            <div className="w-full lg:w-2/3 p-4 flex flex-col">
              <div className="flex-grow">
                <iframe
                  src={selectedVideo}
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 sm:h-80 lg:h-full rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactCard />
      <Footer />
    </div>
  );
};

export default MediaLib;
