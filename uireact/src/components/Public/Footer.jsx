import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Footer section 1 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
          {/* Footer section 2 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          {/* Footer section 3 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms and Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Footer section 4 */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Main Street</p>
            <p className="text-gray-400">City, Country</p>
            <p className="text-gray-400">info@example.com</p>
            <p className="text-gray-400">+123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
