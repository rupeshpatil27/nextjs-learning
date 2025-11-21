'use client';

import { useEffect } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 p-8">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl border border-red-300">
        <BiErrorCircle className="h-12 w-12 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
