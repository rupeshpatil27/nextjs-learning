'use client';
import { useRouter } from 'next/navigation';

export default function InterceptedOneUp() {
  const router = useRouter();
  return (
    <div className="p-8 bg-green-100 border-4 border-green-500 rounded-lg">
      <h4 className="text-xl font-bold mb-2">Intercepted: One Level Up (..)</h4>
      <p>This content replaced the main area. Navigated from /one-up.</p>
      <button onClick={() => router.back()} className="mt-4 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700">
        Go Back
      </button>
    </div>
  );
}