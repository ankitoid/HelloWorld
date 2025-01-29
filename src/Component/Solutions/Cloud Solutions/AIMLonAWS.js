import React from "react";
import Navbar from "../../Navbar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AwsTextract from "../../../Assets/SMBsLogo/awsTextract.png";
import AWSaiML from "../../../Assets/SMBsLogo/AWSMLAI.webp"
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
const AIMLonAWS = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>AIMLon AWS</title>
        <meta name="description" content="AI and Machine Learning on AWS" />
      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                AI & Machine Learning on AWS
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
            <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                “GlobalXperts uses Amazon Web Services (AWS) for our suite of
                AI/ML tools. With AWS comes a number of AI capabilities that are
                either designed for general usage or specialized for specific
                tasks. ”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  p-4 bg-gray-100">
        {/* Main Card */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 md:p-10 gap-6 mt-12">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={AwsTextract}
              alt="Education"
              className="object-cover w-full h-auto rounded-lg shadow"
            />
          </div>

          {/* Right Section - Text */}
          <div className="w-full md:w-1/2">
            {/* Header */}
            <div className="flex items-center mb-6">
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Core Services
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              AWS offers{" "}
              <span className="font-semibold text-gray-900">
                generative AI capabilities
              </span>{" "}
              that can support businesses and their general operations. These
              capabilities span areas like
              <span className="font-semibold text-gray-900">
                {" "}
                text, language, object identification,
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-900">
                software development.
              </span>
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 mt-0  shadow-md p-6 md:p-8">
          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Explore the AWS suite of tools offering specialized services for
            each of these functionalities.
          </p>

          {/* Services List */}
          <ul className="list-disc list-inside space-y-4 text-gray-800">
            <li className="text-lg">
              <span className="font-bold">Text and Data Processing:</span>{" "}
              Amazon Textract, Amazon Translate, and Amazon Comprehend excel in
              extracting and processing text and data.
            </li>
            <li className="text-lg">
              <span className="font-bold">Language Processing:</span> Amazon
              Lex, Amazon Transcribe, and Amazon Polly handle conversational and
              language-related inquiries.
            </li>
            <li className="text-lg">
              <span className="font-bold">Object and Scene Recognition:</span>{" "}
              Amazon Rekognition identifies objects, people, text, scenes, and
              activities in video footage.
            </li>
            <li className="text-lg">
              <span className="font-bold">Software Development:</span> Amazon
              CodeWhisperer, Amazon DevOps Guru, and Amazon CodeGuru assist in
              coding and DevOps tasks.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  p-4 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 md:p-10 gap-6 mt-12">
          {/* Left Section - Text */}
          <div className="w-full md:w-1/2">
            {/* Header */}
            <div className="flex items-center mb-6">
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Specialized Services
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AWS can also provide
              <span className="font-semibold text-gray-900 ml-1">
                generative AI capabilities
              </span>{" "}
              tailored for specific tasks, such as providing an
              <span className="font-semibold text-gray-900">
                {" "}
                enterprise search engine, assisting in marketing, managing
                information
              </span>{" "}
              for different industries, or even offering health-related
              services.
            </p>

            {/* Highlighted Points */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                For each of these avenues, AWS services can address their needs:
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <span className="font-bold">Amazon Kendra:</span> Offers
                  intelligent search engine functionalities for enterprises.
                </li>
                <li>
                  <span className="font-bold">Amazon Personalize:</span> Employs
                  machine learning to recommend improvements for your brand and
                  marketing.
                </li>
                <li>
                  <span className="font-bold">
                    Amazon Monitron, Amazon Lookout for Equipment, AWS Panorama,
                    and Amazon Lookout for Vision:
                  </span>{" "}
                  Manage industrial processes and procedures.
                </li>
                <li>
                  <span className="font-bold">
                    AWS HealthLake, AWS HealthImaging, AWS HealthOmics, and AWS
                    HealthScribe:
                  </span>{" "}
                  Provide functionalities to support health-related businesses.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={AwsTextract}
              alt="Education"
              className="object-cover w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 bg-gray-100">
  {/* Top Section */}
  <div className="flex flex-col md:flex-row items-center bg-white rounded-t-lg shadow-md p-6 md:p-10 gap-6 mt-12">
    {/* Left Section - Image */}
    <div className="w-full md:w-1/2">
      <img
        src={AWSaiML} // Replace with your image path
        alt="Foundation Models"
        className="object-cover w-full h-auto rounded-lg shadow"
      />
    </div>

    {/* Right Section - Text */}
    <div className="w-full md:w-1/2">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Foundation Models
        </h2>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed">
        To integrate AWS and their suite of AI/ML tools, 
        <span className="font-semibold text-gray-900 ml-1">GlobalXperts</span>{" "}
        employs foundation models (FMs) to design and empower our AI services.
      </p>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="flex flex-col md:flex-row items-start bg-white rounded-b-lg shadow-md p-6 md:p-10 gap-6 ">
    {/* Left Section - Description */}
    <div className="w-full md:w-1/2">
      <p className="text-lg justify-between text-gray-700 leading-relaxed">
        Foundation models are adaptable in developing ML models with the benefits of being 
        <span className="font-semibold text-gray-900"> cost-effective</span> and 
        <span className="font-semibold text-gray-900"> time-efficient.</span> Their flexibility allows GlobalXperts to create AI/ML solutions tailored to specific requirements and use cases.
      </p>
    </div>

    {/* Right Section - Highlighted Steps */}
    <div className="w-full md:w-1/2 bg-gray-50 p-6  pb-0 rounded-lg shadow">
      <h3 className="text- font-semibold text-gray-800 mb-4">
        The process of employing these foundation models includes:
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-2">
        <li>
          <span className="font-bold">Customizing the FM:</span> Tailoring the foundation model as needed.
        </li>
        <li>
          <span className="font-bold">Integrating the FM:</span> Seamlessly connecting the FM with AI services.
        </li>
        <li>
          <span className="font-bold">Employing FM-powered AI services:</span> Utilizing AI services powered by foundation models.
        </li>
        <li>
          <span className="font-bold ">Leveraging generative AI solutions:</span> Maximizing generative AI for enhanced outcomes.
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-gray-100 py-12">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-extrabold text-gray-900">The Future of Technology</h2>
      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      From the first commercially available computers to the phone’s ability to register one’s facial features—technology is forever evolving. With every new development, more of these technological advancements are being incorporated into our everyday lives.      </p>
    </div>

    {/* Content Section */}
    <div className="bg-white rounded-lg shadow-md p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Section - Text */}
      <div className="lg:w-1/2">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Artificial intelligence (AI) is but one example: a technology that possesses limitless possibilities so long as there is information to be sought. At GlobalXperts, we strive to employ such devices to support businesses seeking to improve their productivity.          <span className="font-semibold text-gray-900">GlobalXperts</span>, we strive to leverage AI to empower businesses and drive productivity improvements.
        </p>
       
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2">
        <img
          src="https://www.polytechnique-insights.com/wp-content/uploads/2024/01/adobestock_621477974-1-scaled.jpeg" // Replace with your image path
          alt="AI and technology"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>

    {/* CTA Section */}
    <div className="text-center mt-12">
      <Link
        to="/contact-us"
        className="bg-blueCustomColor text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        Explore AI Solutions with Us
      </Link>
    </div>
  </div>
</div>

<div className="mt-8 mb-8"><ContactCard/></div>
<Footer/>

    </>
  );
};

