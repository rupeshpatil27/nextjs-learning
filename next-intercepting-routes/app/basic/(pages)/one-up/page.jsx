import Link from 'next/link';

export default function OneUpPage() {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Starting Point: `/one-up`</h2>
      <p className="mb-4">Convention used: <code className="font-mono">(..)target-one-up</code></p>
      <Link 
        href="/basic/target-one-up" 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Intercept Target One Up (one up ..)
      </Link>
    </div>
  );
}