import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineSupportAgent } from "react-icons/md";

const ContactSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/ContactSlider", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        reset();
      } else {
        setResponseMessage(responseData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Contact Us Button */}
      <div
        onClick={handleOpen}
        className="fixed bottom-1 right-6 lg:right-12 py-2 px-2 bg-greenCustomColor2 text-white p-3 rounded-lg cursor-pointer z-50 flex items-center justify-center transition-all duration-300 ease-in-out"
      >
        <MdOutlineSupportAgent size={35} />
      </div>

      {/* Contact Form Slider */}
      <div
        className={`fixed top-1/4 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 block" : "translate-x-full"
        } sm:w-[350px] 2xl:w-[450px]`}
        onMouseLeave={handleClose}
      >
        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col mr-20">
          {/* Form Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-purple-600">Contact Form</h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 text-xl">
              &times;
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name*"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone*"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email*"
                {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Message*"
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
                rows="4"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg w-full transition-all duration-200"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {/* Response Message */}
            {responseMessage && <p className="text-center mt-2 text-sm text-gray-600">{responseMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSlider;
