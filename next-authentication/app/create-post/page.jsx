import PostForm from './PostForm';

export default async function CreatePostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <PostForm />
    </div>
  );
}
