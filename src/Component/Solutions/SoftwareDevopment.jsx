// import React, { useRef, useState } from "react";
// import ContactCard from "../Contact/ContactCard";
// import Footer from "../Footer";
// import Navbar from "../Navbar";
// import SdeImage from "../../Assets/sdeImage.jpg";
// import kubernates from "../../Assets/kub.png"
// import docker from "../../Assets/image (14).png"
// import mongodb from "../../Assets/mongo.png"
// import aws from "../../Assets/awsi.svg"
// import google from "../../Assets/google1.png"
// import nodejs from "../../Assets/Technologies/nodeIcon.png"
// // import azure from "../../Assets/Technologies/azureIcon.png"
// import ReactIcon from "../../Assets/Technologies/reactIcon.png"
// import github from "../../Assets/git.png"
// import Jenkiens from '../../Assets/jen.png'
// import Express from "../../Assets/Technologies/expressjsIcon.jpg"
// import Terraform from "../../Assets/Technologies/terraform.png"
// import { Link } from "react-router-dom";

// const SoftwareDevelopment = () => {
//   const [activeQuestion, setActiveQuestion] = useState(null);
//   const faqSectionRef = useRef(null); // Reference to the FAQ section

//   const handleToggle = (index) => {
//     setActiveQuestion(activeQuestion === index ? null : index);
//   };

//   const scrollToFAQs = () => {
//     if (faqSectionRef.current) {
//       faqSectionRef.current.scrollIntoView({
//         behavior: "smooth", // Smooth scrolling effect
//         block: "start", // Scroll to the start of the section
//       });
//     }
//   };

//   const faqs = [
//     {
//       question: 'What is Slack, and how does it improve team collaboration?',
//       answer:
//         'Slack is a communication platform that brings team conversations, files, and tools into one place. It improves collaboration by allowing teams to organize communication in channels, share files instantly, and integrate with various productivity apps, making workflows more efficient and reducing email clutter.',
//     },
//     {
//       question: 'How does Microsoft Teams enhance remote work?',
//       answer:
//         'Microsoft Teams is a collaboration tool that combines chat, video conferencing, file sharing, and app integration. It enhances remote work by providing a centralized hub where teams can communicate, conduct virtual meetings, collaborate on documents in real-time, and integrate with Microsoft 365 apps for seamless workflows.',
//     },
//     {
//       question: 'What is Google Workspace, and why is it popular for team collaboration?',
//       answer:
//         'Google Workspace is a suite of cloud-based productivity and collaboration tools, including Gmail, Google Drive, Docs, Sheets, and Meet. It is popular for team collaboration due to its real-time editing capabilities, easy file sharing, and integration with other Google services, making team communication and project management more effective.',
//     },
//     {
//       question: 'How does Asana help in managing team projects?',
//       answer:
//         'Asana is a project management tool designed to help teams organize, track, and manage their work. It allows teams to create projects, assign tasks, set deadlines, and track progress in a visually appealing way, improving productivity and ensuring that everyone stays on the same page.',
//     },
//     {
//       question: 'What is Trello, and how does it support team workflows?',
//       answer:
//         'Trello is a visual project management tool that uses boards, lists, and cards to organize tasks and projects. It supports team workflows by providing a clear, visual overview of work progress, enabling teams to manage tasks, assign responsibilities, and streamline communication in a flexible and user-friendly format.',
//     },
//     {
//       question: 'How does Zoom facilitate virtual meetings?',
//       answer:
//         'Zoom is a video conferencing platform that facilitates virtual meetings, webinars, and online collaboration. It allows teams to connect face-to-face from anywhere, share screens, record sessions, and collaborate in real-time, making it an essential tool for remote and hybrid work environments.',
//     },
//   ];
//   return (
//     <>
//       <Navbar />
//       <div className=" bg-blueCustomColor  w-full">
//           <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
//             <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
//               <div className="w-full  text-center lg:text-left order-2 lg:order-1">
//                 <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
//                 Software Development Services
//                 </h1>
//                 <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
//                   <Link
//                     to="/contact-us"
//                     className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//                   >
//                     Contact Us
//                   </Link>
//                   {/* <button
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
//                   onClick={scrollToFAQs}
//                 >
//                   FAQs <span className="ml-2">→</span>
//                 </button> */}
//                 </div>
//               </div>

