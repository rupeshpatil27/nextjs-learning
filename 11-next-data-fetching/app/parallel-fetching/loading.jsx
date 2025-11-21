export default function Loading() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Parallel Data Fetching</h1>
      <p>Loading the main layout...</p>
      <div className="animate-pulse mt-4">
        <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="h-20 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
}
