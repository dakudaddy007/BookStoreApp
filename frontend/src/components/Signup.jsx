import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form" // 1. Import useForm

function Signup() {
  // 2. Initialize useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box border shadow-md rounded-lg p-5">
            {/* 3. Wrap your inputs in a form with onSubmit */}
            
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
              <h3 className="font-bold text-lg">Signup</h3>
              <form onSubmit={handleSubmit(onSubmit)}>

              {/* Name */}
              <div className='mt-4 space-y-2'>
                <span>Name</span><br/>
                <input 
                  type="text"
                  placeholder="Enter your Name" 
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("name", { required: true })} // 4. Register field
                />
                <br/>
                {errors.name && <span className='text-sm text-red-500'>Name is required</span>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
                <span>Email</span><br/>
                <input 
                  type="email"
                  placeholder="Enter your email" 
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: true })} // 4. Register field
                />
                <br/>
                {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span><br/>
                <input 
                  type="password"
                  placeholder="Enter your password" 
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })} // 4. Register field
                />
                <br/>
                {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
              </div>

              {/* Button & Redirect */}
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  Signup
                </button>
                
                {/* 5. FIXED: Removed <Login /> from inside the <p> tag */}
                <div className='text-md'>
                  Have Account?{" "}
                  <button
                    type="button"
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
            {/* 6. Place Login component OUTSIDE the form and paragraph */}
            <Login />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup