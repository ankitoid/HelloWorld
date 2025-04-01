import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:8000/api/ContactCard", {
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
    <div className="flex flex-col md:flex-row justify-center p-4 md:p-0 space-y-6 md:space-y-0 md:space-x-6 max-w-3xl mx-auto">
      <div className="w-full md:w-6/12 xl:w-5/12 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-extrabold mb-4 text-gray-800">Get In Touch</h2>
        <p className="mb-4 text-gray-600">Fill out the form below, and we’ll be in touch shortly.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <textarea
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 h-24"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </div>

      <div className="w-full md:w-6/12 xl:w-5/12 p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
        <div className="mb-4">
          <FiPhone className="inline-block mr-2 text-green-300" />
          Call: +1 919-342-5482
        </div>
        <div className="mb-4">
          <FiMail className="inline-block mr-2 text-green-300" />
          Email: info@globalxperts.net
        </div>
        <div className="mb-4">
          <FiMapPin className="inline-block mr-2 text-green-300" />
          Address: 5540 Centerview Drive, Suite 200, Raleigh, NC 27606
        </div>
        <div className="flex justify-center mt-8">
          <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/gxNewLogo.png" alt="Logo" className="h-14" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
