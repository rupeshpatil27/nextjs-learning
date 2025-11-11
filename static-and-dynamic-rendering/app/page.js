import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Next.js Rendering Examples</h1>
        <p className="text-xl text-gray-600">Exploring Static vs. Dynamic Rendering Concepts</p>
      </header>

      <main className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-5 text-gray-800 border-b pb-2">Concepts Covered</h2>
        
        <nav className="space-y-4">
          
          {/* Link to Static Page Example */}
          <Link href="/static-page" className="block p-4 bg-green-100 hover:bg-green-200 rounded-lg shadow-sm transition duration-150 ease-in-out border border-green-300">
            <span className="font-semibold text-green-800">Static Rendering (Default)</span>
            <p className="text-sm text-green-600 mt-1">Rendered once at build time.</p>
          </Link>

          {/* Link to Dynamic Page A Example (using cookies) */}
          <Link href="/dynamic-page-a" className="block p-4 bg-red-100 hover:bg-red-200 rounded-lg shadow-sm transition duration-150 ease-in-out border border-red-300">
            <span className="font-semibold text-red-800">Dynamic Rendering (Method A)</span>
            <p className="text-sm text-red-600 mt-1">Uses a dynamic function (`cookies()`).</p>
          </Link>

          {/* Link to Dynamic Page B Example (using export const dynamic) */}
          <Link href="/dynamic-page-b" className="block p-4 bg-orange-100 hover:bg-orange-200 rounded-lg shadow-sm transition duration-150 ease-in-out border border-orange-300">
            <span className="font-semibold text-orange-800">Dynamic Rendering (Method B)</span>
            <p className="text-sm text-orange-600 mt-1">Uses `export const dynamic = 'force-dynamic';`</p>
          </Link>

        </nav>
      </main>
    </div>
  );
}
