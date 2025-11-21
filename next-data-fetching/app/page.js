import Link from 'next/link';

export default function Home() {
  const concepts = [
    { title: 'Data Fetching in Server Components', description: 'Using async/await and Next.js loading.jsx/error.jsx conventions.', href: '/server-fetching' },
    { title: 'Data Fetching in Client Components', description: 'Using useState and useEffect hooks.', href: '/client-fetching' },
    { title: 'Sequential Data Fetching', description: 'Fetching data where one request depends on the result of a previous one.', href: '/sequential-fetching' },
    { title: 'Parallel Data Fetching', description: 'Initiating independent requests concurrently using Promise.all and React Suspense boundaries.', href: '/parallel-fetching' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Next.js 16 Data Fetching Concepts</h1>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {concepts.map((concept) => (
          <Link key={concept.title} href={concept.href} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{concept.title}</h2>
              <p className="text-gray-600">{concept.description}</p>
              <span className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium">
                View Example →
              </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
