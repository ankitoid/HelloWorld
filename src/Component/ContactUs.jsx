import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function ContactUs() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("Sending...");
    
    try {
      const response = await fetch("http://localhost:8000/api/contactUS", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative bg-blueCustomColor text-white flex flex-col justify-center items-center p-8 min-h-screen">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl xl:text-7xl text-greenCustomColor2 mb-4 mt-10">
            Get In Touch With Us
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <input
                {...register("firstName", { required: true })}
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="First Name *"
              />
              {errors.firstName && <span className="text-red-500 text-sm">First Name is required</span>}
            </div>
            <div>
              <input
                {...register("lastName", { required: true })}
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Last Name *"
              />
              {errors.lastName && <span className="text-red-500 text-sm">Last Name is required</span>}
            </div>
            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email *"
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>
            <div>
              <input
                {...register("phone", { required: true })}
                type="tel"
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Phone *"
              />
              {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
            </div>
            <div>
              <input
                {...register("company", { required: true })}
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Company Name *"
              />
              {errors.company && <span className="text-red-500 text-sm">Company is required</span>}
            </div>
            <div>
              <select
                {...register("enquiryType", { required: true })}
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="" disabled>Select an Enquiry Type</option>
                <option value="Solution Integration">Solution Integration</option>
                <option value="Technology Products">Technology Products</option>
              </select>
              {errors.enquiryType && <span className="text-red-500 text-sm">Enquiry Type is required</span>}
            </div>
            <div className="col-span-3">
              <textarea
                {...register("message", { required: true })}
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Message *"
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <input
                {...register("isAgreed", { required: true })}
                type="checkbox"
                className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
              />
              <label className="ml-2 text-sm text-black">
                I confirm I have read and agree to the Privacy Policy.
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                {...register("isSubscribed")}
                type="checkbox"
                className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
              />
              <label className="ml-2 text-sm text-black">
                I would like to receive updates and alerts.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-3 px-6 rounded-lg mt-8 transition-colors duration-300"
          >
            Submit
          </button>
          {status && <p className="mt-4 text-black">{status}</p>}
        </form>
      </div>
    </>
  );
}

export default ContactUs;
