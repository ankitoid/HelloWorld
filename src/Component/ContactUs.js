import { useForm } from 'react-hook-form';
import Navbar from './Navbar';

function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted!', data);
  };

  return (
    <>
    <Navbar/>
    <div className="relative bg-cover bg-blueCustomColor 2xl:h-screen text-white p-8 py-20 sm:h-screen mt-4">
      <div className="flex">
        <h1 className="w-1.5 h-10 text-4xl font-bold mb-4 bg-greenCustomColor2"></h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 mx-3 flex ">
          Connect with <p className="text-greenCustomColor2 mx-1 font-bold">Us</p>
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div>
            <input
              {...register("firstName", { required: true })}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="First Name *"
            />
            {errors.firstName && <span className="text-red-500">First Name is required</span>}
          </div>
          <div>
            <input
              {...register("lastName", { required: true })}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Last Name *"
            />
            {errors.lastName && <span className="text-red-500">Last Name is required</span>}
          </div>
          <div>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Email *"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mt-2">
            <input
              {...register("phone", { required: true })}
              type="tel"
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Phone *"
            />
            {errors.phone && <span className="text-red-500">Phone is required</span>}
          </div>
          <div className="mt-2">
            <input
              {...register("company", { required: true })}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Company Name *"
            />
            {errors.company && <span className="text-red-500">Company is required</span>}
          </div>
          <div className="mt-2">
            <select
              {...register("enquiryType", { required: true })}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white focus:outline-none focus:ring-0"
            >
              <option value="" disabled>Select an Enquiry Type</option>
              <option value="Solution Integration" className="text-gray-400">Solution Integration</option>
              <option value="Technology Products" className="text-gray-400">Technology Products</option>
            </select>
            {errors.enquiryType && <span className="text-red-500">Enquiry Type is required</span>}
          </div>
          <div className="col-span-3">
            <textarea
              {...register("message", { required: true })}
              className="w-full px-3 py-2 border-b border-white bg-transparent text-white placeholder-white resize-none focus:outline-none focus:ring-0"
              placeholder="Message *"
            ></textarea>
            {errors.message && <span className="text-red-500">Message is required</span>}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center mt-2">
            <input
              {...register("isAgreed")}
              type="checkbox"
              className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="agree" className="ml-2 text-sm">
              I confirm, I have read and agree to the Privacy Policy and consent to sharing my information.
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              {...register("isSubscribed")}
              type="checkbox"
              className="w-4 h-4 text-blue-500  focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="subscribe" className="ml-2 text-sm">
              I would like to receive alerts and updates.
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
    </>
  );
}

export default ContactUs;
