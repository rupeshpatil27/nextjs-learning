"use client";

import { useOptimistic } from "react";
import { deletePost } from "./actions";
import PostCard from "./PostCard";
import Link from "next/link";
import { SearchForm } from "../components/Search";
import { useSearchParams } from "next/navigation";

export default function BlogFetchPage({ initialPosts }) {
  const [optimisticPost, setOptimisticPost] = useOptimistic(
    initialPosts,
    (currentPosts, postId) => {
      return currentPosts.filter((post) => post._id !== postId);
    }
  );

  const removePostById = async (postId) => {
    setOptimisticPost(postId);
    await deletePost(postId);
  };

   const searchParams = useSearchParams();
  const currentQuery = searchParams.get('q') || '';

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Blog Posts ({currentQuery ? `Searching for: "${currentQuery}"` : 'All Posts'})
        </h1>
        <Link
          href="/blog-fetch/create"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow"
        >
          + New Post
        </Link>
      </div>

      <div className="mb-6">
        <SearchForm />
      </div>

      <div className="space-y-4">
        {optimisticPost.map((post) => (
          <PostCard key={post._id} post={post} onDelete={removePostById} />
        ))}
      </div>
    </div>
  );
}
