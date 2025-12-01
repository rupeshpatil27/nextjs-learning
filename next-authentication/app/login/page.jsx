'use client';

import Link from 'next/link';

export default function LoginPage() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Sign In</h1>
        <p className="text-gray-500 mb-6">Welcome back to your dashboard.</p>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              id="email" 
              type="email" 
              name="email" 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              id="password" 
              type="password" 
              name="password" 
              required 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 shadow-md">
             Sign In
          </button>
        </form>
        
        <p className="mt-6 text-sm text-center text-gray-500">
          New to the platform?{' '}
          <Link href="/register" className="text-blue-600 hover:underline font-medium">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
