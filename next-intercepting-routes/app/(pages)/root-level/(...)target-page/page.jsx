'use client';
import { useRouter } from 'next/navigation';

export default function InterceptedRootLevel() {
  const router = useRouter();
  return (
    <div className="p-8 bg-purple-100 border-4 border-purple-500 rounded-lg">
      <h4 className="text-xl font-bold mb-2">Intercepted: Root Level (...)</h4>
      <p>This content replaced the main area. Navigated from /root-level.</p>
      <button onClick={() => router.back()} className="mt-4 bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700">
        Go Back
      </button>
    </div>
  );
}