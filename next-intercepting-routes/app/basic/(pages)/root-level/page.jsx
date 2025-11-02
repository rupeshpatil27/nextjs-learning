import Link from 'next/link';

export default function RootLevelPage() {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Starting Point: `/root-level`</h2>
      <p className="mb-4">Convention used: <code className="font-mono">(...)target-root</code></p>
      <Link 
        href="/target-root" 
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Intercept Target Root (root ...)
      </Link>
    </div>
  );
}