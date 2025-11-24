import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB(); // Connection is handled internally by Mongoose after the first call

    // Use Mongoose Model methods, which are cleaner than native driver methods
    const posts = await Post.find({}); 

    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch posts" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
