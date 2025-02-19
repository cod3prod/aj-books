import React from 'react';

export default function BookSkeleton() {
  return (
    <div className="group bg-gray-100 rounded-xl shadow-lg transition-all duration-300 overflow-hidden animate-pulse">
      <div className="group relative h-72 bg-gray-200">
        <div className="absolute bottom-4 right-4 bg-gray-300 text-white px-3 py-1 rounded-full text-sm"></div>
      </div>

      <div className="p-6">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
        <div className="flex justify-between items-center">
          <div className="bg-gray-300 text-white px-5 py-2 rounded-full text-sm font-medium w-1/3"></div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-600 text-sm"></span>
          </div>
        </div>
      </div>
    </div>
  );
}