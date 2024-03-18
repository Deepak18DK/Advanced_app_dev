// Signup.js
import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const Signup = () => {

  const navigate = useNavigate()
   
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const [errors, setErrors] = useState({
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber:''
    });

 
      const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
    const validatePasswordStrength = (password) => {
      // Check if the password meets your strength criteria (e.g., length)
      return password.length >= 8; // You can add more criteria if needed
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Check if any field is empty
      for (const field in formData) {
        if (formData[field].trim() === '') {
          alert(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
          return;
        }
      }
       // Proceed with form submission if all fields are filled
  if (!validateEmail(formData.email)) {
    setErrors({ ...errors, email: 'Invalid email format' });
    return;
  }
  
  // Validate password strength
  if (!validatePasswordStrength(formData.password)) {
    setErrors({ ...errors, password: 'Password must be at least 8 characters long' });
    return;
  }
  if (formData.password !== formData.confirmPassword) {
    setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
    return;
  }
  if(formData.phoneNumber.length<10 ||formData.phoneNumber.length>12 )
  {
    setErrors({ ...errors, phoneNumber: 'Invalid phone Number' });
    return;
  }
  // Clear any previous validation errors
  setErrors({ email: '', password: '' ,confirmPassword: ''});

  console.log(formData);
  toast.success("Successfully registered!");
  navigate('/login')
  // You can add your form submission logic here
 };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Log in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6"  onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <div>
                      <input type="name" 
                      name="name"
                       id="name" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder='Enter your Name'
                       onChange={handleChange}
                       autoFocus
                       required=""/>
                  </div>
                  <div>
                      <input type="email" 
                      name="email"
                       id="email" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder='Enter your email'
                       onChange={handleChange}
                       required=""/>
                       {errors.email && <p className="text-red-600">{errors.email}</p>}
                  </div>
            <div>
                      <input type="phoneNumber" 
                      name="phoneNumber"
                       id="phoneNumber" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder='Enter your phone number'
                       onChange={handleChange}
                       required=""/>
                       {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber}</p>}
                  </div>
                  <div>
                      <input type="password"
                       name="password" 
                       id="password" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                       placeholder='Enter your Password'
                       onChange={handleChange}/>
                       {errors.password && <p className="text-red-600">{errors.password}</p>}
                  </div>
                  <div>                     
                      <input type="password"
                       name="confirmPassword" 
                       id="confirmPassword" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                       placeholder='Enter Confirm Password'
                       onChange={handleChange}/>
                       {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
                  </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
            >
              Sign up
            </button>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
