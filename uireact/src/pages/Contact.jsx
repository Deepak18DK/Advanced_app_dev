import React, { useState } from 'react';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';
import Footer from '../components/Public/Footer';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Contact form section */}
      <section className="py-20 bg-gray-100 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact form */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
              <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
              {formSubmitted ? (
                <p className="text-green-600 mb-4">We will get back to you later.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" className="form-input mt-1 block w-full border border-gray-300 rounded-md" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" className="form-input mt-1 block w-full border border-gray-300 rounded-md" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input type="text" id="phone" name="phone" className="form-input mt-1 block w-full border border-gray-300 rounded-md" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select id="subject" name="subject" className="form-select mt-1 block w-full border border-gray-300 rounded-md">
                      <option value="request_demo">Request a Demo</option>
                      <option value="website_issue">Website Issue</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" className="form-textarea mt-1 block w-full border border-gray-300 rounded-md"></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">Submit</button>
                  </div>
                </form>
              )}
            </div>
            {/* Contact information */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-300">
              <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
              <div className="text-gray-700">
                <p className="mb-2"><span className="font-medium">Email:</span> info@corpify.com</p>
                <p className="mb-2"><span className="font-medium">Phone:</span> +1 (123) 456-7890</p>
                <p className="mb-2"><span className="font-medium">Address:</span> 123 Main Street, Coimbatore, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default ContactPage;
  