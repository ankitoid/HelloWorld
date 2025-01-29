import { useForm } from 'react-hook-form';
import Navbar from './Navbar';

function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted!', data);
  };

  return (
    <>
      <Navbar />
      <div className="relative bg-blueCustomColor text-white min-h-screen flex flex-col justify-center items-center p-8">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold text-greenCustomColor2 mb-4 mt-10">
            Get In Touch With Us
          </h1>
          {/* <h2 className="text-3xl md:text-5xl font-bold mb-4 mx-3 flex">
            Connect with <span className="text-greenCustomColor2 mx-1 font-bold">Us</span>
          </h2> */}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-0">
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
            <div className="mt-2">
              <input
                {...register("phone", { required: true })}
                type="tel"
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Phone *"
              />
              {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
            </div>
            <div className="mt-2">
              <input
                {...register("company", { required: true })}
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Company Name *"
              />
              {errors.company && <span className="text-red-500 text-sm">Company is required</span>}
            </div>
            <div className="mt-2">
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
            <div className="flex items-center mt-2">
              <input
                {...register("isAgreed")}
                type="checkbox"
                className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="agree" className="ml-2 text-sm text-black">
                I confirm, I have read and agree to the Privacy Policy and consent to sharing my information.
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                {...register("isSubscribed")}
                type="checkbox"
                className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="subscribe" className="ml-2 text-sm text-black">
                I would like to receive alerts and updates.
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-3 px-6 rounded-lg mt-8 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
