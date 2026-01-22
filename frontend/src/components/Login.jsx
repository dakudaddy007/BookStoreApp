import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    document.getElementById("my_modal_3").close()
    // You can close the modal manually here if needed:
    // document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* 1. REMOVED method="dialog" to allow validation to run */}
          
            
            {/* Close button */}
            <button 
              type="button" // Use type="button" so it doesn't trigger submit
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br/>
              <input 
                type="email"
                placeholder="Enter your email" 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })} 
              />
              {errors.email && (
                <span className='text-sm text-red-500'>This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br/>
              <input 
                type="password" // Changed to type="password" for security
                placeholder="Enter your password" 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })} 
              />
              {errors.password && (
                <span className='text-sm text-red-500'>This field is required</span>
              )}
            </div>

            {/* Button Section */}
            <div className='flex justify-around mt-4'>
              <button 
                type="submit" // Explicitly set submit
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Login
              </button>
              {/* 2. Moved the Signup link into a div to avoid nesting issues */}
              <p>
                Not Registered?{" "}
                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                  Signup
                </Link>
                </p>
            </div>
          </form>
        </div>
        </dialog>
    </div>
  );
}

export default Login;