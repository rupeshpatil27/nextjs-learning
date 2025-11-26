"use server";

import connectDB from "@/lib/connectDB";
import Post from "@/models/postModal";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const author = formData.get("author");

  if (!title || !content || !author) {
    return {
      success: false,
      error:
        "Missing required fields: Title, Content, and Author are all needed.",
    };
  }

  let newPost;

  try {
    await connectDB();
    newPost = await Post.create({ title, content, author });
  } catch (error) {
    console.error("Database Error:", error);
    return { error: "Failed to create post due to database error." };
  }

  if (newPost) {
    revalidatePath("/blog-fetch");
    redirect("/blog-fetch");
  }

  return { error: "An unexpected error occurred." };
}

export async function updatePost(id, prevState, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const author = formData.get("author");

  if (!title || !content || !author) {
    return { success: false, error: "Missing required fields." };
  }

  let updatedPost;

  try {
    await connectDB();
    updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );

    if (!updatedPost) {
      throw new Error("Post not found for update.");
    }
  } catch (error) {
    console.error("Database Error updating post:", error);
    return { success: false, error: "Failed to update post." };
  }

  if (updatedPost) {
    revalidatePath("/blog-fetch");
    revalidatePath(`/blog-fetch/${id}`);

    redirect("/blog-fetch");
  }

  return {
    success: false,
    error: "An unexpected error occurred after database operation.",
  };
}

export async function deletePost(postId) {
  try {
    await connectDB();
    await Post.findByIdAndDelete(postId);
    revalidatePath("/blog-fetch");
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete post" };
  }
}
