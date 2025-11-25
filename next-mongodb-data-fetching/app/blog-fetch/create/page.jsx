import { createPost } from '../actions';
import Link from 'next/link';

export default function CreatePostPage() {

  // The 'action' attribute of the form automatically calls the server action
  return (
    <div className="container mx-auto p-4 max-w-lg">
      <Link href="/blog-fetch" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Blog Posts
      </Link>
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      
      <form action={createPost} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea id="content" name="content" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
        </div>
        
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author Name</label>
          <input type="text" id="author" name="author" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Publish Post
        </button>
      </form>
    </div>
  );
}
