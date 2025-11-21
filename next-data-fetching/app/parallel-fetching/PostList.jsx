import { fetchUserPosts } from "../utils/data";


export default async function PostList({ userId }) {
  const posts = await fetchUserPosts(userId);

  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold">User Posts:</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="list-disc ml-4">{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
