import Link from 'next/link';

export default function TargetPage() {
  return (
    <div className="p-8 bg-red-100 border-4 border-red-500 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Full Target Page (Accessed Directly)</h3>
      <p>This is the actual page content.</p>
      <Link href="/" className="text-blue-600 hover:underline mt-4 block">Go Home</Link>
    </div>
  );
}