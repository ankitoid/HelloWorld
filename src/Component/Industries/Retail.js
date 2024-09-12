import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import retailImage from "../../Assets/Retail.jpg";
import {
  FaShoppingCart,
  FaCogs,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";

const Retail = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-gray-100 min-h-screen">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Retail Industry Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-24 rounded-lg">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Retail
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    In the fast-paced world of retail, cutting-edge IT solutions
                    are key to enhancing customer experiences, streamlining
                    operations, and driving business growth. From advanced
                    point-of-sale systems and efficient inventory management to
                    powerful customer relationship management (CRM) tools and
                    data analytics, these technologies empower retailers to
                    optimize every aspect of their operations. By leveraging
                    these IT services, retailers can make smarter decisions,
                    personalize customer interactions, and deliver seamless
                    shopping experiences that set them apart in a competitive
                    market. Embracing technology not only improves efficiency
                    but also builds deeper connections with customers, fostering
                    loyalty and boosting sales.{" "}
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src={retailImage}
                    alt="Retail technology solutions"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                In the dynamic retail sector, IT solutions play a pivotal role
                in enhancing customer experiences, optimizing operations, and
                driving growth. From point-of-sale systems and inventory
                management to customer relationship management and data
                analytics, our IT services are designed to transform the way
                retail businesses operate. Embracing technology allows retailers
                to streamline processes, improve decision-making, and deliver
                personalized experiences that resonate with customers, ensuring
                a competitive edge in the market.
              </p>
            </div>

            {/* Capabilities Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12 rounded-lg">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Capabilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  GlobalXperts offers a range of IT solutions designed to
                  support and enhance retail operations, helping businesses
                  adapt to the evolving market landscape.
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-3">
                      <FaShoppingCart className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Point-of-Sale Systems
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our POS systems provide seamless and efficient transaction
                      processing, inventory management, and sales reporting,
                      enhancing the overall retail experience for both staff and
                      customers.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaCogs className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Inventory Management
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Optimize your inventory with our advanced management
                      solutions, which offer real-time tracking, automated
                      reordering, and insights to help you maintain optimal
                      stock levels and reduce costs.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaUserFriends className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Customer Relationship Management
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our CRM solutions enable personalized customer engagement,
                      data analysis, and targeted marketing campaigns, helping
                      you build stronger relationships and drive customer
                      loyalty.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaChartLine className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Data Analytics
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Leverage data analytics to gain valuable insights into
                      customer behavior, sales trends, and operational
                      performance, enabling data-driven decisions that enhance
                      business outcomes.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-8 text-center">
                  At GlobalXperts, we are committed to transforming the retail
                  industry through innovative IT solutions that drive
                  efficiency, engagement, and growth.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-center">
                  Contact us today to discover how our retail IT solutions can
                  help you stay ahead in the competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Retail;
