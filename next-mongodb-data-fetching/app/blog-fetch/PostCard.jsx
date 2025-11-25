import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
      <h2 className="text-xl font-semibold text-blue-600">
        <Link href={`/blog-fetch/${post._id}`}>{post.title}</Link>
      </h2>
      <p className="mt-2 text-gray-600 line-clamp-2">{post.content}</p>
      <div className="mt-3 text-sm text-gray-400">
        <span>By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default PostCard;
