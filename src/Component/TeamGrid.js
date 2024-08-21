import React from 'react';

const TeamGrid = () => {
  const teams = [
    "Corporate Functions",
    "Digital Technology",
    "Early Career",
    "Engineering",
    "Marketing",
    "Sales",
    "User Experience"
  ];

  return (
    <div className="min-h-screen bg-blueCustomColor text-white flex flex-col items-center justify-center">
      <header className="text-center px-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Be a part of an ambitious team of change makers
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          who have a restless curiosity and a drive for ingenuity – whatever inspires you, join us for a thriving career.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 mx-4">
        {teams.map((team, index) => (
          <button 
            key={index} 
            className="bg-transparent border border-greenCustomColor text-white py-4 px-8 rounded-lg hover:bg-greenCustomColor transition duration-300"
          >
            {team}
          </button>
        ))}
        <button className="bg-transparent border border-greenCustomColor text-white py-4 px-8 rounded-lg hover:bg-greenCustomColor transition duration-300">
          See all teams
        </button>
      </div>
    </div>
  );
};

export default TeamGrid;
