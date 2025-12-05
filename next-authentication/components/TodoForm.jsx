'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TodoForm() {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task }),
    });

    if (response.ok) {
      setTask('');
      router.refresh(); // Tell Next.js to refresh page data
    } else {
      alert('Failed to add task or not authenticated.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
        className="flex grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="ml-4 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-50 transition duration-150 ease-in-out"
      >
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}
