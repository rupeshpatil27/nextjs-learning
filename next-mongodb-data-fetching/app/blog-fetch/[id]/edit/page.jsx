import connectDB from "@/lib/connectDB";
import EditPostForm from "./EditPostForm";
import { notFound } from "next/navigation";
import Post from "@/models/postModal";

async function getPost(id) {
  await connectDB();
  const post = await Post.findById(id).lean();

  if (!post) {
    notFound();
  }

  return {
    ...post,
    _id: post._id.toString(),
  };
}

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const postData = await getPost(id);

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Edit Post: {postData.title}</h1>
      <EditPostForm post={postData} />
    </div>
  );
}
