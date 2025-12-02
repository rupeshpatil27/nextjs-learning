"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">Blog</Link>
      </div>

      <nav className="flex items-center space-x-4">
        <span className="text-gray-700">Welcome, abc!</span>

        <Link href="/create-post">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition duration-150">
            Create Post
          </button>
        </Link>

        <Link href="/register">
          <button className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4">
            Sign Up
          </button>
        </Link>
      </nav>
    </header>
  );
}