//               <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2">
//                 <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
//                   GlobalXperts, we provide cutting-edge software development solutions tailored to your business needs.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       <div className="min-h-screen bg-white py-8">
//         {/* Hero Section */}
//         <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-green-500 text-white">
//           <h1 className="text-4xl font-bold">Software Development Services</h1>
//           <p className="mt-0 text-lg max-w-3xl mx-auto">
//             At GlobalXperts, we provide cutting-edge software development
//             solutions tailored to your business needs. Whether you're looking to
//             build custom applications, mobile apps, or enterprise-level
//             solutions, we have the expertise to deliver quality products.
//           </p>
//         </section>

//         {/* Services Offered Section */}
//         <section className="mt-12 px-6 max-w-7xl mx-auto">
//           <h2 className="text-3xl font-semibold text-center text-gray-800">
//             Our Software Development Solutions
//           </h2>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Custom Application Development
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 We design, develop, and deploy custom applications to meet your
//                 specific business requirements, ensuring performance,
//                 scalability, and security.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Mobile App Development
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 Build cross-platform mobile apps for iOS and Android with
//                 seamless user experiences and cutting-edge technologies.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Enterprise Solutions
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 Develop enterprise-level solutions to streamline your operations
//                 and enhance productivity with cloud integration and automation.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Web Development
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 Get responsive, high-performance websites and web apps with
//                 modern frameworks and technologies that are tailored to your
//                 needs.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Cloud-Based Software Development
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 We specialize in building cloud-based solutions, leveraging
//                 platforms like AWS, Azure, and GCP for scalable and secure
//                 applications.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Maintenance & Support
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 Ensure smooth and uninterrupted business operations with our
//                 software maintenance and support services.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Technologies Section */}
//         <section className="mt-16 bg-white py-16">
//           <h2 className="text-3xl font-semibold text-center text-gray-800">
//             Technologies We Use
//           </h2>
//           <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div>
//               <img
//                 src={ReactIcon}
//                 alt="React"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">React</p>
//             </div>
//             <div>
//               <img
//                 src={nodejs}
//                 alt="Node.js"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">Node.js</p>
//             </div>
//             <div>
//               <img
//                 src={aws}
//                 alt="AWS"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">AWS</p>
//             </div>
//             <div>
//               <img
//                 src={mongodb}
//                 alt="MongoDB"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">MongoDB</p>
//             </div>
//             <div>
//               <img
//                 src={kubernates}
//                 alt="Kubernetes"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">Kubernetes</p>
//             </div>
//             <div>
//               <img
//                 src={docker}
//                 alt="Docker"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">Docker</p>
//             </div>
//             <div>
//               <img
//                 src={azure}
//                 alt="Azure"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">Azure</p>
//             </div>
//             <div>
//               <img
//                 src={google}
//                 alt="GCP"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">GCP</p>
//             </div>
//             <div>
//               <img
//                 src={github}
//                 alt="GCP"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">Github</p>
//             </div> <div>
//               <img
//                 src={Jenkiens}
//                 alt="GCP"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">Jenkiens</p>
//             </div> <div>
//               <img
//                 src={Express}
//                 alt="GCP"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">Express Js</p>
//             </div>
//             <div>
//               <img
//                 src={Terraform}
//                 alt="GCP"
//                 className="h-16 mx-auto"
//               />
//               <p className="mt-2 text-gray-700">Terraform</p>
//             </div> 
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section className="mt-16 px-6">
//           <h2 className="text-3xl font-semibold text-center text-gray-800">
//             Why Choose GlobalXperts?
//           </h2>
//           <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Industry Expertise
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 Our team of experts has years of experience in delivering
//                 world-class software solutions to businesses across industries.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Scalable Solutions
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 We build scalable and flexible software that grows with your
//                 business, ensuring long-term success.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Custom Development
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 We create custom solutions tailored to meet the unique needs of
//                 your business, maximizing efficiency and effectiveness.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 End-to-End Support
//               </h3>
//               <p className="mt-2 text-gray-600">
//                 From concept to deployment and beyond, we provide complete
//                 end-to-end support to ensure success.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="mt-16 py-8 text-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
//           <h2 className="text-3xl font-semibold">
//             Ready to Build Your Solution?
//           </h2>
//           <p className="mt-4 text-lg max-w-3xl mx-auto">
//             Contact us today to discuss your software development needs and find
//             out how GlobalXperts can help your business succeed.
//           </p>
//           <a
//             href="/contact-us"
//             className="mt-6 inline-block px-8 py-3 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-200"
//           >
//             Get in Touch
//           </a>
//         </section>
//       </div>
//       <div className="mt-0">
//         <ContactCard />
//       </div>
//       <div className="mt-8">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default SoftwareDevelopment;
