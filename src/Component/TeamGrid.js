import React from 'react';
import { Link } from 'react-router-dom';

const TeamGrid = () => {
  const teams = [
    { name: "Cloud & Devops", path: "/solutions/cloud" },
    { name: "Networking", path: "/networking" },
    { name: "Professional Service", path: "/service/Professional-Services" },
    { name: "Streaming and Broadcasting", path: "/streaming-broadcasting" },
    { name: "GenAI", path: "/solutions/GenAI" },
    { name: "Software Development", path: "/software-development" }
  ];

  return (
    <div className="mt-24 bg-blueCustomColor text-white flex flex-col items-center justify-center">
      <header className="text-center px-4 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-4">
          Be a part of an ambitious team of change makers
        </h1>
        <p className="lg:text-lg md:text-xl max-w-2xl mx-auto">
          Who have a restless curiosity and a drive for ingenuity – whatever inspires you, join us for a thriving career.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mx-4">
        {teams.map((team, index) => (
          <Link 
            key={index} 
            to={team.path}
            className="bg-transparent border border-greenCustomColor text-white py-4 px-8 rounded-lg hover:bg-greenCustomColor transition duration-300 flex items-center justify-center"
          >
            {team.name}
          </Link>
        ))}
        <div className="col-span-full flex justify-center">
          <Link 
            to="/careers"
            className="bg-transparent border border-greenCustomColor text-white py-4 px-8 rounded-lg hover:bg-greenCustomColor transition duration-300 flex items-center justify-center"
          >
            Careers
          </Link>
        </div>
      </div>

      <div className="mt-8 p-4 rounded-lg text-center max-w-lg mx-auto">
        <p className="lg:text-lg md:text-xl">
          Join our AI/ML team and be at the forefront of innovation, harnessing the power of artificial intelligence and machine learning to drive tomorrow's solutions.
        </p>
      </div>
    </div>
  );
};

export default TeamGrid;
