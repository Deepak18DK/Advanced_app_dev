// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ role }) => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">Corpify</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Common links for all users */}
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/contact-us" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
              {/* For Admin link */}
              <Link to="/admin" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">For Admin</Link>
              {/* Spacer */}
              <div className="flex items-center ml-4">
                <span className="text-gray-300 mr-2">|</span>
                {/* Authentication links */}
                <Link to="/login" className="text-white hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium bg-indigo-600">Login</Link>
                <span className="mx-2"></span> {/* Spacer */}
                <Link to="/signup" className="text-white hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium bg-indigo-600">Signup</Link>
              </div>
              {/* Admin-specific section */}
              {role === 'admin' && (
                <div className="ml-4 flex items-center md:ml-6">
                  <span className="text-gray-300">For Admins:</span>
                  <Link to="/admin/events" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Events</Link>
                  <Link to="/admin/users" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Users</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
