"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function error({ error, reset }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-lg shadow-md space-y-4">
      <p className="text-lg font-semibold text-gray-800">
        Show Error in the Order Page and its Nested Routes
      </p>
      <p className="text-sm text-gray-600">{error.message}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
        onClick={() => reload()}
      >
        Try Again
      </button>
    </div>
  );
}