export default AIMLonAWS;


// import React from "react";
// import Navbar from "../../Navbar";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import AwsTextract from "../../../Assets/SMBsLogo/awsTextract.png";
// import AWSaiML from "../../../Assets/SMBsLogo/AWSMLAI.webp";
// import ContactCard from "../../Contact/ContactCard";
// import Footer from "../../Footer";

// const AIMLonAWS = () => {
//   return (
//     <>
//       <Navbar />
//       <Helmet>
//         <title>AI & ML on AWS | GlobalXperts</title>
//         <meta
//           name="description"
//           content="GlobalXperts leverages AWS AI and Machine Learning tools to deliver cutting-edge solutions tailored to business needs."
//         />
//       </Helmet>

//       {/* Hero Section */}
//       <div className="bg-blueCustomColor w-full">
//         <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] flex flex-col lg:flex-row items-center px-6 lg:px-16">
//           {/* Left Section - Text */}
//           <div className="text-center lg:text-left lg:w-1/2">
//             <h1 className="text-3xl lg:text-5xl font-bold text-white">
//               AI & Machine Learning on AWS
//             </h1>
//             <p className="text-base lg:text-lg text-white mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
//               “GlobalXperts uses Amazon Web Services (AWS) for our suite of
//               AI/ML tools. AWS provides both general-purpose and specialized AI
//               capabilities to transform business operations.”
//             </p>
//             <div className="flex justify-center lg:justify-start mt-6 space-x-4">
//               <Link
//                 to="/contact-us"
//                 className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Core Services Section */}
//       <div className="max-w-7xl mx-auto p-4 bg-gray-100">
//         <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 md:p-10 gap-6 mt-12">
//           {/* Left Section - Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src={AwsTextract}
//               alt="Core Services"
//               className="object-cover w-full h-auto rounded-lg shadow"
//             />
//           </div>
//           {/* Right Section - Text */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
//               Core Services
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed mt-4">
//               AWS offers <span className="font-semibold text-gray-900">generative AI capabilities</span> that
//               enhance business operations. These include applications in{" "}
//               <span className="font-semibold text-gray-900">text, language, object identification,</span> and{" "}
//               <span className="font-semibold text-gray-900">software development.</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Specialized Services Section */}
//       <div className="max-w-7xl mx-auto p-4 bg-gray-100">
//         <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 md:p-10 gap-6">
//           {/* Left Section - Text */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
//               Specialized Services
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed mt-4">
//               AWS provides tailored AI services for various industries, including{" "}
//               <span className="font-semibold text-gray-900">enterprise search engines, marketing assistance, industrial management,</span> and{" "}
//               <span className="font-semibold text-gray-900">healthcare solutions.</span>
//             </p>
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Examples of Specialized AWS Services:
//               </h3>
//               <ul className="list-disc list-inside space-y-3 text-gray-700">
//                 <li>
//                   <span className="font-bold">Amazon Kendra:</span> Intelligent search engine functionalities for enterprises.
//                 </li>
//                 <li>
//                   <span className="font-bold">Amazon Personalize:</span> Machine learning-based recommendations for marketing.
//                 </li>
//                 <li>
//                   <span className="font-bold">
//                     AWS Health Services:
//                   </span>{" "}
//                   Tools like HealthLake and HealthOmics support healthcare businesses.
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Right Section - Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src={AWSaiML}
//               alt="Specialized Services"
//               className="object-cover w-full h-auto rounded-lg shadow"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Foundation Models Section */}
//       <div className="max-w-7xl mx-auto p-4 bg-gray-100">
//         <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 md:p-10 gap-6">
//           {/* Left Section - Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src={AWSaiML}
//               alt="Foundation Models"
//               className="object-cover w-full h-auto rounded-lg shadow"
//             />
//           </div>
//           {/* Right Section - Text */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
//               Foundation Models
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed mt-4">
//               GlobalXperts employs foundation models (FMs) to design flexible and
//               scalable AI/ML solutions. These models are{" "}
//               <span className="font-semibold text-gray-900">cost-effective</span> and{" "}
//               <span className="font-semibold text-gray-900">time-efficient,</span> enabling solutions tailored to specific business requirements.
//             </p>
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Key Processes Involved:
//               </h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-700">
//                 <li>
//                   <span className="font-bold">Customization:</span> Tailoring foundation models to specific needs.
//                 </li>
//                 <li>
//                   <span className="font-bold">Integration:</span> Connecting FMs seamlessly with AI services.
//                 </li>
//                 <li>
//                   <span className="font-bold">Deployment:</span> Utilizing FM-powered AI services effectively.
//                 </li>
//                 <li>
//                   <span className="font-bold">Generative AI:</span> Leveraging advanced AI capabilities for business outcomes.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-100 py-12">
//   <div className="max-w-7xl mx-auto px-4 lg:px-8">
//     {/* Section Header */}
//     <div className="text-center mb-8">
//       <h2 className="text-4xl font-extrabold text-gray-900">The Future of Technology</h2>
//       <p className="text-lg text-gray-700 mt-4 leading-relaxed">
//       From the first commercially available computers to the phone’s ability to register one’s facial features—technology is forever evolving. With every new development, more of these technological advancements are being incorporated into our everyday lives.      </p>
//     </div>

