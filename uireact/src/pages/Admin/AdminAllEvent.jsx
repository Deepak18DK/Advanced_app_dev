import React from 'react';

export const AdminAllEvent = () => {
  return (
    <div className="mt-5">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-black border border-gray-200">
          <thead className="text-xs text-white uppercase  dark:text-white" style={{backgroundColor:"#1F2937"}}>
            <tr>
              <th scope="col" className="px-6 py-3">
                Event ID
              </th>
              <th scope="col" className="px-6 py-3">
                Event Type
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Participant Count
              </th>
              <th scope="col" className="px-6 py-3">
                Event Mode
              </th>
              <th scope="col" className="px-6 py-3">
                Charges
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white-500 border-b border-blue-400">
              <th scope="row" className="px-6 py-4 font-medium text-black">
                1
              </th>
              <td className="px-6 py-4 font-medium text-black">
                Conference
              </td>
              <td className="px-6 py-4">
                An insightful Conference on AI and future technologies
              </td>
              <td className="px-6 py-4">
                100
              </td>
              <td className="px-6 py-4">
                Offline
              </td>
              <td className="px-6 py-4">
                $1999
              </td>
              <td className="px-6 py-4 flex gap-2">
                <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
              </td>
            </tr>
                <tr class="bg-white-500 border-b border-blue-400">
                    <th scope="row" class="px-6 py-4 font-medium text-black">
                        2
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-black">
                        Product Launch
                    </th>
                    <td class="px-6 py-4">
                        A thrilling event to launch Zoho's new product
                    </td>
                    <td class="px-6 py-4">
                        500
                    </td>
                    <td class="px-6 py-4">
                        Offline
                    </td>
                    <td class="px-6 py-4">
                        $599
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                        <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                        <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                    </td>
                </tr>
                <tr class="bg-white-500 border-b border-blue-400">
                    <th scope="row" class="px-6 py-4 font-medium text-black">
                        3
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-black">
                        Shareholders Meeting
                    </th>
                    <td class="px-6 py-4">
                        An inspiring meeting to discuss the future of Meta
                    </td>
                    <td class="px-6 py-4">
                        50
                    </td>
                    <td class="px-6 py-4">
                        Hybrid
                    </td>
                    <td class="px-6 py-4">
                        $199
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                        <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                        <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                    </td>
                </tr>
                <tr class="bg-white-500 border-b border-blue-400">
                    <th scope="row" class="px-6 py-4 font-medium text-black">
                        4
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-black">
                        Company Milestones
                    </th>
                    <td class="px-6 py-4">
                        An exciting event to celebrate company's Milestones
                    </td>
                    <td class="px-6 py-4">
                        700
                    </td>
                    <td class="px-6 py-4">
                       Hybrid
                    </td>
                    <td class="px-6 py-4">
                       $399
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                        <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                        <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                    </td>
                </tr>
                <tr class="bg-white-500 border-b border-blue-400">
                    <th scope="row" class="px-6 py-4 font-medium text-black">
                       5
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium text-black">
                       Trade shows
                    </th>
                    <td class="px-6 py-4">
                        An event to connect companies with potential customers
                    </td>
                    <td class="px-6 py-4">
                        1000
                    </td>
                    <td class="px-6 py-4">
                        Offline
                    </td>
                    <td class="px-6 py-4">
                        $999
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                        <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                        <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
        </div>
  )
}
