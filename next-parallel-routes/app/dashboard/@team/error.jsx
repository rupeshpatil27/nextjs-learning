"use client";

export default function TeamErrorPage({ error, reset }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Oops! Something went wrong.</h2>
        <p className="text-lg text-gray-700 mb-4">
          We encountered an error while loading the page. Please try again later.
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            <p>Error: {error.message}</p>
          </div>
        )}
        
        <button
          onClick={reset}
          className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
