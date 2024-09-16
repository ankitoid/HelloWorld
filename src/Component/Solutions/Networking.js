import React, { useState } from "react";
import NetworkingVideo from "../../Assets/NetwrokingVideo1.mp4";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import cmLogo from "../../Assets/cmlogo.png";
import aristaLogo from "../../Assets/netaristalogo.png";

// plates images
import arista1 from '../../Assets/mkswitches.avif'
import arista2 from '../../Assets/mkwireless.jpg'
import arista3 from '../../Assets/mkcamera.avif'
import arista4 from '../../Assets/cloudvision.webp'
import arista5 from '../../Assets/aristaEdge.png'
import arista6 from '../../Assets/aristaWAN.png'
import arista7 from '../../Assets/Arista-Switches.webp'
import arista8 from '../../Assets/arista8.webp'
import arista9 from '../../Assets/mkFirewall.avif'

const Networking = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Navbar Section */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Networking Consulting
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Our networking consulting services provide structured solutions to
              enhance connectivity across teams, departments, and locations.
              With expert guidance, we help you build efficient communication
              channels, streamline workflows, and connect seamlessly across
              offices, time zones, and even external partners, ensuring a
              cohesive and collaborative work environment.
            </p>
          </div>

          {/* Video Section */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-8">
            <video
              src={NetworkingVideo}
              className="w-full h-auto rounded-lg shadow-lg"
              muted
              autoPlay
              loop
              playsInline
              controls={false}
            ></video>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center py-20">
        {/* Logos Section */}
        <div className="flex items-center justify-center mb-8">
          <img src={cmLogo} alt="Cisco Meraki Logo" className="h-24 mr-8" />
          <img src={aristaLogo} alt="Arista Logo" className="h-24" />
        </div>

        {/* Dropdown Section */}
        <div className="w-full max-w-4xl">
          <div
            className="border rounded-lg shadow-md p-6 bg-gray-100 cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Items</h2>
              <button>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Dropdown Items */}
          {isOpen && (
            <ul className="mt-4 bg-white   border-4 rounded-lg   p-6 w-full">
              <li className="mb-2 text-lg">• Cisco Meraki Products</li>
              <li className="mb-2 text-lg">• Meraki Cameras</li>
              <li className="mb-2 text-lg">• Meraki Wireless</li>
              <li className="mb-2 text-lg">• Meraki Switches</li>
              <li className="mb-2 text-lg">• Meraki Firewalls</li>
              <li className="mb-2 text-lg">
                • Arista: Edge as a Service with Cognitive Unified Edge
              </li>
              <li className="mb-2 text-lg">• Arista Edge Products</li>
              <li className="mb-2 text-lg">
                • Arista CloudVision CUE Management
              </li>
              <li className="mb-2 text-lg">
                • Arista Cognitive Wi-Fi Access Points
              </li>
              <li className="mb-2 text-lg">• Arista Compact Wired Switch</li>
              <li className="mb-2 text-lg">• Arista Integrated WAN Branch </li>
              <li className="mb-2 text-lg">• Arista Secure Edge</li>
            </ul>
          )}
        </div>
      </div>

      <div className="w-full py-10 bg-gray-100">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Plate 1 */}
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista1} alt="Meraki Switches" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Meraki Switches</h3>
      <p className="text-gray-600 mb-4">
        Meraki Switches provide cloud-managed switching solutions with high-performance networking, easy-to-use centralized management, and powerful security features to optimize and secure your business network.
      </p>
      <a href="/Networking/mkswitches" className="text-blue-500 font-semibold">Read More</a>
    </div>

    {/* Plate 2 */}
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista2} alt="Meraki Wireless" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Meraki Wireless</h3>
      <p className="text-gray-600 mb-4">
        Meraki Wireless provides seamless, high-speed wireless connectivity for businesses of all sizes. Its intuitive cloud management simplifies network control, ensuring fast and secure Wi-Fi across your entire organization.
      </p>
      <a href="/Networking/mkwireless" className="text-blue-500 font-semibold">Read More</a>
    </div>

    {/* Plate 3 */}
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista3} alt="Meraki Cameras" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Meraki Cameras</h3>
      <p className="text-gray-600 mb-4">
        Meraki Cameras offer cutting-edge video surveillance with advanced analytics. Enjoy real-time visibility and security monitoring with an easy-to-use interface and cloud storage for efficient data management.
      </p>
      <a href="/Networking/Mkcamera" className="text-blue-500 font-semibold">Read More</a>
    </div>

    {/* Plate 4 */}
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista4} alt="Arista CloudVision CUE Management" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Arista CloudVision CUE Management</h3>
      <p className="text-gray-600 mb-4">
        Arista CloudVision CUE is a powerful cloud-based management platform for automated orchestration and real-time analytics. It simplifies network operations and enhances network visibility across your infrastructure.
      </p>
      <a href="/Networking/AcloudVision" className="text-blue-500 font-semibold">Read More</a>
    </div>

    {/* Plate 5 */}
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista5} alt="Arista Secure Edge" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Arista Secure Edge</h3>
      <p className="text-gray-600 mb-4">
        Arista Secure Edge delivers advanced security at the network perimeter, combining state-of-the-art firewalls, secure VPNs, and intrusion prevention for robust protection against cyber threats and data breaches.
      </p>
      <a href="/Networking/AristaEdge" className="text-blue-500 font-semibold">Read More</a>
    </div>

    {/* Plate 6 */}
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista6} alt="Arista Integrated WAN Branch" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Arista Integrated WAN Branch</h3>
      <p className="text-gray-600 mb-4">
        Arista Integrated WAN Branch provides a comprehensive, cloud-managed solution for branch offices, offering simplified WAN connectivity with secure, scalable, and resilient branch networking for businesses.
      </p>
      <a href="/Networking/aristaWAN" className="text-blue-500 font-semibold">Read More</a>
    </div>

    {/* Plate 7 */}
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista7} alt="Arista Compact Wired Switch" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Arista Compact Wired Switch</h3>
      <p className="text-gray-600 mb-4">
        Arista Compact Wired Switches offer high-performance switching with compact designs, perfect for space-constrained environments. They provide excellent connectivity and network efficiency while ensuring ease of deployment and management.
      </p>
      <a href="/Networking/AristaWifi" className="text-blue-500 font-semibold">Read More</a>
    </div>

    {/* Plate 8 */}
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista8} alt="Arista Cognitive Wi-Fi Access Points" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Arista Cognitive Wi-Fi Access Points</h3>
      <p className="text-gray-600 mb-4">
        Arista Cognitive Wi-Fi Access Points deliver high-performance wireless solutions with AI-powered analytics. These access points enhance user experiences and optimize network performance with real-time insights and automation.
      </p>
      <a href="/Networking/ArtistaSwitches" className="text-blue-500 font-semibold">Read More</a>
    </div>
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <img src={arista9} alt="Arista Cognitive Wi-Fi Access Points" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">Meraki Firewalls
      </h3>
      <p className="text-gray-600 mb-4">
      The Cisco Meraki MX are multifunctional security and SD-WAN enterprise appliances with a wide set of capabilities to address multiple
      use cases–from an all-in-one device.      </p>
      <a href="/Networking/mkFirewall" className="text-blue-500 font-semibold">Read More</a>
    </div>
  </div>
</div>


      <ContactCard />
      <Footer />
    </>
  );
};

export default Networking;
