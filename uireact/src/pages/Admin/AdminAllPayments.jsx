import React from 'react';

export const AdminAllPayments = () => {
  return (
    <div className="mt-4">
      <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 divide-y divide-gray-200">
          <thead className="text-sm text-gray-700 uppercase dark:bg-blue-900 dark:text-white" style={{backgroundColor:"#1F2937"}}>
            <tr>
              <th scope="col" className="px-6 py-3">
                Payment ID
              </th>
              <th scope="col" className="px-6 py-3">
                Organizer ID
              </th>
              <th scope="col" className="px-6 py-3">
                Organizer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Amount Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Date
              </th>
              <th scope="col" className="px-6 py-3">
                Mode of Payment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="odd:bg-gray-50 even:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                2
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Janani
              </td>
              <td className="px-6 py-4 whitespace-nowrap  font-medium">
                Paid
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                $2999
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                10/02/2024
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Credit
              </td>
            </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       2
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       3
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Deeksha
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Paid
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       $199
                    </td>
                    <td className="px-6 py-4">
                        19/02/2024
                    </td>
                    <td className="px-6 py-4">
                        Online Banking
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       3
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       5
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Deepak
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Paid
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       $499
                    </td>
                    <td className="px-6 py-4">
                        22/03/2024
                    </td>
                    <td className="px-6 py-4">
                        Cash
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       4
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       7
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Pavi
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Paid
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       $299
                    </td>
                    <td className="px-6 py-4">
                        02/02/2024
                    </td>
                    <td className="px-6 py-4">
                        Credit
                    </td>
                </tr>
                </tbody>
        </table>
    </div>
    </div>
    
  )
}
