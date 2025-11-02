import Link from "next/link";

export default async function PhotoDetailPage(props) {
  const { id } = await props.params;
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-red-500 min-h-[70vh]">
      <h2 className="text-4xl font-extrabold mb-4 text-red-800">
        🛑 Dedicated Full Page View (Photo ID: {id})
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        This view loads because the page was **refreshed** or accessed directly.
        No interception occurred.
      </p>
      <div className="w-full h-96 bg-red-100 flex items-center justify-center rounded-lg text-3xl mb-6 text-red-600">
        Full-Screen Image View: ID {id}
      </div>
      <Link
        href="/advanced"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
      >
        ← Back to Feed
      </Link>
    </div>
  );
}
