import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-28">
      <div className="container mx-auto text-center">
        {/* Top Section with Images and Title */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mb-8">
          <img
            src="https://www.shutterstock.com/image-illustration/devops-devsecops-approach-app-development-600nw-2200985385.jpg"
            alt="Placeholder Image 1"
            className="w-1/3 md:w-1/4 rounded-md"
          />
          <h2 className="text-5xl font-bold">Footer With US</h2>
          <img
            src="https://thumbs.dreamstime.com/b/business-management-success-concept-gears-showing-steps-creative-vision-innovation-idea-to-financial-personal-185365905.jpg"
            alt="Placeholder Image 2"
            className="w-1/3 md:w-1/4 rounded-md"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-8 text-lg">
          <a href="#" className="hover:text-gray-400">
            Interior
          </a>
          <a href="#" className="hover:text-gray-400">
            Location
          </a>
          <a href="#" className="hover:text-gray-400">
            Career
          </a>
          <a href="#" className="hover:text-gray-400">
            Team
          </a>
          <a href="#" className="hover:text-gray-400">
            Join US
          </a>
        </div>

        {/* Footer Bottom Links */}
        <div className="text-center text-xs text-gray-500">
          <a href="#" className="hover:text-gray-400">
            Back to top
          </a>
          <p className="mt-2">© 2024 GlobalXperts — All rights reserved</p>
          <p className="mt-2">Architectural images are artist impressions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
