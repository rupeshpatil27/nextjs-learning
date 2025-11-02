import Link from 'next/link';

export default function TwoUpLevelTwoPage() {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Starting Point: `/two-up/level-two`</h2>
      <p className="mb-4">Convention used: <code className="font-mono">(..)(..)target-two-up</code></p>
      <Link 
        href="/basic/target-two-up" 
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Intercept Target Two Up (two up .. ..)
      </Link>
    </div>
  );
}