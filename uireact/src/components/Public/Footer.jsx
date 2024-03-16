import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div>
        <span>&copy; 2024 Event Management. All rights reserved.</span>
      </div>
      <div className="mt-2">
        <a href="#" className="mr-4 hover:text-gray-300">Terms of Conditions</a>
        <a href="#" className="mr-4 hover:text-gray-300">Privacy Policy</a>
        <a href="#" className="hover:text-gray-300">Social Media</a>
      </div>
    </footer>
  );
};

export default Footer;
