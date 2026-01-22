import React from 'react';
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Add your logic to send the email or save to database here
    alert("Message sent successfully!");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-10">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-pink-500"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-pink-500"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Message Input */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea 
                rows="4"
                placeholder="Type your message" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-pink-500"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;