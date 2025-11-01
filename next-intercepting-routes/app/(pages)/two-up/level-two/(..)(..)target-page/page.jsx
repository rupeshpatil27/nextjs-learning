"use client";

import { useRouter } from "next/navigation";

export default function InterceptedTwoUp() {
  const router = useRouter();
  return (
    <div className="p-8 bg-yellow-100 border-4 border-yellow-500 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-2">
        Intercepted: Two Levels Up (..)(..)
      </h4>
      <p>
        This content replaced the main area. Navigated from /two-up/level-two.
      </p>
      <button
        onClick={() => router.back()}
        className="mt-4 bg-yellow-600 text-white py-1 px-3 rounded hover:bg-yellow-700"
      >
        Go Back
      </button>
    </div>
  );
}
