'use client';

import { useState, useEffect } from 'react';

export default function ClientPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/posts'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading posts...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Posts (Client-Fetched)</h1>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
              <p className="text-gray-600 mt-1">{post.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No posts found.</p>
        )}
      </div>
    </div>
  );
}
