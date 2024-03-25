import React from 'react';

const AdminSettings = () => {
  // Dummy admin data
  const adminData = {
    name: "Admin1",
    email: "admin@gmail.com",
    phoneNumber: "123-456-7890",
    password: "****",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-center text-3xl font-semibold text-gray-800 py-5 text-white" style={{backgroundColor:"#1F2937"}}>Admin Settings</h1>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Admin Details</h2>
          <div className="mb-4">
            <label className="block mb-2 text-gray-800">Name:</label>
            <input
              type="text"
              value={adminData.name}
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-800">Email:</label>
            <input
              type="text"
              value={adminData.email}
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-800">Phone:</label>
            <input
              type="text"
              value={adminData.phoneNumber}
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
            />
          </div>

          <h2 className="text-lg font-semibold mb-4 text-gray-800">Password Details</h2>
          <div className="mb-6">
            <label className="block mb-2 text-gray-800">Password:</label>
            <input
              type="password"
              value={adminData.password}
              readOnly
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button className=" hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded mr-2" style={{backgroundColor:"#1F2937"}}>Update Password</button>
            <button className=" hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded" style={{backgroundColor:"#1F2937"}}>Edit Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
