import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          Next.js Learning: Full Stack Data Management
        </h1>
        <p className="mb-6 text-gray-600">
          This section of the repository focuses on integrating a MongoDB database with a Next.js application using the App Router.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-blue-600">
          Concepts Covered
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>
            <strong>MongoDB & Mongoose</strong>: Setting up database connections and defining schemas.
          </li>
          <li>
            <strong>Server Components</strong>: Fetching data directly within React Server Components using `async/await`.
          </li>
          <li>
            <strong>Environment Variables</strong>: Securely managing MongoDB connection strings using `.env`.
          </li>
          <li>
            <strong>Server Actions (CRUD)</strong>: Implementing Create, Update, and Delete operations on the server side.
          </li>
          <li>
            <strong><code>useFormStatus</code></strong>: Displaying pending states (loading spinners, disabled buttons) during form submission.
          </li>
          <li>
            <strong><code>useActionState</code></strong>: Handling form validation feedback and success/error messages within client components.
          </li>
           <li>
            <strong><code>useOptimistic</code></strong>: Implementing optimistic UI updates to instantly reflect data changes (like deletion) before the server response returns, improving perceived performance.
          </li>
           <li>
            <strong>`Form` Component (`next/form`)</strong>: Leveraging the enhanced Next.js component for automatic performance benefits, especially for search functionality using `searchParams` and for server-side redirects.
          </li>
          <li>
            <strong><code>revalidatePath</code> &amp; <code>redirect</code></strong>: Managing cache invalidation and navigation after data mutations.
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
