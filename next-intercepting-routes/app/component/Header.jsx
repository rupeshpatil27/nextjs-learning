import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <nav className="flex space-x-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
        <Link href="/about/store" className="hover:text-gray-300">
          Store
        </Link>
      </nav>
      <Link
        href="/login"
        className="px-4 py-2 bg-blue-800 rounded-lg hover:bg-blue-700"
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
