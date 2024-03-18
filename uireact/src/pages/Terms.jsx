import React from 'react';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';
import Footer from '../components/Public/Footer';

const Terms = () => {
  return (
    <div>
      
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-800">
            <h2 className="text-3xl font-semibold mb-8">Terms and Conditions</h2>
            <p className="mb-6">
              Welcome to Corpify! These terms and conditions outline the rules and regulations for the use of Corpify's Website, located at www.corpify.com.
            </p>
            <h3 className="text-xl font-semibold mb-4">1. Introduction</h3>
            <p className="mb-6">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Corpify if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <h3 className="text-xl font-semibold mb-4">2. License</h3>
            <p className="mb-6">
              Unless otherwise stated, Corpify and/or its licensors own the intellectual property rights for all material on Corpify. All intellectual property rights are reserved. You may access this from Corpify for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            {/* Include other sections here */}
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="list-disc ml-8">
              <li className="mb-2">By email: info@corpify.com</li>
              <li className="mb-2">By visiting this page on our website: <a href="www.corpify.com/contact-us" className="text-blue-500">www.corpify.com/contact-us</a></li>
            </ul>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Terms;
