import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-10 bg-white shadow-2xl rounded-xl min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        🚀 Concepts Covered:
      </h2>

      <ul className="space-y-6 text-lg">
        {/* --- Concept 1: generateStaticParams & dynamicParams --- */}
        <li className="p-5 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg shadow-md">
          <Link
            href="/products"
            className="font-bold text-indigo-700 hover:text-indigo-800 text-2xl transition-colors block mb-2"
          >
            <span className="mr-2">⚙️</span> generateStaticParams &
            dynamicParams
          </Link>

          <p className="text-base text-gray-600 pl-6">
            This example demonstrates how Next.js can pre-render dynamic routes
            at build time using the `generateStaticParams` function.
          </p>
          <Link
            href="/products"
            className="inline-block mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition duration-300 text-sm"
          >
            View Statically Generated Products
          </Link>

          <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg">
            <p className="font-bold">Key takeaway:</p>
            <p>
              We are using{" "}
              <code className="bg-yellow-200 p-1 rounded">
                export const dynamicParams = false;
              </code>{" "}
              in the product page to ensure only specific products (1, 2, 3) are
              valid.
            </p>
          </div>
        </li>

        {/* --- Concept 2: Streaming with Suspense --- */}
        <li className="p-5 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-md">
          <Link
            href="/slow-data"
            className="font-bold text-green-700 hover:text-green-800 text-2xl transition-colors block mb-2"
          >
            <span className="mr-2">⚡️</span> Streaming with Explicit
            &lt;Suspense&gt;
          </Link>
          <p className="text-base text-gray-600 pl-6">
            Demonstrates using the **
            <code className="bg-green-200 p-1 rounded">Suspense</code>**
            boundary to instantly show a fallback UI while a slow Server
            Component streams in its data asynchronously.
          </p>
          <Link
            href="/slow-data"
            className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300 text-sm"
          >
            View Streaming Demo
          </Link>
        </li>
      </ul>

      <div className="mt-12 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          *Note: The Streaming example uses the explicit React &lt;Suspense&gt;
          component for fine-grained control.
        </p>
      </div>
    </main>
  );
}
