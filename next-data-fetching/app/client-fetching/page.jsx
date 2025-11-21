'use client'; 

import { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';

export default function ClientFetchingPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Simulate a delay and API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
          throw new Error('Failed to fetch client-side data');
        }
        const data = await res.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl">
          <FaSpinner className="animate-spin h-10 w-10 text-blue-500 mb-4" />
          <p className="text-lg font-semibold text-gray-700">Loading Client Data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50 p-8">
        <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl border border-red-300">
          <BiErrorCircle className="h-12 w-12 text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Error: {error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Client-Side Fetched Posts</h1>
      <p className="mb-6 text-gray-600">
        Data fetched in the browser using `useState` and `useEffect`.
      </p>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-green-600">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
