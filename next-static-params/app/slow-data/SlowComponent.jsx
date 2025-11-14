
async function fetchSlowData() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return { 
    title: "Data Streamed In!",
    content: "This content was delayed for 3 seconds but did not block the rest of the page from loading." 
  };
}

export default async function SlowComponent() {
  const result = await fetchSlowData();

  return (
    <div className="p-6 mt-4 bg-green-50 border-l-4 border-green-500 shadow-lg rounded-lg transition-opacity duration-500 ease-in opacity-100">
      <h3 className="text-xl font-semibold text-green-800 mb-2">
        ✅ {result.title}
      </h3>
      <p className="text-gray-700">
        {result.content}
      </p>
      <p className="mt-2 text-sm text-green-600 italic">
        This is a **Server Component** and took 3 seconds to resolve.
      </p>
    </div>
  );
}