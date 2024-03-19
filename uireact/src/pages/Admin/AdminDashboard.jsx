import React from 'react';
import Sparklines from 'react-sparklines';

export const AdminDashboard = () => {
    return (
        <div className="grid grid-cols-2 gap-14">
            {/* First Card */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <div className="px-6 py-8 text-center">
                    <div className="font-medium text-lg mb-2 text-gray-800 dark:text-gray-200">Total Number of Events</div>
                    <p className="text-blue-700 text-3xl font-extrabold">5</p>
                </div>
            </div>
            
            {/* Second Card */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <div className="px-6 py-8 text-center">
                    <div className="font-medium text-lg mb-2 text-gray-800 dark:text-gray-200">Total Number of Users</div>
                    <p className="text-orange-700 text-3xl font-extrabold">10</p>
                </div>
            </div>
            
            {/* Third Card */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <div className="px-8 py-8 text-center">
                    <div className="font-medium text-lg mb-2 text-gray-800 dark:text-gray-200">Number of Bookings made</div>
                    <p className="text-yellow-500 text-3xl font-extrabold">3</p>
                </div>
            </div>
            
            {/* Fourth Card */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <div className="px-6 py-8 text-center">
                    <div className="font-medium text-lg mb-2 text-gray-800 dark:text-gray-200">Number of Payments made</div>
                    <p className="text-green-700 text-3xl font-extrabold">3</p>
                </div>
            </div>
        </div>
    );
}
