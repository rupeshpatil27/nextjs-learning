import { Suspense } from 'react';
import PostList from './PostList';
import AlbumList from './AlbumList';
import { fetchUserData } from '../utils/data';

export default async function ParallelFetchingPage() {
  const user = await fetchUserData();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Parallel Data Fetching</h1>
      <p className="mb-4">
        This page fetches posts and albums in parallel using `Suspense` boundaries. The user data loads first, followed by the others as they become available.
      </p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold">User Data (Loaded instantly):</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Posts will show a fallback while loading (1.5s delay) */}
        <Suspense fallback={<div className="p-4 bg-blue-50 border border-blue-500 rounded-lg">Loading posts...</div>}>
          <PostList userId={user.id} />
        </Suspense>

        {/* Albums will show a fallback while loading (1.2s delay) */}
        <Suspense fallback={<div className="p-4 bg-green-50 border border-green-500 rounded-lg">Loading albums...</div>}>
          <AlbumList userId={user.id} />
        </Suspense>
      </div>
    </div>
  );
}
