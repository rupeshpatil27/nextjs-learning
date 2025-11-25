import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          Next.js Learning: Data Fetching from MongoDB
        </h1>
        <p className="mb-6 text-gray-600">
          This section of the repository focuses on integrating a MongoDB database with a Next.js application using the App Router.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-blue-600">
          Concepts Covered
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>
            **MongoDB & Mongoose**: Setting up database connections and defining schemas.
          </li>
          <li>
            **Server Components**: Fetching data directly within React Server Components using `async/await`.
          </li>
          <li>
            **Environment Variables**: Securely managing MongoDB connection strings using `.env.local`.
          </li>
          <li>
            **Data Serialization**: Handling MongoDB's non-JSON serializable data types (like `ObjectId` and `Date`) for use in components.
          </li>
          <li>
            **Basic Styling**: Utilizing Tailwind CSS for a clean, responsive UI.
          </li>
        </ul>

        <Link 
          href="/blog-fetch" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          View Blog Example
        </Link>
      </div>
    </div>
  );
}
