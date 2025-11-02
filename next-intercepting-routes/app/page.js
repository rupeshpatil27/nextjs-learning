// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="space-y-10 p-10 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
          Next.js Intercepting Routes Demos
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <Link
            href="/basic"
            className="flex-1 text-center py-4 text-lg font-bold text-white rounded-xl transition duration-300 ease-in-out 
                       bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transform hover:scale-[1.02]
                       focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
          >
            Go to Basic Example
          </Link>

          <Link
            href="/advanced"
            className="flex-1 text-center py-4 text-lg font-bold text-white rounded-xl transition duration-300 ease-in-out 
                       bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transform hover:scale-[1.02]
                       focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Go to Advanced Example
          </Link>
        </div>
      </div>
    </div>
  );
}
