'use client'; 

import { useState } from 'react';

export default function ClientCounter({ initialLikes, itemName }) {
  const [likes, setLikes] = useState(initialLikes);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="border-2 border-red-500 bg-red-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-red-800">
        🔴 Client Component: Interactive Counter
      </h2>
      <p className="mb-4 text-gray-700">
        The &quot;{itemName}&quot; counter has **{likes}** likes.
      </p>
      <button 
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow transition duration-150 ease-in-out"
      >
        Click Me to Like (Client-side interactivity)
      </button>
      <p className="mt-4 text-sm text-red-700">
        This component requires client-side JavaScript to manage the state and handle the click event.
      </p>
    </div>
  );
}
