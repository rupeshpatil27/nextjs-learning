import Link from 'next/link';

export default function TwoUpLevelTwoPage() {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Starting Point: `/two-up/level-two`</h2>
      <p className="mb-4">Convention used: <code className="font-mono">(..)(..)target-page</code></p>
      <Link 
        href="/target-page" 
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Target Page (Intercepted)
      </Link>
    </div>
  );
}