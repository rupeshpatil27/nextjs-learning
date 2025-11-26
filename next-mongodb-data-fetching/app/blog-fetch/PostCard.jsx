import Link from "next/link";
import { deletePost } from "./actions";

const PostCard = ({ post }) => {

   const deletePostWithId = deletePost.bind(null, post._id);

  return (
    <div className="p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-blue-600">
          {post.title}
        </h2>

        <div className="flex space-x-3 ml-4">
          <Link
            href={`/blog-fetch/${post._id}/edit`}
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            Edit
          </Link>

          {/* Form for immediate deletion using a server action */}
          <form action={deletePostWithId}>
            <button
              type="submit"
              className="text-red-500 hover:text-red-700 text-sm font-medium"
           
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      <p className="mt-2 text-gray-600 line-clamp-2">{post.content}</p>
      <div className="mt-3 text-sm text-gray-400">
        <span>
          By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
