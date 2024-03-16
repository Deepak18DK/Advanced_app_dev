import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold">
        <span>Event Management</span>
      </div>
      <div className="text-white">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          
          
          <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
          <li><Link to="/signup" className="hover:text-gray-300">Signup</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
