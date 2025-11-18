"use client";

import { useState } from 'react';

export default function InteractiveWrapper({ children }) { // Accepts children prop
  const [clicks, setClicks] = useState(0);

  return (
    <div className="p-6 border border-blue-500 dark:border-blue-400 rounded-lg bg-white dark:bg-gray-800 shadow-md">
      <h3 className="text-xl font-bold mb-3">Client Component Area (InteractiveWrapper)</h3>
      
      <button
        onClick={() => setClicks(clicks + 1)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Client Counter: {clicks}
      </button>

      {/* The static Server Component content is rendered right here */}
      <div className="mt-4 pt-4 border-t dark:border-gray-700">
        {children} 
      </div>
    </div>
  );
}
