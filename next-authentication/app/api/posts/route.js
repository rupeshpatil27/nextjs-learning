import connectDB from "@/lib/connectDB";
import Post from "@/models/postModal";

export async function GET() {
  await connectDB();
  try {
    // Fetch all posts, sort by newest first
    const posts = await Post.find({}).sort({ createdAt: -1 }); 
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
  }
}