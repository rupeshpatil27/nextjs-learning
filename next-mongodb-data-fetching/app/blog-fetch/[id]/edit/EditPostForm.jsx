"use client";

import Link from "next/link";
import { useActionState } from "react";
import EditButton from "@/app/components/EditButton";
import { updatePost } from "../../actions";

export default function EditPostForm({ post }) {
  const updatePostWithId = updatePost.bind(null,post._id);

  const [state, formAction] = useActionState(updatePostWithId, null);

  return (
    <form
      action={formAction}
      className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={post.title}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows="4"
          defaultValue={post.content}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author Name
        </label>
        <input
          type="text"
          id="author"
          name="author"
          defaultValue={post.author}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

      <EditButton />

      <Link
        href="/blog-fetch"
        className="block text-center mt-4 text-blue-600 hover:underline"
      >
        Cancel and return to blog
      </Link>
    </form>
  );
}
