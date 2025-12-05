import Link from "next/link";

function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Welcome</h1>

        <div className="text-center">
          <p className="mb-6 text-gray-600">
            Explore modern authentication in Next.js.
          </p>
          <div className="space-y-3">
            <Link
              href="/auth/login"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 shadow-md"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="block w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-150"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
