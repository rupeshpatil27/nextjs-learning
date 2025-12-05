import connectDB from "@/lib/connectDB";
import Post from "@/models/blogModal";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json(
        { message: "User not exists! Please Login." },
        { status: 401 }
      );
    }

    const posts = await Post.find({ userId }).sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching posts" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectDB();
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  const { title, content } = await req.json();

  if (!title || !content) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json(
        { message: "User not exists! Please Login." },
        { status: 401 }
      );
    }

    const newPost = await Post.create({ title, content, userId });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating post" },
      { status: 500 }
    );
  }
}
