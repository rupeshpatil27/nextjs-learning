import { FaSpinner } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl">
        <FaSpinner className="animate-spin h-10 w-10 text-blue-500 mb-4" />
        <p className="text-lg font-semibold text-gray-700">Loading Server Data...</p>
      </div>
    </div>
  );
}
