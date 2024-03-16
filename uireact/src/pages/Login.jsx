import React from 'react';

const Login = () => {
  return (
    <div className="container mx-auto mt-8 p-32">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="border-gray-300 border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="border-gray-300 border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
      </form>
      <p className="mt-4">New user? <a href="#" className="text-blue-500">Signup</a></p>
    </div>
  );
};

export default Login;
