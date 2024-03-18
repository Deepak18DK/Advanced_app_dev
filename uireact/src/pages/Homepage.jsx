import { useState } from 'react'
import React from 'react';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';
import Footer from '../components/Public/Footer';
import Image1 from '../assets/images/Corpifyimage1.svg';

const HomePage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, ABC Company',
      comment: 'Corpify made our corporate event planning seamless and hassle-free. Highly recommended!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Event Coordinator, XYZ Corporation',
      comment: "I've been using Corpify for all our corporate events, and it has exceeded our expectations every time.",
    },
    {
      id: 3,
      name: 'David Johnson',
      position: 'HR Manager, DEF Inc.',
      comment: 'Thanks to Corpify, organizing our company retreat was a breeze. The team loved it!',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'Marketing Director, GHI Group',
      comment: "Corpify's platform is user-friendly and has all the features we need to plan successful corporate events.",
    },
  ];
  return (
    <div>
      {/* Hero section */}
      <section className="flex items-center py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center">
            <div className="md:w-2/2 mb-25 md:mb-5 pr-14">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Welcome to Corpify</h1>
              <p className="text-lg mt-4">Simplifying Corporate Event Management</p>
              <p className="text-lg mt-4">Planning and managing corporate events made easy.</p>
            </div>
            <div className="md:w-1/2">
              <img src={Image1} alt="Corporate Events" className="rounded-lg shadow-md w-full" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Streamlined Event Planning</h3>
              <p className="text-gray-600">Corpify provides a centralized platform for event planners to list their services, manage bookings, and communicate with clients efficiently.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Customized Event Services</h3>
              <p className="text-gray-600">Corporate clients can easily find and book event services tailored to their specific needs, whether it's venue options, catering services, or audiovisual equipment.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Transparent Booking Process</h3>
              <p className="text-gray-600">With Corpify, event planners and corporate clients have full visibility into the booking process, from initial inquiry to final confirmation, ensuring a smooth and transparent experience.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Secure Payment Integration</h3>
              <p className="text-gray-600">Corpify integrates secure payment options, allowing for hassle-free transactions and providing peace of mind for both event planners and corporate clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing plans section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Choose a Plan That Works for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for small events</p>
              <h4 className="text-2xl font-bold text-indigo-600 mb-4">$99</h4>
              <ul className="text-gray-600">
                <li>Event Listings</li>
                <li>Basic Support</li>
                <li>10 Bookings/month</li>
              </ul>
              <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">Buy Now</button>
            </div>
            {/* Plan 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-gray-600 mb-6">For medium-sized events</p>
              <h4 className="text-2xl font-bold text-indigo-600 mb-4">$199</h4>
              <ul className="text-gray-600">
                <li>Event Listings</li>
                <li>Premium Support</li>
                <li>30 Bookings/month</li>
              </ul>
              <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">Buy Now</button>
            </div>
            {/* Plan 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large-scale events</p>
              <h4 className="text-2xl font-bold text-indigo-600 mb-4">$299</h4>
              <ul className="text-gray-600">
                <li>Event Listings</li>
                <li>Premium Support</li>
                <li>Unlimited Bookings</li>
              </ul>
              <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                <input type="text" id="name" name="name" className="form-input mt-1 block w-full border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                <input type="email" id="email" name="email" className="form-input mt-1 block w-full border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                <textarea id="message" name="message" rows="4" className="form-textarea mt-1 block w-full border-gray-300 rounded-md"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">Submit</button>
              </div>
            </form>
          </div>
          {/* Contact information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="text-gray-700">
              <p className="mb-2"><span className="font-medium">Email:</span> info@corpify.com</p>
              <p className="mb-2"><span className="font-medium">Phone:</span> +1 (123) 456-7890</p>
              <p className="mb-2"><span className="font-medium">Address:</span> 123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Testimonials section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-lg mb-4">{testimonial.comment}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;