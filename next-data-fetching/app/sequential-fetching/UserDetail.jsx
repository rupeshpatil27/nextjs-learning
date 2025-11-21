import { fetchUserData, fetchUserPosts } from "../utils/data";

export default async function UserDetail() {
  // --- Sequential fetches happen here ---
  const user = await fetchUserData();
  const posts = await fetchUserPosts(user.id);

  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">User Data:</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">User Posts:</h2>
        <ul className="mt-2">
          {posts.map(post => (
            <li key={post.id} className="list-disc ml-4 text-gray-600">{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
