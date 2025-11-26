"use client"

import SubmitButton from '@/app/components/SubmitButton';
import { createPost } from '../actions';
import Link from 'next/link';
import { useActionState } from 'react';

export default function CreatePostPage() {

  const [state, formAction] = useActionState(createPost, null);

  // The 'action' attribute of the form automatically calls the server action
  return (
    <div className="container mx-auto p-4 max-w-lg">
      <Link href="/blog-fetch" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Blog Posts
      </Link>
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      
      <form action={formAction} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea id="content" name="content" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
        </div>
        
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author Name</label>
          <input type="text" id="author" name="author" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>

        {/* Display error messages from the action state */}
        {state?.error && (
          <p className="text-red-500 text-sm">{state.error}</p>
        )}
        
       {/*Render the submit button inside the form to access useFormStatus */}
        <SubmitButton />
      </form>
    </div>
  );
}
