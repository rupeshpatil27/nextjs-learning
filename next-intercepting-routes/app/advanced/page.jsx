import Link from 'next/link';

const photos = [101, 102, 103, 104, 105, 106];

export default function FeedPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {photos.map((id) => (
        <Link
          key={id}
          href={`/advanced/photo/${id}`} 
          className="block p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition duration-300"
        >
          <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
          <h2 className="text-lg font-semibold text-gray-800">Photo #{id}</h2>
          <p className="text-sm text-indigo-500">Click for Modal</p>
        </Link>
      ))}
    </div>
  );
}