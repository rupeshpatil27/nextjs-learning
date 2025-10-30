export default function TeamLoading() {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-16 w-16 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="none"
            strokeWidth="4"
            d="M4 12a8 8 0 0 1 8-8v16a8 8 0 0 1-8-8z"
          ></path>
        </svg>
        <p className="mt-4 text-xl text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
