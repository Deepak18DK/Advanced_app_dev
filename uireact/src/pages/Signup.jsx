import React from 'react';

const Signup = () => {
  return (
    <div className="container mx-auto  p-16">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="border-gray-300 border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="border-gray-300 border p-2 w-full" />
        </div>
        <div className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700">Mobile Number</label>
          <input type="text" className="border-gray-300 border p-2 w-full" />
        </div>
          <label className="block text-gray-700">Create Password</label>
          <input type="password" className="border-gray-300 border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" className="border-gray-300 border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
