import { Suspense } from 'react';
import UserDetail from './UserDetail';

export default async function SequentialFetchingPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Sequential Data Fetching</h1>
      <p className="mb-6 text-gray-600">
        This page demonstrates sequential data fetching. The posts are fetched only after the user details are available.
      </p>
      {/* The Suspense boundary covers the entire sequential loading process */}
      <Suspense fallback={
        <div className="p-6 bg-yellow-100 border border-yellow-400 rounded-lg shadow-md animate-pulse">
          <p className="text-lg font-semibold text-yellow-800">
            Fetching user data sequentially...
          </p>
          <div className="mt-3 h-4 bg-yellow-300 rounded w-3/4"></div>
          <div className="mt-2 h-4 bg-yellow-300 rounded w-1/2"></div>
        </div>
      }>
        <UserDetail />
      </Suspense>
    </div>
  );
}
