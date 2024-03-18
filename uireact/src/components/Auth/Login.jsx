// Login.js (Design Only)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const nav=useNavigate();
  const [errors, setErrors] = useState({
    email: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
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
    

    setErrors({ email: ''});

    console.log(formData);
    localStorage.setItem('email',formData.email)
    toast.promise(
      new Promise((resolve) => {
        // Simulate some asynchronous operation
        setTimeout(() => {
          resolve('Logged in successfully!');
        }, 2000); // Adjust the delay as needed
      }),
      {
        loading: 'Logging in...',
        success: 'Logged in successfully!',
        error: 'An error occurred while logging in.',
      }
    ).then(() => {
      // Navigate to the next page after the toast is closed or after a delay
      setTimeout(() => {
        if(formData.email=="admin@gmail.com")
        {
          nav('/admin/Dashboard')
        }
        else{
        nav('/user/Dashboard');
        }
      }, 1000); // Adjust the delay as needed
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div><Toaster/></div>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            If you are not a registered user,{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign up here
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6"  onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input onChange={handleChange}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
