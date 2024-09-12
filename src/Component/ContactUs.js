import { useState } from 'react';
import bg_image from "../Assets/contact3.jpg";

function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div
      className="bg-cover bg-center text-white p-8 py-12"
      style={{
        backgroundImage: `url(${bg_image})`,
      }}
    >
     <div className=' flex'> 
      <h1 className=' w-1.5 h-10 text-4xl font-bold mb-4 bg-greenCustomColor2'></h1>
     <h2 className="text-4xl font-bold mb-4 mx-3 flex">Connect with <p className=' text-greenCustomColor2 mx-1 font-bold'>Us</p></h2>
     </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 mt-5 ">
          <div>
            {/* <label htmlFor="firstName" className="block mb-2">
              First Name *
            </label> */}
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="First Name *"
            />
          </div>
          <div>
            {/* <label htmlFor="lastName" className="block mb-2">
              Last Name *
            </label> */}
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Last Name *"
            />
          </div>
          <div>
            {/* <label htmlFor="email" className="block mb-2">
              Email *
            </label> */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Email *"
            />
          </div>
          <div className=' mt-2'>
            {/* <label htmlFor="phone" className="block mb-2">
              Phone *
            </label> */}
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Phone *"
            />
          </div>
          <div className=' mt-2'>
            {/* <label htmlFor="company" className="block mb-2">
              Company Name *
            </label> */}
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Company Name *"
            />
          </div>

          {/* <div className=' mt-2'>
            <label htmlFor="company" className="block mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Enquiry Type *"
            />
          </div> */}

          <div className=' mt-2'>
            {/* <label htmlFor="enquiryType" className="block mb-2">
              Enquiry Type *
            </label> */}
            <select
              id="enquiryType"
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
            >
              <option value="" disabled>Select an Enquiry Type</option>
              <option value="" className=' text-gray-400' >Solution Integration</option>
              <option value="" className=' text-gray-400' >Technology Products</option>
             
            </select>
          </div>
          
          <div className="col-span-3">
            {/* <label htmlFor="message" className="block mb-2">
              Message *
            </label> */}
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white resize-none focus:outline-none focus:ring-0"
              placeholder="Message *"
            ></textarea>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="agree"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
              className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="agree" className="ml-2 text-sm">
              I confirm, I have read and agree to Black Box Privacy Policy and consent to sharing my information
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="subscribe"
              checked={isSubscribed}
              onChange={() => setIsSubscribed(!isSubscribed)}
              className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="subscribe" className="ml-2 text-sm">
              I would like to receive alerts and updates from Black Box
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-2 px-4 rounded-md mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
