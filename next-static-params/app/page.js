import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-4">`generateStaticParams` & `dynamicParams` Demo</h1>
      <p className="mb-6">
        This example demonstrates how Next.js can pre-render dynamic routes at build time using the `generateStaticParams` function.
      </p>
      
      <Link href="/products" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        View Statically Generated Products
      </Link>

      <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg">
          <p className="font-bold">Key takeaway:</p>
          <p>
            We are using <code className="bg-yellow-200 p-1 rounded">export const dynamicParams = false;</code> in the product page to ensure only specific products (1, 2, 3) are valid.
          </p>
      </div>
    </div>
  );
}
