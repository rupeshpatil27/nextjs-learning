import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to the Home Page
      </h1>
      <p className="mt-4 text-gray-700">This is the main content area.</p>

      <Link href="/dashboard">
          <span className="block text-lg hover:text-gray-300 transition duration-200 mt-5">Go To Dashboard</span>
        </Link>
    </div>
  );
}
