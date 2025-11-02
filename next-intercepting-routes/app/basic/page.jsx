import Link from "next/link";

export default function BasicPage() {
  return (
    <div className="p-8 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Intercepting Routes Demo</h1>
      <p className="mb-6">
        Select a scenario below to test the different interception conventions.
        Click the link on the next page, then refresh the browser to see the
        difference.
      </p>

      <div className="space-y-4">
        <Link
          href="/basic/same-level"
          className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150"
        >
          Go to Same Level (.) Demo
        </Link>
        <Link
          href="/basic/one-up"
          className="block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150"
        >
          Go to One Level Up (..) Demo
        </Link>
        <Link
          href="/basic/two-up/level-two"
          className="block bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-150"
        >
          Go to Two Levels Up (..)(..) Demo
        </Link>
        <Link
          href="/basic/root-level"
          className="block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-150"
        >
          Go to Root Level (...) Demo
        </Link>
        <hr className="my-4" />
        <p className="font-semibold">
          Test direct navigation (hard reload behavior):
        </p>
        <Link
          href="/basic/same-level/target-same"
          className="block text-red-600 hover:underline"
        >
          Go to Target Same Directly
        </Link>
        <Link
          href="/basic/target-one-up"
          className="block text-red-600 hover:underline"
        >
          Go to Target One Up Directly
        </Link>
        <Link
          href="/basic/target-two-up"
          className="block text-red-600 hover:underline"
        >
          Go to Target Two Up Directly
        </Link>
        <Link
          href="/target-root"
          className="block text-red-600 hover:underline"
        >
          Go to Target Root Directly
        </Link>
      </div>
    </div>
  );
}
