import { fetchData } from '../lib/data';
import Link from 'next/link';

export default async function StaticPage() {
  const data = await fetchData('Static Page', 1000);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 border-t-8 border-green-500">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Static Rendering Example</h1>
        <p className="text-gray-600 mb-6">
          This page was rendered once at **build time**. The content below is cached.
        </p>
        
        <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
          <p className="text-sm font-semibold">Timestamp from fetch:</p>
          <p className="font-mono text-green-800 break-all">{data.timestamp}</p>
          <p className="text-sm font-semibold mt-2">Random number (will be the same on refresh):</p>
          <p className="font-mono text-green-800">{data.randomNumber}</p>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          In production (`npm start`), refreshing this page will serve the exact same cached HTML.
        </p>

        <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150 flex items-center">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
