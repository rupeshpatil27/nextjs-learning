'use client';
import { useRouter } from 'next/navigation';

export default function InterceptedSameLevel() {
  const router = useRouter();
  return (
    <div className="p-8 bg-blue-100 border-4 border-blue-500 rounded-lg">
      <h4 className="text-xl font-bold mb-2">Intercepted: Same Level (.)</h4>
      <p>This content replaced the main area. Navigated from /same-level.</p>
      <button onClick={() => router.back()} className="mt-4 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">
        Go Back
      </button>
    </div>
  );
}