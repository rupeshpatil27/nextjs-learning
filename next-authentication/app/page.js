"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await fetch("/api/posts");
    const postsData = await response.json();

    if (response.ok) {
      setPosts(postsData);
    } else {
      router.push("/auth");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Header />
      <h1 className="text-3xl font-bold mt-8 mb-4">Latest Blog Posts</h1>

      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="p-6 border rounded-lg shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                <Link href={`/posts/${post._id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
              <p className="text-sm text-gray-400 mt-2">
                By {post.author} on{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No blog posts found. Be the first to create one!
          </p>
        )}
      </div>
    </div>
  );
}