//     {/* Content Section */}
//     <div className="bg-white rounded-lg shadow-md p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8">
//       {/* Left Section - Text */}
//       <div className="lg:w-1/2">
//         <p className="text-lg text-gray-700 leading-relaxed mb-6">
//         Artificial intelligence (AI) is but one example: a technology that possesses limitless possibilities so long as there is information to be sought. At GlobalXperts, we strive to employ such devices to support businesses seeking to improve their productivity.          <span className="font-semibold text-gray-900">GlobalXperts</span>, we strive to leverage AI to empower businesses and drive productivity improvements.
//         </p>
       
//       </div>

//       {/* Right Section - Image */}
//       <div className="lg:w-1/2">
//         <img
//           src="https://www.polytechnique-insights.com/wp-content/uploads/2024/01/adobestock_621477974-1-scaled.jpeg" // Replace with your image path
//           alt="AI and technology"
//           className="w-full h-auto object-cover rounded-lg shadow-md"
//         />
//       </div>
//     </div>

//     {/* CTA Section */}
//     <div className="text-center mt-12">
//       <Link
//         to="/contact-us"
//         className="bg-blueCustomColor text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300"
//       >
//         Explore AI Solutions with Us
//       </Link>
//     </div>
//   </div>
// </div>


//       {/* Contact and Footer */}
//       <div className="mt-8 mb-8">
//         <ContactCard />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AIMLonAWS;

