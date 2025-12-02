import Link from "next/link";

async function getPosts() {
  // Fetch from internal API route
  const res = await fetch(`/api/posts`, {
    
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}
export default async function Home() {

const posts = await getPosts();
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
              href="/login"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 shadow-md"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-150"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>

    <div className="container mx-auto px-4">
      
      <h1 className="text-3xl font-bold mt-8 mb-4">Latest Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="p-6 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">
              <Link href={`/posts/${post._id}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
            <p className="text-sm text-gray-400 mt-2">
              By {post.authorEmail} on {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}
