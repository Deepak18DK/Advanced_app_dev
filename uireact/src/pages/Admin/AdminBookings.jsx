import React from 'react';

export const AdminBookings = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">Bookings List</h2>
      <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 divide-y divide-gray-200">
          <thead className="text-xs text-white uppercase dark:text-white" style={{backgroundColor:"#1F2937"}}>
            <tr>
              <th scope="col" className="px-2 py-3">
                Booking ID
              </th>
              <th scope="col" className="px-2 py-3">
                Organizer ID
              </th>
              <th scope="col" className="px-5 py-3">
                Name
              </th>
              <th scope="col" className="px-5 py-3">
                Submission Date
              </th>
              <th scope="col" className="px-8 py-3">
                Event Date
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Booking Status
              </th>
              <th scope="col" className="px-6 py-3">
                Event Mode
              </th>
              <th scope="col" className="px-4 py-3">
                Head Count
              </th>
              <th scope="col" className="px-4 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="odd:bg-gray-50 even:bg-gray-100">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">Janani</td>
              <td className="px-6 py-4">2024-03-22</td>
              <td className="px-6 py-4">2024-04-15</td>
              <td className="px-6 py-4">A thrilling event to launch Zoho's new product</td>
              <td className="px-6 py-4">
                <select className="block bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-600 focus:border-primary-600 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                </select>
              </td>
              <td className="px-6 py-4">Offline</td>
              <td className="px-6 py-4">80</td>
              <td className="px-6 py-4">$599.00</td>
            </tr>
                  {/* Add more rows with similar structure */}
                  <tr className="bg-white-500 border-b border-blue-400">
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">Deeksha</td>
                      <td className="px-6 py-4">2024-04-12</td>
                      <td className="px-6 py-4">2024-06-30</td>
                      <td className="px-6 py-4">An insightful Conference on AI and future technologies</td>
                      <td className="px-6 py-4">
                          <select className="block border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                          </select>
                      </td>
                      <td className="px-6 py-4">Offline</td>
                      <td className="px-6 py-4">40</td>
                      <td className="px-6 py-4">$1999.00</td>
                  </tr>
                  <tr className="bg-white-500 border-b border-blue-400">
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">5</td>
                      <td className="px-6 py-4">Deepak</td>
                      <td className="px-6 py-4">2024-05-17</td>
                      <td className="px-6 py-4">2024-08-25</td>
                      <td className="px-6 py-4">An inspiring meeting to discuss the future of Meta</td>
                      <td className="px-6 py-4">
                          <select className="block border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option value="pending">Confirmed</option>
                              <option value="confirmed">Pending</option>
                          </select>
                      </td>
                      <td className="px-6 py-4">Hybrid</td>
                      <td className="px-6 py-4">30</td>
                      <td className="px-6 py-4">$199.00</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
  )
}
