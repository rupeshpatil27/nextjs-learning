'use client';

import { useState } from 'react';
import { displayBrowserFeatures } from '../utils/client-only';

export default function ClientInteractive() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const info = displayBrowserFeatures();
    setMessage(info);
    alert(info);
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
      >
        Run Client-Only Function
      </button>
      {message && (
        <pre className="mt-4 p-4 text-sm bg-gray-100 dark:bg-gray-900 rounded whitespace-pre-wrap">
          {message}
        </pre>
      )}
    </>
  );
}
