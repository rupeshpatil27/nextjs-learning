import Link from "next/link";

export default function basicLayout({ children }) {
  return (
    <div>
      <header className="p-4 bg-white shadow-md">
        <nav className="flex space-x-4">
          <Link href="/basic" className="text-blue-600 hover:underline">
            Home
          </Link>
        </nav>
      </header>
      <main className="p-8">{children}</main>
    </div>
  );
}
