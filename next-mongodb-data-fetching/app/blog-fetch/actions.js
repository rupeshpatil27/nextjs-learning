'use server';

import connectDB from '@/lib/connectDB';
import Post from '@/models/postModal';
import { revalidatePath } from 'next/cache'; // Utility to clear Next.js cache

export async function createPost(formData) {
  const title = formData.get('title');
  const content = formData.get('content');
  const author = formData.get('author');

  if (!title || !content || !author) {
    return { 
      success: false, 
      error: 'Missing required fields: Title, Content, and Author are all needed.' 
    };
  }

  try {
    await connectDB();
    await Post.create({ title, content, author });
    
    // Revalidate the blog-fetch path so the list of posts updates immediately
    revalidatePath('/blog-fetch'); 
    
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to create post' };
  }
}
