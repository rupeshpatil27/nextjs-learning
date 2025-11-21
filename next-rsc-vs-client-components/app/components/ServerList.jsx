// This is a Server Component by default

async function fetchItems() {
  // Simulate an async server-side data fetch
  await new Promise(resolve => setTimeout(resolve, 2000)); 
  return [
    { id: 1, name: 'Fetched Item 1 (RSC)', likes: 50 },
    { id: 2, name: 'Fetched Item 2 (RSC)', likes: 120 },
  ];
}

export default async function ServerList({ items }) {
  const fetchedItems = await fetchItems();

  return (
    <div className="border-2 border-blue-500 bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-800">
        🔵 Server Component: Data List (RSC)
      </h2>
      <ul className="space-y-2">
        {fetchedItems.map((item) => (
          <li key={item.id} className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
            <span className="text-gray-700">{item.name}</span>
            <span className="text-sm font-medium text-blue-600">{item.likes} likes</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-blue-700">
        This list was fetched and rendered entirely on the server for performance.
      </p>
    </div>
  );
}
