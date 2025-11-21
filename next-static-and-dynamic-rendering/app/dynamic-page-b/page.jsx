import { fetchData } from '../lib/data';
import Link from 'next/link';

// Force the page to be dynamic
export const dynamic = 'force-dynamic';

export default async function DynamicPageB() {
  const data = await fetchData('Dynamic Page B', 1000);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 border-t-8 border-orange-500">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dynamic Rendering Example (Method B)</h1>
        <p className="text-gray-600 mb-6">
          This page was forced to render dynamically using <code className="bg-gray-100 p-1 rounded">export const dynamic = &apos;force-dynamic&apos;</code>.
        </p>
        
        <div className="bg-orange-50 p-4 rounded-lg mb-6 border border-orange-200">
          <p className="text-sm font-semibold">Timestamp from fetch:</p>
          <p className="font-mono text-orange-800 break-all">{data.timestamp}</p>
          <p className="text-sm font-semibold mt-2">Random number (changes on every refresh):</p>
          <p className="font-mono text-orange-800">{data.randomNumber}</p>
        </div>

        <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150 flex items-center">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
