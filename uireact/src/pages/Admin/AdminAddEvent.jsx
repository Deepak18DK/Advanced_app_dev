import React from 'react';

export const AdminAddEvent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add Event</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event Type</label>
            <input
              type="text"
              id="eventType"
              name="eventType"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter event type"
              autoFocus
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter event description"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="participantCount" className="block text-sm font-medium text-gray-700">Participant Count</label>
            <input
              type="number"
              id="participantCount"
              name="participantCount"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter participant count"
              required
            />
          </div>
          <div>
            <label htmlFor="eventMode" className="block text-sm font-medium text-gray-700">Event Mode</label>
            <select
              id="eventMode"
              name="eventMode"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select Event Mode</option>
              <option value="offline">Offline</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label htmlFor="charges" className="block text-sm font-medium text-gray-700">Charges</label>
            <input
              type="number"
              id="charges"
              name="charges"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter event charges"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
