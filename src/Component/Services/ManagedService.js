import React from "react";
import Navbar from "../Navbar";
import c1 from "../../Assets/support.jfif";
import c2 from "../../Assets/image (9).png";
import c3 from "../../Assets/image (10).png";
import v1 from "../../Assets/expert.jpg";
import Footer from "../Footer";
const ManagedServices = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center mt-32">
            Managed Cloud Application
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between ml-28">
            {/* Text Section */}
            <div className="flex-1 md:pr-8 mb-8 md:mb-0">
              <p className="text-lg text-gray-600 mb-8 text-center">
                Looking for a reliable solution to manage your applications? Our
                Managed Applications Support service provides 24/7 expert
                support for infrastructure management, application deployment,
                and maintenance. We monitor your systems, proactively address
                issues, and ensure optimal performance. With personalized
                support tailored to your business needs and flexible pricing
                options, you only pay for what you need. We support AWS, Azure,
                and GCP. Contact us today to streamline your operations and grow
                your business!
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPsc6871mNjhzzbDY4_L2EcjIio7MhcDYkQ&s"
                alt="Field Services Technician"
                className="rounded-lg shadow-lg w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Boxes Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Value Proposition
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our Managed Applications Support service keeps your business
            applications running smoothly with 24/7 monitoring <br />
            and expert management. We handle all technical aspects, allowing you
            to focus on your business. Our service is <br />
            customizable to meet your needs, ensuring optimized performance and
            quick resolution of any issues. unique <br />
            needs. Contact us today to see how our IT field engineering can keep
            your business running smoothly.
          </p>

          {/* Boxes Section */}
          <div className="flex flex-wrap justify-center gap-14 px-4">
            {/* Box 1 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c1}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">Increased reliability</p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Increased reliability and uptime for your applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c2}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">Rapid resolution</p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Rapid resolution of issues, minimizing downtime and
                      business disruption
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={c3}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center">Proactive monitoring</p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Proactive monitoring and maintenance of your applications,
                      preventing issues before they occur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boxes Section */}
        <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
          <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
            <img
              className="w-full rounded-lg"
              src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bc-ce1-marquee.sm.jpg"
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Managed Collaboration Technologies
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Optimize your communication infrastructure with our managed
              services for Cisco collaboration technologies, including Unified
              Communications, Call Manager, Cube, E911, SIP gateways, and PSTN
              technologies. Our experts handle installation, configuration, and
              maintenance, so you can focus on your business. We provide
              proactive monitoring and support to ensure your systems run
              smoothly and efficiently. Contact us today to enhance your
              communication capabilities and streamline your operations.
            </p>
          </div>
          {/* Image Section */}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
          <p className="text-lg text-gray-600 mb-8"></p>

          {/* Boxes Section */}
          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Managed Help Desk
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Our Managed Help Desk service provides 24/7 support for all your
                IT needs. Our Level 1 team handles basic issues <br />
                like password resets, while Level 2 and 3 teams tackle more
                complex problems with advanced troubleshooting. Using <br />
                top-of-the-line Network Management tools and popular ticketing
                systems, we monitor your network, prevent downtime,
                <br />
                and ensure efficient issue resolution. Let us manage your IT so
                you can focus on growing your business. Contact <br />
                us today to learn more.
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <img
                className="w-full rounded-lg"
                src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bc-ce1-marquee.sm.jpg"
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            {/* Text Section */}

            {/* Image Section */}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Managed Help Desk Level 1, 2, and 3 service with Network
              Management tools and popular ticketing systems <br />
              offers an unparalleled value proposition for your business. Here
              are some of the key benefits:
            </p>

            {/* Boxes Section */}
            <div className="flex flex-wrap justify-center gap-14 px-4">
              {/* Box 1 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c1}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Improved productivity and uptime
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our proactive network monitoring and rapid response
                        times minimize downtime, keeping your systems running
                        smoothly to maintain productivity and prevent potential
                        revenue loss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c2}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Cost-effective IT support
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our Managed Help Desk service offers expert IT support
                        at a fraction of the cost of an in-house team, providing
                        a broad range of expertise without the expense of
                        salaries, benefits, or training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Scalable service</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        As your business grows, our Managed Help Desk service
                        allows you to easily scale your IT support to match your
                        evolving needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Peace of mind</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        With our certified technicians, you can rest assured
                        that your IT needs are in good hands. We’ll handle all
                        of your IT problems, so you can focus on running your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c1}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Better communication and tracking
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our ticketing systems streamline communication and
                        tracking of IT issues, ensuring timely resolutions and
                        keeping you informed about progress every step of the
                        way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <img
                className="w-full rounded-lg"
                src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bc-ce1-marquee.sm.jpg"
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Managed On-Site Service
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Our On-Site Repair Service offers fast, reliable repairs with
                options for 4-hour, 8-hour, or next business day arrival. Our
                global team is equipped with parts and expertise to quickly fix
                issues and minimize downtime. With coverage in 165 countries, we
                ensure efficient repairs to keep your business running smoothly.
                Contact us today to learn more.
              </p>
            </div>
            {/* Image Section */}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our managed services On-Site repair Service provides a unique
              value proposition for businesses in need of reliable
              <br />
              and efficient equipment repairs. Here are some of the key benefits
              of choosing our service:
            </p>

            {/* Boxes Section */}
            <div className="flex flex-wrap justify-center gap-14 px-4">
              {/* Box 1 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c1}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Skilled Technicians</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our skilled technicians swiftly diagnose and repair a
                        wide range of equipment issues, leveraging years of
                        experience to get your equipment up and running quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c2}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Focus on On-Site Repairs
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        We specialize in on-site repairs, coming directly to
                        your location to fix issues, saving you time and money
                        on shipping and wait times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Quick Response Times</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        We offer 4 hour, 8 hour, or next business day arrival
                        times options, depending on your needs. This means that
                        you can get the repairs you need quickly, minimizing
                        downtime and keeping your business running smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Repair Parts in Hand</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our technicians arrive with repair parts ready, allowing
                        them to quickly diagnose and fix issues on-site,
                        minimizing downtime and boosting productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c1}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Global Coverage</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        With enterprise sites in 165 countries, we handle even
                        the most complex repairs globally, no matter your
                        location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Network Operations Center – Cyber Security
            </h2>
            <p className="text-lg text-gray-600 ">
              Protect your organization with our Cyber Security NOC, featuring
              XDR for advanced threat detection and Deep Packet
              <br />
              Inspection for real-time network traffic analysis. Our expert team
              uses cutting-edge technology to guard against <br />
              sophisticated cyber threats, ensuring your sensitive data remains
              secure. Contact us today to enhance your cybersecurity.
            </p>

            <div className=" w-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center mt-10">
                Value Proposition
              </h2>

              <p className="text-lg text-gray-600 mb-8 text-center">
                Our Cyber Security NOC with XDR and Deep Packet Inspection
                offers advanced threat detection, 24/7 monitoring, <br />
                and cost-effective protection for cloud or enterprise data
                centers. With our solution, benefit from real-time <br />
                threat response, compliance with regulations, and customized
                security tailored to your needs. Protect your
                <br />
                organization from cyber threats today. Contact us to learn more.
              </p>
            </div>

            {/* Boxes Section */}
          </div>

          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Network Operations Center – Enterprise Networking
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Our Network Operation Center (NOC) monitors and manages customer
                network infrastructures, ensuring reliability,
                <br />
                availability, and security. Services include network monitoring,
                incident management, configuration and change
                <br />
                management, performance optimization, security management, and
                maintaining up-to-date network documentation. <br />
                The NOC is essential in keeping enterprise networks healthy and
                minimizing disruptions to business operations.
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <img
                className="w-full rounded-lg"
                src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bc-ce1-marquee.sm.jpg"
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            {/* Text Section */}

            {/* Image Section */}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The value proposition of a Network Operation Center (NOC) for
              Enterprise Networking Services is the ability to
              <br />
              provide reliable and secure network infrastructure that supports
              business operations. By utilizing a NOC,
              <br />
              enterprises can benefit from the following:
            </p>

            {/* Boxes Section */}
            <div className="flex flex-wrap justify-center gap-14 px-4">
              {/* Box 1 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c1}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Proactive Monitoring and Management:
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        The NOC team proactively monitors network performance to
                        identify and resolve issues before they affect business
                        operations, minimizing downtime and ensuring seamless
                        functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c2}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Improved Network Performance
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        The NOC team optimizes network performance by enhancing
                        efficiency and capacity, leading to a faster, more
                        reliable network and improved business productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Enhanced Network Security
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        The NOC team strengthens network security to protect
                        data, reducing breach risks and minimizing financial and
                        reputational damage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Reduced IT Costs</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Outsourcing to a NOC cuts IT costs by providing a
                        cost-effective solution for managing network hardware,
                        software, and staffing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Access to Expertise</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        The NOC team of experts ensures reliable network
                        performance with quick issue resolution and expert
                        management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full text-xl">
                <p>
                  In summary, the value proposition of a NOC for Enterprise
                  Networking Services is the ability to provide a reliable,
                  secure, and optimized network infrastructure that supports
                  business operations, reduces IT costs, and provides access to
                  a pool of expertise. This allows enterprises to focus on core
                  business activities while ensuring that their network
                  infrastructure is in good hands.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <img
                className="w-full rounded-lg"
                src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bc-ce1-marquee.sm.jpg"
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Opsis Streaming
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Opsis Streaming provides a platform or service for delivering
                live and on-demand video content. Their solutions
                <br />
                typically focus on high-quality streaming, scalability, and ease
                of integration. They might offer features like
                <br />
                live broadcasting, video-on-demand, and adaptive streaming to
                ensure smooth and reliable viewing experiences <br />
                across various devices and network conditions.
              </p>
            </div>
            {/* Text Section */}

            {/* Image Section */}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Navigating the Operational Challenges of Sports Streaming
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The value proposition of a Network Operation Center (NOC) for
              Enterprise Networking Services is the ability to
              <br />
              provide reliable and secure network infrastructure that supports
              business operations. By utilizing a NOC,
              <br />
              enterprises can benefit from the following:
            </p>

            <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
                The Bleacher Blues
              </h1>

              <p className="text-lg text-gray-600 mb-4">
                The roar of the crowd, the electrifying energy of a live game –
                capturing these moments and delivering them seamlessly to a
                global audience is the dream of every sports franchise. But
                behind the excitement lies a complex reality – the operational
                challenges that threaten to turn that dream into a digital
                nightmare.
              </p>

              <div className="space-y-6">
                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Scalability: When Fans Outnumber Seats
                  </h2>
                  <p className="text-gray-600">
                    Imagine the jubilation of a last-minute winning shot,
                    reflected not in cheers but in buffering wheels. That’s the
                    harsh reality of inadequate streaming infrastructure during
                    peak viewership. Scalability issues can cripple entire
                    systems, leaving fans frustrated and franchises hemorrhaging
                    potential revenue. Upgrading infrastructure is costly but
                    failing to do so risks alienating fans and damaging brand
                    reputation.
                  </p>
                </section>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Content Chaos: A Library Lost in the Archives
                  </h2>
                  <p className="text-gray-600">
                    A treasure trove of historic moments, interviews, and
                    behind-the-scenes footage – a goldmine for fan engagement.
                    Yet, managing this vast library can be a logistical
                    nightmare. Fragmented systems, outdated tagging, and
                    inefficient search functions leave valuable content buried,
                    hindering fan engagement and monetization opportunities.
                  </p>
                </section>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Monetization Mayhem: Turning Views into Revenue
                  </h2>
                  <p className="text-gray-600">
                    Filling seats is one thing, but filling digital wallets is
                    another. Converting viewership into a sustainable revenue
                    stream requires creativity and adaptability. Traditional
                    advertising models struggle to keep pace with changing
                    viewing habits, while subscription fatigue sets in.
                    Diversifying revenue streams through personalized
                    sponsorships, microtransactions, and interactive experiences
                    becomes crucial, demanding a strategic shift from
                    traditional broadcasting models.
                  </p>
                </section>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Data Darkness: Flying Blind in the Digital Arena
                  </h2>
                  <p className="text-gray-600">
                    Understanding fan behavior is paramount to success, yet many
                    franchises struggle to gather and analyze meaningful data.
                    Lack of insights into viewing habits, engagement levels, and
                    content preferences leaves teams flying blind, unable to
                    optimize content strategies and maximize fan engagement.
                    Investing in robust analytics tools and data-driven decision
                    making becomes the key to unlocking hidden revenue streams
                    and fostering deeper connections with fans.
                  </p>
                </section>
              </div>

              <footer className="mt-8">
                <p className="text-lg text-gray-700">
                  These challenges, though daunting, are not insurmountable. By
                  embracing innovation, investing in agile infrastructure, and
                  prioritizing data-driven decision making, sports franchises
                  can transform the bleacher blues into a symphony of success in
                  the digital arena. Remember, the future of fan engagement lies
                  not just in the roar of the crowd, but in the seamless
                  symphony of technology, content, and data that delivers an
                  unparalleled viewing experience. So, silence the buffering
                  wheels, unlock the content vault, and embrace the data
                  revolution – the digital stands await, eager to be filled with
                  cheers, not technical tears.
                </p>
              </footer>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Technologies Utilized
              </h2>

              <div className="flex flex-wrap justify-center gap-14 px-4">
                {/* Box 1 */}
                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c1}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full text-center">
                          AWS Elemental MediaLive
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          AWS Elemental MediaLive is a cloud-based,
                          broadcast-grade live video processing service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c2}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full text-center">AWS Elemental Live</p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          On-premises solution for live video processing,
                          encoding, and transcoding into multiple formats for
                          broadcast and online streaming, optimized for various
                          devices and internet speeds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c3}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full text-center">
                          AWS Elemental MediaPackage
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          Managed service for securely packaging and delivering
                          live and on-demand video streams to various devices
                          and platforms, simplifying video content preparation
                          and distribution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c3}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full text-center">
                          AWS Elemental MediaTaylor
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          AWS Elemental MediaTailor is a cloud service for
                          inserting personalized ads and creating linear
                          channels for live and on-demand video streams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c3}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full text-center">
                          AWS Elastic Transcoder
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          Cloud-based media transcoding service that converts
                          video and audio files into formats and resolutions for
                          various devices and internet speeds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c3}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full text-center">AWS Cloudfront</p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          Content Delivery Network (CDN) service offered by
                          Amazon Web Services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Boxes Section */}
          <div className="bg-blueCustomColor p-10 mt-5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Value Proposition
                </h2>
                <div className="security-services mt-2">
                  <p className="text-gray-300">
                    Our IT technology refresh program is designed to deliver
                    exceptional value to your business by providing you with the
                    latest and most innovative technology solutions available in
                    the market. Here are some of the key benefits that you can
                    expect from our program:
                  </p>
                  <ul className="service-list text-gray-300 space-y-2 mt-4">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Improved Productivity and Efficiency
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Enhanced Cybersecurity
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Reduced Downtime
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Increased Employee Satisfaction
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Competitive Advantage
                    </li>
                  </ul>
                </div>
              </div>
              {/* Video Section */}
              <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                <img
                  className="w-full rounded-lg"
                  src={v1}
                  alt="A man working on a laptop in a server room."
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold  mb-8">FAQs</h1>
          <p className="text-lg  mb-12">
            Dive into FAQs related to Cloud & DevOps.
          </p>
          <div className="flex  mb-16">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">
              Solve this type Problem
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
              See All FAQs
              <span className="ml-2">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-2">
                <a href="#" className="text-blue-500">
                  What is an API integration?
                </a>
              </h2>
              <h2 className="text-xl font-bold mb-2">
                <a href="#" className="text-blue-500">
                  What is hyperautomation?
                </a>
              </h2>
              <h2 className="text-xl font-bold mb-2">
                <a href="#" className="text-blue-500">
                  What is low code?
                </a>
              </h2>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">
                <a href="#" className="text-blue-500">
                  What is no code?
                </a>
              </h2>
              <h2 className="text-xl font-bold mb-2">
                <a href="#" className="text-blue-500">
                  What is generative AI?
                </a>
              </h2>
              <h2 className="text-xl font-bold mb-2">
                <a href="#" className="text-blue-500">
                  What is the difference between ServiceNow and Jira?
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ManagedServices;
