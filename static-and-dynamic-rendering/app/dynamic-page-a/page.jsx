import { cookies } from 'next/headers';
import { fetchData } from '../lib/data';
import Link from 'next/link';

export default async function DynamicPageA() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'light';
  const data = await fetchData('Dynamic Page A', 1000);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 border-t-8 border-red-500">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dynamic Rendering Example (Method A)</h1>
        <p className="text-gray-600 mb-6">
          This page was rendered at **request time** because it uses `cookies()`.
        </p>
        
        <div className="bg-red-50 p-4 rounded-lg mb-6 border border-red-200">
          <p className="text-sm font-semibold">Current theme from cookie:</p>
          <p className="font-mono text-red-800 mb-2">{theme}</p>
          <p className="text-sm font-semibold">Timestamp from fetch:</p>
          <p className="font-mono text-red-800 break-all">{data.timestamp}</p>
          <p className="text-sm font-semibold mt-2">Random number (changes on every refresh):</p>
          <p className="font-mono text-red-800">{data.randomNumber}</p>
        </div>

        <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold transition duration-150 flex items-center">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
