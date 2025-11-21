import { getPosts } from "../utils/data";

export default async function ServerFetchingPage() {
  const posts = await getPosts();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Server-Side Fetched Posts</h1>
      <p className="mb-6 text-gray-600">
        Data fetched on the server using `async/await`. Loading and error states handled by `loading.jsx` and `error.jsx` files.
      </p>
      <div className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
