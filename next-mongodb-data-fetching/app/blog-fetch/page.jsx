import Post from "@/models/postModal";
import PostCard from "./PostCard";
import connectDB from "@/lib/connectDB";

async function getPosts() {
  await connectDB();
  const posts = await Post.find({}).sort({ createdAt: -1 }).lean(); 
  // Use .lean() for faster queries when you don't need Mongoose documents
  
  // MongoDB ObjectId is not directly serializable to JSON, so convert _id to a string
  const serializedPosts = posts.map(post => ({
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));

  return serializedPosts;
}

export default async function BlogFetchPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog Posts (Fetched from MongoDB)</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
