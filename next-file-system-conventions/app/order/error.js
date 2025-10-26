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
    <div>
      <p>{error.message}</p>
      <button
        className="bg-gray-500 text-white px-2 py-1 rounded-md"
        onClick={() => reload()}
      >
        Try Again
      </button>
    </div>
  );
}
