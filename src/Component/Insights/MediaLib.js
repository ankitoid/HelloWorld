// src/VideoLibrary.js
import React, { useState } from 'react';
import Navbar from '../Navbar';
import ContactCard from '../Contact/ContactCard';
import Footer from '../Footer';

const MediaLib = () => {
  const [selectedVideo, setSelectedVideo] = useState('https://www.youtube.com/embed/2IHr2U7p7zk');

  const videos = [
    { title: 'Enterprise Data Center Design Build', duration: '2:54', url: 'https://www.youtube.com/embed/2IHr2U7p7zk' },
    { title: 'Titan X Storage Solutions', duration: '1:42', url: 'https://www.youtube.com/embed/Oz6kI6LeImk' },
    { title: 'GX Field Services - Onsite Service', duration: '1:25', url: 'https://www.youtube.com/embed/cS-HXGUn-jA' },
    { title: 'GX Managed Collaboration Technology', duration: '1:46', url: 'https://www.youtube.com/embed/YXZKE9nH4yA' },
    { title: 'GX Customer Connect Service', duration: '3:24', url: 'https://www.youtube.com/embed/some-video-url' },
    { title: 'Opsis Streaming Service', duration: '1:20', url: 'https://www.youtube.com/embed/some-video-url' },
    { title: 'Technical Staff Augmentation', duration: '1:58', url: 'https://www.youtube.com/embed/some-video-url' },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Video Library</h1>

        <div className="flex flex-col lg:flex-row">
          {/* Playlist Section */}
          <div className="w-full lg:w-1/3 p-4 bg-white shadow-md rounded-md overflow-auto h-[400px]">
            <h2 className="text-lg font-semibold mb-4">Playlist</h2>
            <ul>
              {videos.map((video, index) => (
                <li key={index}
                  onClick={() => setSelectedVideo(video.url)}
                  className="cursor-pointer p-2 hover:bg-gray-200 rounded-md flex justify-between items-center">
                  <span>{video.title}</span>
                  <span className="text-sm text-gray-500">{video.duration}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video Section */}
          <div className="w-full lg:w-2/3 p-4">
            <div className="w-full aspect-w-16 aspect-h-9">
              <iframe
                src={selectedVideo}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactCard/>
    <Footer/>
    </>
  );
};

export default MediaLib;
