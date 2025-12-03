import connectDB from "@/lib/connectDB";
import Post from "@/models/blogModal";
import { NextResponse } from "next/server";

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

export async function POST(req) {
  await connectDB();
  const { title, content, author } = await req.json();

  if (!title || !content || !author) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const newPost = await Post.create({ title, content, author });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating post' }, { status: 500 });
  }
}