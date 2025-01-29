import React, { useState } from "react";
import migrationImg from "../../../Assets/Cloud Sulution Img/mainMigration.png";
import serviceTypeImage from "../../../Assets/serviceType.png";
import AccelerationImage from "../../../Assets/accelatorImage.png";
import iosaImage from "../../../Assets/iosaImage.png";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import Img1 from "../../../Assets/AWservice.jfif";
import Img2 from "../../../Assets/MicrosoftAzure.png";
import Img3 from "../../../Assets/google2.jpg";
import MigrationImage from "../../../Assets/Cloud Sulution Img/migrationfull.png";
const Migration = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the AWS Migration Acceleration Program (MAP)?",
      answer:
        "The AWS Migration Acceleration Program (MAP) provides financial support and best practices to assist organizations in migrating to AWS efficiently and cost-effectively. It includes resources and tools designed to streamline the migration process and reduce associated costs.",
    },
    {
      question: "How does AWS support cloud migration?",
      answer:
        "AWS facilitates cloud migration through tools such as the Application Migration Service (MGN) and the Database Migration Service (DMS), complemented by expert guidance from AWS Professional Services. These resources enable a smooth transition to the cloud, allowing organizations to benefit from AWS's scalability, security, and cost-effectiveness.",
    },
    {
      question: "What is the Prolific I/O – Storage Accelerator?",
      answer:
        "The Prolific I/O – Storage Accelerator is a solution that addresses workloads requiring high throughput or IOPS during peak periods. It enhances throughput and IOPS capacity only when demand is elevated, thereby reducing costs associated with idle capacity during low-demand periods.",
    },
    {
      question: "How can I save money during migration to AWS?",
      answer:
        "To achieve cost savings during migration, organizations can utilize the Migration Acceleration Program (MAP), which offers financial assistance. Additionally, the Prolific I/O – Storage Accelerator can optimize resource use and manage costs related to variable workload demands.",
    },
    {
      question:
        "What should I do if my workloads experience performance issues on AWS?",
      answer:
        "In cases of performance degradation due to workload spikes on AWS, implementing the Prolific I/O – Storage Accelerator is advisable. This solution enhances storage performance, ensuring efficient operation of workloads while minimizing unnecessary costs.",
    },
  ];

  const services = [
    {
      title: "AWS",
      imgSrc: Img1,
      description:
        "AWS offers comprehensive cloud services tailored for scalability, performance, and security.",
    },
    {
      title: "Azure",
      imgSrc: Img2,
      description:
        "Azure provides powerful tools for seamless cloud integration and advanced solutions.",
    },
    {
      title: "GCP",
      imgSrc: Img3,
      description:
        "GCP delivers robust infrastructure and innovative tools to empower your business.",
    },
  ];

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Migration Accelerator</title>
        <meta name="description" content="Migration Accelerator" />
      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Migration, Optimization<br></br>and Modernization
              </h1>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                “Are you planning to migrate your business to the cloud? Do you
                have existing cloud infrastructure in need of optimization? Does
                your business need modernization? We can help. At GlobalXperts,
                we offer migration services, and we can help you to move your
                systems to the cloud, optimizing them for cost-effectiveness,
                performance, and efficiency.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-5 md:px-20 2xl:bg-white bg-gray-100 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Planning and Design
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Based on the assessment results, we can create a detailed migration
          plan tailored to your specific requirements. This plan includes:
        </p>
        <div className="grid md:grid-cols-3 gap-8 ">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <img
              src={service.imgSrc}
              alt={service.title}
              className="h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Phased Approach</h3>
            <p className="text-gray-700 mt-2">
              Dividing the migration into manageable phases to reduce risk and
              ensure smooth transitions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Resource Mapping
            </h3>
            <p className="text-gray-700 mt-2">
              Identifying the right AWS resources (e.g., EC2 instances, RDS
              databases, S3 buckets, etc.) for optimal performance and
              scalability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Security Architecture
            </h3>
            <p className="text-gray-700 mt-2">
              Designing a robust security architecture, including encryption,
              access controls, and data protection measures.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              AWS Migration Hub
            </h3>
            <p className="text-gray-700 mt-2">
              We utilize the AWS Migration Hub, which provides a central
              location to collect server and application inventory data for the
              assessment, planning, and tracking of migrations to AWS on a
              pay-as-you-go basis. New clients get Refactor Spaces with 2,160
              free environment hours per month for 90 days.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Box for Migration Execution */}
          <div className="lg:w-1/2 mb-12 lg:mb-13 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Migration Execution
            </h2>
            <p className="text-lg text-gray-500 mb-4">
              During the migration phase, GlobalXperts works closely with the
              client and with AWS to ensure a seamless transition. Our migration
              process encompasses:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Data Migration:</strong> Safely transferring data from
                the client's on-premises systems to AWS, leveraging AWS Data
                Migration Services such as AWS Snowball.
              </li>
              <li>
                <strong>Application Migration:</strong> Rehosting, refactoring,
                or rearchitecting applications to leverage the full potential of
                AWS services.
              </li>
              <li>
                <strong>Testing and Validation:</strong> Rigorous testing and
                validation of all migrated applications to guarantee
                functionality and performance.
              </li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden lg:block w-px h-auto bg-gray-300 mx-8"></div>

          {/* Right Box for Post-Migration Support */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Post-Migration Support
            </h2>
            <p className="text-lg text-gray-500 mb-4">
              After the successful migration, our commitment to the client does
              not end. We provide ongoing support and monitoring services,
              including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>24/7 Support:</strong> Continuous monitoring and
                proactive management to identify and resolve issues promptly.
              </li>
              <li>
                <strong>Optimization and Cost Management:</strong> Regularly
                reviewing AWS usage to optimize resources and control costs.
              </li>
              <li>
                <strong>Performance Enhancement:</strong> Implementing
                strategies to enhance application performance and user
                experience.
              </li>
              <li>
                <strong>AWS Partnership and Collaboration:</strong> As an AWS
                partner, GlobalXperts collaborates closely with AWS during the
                entire migration process. We leverage AWS best practices and
                expertise, ensuring our clients receive the most up-to-date and
                reliable solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-center text-lg font-semibold mb-4">
          By leveraging these tools and services, you can migrate to AWS
          smoothly and efficiently, taking advantage of the scalability,
          security, and cost-effectiveness that the cloud offers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Types Section */}
          <div className="relative p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold mb-4">
              Service Types
            </h3>
            <img
              src={serviceTypeImage}
              alt="Service Types"
              className="rounded-lg object-cover w-full h-auto mb-4"
            />
          </div>

          {/* Migration Program Section */}
          <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold mb-4">
              Ways to Save on Migrations
            </h3>
            <div className="flex items-center justify-center">
              <img
                src={AccelerationImage}
                alt="Migration Acceleration Program"
                className="w-1/3 mb-4 rounded-lg"
              />
            </div>
            <h4 className="text-center text-2xl font-semibold mt-8">
              Migration Acceleration Program (MAP)
            </h4>
            <p className="text-center text-base">
              The Migration Acceleration Program (MAP) is a savings program
              offered by AWS, and we can help you learn more about it.
              <Link
                to="/migration-acceleration-program-map/"
                className="underline ml-1"
              >
                (Click to discover more)
              </Link>
            </p>
          </div>
        </div>

        {/* card of migration */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Map 2.0 Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Assess Card */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Assess
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Discovery Workshops</li>
                <li>TCO</li>
                <li>Directional Business Case</li>
                <li>Application Discovery Service</li>
                <li>Migration Evaluator</li>
                <li>Cloudamize</li>
                <li>CloudChomp</li>
                <li>Migration Portfolio Assessment</li>
              </ul>
            </div>

            {/* Mobilize Card */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Mobilize
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Landing Zone</li>
                <li>Security and Compliance</li>
                <li>Deep Dive</li>
                <li>Proof of Concept/EBA</li>
                <li>Control Tower</li>
                <li>AWS MGN</li>
                <li>AWS Elastic DR</li>
                <li>Schema Conversion Tool</li>
                <li>AWS DMS</li>
              </ul>
            </div>

            {/* Migrate & Modernize Card */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Migrate & Modernize
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Migrate</li>
                <li>Optimize</li>
                <li>Modernize</li>
                <li>Migration Hub</li>
                <li>Refactor Spaces</li>
                <li>App2Container</li>
                <li>Porting Assistant</li>
                <li>CAST</li>
                <li>Amaze</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 mt-0">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
              Migration Strategies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Strategy 1: Lift & Shift */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Strategy 1 – Lift & Shift
                </h3>
                <p className="text-lg text-gray-700 text-left">
                  In this strategy, applications are “rehosted” on cloud
                  services with no changes to the applications themselves. Apps
                  that run on virtual machines can be rehosted on Amazon EC2
                  instances. Apps that run on containers such as Docker or
                  Kubernetes can be rehosted on Amazon EKS.
                </p>
              </div>

              {/* Strategy 2: Migrate & Modernize */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Strategy 2 – Migrate & Modernize
                </h3>
                <p className="text-lg text-gray-700 text-left">
                  In this strategy, applications are “refactored,” which means
                  that they are redesigned to take advantage of the available
                  cloud services, resulting in a new, cloud-native application.
                  Apps may be optimized for performance and cost-reduction.
                  Refactoring may include:
                </p>
                <ul className="list-disc pl-5 mt-4 text-gray-700 text-left">
                  <li>Microservices instead of monolithic applications</li>
                  <li>
                    Serverless architectures instead of server-only
                    architectures
                  </li>
                  <li>
                    Open-source software instead of closed-source software
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 space-y-6 md:space-y-0 md:space-x-8">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              {" "}
              Strategy 3 – Prolific I/O Storage Accelerator
            </h2>
            <p className="mb-4">
              This strategy involves Amazon EC2 and EBS, and it uses a software
              solution that GlobalXperts has developed. This solution is
              designed for workloads with extremely high throughput needs. Such
              workloads would previously have been left on-premises with no
              cost-effective way of being moved to the cloud, and they typically
              would run at extremely high throughputs for short periods of time,
              leading to expensive overprovisioning. Our solution can boost its
              throughput as high as 2 million IOPS, and it can return to a
              baseline throughput to optimize costs.
            </p>
            <Link
              to={"/solutions/cloud/iosa"}
              className="text-blue-600 hover:text-blue-800"
            >
              Read more about Prolific I/O
            </Link>
          </div>

          {/* Image Section */}
          <Link
            to={"/solutions/cloud/iosa"}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={iosaImage}
              alt="IOSA"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto container px-4 py-16">
        <img src={MigrationImage} alt="Migration" className="w-full h-auto" />

        <p className="text-lg mt-8">
          Are you ready to take your business to the next level? If you are
          considering cloud migration, contact us today to learn more about what
          GlobalXperts can do for your business.
        </p>
      </div>

      <div className="max-w-7xl mx-auto container px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">FAQs</h1>
        <p className="text-lg mb-12">
          Dive into FAQs related to AWS Migration Services.
        </p>
        <div className="flex mb-16">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">
            Contact Us
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
            FAQs
            <span className="ml-2">→</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {faqData.map((faq, index) => (
            <div key={index}>
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </h2>
              {activeIndex === index && (
                <p className="text-base text-gray-700 mb-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default Migration;
