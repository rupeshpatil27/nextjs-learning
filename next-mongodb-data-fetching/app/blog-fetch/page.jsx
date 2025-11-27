import Post from "@/models/postModal";
import connectDB from "@/lib/connectDB";
import BlogFetchPage from "./BlogFetchPage";

async function getPosts(query = "") {
  await connectDB();

  let filter = {};
  if (query) {
    filter = {
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
      ],
    };
  }

  const posts = await Post.find(filter).sort({ createdAt: -1 }).lean();
  // Use .lean() for faster queries when you don't need Mongoose documents

  // MongoDB ObjectId is not directly serializable to JSON, so convert _id to a string
  const serializedPosts = posts.map((post) => ({
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));

  return serializedPosts;
}

export default async function BlogWrapperPage({ searchParams }) {

  const {q} = await searchParams;

  const posts = await getPosts(q);

 return <BlogFetchPage initialPosts={posts} />;
}
